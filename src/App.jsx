import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Schedules from "./components/schedule/Schedules";
import Show from "./components/shows/Show";
function App() {
  return (
    <>
    <HashRouter>
          <Routes>
          <Route exact path="/" element={<Schedules />} />
          <Route exact path="/show/:id" element={<Show />} />
          </Routes>
      </HashRouter>
    </>
  );
}

export default App;
