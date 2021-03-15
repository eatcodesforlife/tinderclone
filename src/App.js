import Header from './components/Headers'
import TinderCards from './components/TinderCards'
import './App.css';
import SwipeButtons from './components/SwipeButtons';

function App() {
  return (
    <div className="app">
        {/* header */}
        <Header/>
        {/* tindercards */}
        <TinderCards />
        {/* swipebuttons */}
        <SwipeButtons />
    </div>
  );
}

export default App;
