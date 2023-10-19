
import './App.css';
import { BollywoodData, FitnessData, FoodData, HollywoodData, TechnologyData } from './fetch/fetch'

function App() {
  return (
    <div >
     <BollywoodData/>
     <HollywoodData/>
     <FitnessData/>
     <FoodData/>
     <TechnologyData/>
    </div>
  );
}

export default App;
