
import {Routes, Route} from 'react-router-dom';
import { Filter339bus } from "./Filter/Filter339bus";
import { Filter770bus } from "./Filter/Filter770bus";
import { Navigation } from './Navigation/Navigation';
import { Home } from './Home/Home';
import { NotFound } from './NotFound/NotFound';
export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        fontSize: 40,
        color: '#010101'
      }}
    >
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='bus_way_shadule' element={<Navigation/>}>
        <Route path='339' element={<Filter339bus/>}/>
        <Route path='770' element={<Filter770bus/>}/>
      </Route>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    </div>
    
  );
};
