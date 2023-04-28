import { TodoItem } from './TodoItem';

export function TodoLists() {

 
    return (
        <ul>
            {[].map((todoObj) => (
                <TodoItem key={todoObj.id}/>
            ))}
        </ul>
    );
}

// {id:1, task: asdadsasdas, status : false, due_date : 2002-04-20}
