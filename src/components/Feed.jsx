import {useSelector, useDispatch} from 'react-redux'
import { BASE_URL } from "../utils/constant"
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { addFeed } from "../utils/feedSlice";
import {useEffect} from "react"
import UserCard from "./UserCard";
import { useState } from "react"

const Feed = () => {
    const feed = useSelector((store) => store.feed)
   console.log('feed_________',feed)
    const dispatch  =  useDispatch()
    const [error, setError] = useState("")
    const navigate = useNavigate()

   const getFeed = async () => {
      if (feed) {
        // console.log('feed___',feed[0])
         return
      }
      try {
         const res = await axios.get(`${BASE_URL}feed`,{ withCredentials : true });
         console.log('res.data',res.data.data)
         //console.log('addFeed',addFeed)
         dispatch(addFeed(res.data.data))
         return navigate("/feed")
     } catch(exception) {
      console.log('exception',exception)
         setError(exception?.response?.message || "Something went wrong")
         console.log('exception',exception?.response?.message || "Something went wrong")
     }
   }

   useEffect(() => {
      getFeed()
   },[])
   return (
    // <div className='flex justify-center my-10'><UserCard></UserCard></div>
        feed && (<div className='flex justify-center my-10'> <UserCard user = {feed[0]}/> </div>)
   )
}
   
export default Feed