import { FaHome, FaSearch } from 'react-icons/fa';

export function Header() {
    return (
        <header className='header'>
            <span>
                <FaHome />
            </span>
            <h3>CC-Todoist-Template</h3>

            {/* SearchBar */}
            <div className='header__search__container'>
                <span className='header__search__icon'>
                    <FaSearch />
                </span>
                <input type='text' className='header__search__input' placeholder='search' />
            </div>
        </header>
    );
}
