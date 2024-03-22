import { BrowserRouter , Routes , Route } from 'react-router-dom';
import AddTask from './composants/AddTask';
import UpdatTask from './composants/UpdateTask';
import ListTasks from './composants/ListTasks';

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
