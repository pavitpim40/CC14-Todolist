import './App.scss'; // Global
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { TodoContent } from './components/Todo/TodoContent';

function App() {

    return (
        <div className='container'>
            <Header />
            <Sidebar />
            <TodoContent/>
        </div>
    );
}

export default App;
