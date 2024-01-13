import { Route, Routes } from 'react-router-dom';
import './App.css';
import Greeting from './components/Greeting';
import NotFound from './components/404';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Greeting />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
