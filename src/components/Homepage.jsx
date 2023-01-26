import React from 'react'
import millify  from 'millify';
import {Typography ,Row,Col , Statistic} from 'antd';
import {Link} from 'react-router-dom';
import { useGetCryptosQuery } from "../Services/CryptoApi.js"
import {Cryptocurrecies,News} from '../components';
const {Title} = Typography;
const Homepage = () => {


    const {data, isFetching } = useGetCryptosQuery(10);
    console.log(data);
    const globalStats = data?.data?.stats;
   if(isFetching) return 'Loding...'
  return (
    <>
<Title  key={13} level={2} className='heading'> Global Crypto Stats</Title>
<Row>
    <Col span={12}> <Statistic title='Total Cryptocurrencies' value={globalStats.total} key={1}/></Col>
    <Col span={12}> <Statistic title='Total Exchanges' value={millify(globalStats.totalExchanges)}  key={2}/></Col>

    <Col span={12}> <Statistic title='Total Market Cap' value={millify(globalStats.totalMarketCap)}  key={3}/></Col>

    <Col span={12}> <Statistic title='Total 24h Volume' value={millify(globalStats.total24hVolume)}  key={4}/></Col>

    <Col span={12}> <Statistic title='Total Markets' value={millify(globalStats.totalMarkets)}  key={5}/></Col>

</Row>
<div className='home-heading-container'  key={14} >

    <Title level={2} className="home-title"  key={6}>Top 10 Cryptocurrencies in the world </Title>
    <Title level={3} className="show-more"  key={7}><Link to="/cryotocurrencies">Show More</Link></Title>
    
</div>
<Cryptocurrecies simplified />

<div className='home-heading-container' key={17}>

    <Title level={2} className="home-title"  key={8}>Latest Crypto News</Title>
    <Title level={3} className="show-more"  key={9}><Link to="/news">Show More</Link></Title>
    
</div>
<News simplified/>

    </>
  )
}

export default Homepage;
