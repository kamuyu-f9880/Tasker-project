import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaBars } from "react-icons/fa"
import { apiHost } from "../Variables";


const Navbar = ({loggedIn, setLoggedIn}) => {
    const navigate = useNavigate()
    const [ setOpen] = useState(false)

    function logoutUser(){
        localStorage.clear()
        setLoggedIn(false)
        navigate('/')

        fetch(`${apiHost}/logout`, {method: 'DELETE'})
        .then(res => {
            if(!res.ok){
                res.json().then(error => console.warn(error))
            }
        })
    }

    return ( 
        <>
            <nav className='lg:px-48 md:px-32 px-8 md:py-6 py-4 top-0 left-0 sticky z-[100] bg-gray-800 opacity-100 shadow-xl'>
                <div className='md:flex items-center justify-between'>
                    <div className="flex justify-between items-center">
                        <Link to='/' className='md:text-2xl text-lg uppercase font-semibold text-left text-green-400'>
                          {/*  <img className="md:w-32 w-28 " src={logo} alt="Meteora" /> */}
                            TASKER
                        </Link>
                        
                        <button onClick={() => setOpen((prev) => !prev)} className="md:hidden text-xl text-green-800">
                            <FaBars/>
                        </button>
                    </div>
                    
                    <div className='md:flex hidden text-grey-900'>
                        <ul className="md:flex items-center md:text-lg font-large">
                            <li className='md:mx-4 md:my-0 my-4 text-green-200 hover:text-green-300'>
                                <Link to="/">Home</Link>
                            </li>
                            {

                                !loggedIn ?
                                <li className='flex flex-row md:my-0 my-4' onClick={() => setOpen((prev) => !prev)}>
                                    <Link to='/users/login' className="mx-4 my-4 bg-green-200 px-3 py-1 hover:bg-sky-800 hover:text-white duration-500 rounded-md justify-self-end" href='https://learn.vabrisetech.co.ke/'>
                                        Login
                                    </Link>
                                    <Link to='/users' className="mx-4 my-4 bg-sky-800 px-3 py-1 hover:bg-white text-white hover:text-sky-800 duration-500 rounded-md" href='https://learn.vabrisetech.co.ke/'>
                                        Signup
                                    </Link>
                                </li> :
                                <>
                                    <li className='md:mx-4 md:my-0 my-4 text-green-200 hover:text-green-300'>
                                        <Link to="/todos">Todos</Link>
                                    </li>                               
                                    <button className="mx-4 my-4 bg-green-200 px-3 py-1 hover:bg-green-300 hover:text-white duration-500 rounded-md justify-self-end" href='https://learn.vabrisetech.co.ke/'
                                        onClick={logoutUser}>
                                        Logout
                                    </button> 
                                </>
                           }
                        </ul>
                    </div>
                </div>
            </nav>
        </>
     );
}
 
export default Navbar;