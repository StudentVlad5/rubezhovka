import {Routes, Route} from 'react-router-dom';
import { Filter339bus } from "./Filter/Filter339bus";
import { Filter770bus } from "./Filter/Filter770bus";
import { Navigation } from './Navigation/Navigation';
import { Weather } from './Weather/Weather';
import { Home } from './Home/Home';
import { Servises } from './Servises/Servises';
import { Goods } from './Goods/Goods';
import { NotFound } from './NotFound/NotFound';
export const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}>
      <Route path='bus_way_shadule' element={<Navigation/>}>
        <Route path='339' element={<Filter339bus/>}/>
        <Route path='770' element={<Filter770bus/>}/>
      </Route>
      <Route path='weather' element={<Weather/>}/>
      <Route path='goods' element={<Goods/>}/>
      <Route path='Servises' element={<Servises/>}/>
      </Route>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    </>
    
  );
};
