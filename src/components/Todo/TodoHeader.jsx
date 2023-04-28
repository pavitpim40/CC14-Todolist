import styles from './TodoHeader.module.scss';
import { HiOutlineSwitchVertical } from 'react-icons/hi';
import { Button } from '../Common/Button';
import { getFormattedDate } from '../../utils/DateUtils';



export function TodoHeader() {
    return (
        <div className={styles.header}>
            {/* STATUS-BAR */}
            <div className={styles.header__status__bar}>
                <h1>Inbox</h1>
                <p>{getFormattedDate(Date.now())}</p>
            </div>

            {/* CONTROL BAR */}
            <div className={styles.header__control__bar}>
                <Button text='status' active={true} />
                <Button text='date' active={false} />
                <Button text='task' active={false} />
                <span className={styles.control__bar__icon}>
                    <HiOutlineSwitchVertical />
                </span>
            </div>
        </div>
    );
}
