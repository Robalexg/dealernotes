import Home from './pages/Home/Home';
import Sidebar from './components/Sidebar/Sidebar';
import Dash from './pages/Dash/Dash';
import './App.css';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Dash/>
    </div>
  );
}

export default App;
