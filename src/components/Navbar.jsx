import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png'
const Navbar = () => {
    const links = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/find-tutors'}>Find tutors</NavLink></li>
        <li><NavLink to={'/add-tutorials'}>Add Tutorials</NavLink></li>
        <li><NavLink to={'/my-tutorials'}>My Tutorials</NavLink></li>
        <li><NavLink to={'/my-booked-tutorials'}>My booked tutors</NavLink></li>
    </>
    return (
        <div className='mx-10 mt-1'>
            <div className="navbar bg-base-100 items-center">
                <div className="flex-1 flex items-center gap-10">
                    <div className="w-44">
                        <img className="w-full" src={logo} alt="" />
                    </div>
                    <ul className='flex items-center gap-5'>
                        {links}
                    </ul>
                </div>
                <div className="flex gap-2">
                    <div>
                        <Link className='btn btn-primary'>Login</Link>
                    </div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="">
                            <div className="w-12 ">
                                <img
                                className='w-full rounded-lg'
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;