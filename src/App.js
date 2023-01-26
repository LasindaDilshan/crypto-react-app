import logo from './logo.svg';
import './App.css';
import { Switch , Route,Routes , Link } from 'react-router-dom';
import { Layout,Typography , Space } from 'antd';
import { Navbar , Homepage ,Exchanges,Cryptocurrecies,CryptoDetails,News  } from './components';
import  './App.css';


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
const App = ()=>{
  return(
    <div className='app'>
      <div className='navbar'><Navbar/></div>
      <div className='main'>
      <Routes>
          <Route exact path='/' element={<Homepage />}>
             
          </Route>

          <Route exact path='/exchanges' element={<Exchanges />} >
          </Route>


          <Route exact path='/cryotocurrencies' element={<Cryptocurrecies />}>
          </Route>

          <Route exact path='/crypto/:coinId' element={<CryptoDetails />}>
          </Route>

          <Route exact path='/news' element={<News />}>
          </Route>
          </Routes>
      
      <div className='footer' >
 <Typography.Title level={5} style = {{ color:'white' , textAlign:'center'}}>
 Cryptoverse <br/>
 All Right reserverd
 </Typography.Title>
 <Space>
 <Link to='/'>Homepage</Link>
 <Link to='cryotocurrencies'>cryotocurrencies</Link>
 <Link to='/exchanges'>exchanges</Link>
 <Link to='/news'>News</Link>
 </Space>

      </div>
    </div>
    </div>
  );
}

export default App;
