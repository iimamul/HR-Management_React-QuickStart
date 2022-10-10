import './App.css';
import LeaveApplication from './pages/leave-application/LeaveApplication';
import LeaveTypeEntry from './pages/leave-type-entry/LeaveTypeEntry';
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
        <Route path="leavetypeentry" element={<LeaveTypeEntry/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
