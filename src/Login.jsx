import {useState} from "react"
import axios from "axios"

const Login = () => {
    const [emailId, setEmailId] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async() => {
        try {
            const res = await axios.post('http://localhost:3000/login', {
                emailId,
                password
            }, { withCredentials : true });
            console.log('res',res)
        } catch(exception) {
            console.log('exception',exception)
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
                <div className="card-actions justify-center">
                    <button className="btn btn-primary" onClick={handleLogin}>login</button>
                </div>
            </div>
        </div>
    </div>
 )
}

export default Login