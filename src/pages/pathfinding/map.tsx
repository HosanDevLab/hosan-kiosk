import { NextPage } from 'next';
import Link from 'next/link';
import { useState } from 'react';
import { FiArrowLeft, FiSearch } from 'react-icons/fi';
import InpageHeader from '../../components/InpageHeader';

const BG_IMAGE = '/gallery/3.png';

const Map: NextPage = () => {
  const [floor, setFloor] = useState(1);

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
          <div className="h-16" />
          <div className="container grid grid-cols-12 gap-5 mx-auto py-10">
            <div className="col-span-8 flex flex-col gap-3">
              <div className="flex flex-wrap gap-2">
                {Array.from(Array(5).keys()).map((index) => (
                  <button
                    key={index}
                    type="button"
                    className="bg-white/30 rounded-xl px-5 py-2"
                    onClick={() => setFloor(index + 1)}
                  >
                    {index + 1}층
                  </button>
                ))}
              </div>
              <img src={`/assets/${floor}F.png`} alt="" />
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
                  <h5>아래에서 선택해주세요</h5>
                </div>
              </div>

              <hr className="border-white/20" />

              <div className="flex flex-col gap-3">
                <button
                  type="button"
                  className="py-4 text-2xl font-light flex justify-center items-center gap-3 rounded-xl bg-white/75 text-black shadow-xl"
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
    </>
  );
};

export default Map;
