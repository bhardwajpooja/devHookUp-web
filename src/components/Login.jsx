import {useState} from "react"
import axios from "axios"
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constant"

const Login = () => {
    const [emailId, setEmailId] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("")
    const dispatch  =  useDispatch()
    const navigate  =  useNavigate()
    const handleLogin = async() => {
        try {
            const res = await axios.post(`${BASE_URL}login`, {
                emailId,
                password
            }, { withCredentials : true });
            console.log('____Login _dispatch',res.data)
            dispatch(addUser(res.data.data))
            return navigate("/feed")
        } catch(exception) {
            setError(exception?.response.message || "Something went wrong")
            console.log('exception',exception?.response.message || "Something went wrong")
        }
    }
 return (
    <div className="flex justify-center my-5"> 
        <div className="card bg-base-200 w-96 shadow-xl">
            <div className="card-body">
                <h2 className="card-title justify-center">Login</h2>
                <label className="form-control w-full max-w-xs py-2">
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend my-3">Email ID</legend>
                        <input type="text" value = {emailId} onChange = {(e) => setEmailId(e.target.value)} 
                        className="input input-bordered w-full max-w-xs" placeholder="" />
                    </fieldset>
                </label>
                <label className="form-control w-full max-w-xs py-2">
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend my-3">Password</legend>
                        <input type="text" value = {password} onChange = {(e) => setPassword(e.target.value)} 
                        className="input input-bordered w-full max-w-xs" placeholder="" />
                    </fieldset>
                </label>
                <p className = "text-red-500">{error}</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-primary" onClick={handleLogin}>Login</button>
                </div>
            </div>
        </div>
    </div>
 )
}

export default Login