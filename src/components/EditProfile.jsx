import {useState} from "react"
import axios from "axios"
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constant"
import {useSelector, useDispatch} from 'react-redux'
import UserCard from './UserCard'

const EditProfile = ({user}) => {
  console.log('user_____',user,user.firstName)
  // const userData   = useSelector((store) => store.user)
  // console.log('Profile userData',userData)
  const dispatch   =  useDispatch()
  const navigate   = useNavigate()
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [age, setAge] = useState(user.age);
  const [gender, setGender] = useState(user.gender);
  const [about, setAbout] = useState(user.about);
  const [error, setError] =  useState("")
  const [showToast, SetShowToast] =  useState(false)
  //  const [lastName, setLastName] = useState("");

  const saveProfile = async () => {
    try{
      const res = await axios.patch(`${BASE_URL}profile/edit`,
      {firstName, lastName, age, gender, about},{ withCredentials : true });
      console.log('res_______',res)
       dispatch(addUser(res?.data?.data))
       SetShowToast(true)
       setTimeout(() => {
        SetShowToast(false)
       },3000)
      //return navigate("/feed")
    } catch(err) {
      console.log('err',err)
      setError(err.message)
    }
  }

    return (
      <div>
      <div className="flex justify-center my-10">
      <div className="flex justify-center my-10"> 
        <div className="card bg-base-300 w-96 shadow-xl">
        <div className="card-body">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
              <legend className="fieldset-legend">Profile</legend>
            
              <label className="label">First Name</label>
              <input type="firstName" className="input" value = {firstName} onChange = {(e) => setFirstName(e.target.value)} 
              placeholder="First Name" />
            
              <label className="label">Last Name</label>
              <input type="lastName" className="input" value = {lastName} onChange = {(e) => setLastName(e.target.value)}  placeholder="lastName" />

              <label className="label">Age</label>
              <input type="Age" className="input" value = {age} onChange = {(e) => setAge(e.target.value)}  placeholder="Age" />

              <label className="label">Gender</label>
              <input type="Gender" className="input" value = {gender} onChange = {(e) => setGender(e.target.value)}  placeholder="Gender" />

              <label className="label">About</label>
              <input type="Skills" className="input"value = {about} onChange = {(e) => setAbout(e.target.value)}   placeholder="Skills" />

              <div className="card-actions justify-center">
                <button className="btn btn-neutral mt-4" onClick={saveProfile}>Edit</button>
              </div>
          </fieldset>
          
        </div>
        
      </div>
       </div>
       <UserCard user = {{firstName, lastName, age, gender, about}}/>
       </div>
        { showToast && 
          <div className="toast toast-top toast-center">
            <div className="alert alert-info">
              <span>Profile edit successfully.</span>
            </div>
          </div>
       }
      </div>
    )
   }
   
   export default EditProfile