import styles from './TodoItem.module.scss';

import { HiCheck, HiPencil, HiTrash } from 'react-icons/hi';
import { TodoForm } from './TodoForm';


export function TodoItem() {
    let checkboxStyle = true ? styles.checkbox__icon__done : styles.checkbox__icon;
    let taskStyle = true ? styles.done : '';
    // #2 : render
    return (
        <>
            {true ? (
                <li className={styles.todo__item__container}>
                    <div className={styles.checkbox__container}>
                        <HiCheck className={checkboxStyle} />
                    </div>

                    <p className={taskStyle}>Mock-Task</p>
                    <span className={styles.date__text}>Mock-Date</span>

                    <div className={styles.edit__icon}>
                        <HiPencil />
                    </div>

                    <div className={styles.delete__icon}>
                        <HiTrash />
                    </div>
                </li>
            ) : (
                <TodoForm />
            )}
        </>
    );
}
