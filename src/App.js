import './App.css';
import LeaveApplication from './pages/leave-application/LeaveApplication';
import LeaveEntry from './pages/leave-entry/LeaveEntry';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
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
