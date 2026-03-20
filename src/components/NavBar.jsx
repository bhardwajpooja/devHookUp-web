import {useSelector, useDispatch} from 'react-redux'
import { Link } from "react-router-dom"
import { BASE_URL } from "../utils/constant"
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { removeUser } from "../utils/userSlice";

// {/* <img
//                   alt="Tailwind CSS Navbar component"
//                   src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" /> */}

const Navbar = () => {
  const userData = useSelector((store) => store.user)
  const dispatch  =  useDispatch()
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
        const res = await axios.post(`${BASE_URL}logout`,{}, { withCredentials : true });
        console.log('res',res)
        dispatch(removeUser())
        return navigate("/login")
    } catch(exception) {
      console.log('exception',exception)
    }
  }
    return (
        <div>
           <div className="navbar bg-base-200 shadow-sm">
        <div className="flex-1">
          {/* <a className="btn btn-ghost text-xl">👩‍💻 Dev UI</a> */}

          <Link to="/login" className="btn btn-ghost text-xl">
          👩‍💻 Dev UI
          </Link>
        </div>
        <div className="flex gap-2">
          <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
          <div className="dropdown dropdown-end mx-5">
          {(userData) && 
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <p> Welcome {userData.firstname}</p>
              <div className="w-10 rounded-full">
                <img
                alt="Tailwind CSS Navbar component"
                src= {userData.photoUrl} />
              </div>
            </div>
          }
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li>
                <Link to="/profile" className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li><a to="/"> Settings</a></li>
              <li><a to="/" onClick={handleLogout}> Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
        </div>
    )
}

export default Navbar