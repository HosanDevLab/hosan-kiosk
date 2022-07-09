import { useState } from "react";
import logo from "./hosan.png";

const App: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="container mx-auto px-12 pt-8">
      <div className="flex items-center gap-8 mb-16">
        <hr className="flex-grow" />
        <img src={logo} className="w-14 h-14" />
        <hr className="flex-grow" />
      </div>
      <h2
        className="mb-3 text-4xl text-gray-600"
        style={{
          fontFamily: "InkLipquid",
        }}
      >
        "넓은 세상을 가슴에 품자"
      </h2>
      <h1>
        안녕하세요, <span className="font-bold">호산고등학교</span>입니다.
      </h1>

      <hr className="my-8" />

      <div className="grid grid-cols-2 gap-4 font-semibold">
        <div className="col-span-1 text-white p-5 h-40 bg-orange-400 rounded-2xl shadow-2xl flex justify-center items-center">
          <div className="text-center" style={{ wordBreak: "keep-all" }}>
            <h3 className="mb-2">호산고 둘러보기</h3>
            <hr className="my-3 mx-2"/>
            <div>교실, 바깥 풍경 등 우리 학교 시설의 모습을 둘러보세요!</div>
          </div>
        </div>
        <div className="col-span-1 text-white p-5 h-40 bg-emerald-500 rounded-2xl shadow-2xl flex justify-center items-center">
          <div className="text-center" style={{ wordBreak: "keep-all" }}>
            <h3>교내 길 찾기</h3>
            <hr className="my-3 mx-2"/>
            <div>학부모님 또는 방문객이신가요? 시설물 위치를 안내해드립니다.</div>
          </div>
        </div>
        <div className="col-span-1 text-white p-5 h-40 bg-sky-500 rounded-2xl shadow-2xl flex justify-center items-center">
          <div className="text-center" style={{ wordBreak: "keep-all" }}>
            <h3 className="mb-2">급식 메뉴 확인하기</h3>
            <hr className="my-3 mx-2"/>
            <div>최근 급식 메뉴를 확인할 수 있습니다.</div>
          </div>
        </div>
        <div className="col-span-1 text-white p-5 h-40 bg-violet-500 rounded-2xl shadow-2xl flex justify-center items-center">
          <div className="text-center" style={{ wordBreak: "keep-all" }}>
            <h3 className="mb-2">학사 일정 확인하기</h3>
            <hr className="my-3 mx-2"/>
            <div>우리 학교의 다양한 행사 일정을 확인하세요!</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
