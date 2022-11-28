import Home from './pages/Home/Home';
import Sidebar from './components/Sidebar/Sidebar';
import Dash from './pages/Dash/Dash';
import Add from './pages/Add/Add';
import Search from './pages/Search/Search';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index path='/' element={<Home/>}/>
          <Route path='profile' element={<Dash/>}/>
            {/* <Sidebar/> */}
            {/* <Dash/> */}
            {/* <Add/> */}
            {/* <Search/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
