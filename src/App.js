import NavBar from './components/navbar';
import Originals from './components/originals';
import SlidingCards from './components/slidingCards';
import './index.css';

function App() {
  return (
    <div className=' w-full h-screen bg-back'>
      <NavBar />
      <SlidingCards />
      <Originals/>
    </div>
  );
}

export default App;
