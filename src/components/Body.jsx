import { Outlet } from "react-router-dom";
import Navbar from "./NavBar";
import Footer from "./Footer"
import {useEffect} from "react"
import axios from "axios";
import { BASE_URL } from "../utils/constant"
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";

const Body = () => {
    const navigate  =  useNavigate()
    const dispatch  =  useDispatch()
    const userData  =  useSelector((store) => store.user)
    const fetchUser = async() => {
        if (userData) return
        try {
            const res = await axios.get(`${BASE_URL}profile/view`,{ withCredentials : true });
            console.log('res_______',res)
            dispatch(addUser(res.data.data))
            //return navigate("/feed")
        } catch(error) {
            console.log('Try Catch Error',error)
            if (error.status == 401) {
                return navigate("/login")
            }
            console.log('error',error)
        }
    }
    useEffect(() => {
        fetchUser()
    },[])
 return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
 )
}

export default Body