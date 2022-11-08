import './App.css';
import LeaveApplication from './pages/leave-application/LeaveApplication';
import LeaveEntry from './pages/leave-entry/LeaveEntry';
import Header from './components/layout/Header'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Sidebar from './components/layout/Sidebar';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LeaveApplication/>}></Route>
          <Route path="leaveapplication" element={<LeaveApplication/>}></Route>
          <Route path="leaveentry" element={<LeaveEntry/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
