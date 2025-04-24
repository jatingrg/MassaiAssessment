import './App.css';
import ICS from './ICS';
import Content from './Content';
import ListComponenet from './ListComponenet';
import BlogContent from './BlogContent';

function App() {
  const items = ["Item 1", "Item 2", "Item 3"];
  return (
    <div className="App">
           <h4>ans 1</h4>

      <ICS/>
      <hr/>
      <h4>ans 2</h4>
      <Content/>
      <hr/>
      <h4>ans 4</h4>
      <h1>My App</h1>
      <ListComponenet items={items}/>
      <hr/>
      <h4>ans5</h4>
      <BlogContent/>
    </div>
  );
}

export default App;
