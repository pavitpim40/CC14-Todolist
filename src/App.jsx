import './App.scss'; // Global
import { useState } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { TodoContent } from './components/Todo/TodoContent';
import mockData from './data/todos.json';
import { getSevenDayRange } from './utils/DateUtils';

function App() {
    const [todos, setTodos] = useState(mockData);

    // Filter Todo

    const handleFilterLists = (index) => {
        const [nowStr, nextSevenStr] = getSevenDayRange();
        let filteredTodo = [...mockData]

        // FILTER LOGIC : Schema for fillter "2023-04-29" == YYYY-MM-DD
        if (index === 1) {
             filteredTodo = mockData.filter((todoObj) => todoObj.due_date === nowStr);
        } else if (index === 2) {
             filteredTodo = mockData.filter(
                (todoObj) => todoObj.due_date >= nowStr && todoObj.due_date <= nextSevenStr
            );
        }
        setTodos(filteredTodo);
    };

    return (
        <div className='container'>
            <Header />
            <Sidebar onSelectTab={handleFilterLists} />
            <TodoContent todos={todos} setTodos={setTodos} />
        </div>
    );
}

export default App;
