import EditProfile from "./EditProfile"
import {useState} from "react"
import axios from "axios"
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constant"
import {useSelector, useDispatch} from 'react-redux'


const Profile = () => {
    const user   = useSelector((store) => store.user)
    console.log('profile_page__',user)
    return (
        user && (
        <div>
            <EditProfile user = {user}/>
        </div>
        )
    )
}

export default Profile