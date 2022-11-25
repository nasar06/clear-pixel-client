import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import React, { useContext } from 'react';
import { FaAlignLeft } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import logo from '../../../img/logo.png'

const TopNavbar = () => {
    const { user, signOutUser } = useContext(AuthContext)
    const navigate = useNavigate()

    const handelSignOut = () => {
        signOutUser()
            .then(() => {
                navigate('/login')
             })
            .then((err) => console.error(err))
    }

    return (

        <Navbar className='border my-12'
            fluid={true}
            rounded={true}
        >
            <Navbar.Brand to="https://flowbite.com/">
                <img
                    src={logo}
                    className="mr-3 h-6 sm:h-9"
                    alt="Flowbite Logo"
                />
                <span className="sm:none self-center whitespace-nowrap text-xl font-bold text-primary dark:text-white">
                    Clear Pixel
                </span>
                <label htmlFor="dashboard-drawer" className=" drawer-button lg:hidden ml-5 text-xl"><FaAlignLeft /></label>
            </Navbar.Brand>
            <div className="flex md:order-2">
                <Dropdown
                    arrowIcon={false}
                    inline={true}
                    label={<Avatar alt="User settings" img='https://www.codewithharry.com/img/user.png' rounded={true} />}
                >
                    <Dropdown.Header>
                        <span className="block text-sm">
                            {user?.displayName ? user?.displayName : 'No Name'}
                        </span>
                        <span className="block truncate text-sm font-medium">
                            {user?.email ? user?.email : 'No email'}
                        </span>
                    </Dropdown.Header>
                    <Dropdown.Divider />
                    <Dropdown.Item>
                        <button onClick={handelSignOut}>Sign out</button>
                    </Dropdown.Item>
                </Dropdown>



                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Navbar.Link
                    active={true}
                >
                    <Link to='/'>Home</Link>
                </Navbar.Link>
                <Navbar.Link>
                    <Link to='/blog'>Blog</Link>
                </Navbar.Link>




                {
                    user?.uid ?
                        <>
                            <Navbar.Link>
                                <Link to='/dashboard/myProducts'>My products</Link>
                            </Navbar.Link>

                            <Navbar.Link>
                                <Link to='/dashboard'>Dashboard</Link>
                            </Navbar.Link>
                            <Navbar.Link>
                                <Link onClick={handelSignOut}>LogOut</Link>
                            </Navbar.Link>
                        </>
                        :

                        <Navbar.Link>
                            <Link to='/login'>Login</Link>
                        </Navbar.Link>
                }



            </Navbar.Collapse>
        </Navbar>
    );
};

export default TopNavbar;