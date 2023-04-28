
import { FaInbox, FaCalendar, FaCalendarAlt, FaChevronDown } from 'react-icons/fa';

export function Sidebar() {
   

    

    const genericLists = [
        { title: 'Inbox', icon: <FaInbox /> },
        { title: 'Today', icon: <FaCalendar /> },
        { title: 'Next 7 Days', icon: <FaCalendarAlt /> },
    ];
    return (
        <aside className='sidebar'>
            <section className='sidebar__generic'>
                <ul className='generic__lists'>
                    {genericLists.map((listObj, index) => (
                        <li
                            key={listObj.title}
                            className={0 === index ? 'active' : ''}
                            
                        >
                            <span>{listObj.icon} </span>
                            <h6>{listObj.title}</h6>
                        </li>
                    ))}
                </ul>
            </section>
            <section className='sidebar__middle'>
                <span>
                    <FaChevronDown />
                </span>
                <h6>Projects</h6>
            </section>
            <section className='sidebar__projects'>
                <ul className='project__lists'>
                    <li className=''>
                        <span>
                            <FaInbox />
                        </span>
                        <h6>Project-A</h6>
                    </li>
                    <li>
                        <span>
                            <FaInbox />
                        </span>
                        <h6>Project-B</h6>
                    </li>
                </ul>
            </section>
        </aside>
    );
}
