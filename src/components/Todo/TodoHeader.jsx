import styles from './TodoHeader.module.scss';

// export function TodoHeader(props) {
//     const now = new Date();
//     const options = { weekday: 'short', month: 'short', day: 'numeric' };
//     // console.log(now.toLocaleDateString('en-US',options))
//     console.log(props.title)  // Today
//     console.log(props.titel) // undefined
//     return (
//         <div className={styles.header}>
//             <h1>{props.title}</h1>
//             <p>{now.toLocaleDateString('en-US', options)}</p>
//         </div>
//     );
// }

export function TodoHeader({title}) {
    const now = new Date();
    const options = { weekday: 'short', month: 'short', day: 'numeric' };
    // console.log(now.toLocaleDateString('en-US',options))

    return (
        <div className={styles.header}>
            <h1>{title}</h1>
            <p>{now.toLocaleDateString('en-US', options)}</p>
        </div>
    );
}

