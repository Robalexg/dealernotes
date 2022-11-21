import Home from './pages/Home/Home';
import Sidebar from './components/Sidebar/Sidebar';
import Dash from './pages/Dash/Dash';
import Add from './pages/Add/Add';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Home/> */}
      
      <Sidebar/>
      {/* <Dash/> */}
      <Add/>
    </div>
  );
}

export default App;
