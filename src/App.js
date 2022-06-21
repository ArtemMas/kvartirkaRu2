import './App.css';
import {Route, Routes} from 'react-router-dom';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainPage from "./components/MainPage/MainPage";
import Flats from "./components/Flats/Flats";
import Houses from "./components/Houses/Houses";

function KvartirkaApp(props) {


  return (
          <div className='app-wrapper'>
              <Header/>
              <div className='app-wrapper-content'>
                  <Routes>
                      <Route path='/'
                             element={<MainPage state={props.state}/>}/>
                      <Route path='/mainpage'
                             element={<MainPage state={props.state}/>}/>
                      <Route path='/flats'
                             element={<Flats state={props.state}/>}/>
                      <Route path='/houses'
                             element={<Houses state={props.state}/>}/>
                  </Routes>
                  {/*<Houses/>*/}
              </div>
              <Footer/>
          </div>
  );
}

export default KvartirkaApp;
