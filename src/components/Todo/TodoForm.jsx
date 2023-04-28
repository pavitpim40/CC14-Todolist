import styles from './TodoForm.module.scss';
import React from 'react';

import PropTypes from 'prop-types';


export function TodoForm() {
    // # 1 : Logic Section
 

   


    // # 2 : UI-Section
    return (
        <form className={styles.todo__form__container}>
            <input
                className={styles.todo__form__input}
                placeholder='Task Name'
               
            />
            <div className={styles.todo__form__footer}>
                {true && <p className={styles.todo__error}>Task Name is required</p>}
                <div className={styles.todo__form__buttons}>
                    <button type='button' >
                        Cancel
                    </button>
                    <button type='submit'>Add task</button>
                </div>
            </div>
        </form>
    );
}
