
import { AddTodo } from './AddTodo';
import { TodoHeader } from './TodoHeader';
import { TodoLists } from './TodoLists';
// import mockData from '../../data/todos.json';

export function TodoContent() {
    // # Logic



    // # UI
    return (
        <main className='content'>
            <TodoHeader title="Inbox"/>
            <AddTodo   />
            <TodoLists/>
        </main>
    );
}
