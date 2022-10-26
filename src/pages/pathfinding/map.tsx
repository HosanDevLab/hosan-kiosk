import { Dialog, Transition } from '@headlessui/react';
import classNames from 'classnames';
import { NextPage } from 'next';
import Link from 'next/link';
import { Fragment, useCallback, useEffect, useRef, useState } from 'react';
import { FiArrowLeft, FiSearch, FiX } from 'react-icons/fi';
import InpageHeader from '../../components/InpageHeader';
import ROOMS from '../../datas/rooms';
import { Room } from '../../types';

const BG_IMAGE = '/gallery/3.png';

function setDPI(canvas: HTMLCanvasElement, dpi: number) {
  // Set up CSS size.
  canvas.style.width = canvas.style.width || canvas.width + 'px';
  canvas.style.height = canvas.style.height || canvas.height + 'px';

  // Get size information.
  var scaleFactor = dpi / 96;
  var width = parseFloat(canvas.style.width);
  var height = parseFloat(canvas.style.height);

  // Backup the canvas contents.
  var oldScale = canvas.width / width;
  var backupScale = scaleFactor / oldScale;
  var backup = canvas.cloneNode(false) as HTMLCanvasElement;
  backup.getContext('2d')!.drawImage(canvas, 0, 0);

  // Resize the canvas.
  var ctx = canvas.getContext('2d')!;
  canvas.width = Math.ceil(width * scaleFactor);
  canvas.height = Math.ceil(height * scaleFactor);

  // Redraw the canvas image and scale future draws.
  ctx.setTransform(backupScale, 0, 0, backupScale, 0, 0);
  ctx.drawImage(backup, 0, 0);
  ctx.setTransform(scaleFactor, 0, 0, scaleFactor, 0, 0);
}

