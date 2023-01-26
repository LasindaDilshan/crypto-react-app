import React from 'react';
import { Select , Typography , Row , Col , Avatar , Card} from 'antd';
import moment from 'moment';

import { useGetcryptoNewsQuery } from '../Services/cryptoNewsapi';

const {Text , Title} = Typography;
const {Option} = Select;

const News = ({simplified }) => {
  console.log('123');

  const {data : cryptoNews} = useGetcryptoNewsQuery({newsCategory:'Cryptocurrency' , count: simplified? 10 : 100  });

  console.log(cryptoNews);
  return (
    <div key={1}>
      News
    </div>
  )
}

export default News
