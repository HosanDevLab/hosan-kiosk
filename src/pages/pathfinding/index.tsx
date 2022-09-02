import InpageHeader from '../../components/InpageHeader';
import { NextPage } from 'next';
import Link from 'next/link';

const BG_IMAGE = '/gallery/3.png';

const Pathfinding: NextPage = () => {
  return (
    <>
      <InpageHeader title="교내 길 찾기" className="text-white" />

      <div
        className="w-full min-h-screen relative"
        style={{
          background: `url(${BG_IMAGE}) center no-repeat`,
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute animate-floatup text-white inset-0 transition-all duration-30 backdrop-blur-[6px] flex flex-col justify-center">
          <div className="container flex flex-col gap-10 mx-auto py-10 mb-24">
            <h1 className="font-semibold text-center text-6xl mb-24">
              어디로 가시겠습니까?
            </h1>

            <section>
              <div className="flex items-center gap-4 my-12">
                <hr className="border-[0.5px] border-gray-300/30 w-full" />
                <h5 className="flex-shrink-0 text-gray-200 text-5xl font-medium">
                  자주 찾는 장소
                </h5>
                <hr className="border-[0.5px] border-gray-300/30 w-full" />
              </div>

              <div className="flex flex-wrap gap-4 justify-center">
                {[
                  '행정실',
                  '2층 본교무실',
                  '1학년실',
                  '2학년실',
                  '3학년실',
                  '제2교무실',
                  '시청각실',
                  '강당',
                  '보건실',
                ].map((one) => (
                  <button
                    key={one}
                    type="button"
                    className="px-4 py-1.5 text-3xl font-light rounded-xl bg-white/50 text-black"
                  >
                    {one}
                  </button>
                ))}
              </div>
            </section>

            <section>
              <div className="flex items-center gap-4 my-12">
                <hr className="border-[0.5px] border-gray-300/30 w-full" />
                <h5 className="flex-shrink-0 text-gray-200 text-5xl font-medium">
                  카테고리로 찾아보기
                </h5>
                <hr className="border-[0.5px] border-gray-300/30 w-full" />
              </div>

              <div className="flex flex-wrap gap-4 justify-center">
                {['교실', '음악실', '미술실', '과학실'].map((one) => (
                  <button
                    key={one}
                    type="button"
                    className="px-4 py-1.5 text-3xl font-light rounded-xl bg-white/50 text-black"
                  >
                    {one}
                  </button>
                ))}
              </div>
            </section>

            <section className="text-center">
              <div className="flex items-center gap-4 my-12">
                <hr className="border-[0.5px] border-gray-300/30 w-full" />
                <h5 className="flex-shrink-0 text-gray-200 text-5xl font-medium">
                  원하는 장소가 없나요?
                </h5>
                <hr className="border-[0.5px] border-gray-300/30 w-full" />
              </div>

              <Link href="/pathfinding/map" passHref>
                <button
                  type="button"
                  className="px-6 py-3 text-4xl font-medium rounded-2xl bg-white/50 text-black"
                >
                  직접 찾아보기
                </button>
              </Link>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pathfinding;
