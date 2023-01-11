import './App.css'; 
import Faq from './components/Faq';
import Team from './components/Team';
import Hero from './components/Hero';
import Villian from './components/Villian';
import Roadmap from './components/Roadmap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Collection from './components/Collection';
import Introduction from './components/Introduction';

function App() {
  return (
    <>
    <Hero/>
    <Introduction/>
    <Collection/>
    <Roadmap/>
    <Team/>
    <Faq/>
    <Villian/>
    </>
  );
}

export default App;