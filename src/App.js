import './App.css';
import {BrowserRouter, Route, Routes, withRouter} from 'react-router-dom';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainPage from "./components/MainPage/MainPage";
import Flats from "./components/Flats/Flats";
import Houses from "./components/Houses/Houses";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import state from "./Redux/store";
import BedPlace from "./components/BedPlace/BedPlace";
import Room from "./components/Room/Room";
import Site from "./components/Site/Site";

function KvartirkaApp(props) {


  return (
          <div className='app-wrapper'>
              <Header/>
              <div className='app-wrapper-content'>
                  <Routes>
                      <Route path='/'
                             element={<MainPage state={props.state.best.ads}/>}/>
                      <Route path='/mainpage'
                             element={<MainPage state={props.state.best.ads}/>}/>
                      <Route path='/flats/daily'
                             element={<Flats daily={props.state.flats.daily}/>}/>
                      <Route path='/flats/long-term'
                             element={<Flats longTerm={props.state.flats.longTerm}/>}/>
                      <Route path='/flats/buy'
                             element={<Flats buy={props.state.flats.buy}/>}/>
                      <Route path='/room/daily'
                             element={<Room daily={props.state.room.daily}/>}/>
                      <Route path='/room/long-term'
                             element={<Room longTerm={props.state.room.longTerm}/>}/>
                      <Route path='/room/buy'
                             element={<Room buy={props.state.room.buy}/>}/>
                      <Route path='/bed-place/daily'
                             element={<BedPlace daily={props.state.bedPlace.daily}/>}/>
                      <Route path='/bed-place/long-term'
                             element={<BedPlace longTerm={props.state.bedPlace.longTerm}/>}/>
                      <Route path='/site/buy'
                             element={<Site buy={props.state.site.buy}/>}/>
                      <Route path='/houses/daily'
                             element={<Houses daily={props.state.houses.daily}/>}/>
                      <Route path='/houses/long-term'
                             element={<Houses longTerm={props.state.houses.longTerm}/>}/>
                      <Route path='/houses/buy'
                             element={<Houses buy={props.state.houses.buy}/>}/>
                  </Routes>
                  {/*<Houses/>*/}
              </div>
              <Footer/>
          </div>
  );
}

// let AppContainer = compose(
//     withRouter,
//     connect(mapStateToProps, {}))(KvartirkaApp)
//
// const KvartirkaApp = (props) => {
//     return <BrowserRouter>
//         <Provider store={state}>
//             <AppContainer/>
//         </Provider>
//     </BrowserRouter>
// };
//

export default KvartirkaApp;
