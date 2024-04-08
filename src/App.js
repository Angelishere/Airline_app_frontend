import logo from './logo.svg';
import './App.css';
import HomeAir from './components/HomeAir';
import SearchAir from './components/SearchAir';
import SignUp from './components/SignUp';
import CatalogAir from './components/CatalogAir';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
       <Routes>
        <Route path="/" element={<HomeAir/>}/>
        <Route path="/search" element={<SearchAir/>}/>
        <Route path="/sign" element={<SignUp/>}/>
        <Route path="/view" element={<CatalogAir/>}/>
       </Routes>
      </BrowserRouter>

  );
}

export default App;
