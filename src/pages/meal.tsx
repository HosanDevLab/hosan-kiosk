import InpageHeader from '../components/InpageHeader';
import { NextPage } from 'next';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

const Meal: NextPage = () => {
  const [mealData, setMealData] = useState<any[] | null>(null);

  const fetchMeal = async () => {
    let rst = await axios.get('/api/meal');

    return rst;
  };

  useEffect(() => {
    fetchMeal().then((r) => setMealData(r.data));
  }, []);

  return (
    <>
      <InpageHeader title="급식 메뉴" className="text-black" />
      <div className="bg-gray-200 h-screen w-screen">
        <div className="flex relative h-full animate-floatup items-center px-20 gap-10 overflow-x-scroll">
          <h4 className="fixed bottom-12 inset-x-0 flex justify-center items-center">
            <FiArrowLeft />
            <FiArrowRight />
            <span className="ml-4">좌우로 스크롤하여 날짜를 변경합니다</span>
          </h4>

          {mealData?.map((row, index) => {
            let rawDt: string = row.MLSV_YMD;

            let dt = new Date();
            dt.setFullYear(Number(rawDt.slice(0, 4)));
            dt.setMonth(Number(rawDt.slice(4, 6)) - 1);
            dt.setDate(Number(rawDt.slice(6, 8)));

            if (dt.getTime() <= new Date().getTime()) return null;

            let menus = (row.DDISH_NM as string).split('<br/>');

            return (
              <div
                key={index}
                className="flex-shrink-0 bg-white shadow-lg rounded-xl w-1/3 h-2/3 px-8 py-7"
              >
                <h2>
                  {dt.getMonth() + 1}월 {dt.getDate()}일
                </h2>
                <hr className="border-gray-400 my-4" />
                <div className="text-2xl">
                  {menus.map((one, index) => (
                    <p key={index} className="leading-relaxed font-light">
                      {one}
                    </p>
                  ))}
                </div>
              </div>
            );
          }) ?? <div className="w-full text-center">불러오는 중</div>}
        </div>
      </div>
    </>
  );
};

export default Meal;
