import './Styles/App.css';
import ToDoListA from './Components/ToDoListA/ToDoListA';
import ToDoListB from './Components/ToDoListB/ToDoListB';
function App() {
  return (
    <div className="app">
      <div className="appbox"><ToDoListA /></div>
      <div className="appbox"><ToDoListB /></div>
    </div>
  );
}
export default App;