import NavBar from './components/navbar';
import SlidingCards from './components/slidingCards';
import './index.css';

function App() {
  return (
    <div className=' w-full h-screen bg-back'>
      <NavBar/>
      <SlidingCards/>
    </div>
  );
}

export default App;
