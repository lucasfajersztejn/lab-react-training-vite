import "./App.css";
import jsonIdCard from './data/idCard.json'
import IdCard from './components/ui/idCard/IdCard';

function App() {
  return (
    <>
      <div className="App">
        <h1> LAB | React Training</h1>
      </div>

      <div>
        <IdCard user={jsonIdCard[0]} />
        <IdCard user={jsonIdCard[1]} />
      </div>
    </>
  );
}

export default App;
