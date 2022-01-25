import react from 'react';
import './topNav.css';


export function TopNav() {

    return (
        <div>
            <div className='topNav'>
                <span>Sign In</span>
                <button className='signInBtn'>Sign In</button>
            </div>
        </div>
    );
}

export default TopNav;