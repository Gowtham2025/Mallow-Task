import logo from './logo.svg';
import './App.css';
import Menu from './menu';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Android from './android';
import Ios from './ios';
import Php from './php';
import Ror from './ror';

function App() {
  return (
   <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Menu/>}/>
      <Route path='/android' element={[<Menu/>,<Android/>]}/>
      <Route path='/ios' element={[<Menu/>,<Ios/>]}/>
      <Route path='/php' element={[<Menu/>,<Php/>]}/> 
      <Route path='/ror' element={[<Menu/>,<Ror/>]}/>
    </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
