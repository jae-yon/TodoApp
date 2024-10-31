import './App.css';
import TodoList from './components/sample_01/TodoList';
import Timer from './components/sample_02/timer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Timer />
        <TodoList />
      </header>
    </div>
  );
}

export default App;
