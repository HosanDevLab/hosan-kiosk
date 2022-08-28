// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let date = new Date();

  let rst = await axios.get('https://open.neis.go.kr/hub/mealServiceDietInfo', {
    params: {
      KEY: process.env.NEIS_API_KEY,
      Type: 'json',
      ATPT_OFCDC_SC_CODE: 'D10',
      SD_SCHUL_CODE: '7240283',
      MLSV_FROM_YMD: `${date.getFullYear()}${date
        .getMonth()
        .toString()
        .padStart(2, '0')}${date.getDate().toString().padStart(2, '0')}`,
    },
  });

  res.status(200).json(rst.data.mealServiceDietInfo[1].row);
}
