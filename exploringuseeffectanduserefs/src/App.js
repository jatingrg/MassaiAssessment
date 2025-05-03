import './App.css';
import Ans1 from './Ans1';
import Ans2 from './Ans2';
import Timer from './Timer';
import Ans4 from './Ans4';
import Ans5 from './Ans5';
import Ans6 from './Ans6';
import Ans7 from './Ans7';

function App() {
  return (
    <div className="App">
      <hr/>
      <h4>Ans1</h4>
     <Ans1/>
     <hr/>
     <h4>Ans 2</h4>
     <Ans2/>
     <hr/>
     <h4>Ans 3</h4>
     <Timer/>
     <hr/>
     <h4>Ans 4</h4>
     <Ans4/>
     <hr/>
     <h4>Ans 5</h4>
     <Ans5/>
     <hr/>
     <h4>Ans 6</h4>
     <Ans6/>
     <hr/>
     <h4>Ans 7</h4>
     <Ans7/>
    </div>
  );
}

export default App;