const MapPage: NextPage = () => {
  const [floor, setFloor] = useState(1);
  const [openSearch, setOpenSearch] = useState(false);
  const [selected, setSelected] = useState<Room | null>(null);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  const redrawMarker = useCallback(() => {
    const canvas = canvasRef.current!;

    canvas.width = imgRef.current!.width;
    canvas.height = imgRef.current!.height;

    const { width, height } = canvas;

    setDPI(canvas, 300);

    const ctx = canvas.getContext('2d')!;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();

    let [markX, markY] = [
      width * (selected?.x ?? 0.92),
      height * (selected?.y ?? 0.25),
    ];

    let triangle = new Path2D();

    triangle.moveTo(markX, markY);
    triangle.lineTo(markX - 15, markY - 35);
    triangle.lineTo(markX + 15, markY - 35);

    let circle = new Path2D();

    circle.arc(markX, markY - 30, 15, 0, 2 * Math.PI);

    let innerCircle = new Path2D();

    innerCircle.arc(markX, markY - 30, 9, 0, 2 * Math.PI);

    ctx.shadowColor = 'black';
    ctx.shadowBlur = 25;

    ctx.fillStyle = 'rgba(235, 40, 50)';
    ctx.fill(triangle);

    ctx.shadowColor = 'transparent';

    ctx.fill(circle);
    ctx.fillStyle = 'White';
    ctx.fill(innerCircle);
  }, [selected]);

  useEffect(() => {
    redrawMarker();

    window.addEventListener('resize', redrawMarker);

    return () => window.removeEventListener('resize', redrawMarker);
  }, [redrawMarker]);

  return (
    <>
      <InpageHeader
        title="교내 길 찾기"
        className="text-white"
        mainButton={false}
        left={
          <Link href="/pathfinding">
            <button
              type="button"
              className="flex items-center gap-3 py-2 px-5 my-auto rounded-xl text-xl border border-white/30 hover:bg-white/50 hover:text-black hover:shadow-xl transition-all duration-300"
            >
              <FiArrowLeft size={28} />
              이전으로
            </button>
          </Link>
        }
      />

      <div
        className="w-full relative"
        style={{
          background: `url(${BG_IMAGE}) center no-repeat`,
          backgroundSize: 'cover',
          height: '200vh',
        }}
      >
        <div className="absolute animate-floatup text-white bg-black/50 inset-0 transition-all duration-30 backdrop-blur-[6px]">
          <div className="h-28" />
          <div className="container grid grid-cols-12 gap-5 mx-auto py-10">
            <div className="col-span-8 flex flex-col gap-3">
              <div className="flex flex-wrap gap-2">
                {Array.from(Array(5).keys()).map((index) => (
                  <button
                    key={index}
                    type="button"
                    className={classNames(
                      'rounded-xl px-5 py-2 transition-all',
                      floor === index + 1
                        ? 'bg-white/75 text-black'
                        : 'bg-white/30'
                    )}
                    onClick={() => setFloor(index + 1)}
                  >
                    {index + 1}층
                  </button>
                ))}
              </div>
              <div className="relative">
                <img ref={imgRef} src={`/assets/${floor}F.png`} alt="" />
                <canvas ref={canvasRef} className="absolute inset-0" />
              </div>
            </div>
            <div className="col-span-4 flex flex-col gap-3">
              <div className="flex flex-col gap-4 rounded-xl bg-white/30 shadow-xl px-5 py-4">
                <div className="flex flex-col gap-1">
                  <div className="font-light text-lg">출발 위치</div>
                  <h5>로비 (현재 위치)</h5>
                </div>
                <hr className="border-white/30" />
                <div className="flex flex-col gap-1">
                  <div className="font-light text-lg">도착 위치</div>
                  <h5>{selected?.name ?? '아래에서 선택해주세요'}</h5>
                </div>
              </div>

              <hr className="border-white/20" />

              <div className="flex flex-col gap-3">
                <button
                  type="button"
                  className="py-4 text-2xl font-light flex justify-center items-center gap-3 rounded-xl bg-white/75 text-black shadow-xl"
                  onClick={() => {
                    setOpenSearch(true);
                  }}
                >
                  <FiSearch />
                  직접 검색하기
                </button>
              </div>

              <hr className="border-white/20" />

              <div className="flex flex-col gap-4 rounded-xl bg-white/30 shadow-xl px-5 py-4">
                <div className="font-light text-lg">종류별 찾기</div>
                <div className="flex flex-wrap gap-2">
                  {[
                    '교무실',
                    '행정실',
                    '시청각실',
                    '일반교실',
                    '자습실',
                    '과학실',
                    '도서관',
                    '강당',
                    '보건실',
                    '음악실',
                    '미술실',
                    '특수교실',
                  ].map((one, index) => (
                    <button
                      key={index}
                      type="button"
                      className="bg-white/30 rounded-xl px-3 py-1"
                    >
                      {one}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4 rounded-xl bg-white/30 shadow-xl px-5 py-4">
                <div className="font-light text-lg">층별 찾기</div>
                <div className="flex flex-warp gap-2">
                  {Array.from(Array(5).keys()).map((index) => (
                    <button
                      key={index}
                      type="button"
                      className="bg-white/30 rounded-xl px-3 py-1"
                    >
                      {index + 1}층
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Transition
        show={openSearch}
        enter="transition duration-200 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-200 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
        as={Fragment}
      >
        <Dialog
          onClose={() => setOpenSearch(false)}
          className="fixed z-[999999] inset-0 flex justify-center items-center bg-black/40"
        >
          <div className="mt-16 w-5/6 h-4/5 flex flex-col gap-3 bg-white/60 backdrop-blur-md rounded-xl px-5 py-4">
            <div className="flex">
              <h4 className="font-semibold">직접 찾아보기</h4>
              <button
                className="flex items-center gap-1 ml-auto text-xl border border-gray-600/40 px-3 rounded-xl"
                onClick={() => {
                  setOpenSearch(false);
                }}
              >
                <FiX size={24} />
                닫기
              </button>
            </div>
            <hr className="border-zinc-500/50" />
            <div className="flex flex-col gap-2 overflow-y-scroll">
              {ROOMS.map((room) => (
                <div
                  key={room.id}
                  className="flex bg-black/5 px-4 py-1.5 rounded-2xl"
                  onClick={() => {
                    setOpenSearch(false);
                    setSelected(room);
                  }}
                >
                  <div>
                    <div className="font-semibold text-xl">{room.name}</div>
                    <div className="text-lg text-zinc-600 font-light">
                      {room.floor}층
                    </div>
                  </div>
                  <button className="ml-auto my-auto px-2 py-1.5 text-xl">
                    선택하기
                  </button>
                </div>
              ))}
            </div>
            <div className="text-center">위아래로 스크롤하여 더 보기</div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default MapPage;
