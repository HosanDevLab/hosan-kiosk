import type { NextPage } from 'next';
import Link from 'next/link';
import Header from '../components/Header';

const Home: NextPage = () => {
  return (
    <div className="mt-12 container flex flex-col min-h-screen justify-center mx-auto px-2 pb-16 animate-floatup">
      <Header />
      <h2
        className="mb-3 text-4xl text-gray-600"
        style={{
          fontFamily: 'InkLipquid',
        }}
      >
        &quot;넓은 세상을 가슴에 품자&quot;
      </h2>
      <h1 className="text-6xl mb-8">
        안녕하세요, <span className="font-bold">호산고등학교</span>입니다.
      </h1>

      <div className="flex my-10 items-center gap-4">
        <hr className="flex-grow" />
        <h4 className="font-light text-4xl">무엇을 도와드릴까요?</h4>
        <hr className="flex-grow" />
      </div>

      <div className="grid grid-cols-1 gap-10 font-semibold">
        <Link href="/intro">
          <div className="col-span-1 text-white p-12 h-40 bg-orange-400 rounded-2xl shadow-2xl flex justify-center items-center hover:-translate-y-2 transition-all duration-300 cursor-pointer">
            <div
              className="text-center w-full"
              style={{ wordBreak: 'keep-all' }}
            >
              <h3 className="mb-2 flex items-center justify-center text-5xl">
                호산고 둘러보기
                <i className="xi-angle-right ml-2" />
              </h3>
              <hr className="my-3 mx-2" />
              <div className="text-3xl font-light">
                교실, 바깥 풍경 등 우리 학교 시설의 모습을 둘러보세요!
              </div>
            </div>
          </div>
        </Link>
        <Link href="/pathfinding">
          <div className="col-span-1 text-white p-12 h-40 bg-emerald-500 rounded-2xl shadow-2xl flex justify-center items-center hover:-translate-y-2 transition-all duration-300 cursor-pointer">
            <div
              className="text-center w-full"
              style={{ wordBreak: 'keep-all' }}
            >
              <h3 className="mb-2 flex items-center justify-center text-5xl">
                교내 길 찾기
                <i className="xi-angle-right ml-2" />
              </h3>
              <hr className="my-3 mx-2" />
              <div className="text-3xl font-light">
                학부모님 또는 방문객이신가요? 시설물 위치를 안내해드립니다.
              </div>
            </div>
          </div>
        </Link>
        <Link href="/meal">
          <div className="col-span-1 text-white p-12 h-40 bg-sky-500 rounded-2xl shadow-2xl flex justify-center items-center hover:-translate-y-2 transition-all duration-300 cursor-pointer">
            <div
              className="text-center w-full"
              style={{ wordBreak: 'keep-all' }}
            >
              <h3 className="mb-2 flex items-center justify-center text-5xl">
                급식 메뉴 확인하기
                <i className="xi-angle-right ml-2" />
              </h3>
              <hr className="my-3 mx-2" />
              <div className="text-3xl font-light">
                최근 급식 메뉴를 확인할 수 있습니다.
              </div>
            </div>
          </div>
        </Link>
        <div className="col-span-1 text-white p-12 h-40 bg-violet-500 rounded-2xl shadow-2xl flex justify-center items-center hover:-translate-y-2 transition-all duration-300 cursor-pointer">
          <div className="text-center w-full" style={{ wordBreak: 'keep-all' }}>
            <h3 className="mb-2 flex items-center justify-center text-5xl">
              학사 일정 확인하기
              <i className="xi-angle-right ml-2" />
            </h3>
            <hr className="my-3 mx-2" />
            <div className="text-3xl font-light">
              우리 학교의 다양한 행사 일정을 확인하세요!
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <div className="flex items-center py-5 gap-5">
          <h4 className="flex-shrink-0 text-gray-600 text-5xl">이번 주 일정</h4>
          <hr className="my-12 w-full" />
        </div>
        <table className="w-full border-spacing-10 border-collapse table-fixed text-3xl">
          <thead className="border-b-2 text-left">
            <tr>
              {['월', '화', '수', '목', '금'].map((day, index) => (
                <th key={index} className="pb-2">
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="border-b-2">
            <tr className="h-20 align-top">
              <td>
                <div className="text-500 my-3 text-3xl">4</div>
              </td>
              <td>
                <div className="text-500 my-3 text-3xl">5</div>
              </td>
              <td>
                <div className="text-500 my-3 text-3xl">6</div>
                <div
                  className="mb-4 pr-2 font-light text-2xl bg-yellow-400/50 p-2"
                  style={{ wordBreak: 'keep-all' }}
                >
                  전국연합 학력평가(3)
                </div>
              </td>
              <td>
                <div className="text-500 my-3 text-3xl">7</div>
              </td>
              <td>
                <div className="text-500 my-3 text-3xl font-bold">
                  8<span className="px-1 text-sm">[오늘]</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-3">
        <div className="flex items-center pt-3 gap-5">
          <h4 className="flex-shrink-0 text-gray-600 text-5xl">길 찾기</h4>
          <hr className="my-12 w-full" />
        </div>
        <h6 className="my-6 text-3xl font-medium">자주 찾는 시설:</h6>
        <div className="flex flex-wrap gap-2 font-medium text-3xl mb-6 text-indigo-700">
          <button
            type="button"
            className="bg-slate-200 px-2.5 py-1 rounded-xl shadow-md hover:bg-gray-300 transition-all duration-300"
          >
            행정실
          </button>
          <button
            type="button"
            className="bg-slate-200 px-2.5 py-1 rounded-xl shadow-md hover:bg-gray-300 transition-all duration-300"
          >
            시청각실
          </button>
          <button
            type="button"
            className="bg-slate-200 px-2.5 py-1 rounded-xl shadow-md hover:bg-gray-300 transition-all duration-300"
          >
            본교무실
          </button>
          <button
            type="button"
            className="bg-slate-200 px-2.5 py-1 rounded-xl shadow-md hover:bg-gray-300 transition-all duration-300"
          >
            제2교무실
          </button>
          <button
            type="button"
            className="bg-slate-200 px-2.5 py-1 rounded-xl shadow-md hover:bg-gray-300 transition-all duration-300"
          >
            1학년실
          </button>
          <button
            type="button"
            className="bg-slate-200 px-2.5 py-1 rounded-xl shadow-md hover:bg-gray-300 transition-all duration-300"
          >
            2학년실
          </button>
          <button
            type="button"
            className="bg-slate-200 px-2.5 py-1 rounded-xl shadow-md hover:bg-gray-300 transition-all duration-300"
          >
            3학년실
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
