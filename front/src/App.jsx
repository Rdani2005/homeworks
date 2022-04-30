
import { HashRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar'
import AddTodo from './views/AddTodo';
import TodosPage from './views/TodosPage'
import Todo from './views/Todo'

function App() {
    return (
        <HashRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<TodosPage />}></Route>
                <Route path="/add" element={<AddTodo />}></Route>
                <Route path="/todo/:id" element={<Todo />}></Route>
            </Routes>
        </HashRouter>
    );
}

export default App;