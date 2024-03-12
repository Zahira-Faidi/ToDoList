import './App.css';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import AddTask from './Composants/AddTask';
import UpdatTask from './Composants/UpdateTask';
import ListTasks from './Composants/ListTasks';

function App() {
  return (
    <div style={{paddingLeft :40}}>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<ListTasks />}/>
        <Route path='/add-task' element={<AddTask />}/>
        <Route path='/update-task/:id' element={<UpdatTask />}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
