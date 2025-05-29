import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Start from './pages/Start';
import Category from './pages/Category';
import Identity from './pages/Identity';
import Study from './pages/Study';
import Way from './pages/Way';
import Real from './pages/Real';
import Economy from './pages/Economy';
import Relation from './pages/Relation';
import Social from './pages/Social';
import Competition from './pages/Competition';
import Time from './pages/Time';
import Generation from './pages/Generation';
import Future from './pages/Future';
import IdResults from './pages/IdResults';
import StResults from './pages/StResults';
import WayResults from './pages/WayResults';
import RealResults from './pages/RealResults';
import EcoResults from './pages/EcoResults';
import RelaResults from './pages/RelaResults';
import SocialResults from './pages/SocialResults';
import CompResults from './pages/CompResults';
import TimeResults from './pages/TimeResults';
import GenResults from './pages/GenResults';
import FutureResults from './pages/FutureResults';
import FinalResult from './pages/FinalResult';
import { SelectionProvider } from './context/SelectionContext';
import './App.css';

function App() {
  return (
    <SelectionProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/category" element={<Category />} />
        <Route path="/identity" element={<Identity />} />
        <Route path="/study" element={<Study />} />
        <Route path="/way" element={<Way />} />
        <Route path="/real" element={<Real />} />
        <Route path="/economy" element={<Economy />} />
        <Route path="/relation" element={<Relation />} />
        <Route path="/social" element={<Social />} />
        <Route path="/competition" element={<Competition />} />
        <Route path="/time" element={<Time />} />
        <Route path="/generation" element={<Generation />} />
        <Route path="/future" element={<Future />} />
        <Route path="/idresults" element={<IdResults />} />
        <Route path="/stresults" element={<StResults />} />
        <Route path="/wayresults" element={<WayResults />} />
        <Route path="/realresults" element={<RealResults />} />
        <Route path="/ecoresults" element={<EcoResults />} />
        <Route path="/relaresults" element={<RelaResults />} />
        <Route path="/socialresults" element={<SocialResults />} />
        <Route path="/compresults" element={<CompResults />} />
        <Route path="/timeresults" element={<TimeResults />} />
        <Route path="/genresults" element={<GenResults />} />
        <Route path="/futureresults" element={<FutureResults />} />
        <Route path="/finalresult" element={<FinalResult />} />
      </Routes>
    </Router>
    </SelectionProvider>
  );
}

export default App;
