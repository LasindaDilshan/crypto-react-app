
import { Card, Row, Col, Input } from 'antd';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../Services/CryptoApi';
import { useState } from 'react';
import millify from 'millify';

const Cryptocurrecies = ({simplified}) => {
    
    const count = simplified ? 10 : 100;
    const { data: cryptoList, isFetching } = useGetCryptosQuery( count );
     const [cryptos, setCryptos] = useState([]);
     const [SearchTerm, setSearchTerm] = useState('');

   
    
    // useEffect( () => {
        
    //     setCryptos(         
    //         cryptoList?.data?.coins);
        
    //    }, [ cryptoList ] );

       useEffect( () => {

        const filterData = cryptoList?.data?.coins.filter((coin)=> coin.name.toLowerCase().includes(SearchTerm.toLocaleLowerCase()));
        
        setCryptos(         
            filterData);
        
       }, [ cryptoList , SearchTerm ] );


    
    if(isFetching) return 'Loding...'

    
     
  return (
    <div>
  
    {  
        <>
            {!simplified  && ( <div>
                <Input placeholder="Search Cryptocurrency" onChange={( e ) => setSearchTerm( e.target.value )} />
            </div> )}
            <Row gutter={[32, 32]} className="crypto-card-container">

                {cryptos?.map( ( currency ) => {

                    return (
                        <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.id}>
                            <Link to={`/ crypto / ${currency.id} `}>
                                <Card
                                    title={`${currency.rank}.${currency.name} `}
                                    extra={<img className="crypto-image" src={currency.iconUrl} />}
                                    hoverable
                                >
                                    <p>Price : ${millify( currency.price )}</p>
                                    <p>Market Cap : {millify( currency.marketCap )}</p>
                                    <p>Daily Change : {millify( currency.change )}%</p>
                                </Card>
                            </Link>
                        </Col>
                    )
                } )}

            </Row>
        </>
}
</div>
         )
}

export default Cryptocurrecies;
