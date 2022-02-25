import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Link } from 'react-router-dom';

const Signup = () => {

    const initState = {
        name: "",
        username: "",
        email: "",
        password: "",
        role: "Customer",
    }
    const [userData, setUserData] = useState(initState);
    const [signuperror, setSignUpError] = useState(false)
    const history = useHistory();


    const emptyData = () => {
        setUserData({
            name: "",
            username: "",
            email: "",
            password: "",
            role: "Customer",
        })
    }



    const handleInput = (e) => {
        let { name, value } = e.target;
        setUserData({ ...userData, [name]: value })
    }

    const normalSignUp = (e) => {
       
        e.preventDefault();
        if (!userData.name || !userData.username || !userData.email || !userData.password || !userData.role) {
            alert("Kindly Fill All Details Properly")
            emptyData()
        }
        
        if (userData.role === 'Customer') {
            axios.post(`https://shihab-api.herokuapp.com/api/users/register-user`, userData).then(res => {
                setSignUpError(false)
                emptyData()
                history.push("/login");
            }).catch(function (e) {
                setSignUpError(true)
                emptyData()
            })
       
        } else if (userData.role === 'moderator') {
            axios.post(`https://shihab-api.herokuapp.com/api/users/register-moderator`, userData).then(res => {
                setSignUpError(false)
                emptyData()
                history.push("/login");
            }).catch(function (e) {
                setSignUpError(true)
                emptyData()
            })
        }
    }

    return (
        <>
            <div className="signin-container">
                <div className="signin-box">
                    <div className="borders">
                        <div className="siginin-title">Sign UP</div>
                    </div>
                    <form>

                        <input type="text" name="name" onChange={handleInput} placeholder="Enter name" value={userData.name} />
                        <input type="text" name="username" onChange={handleInput} placeholder="Enter Username" value={userData.username} />
                        <input type="text" name="email" onChange={handleInput} placeholder="Enter Email" value={userData.email}/>
                        <input type="password" name="password" onChange={handleInput} placeholder="Enter Password" value={userData.password}/>
                        <select name="role" onChange={handleInput} value={userData.role}>
                        <option disabled defaultValue>Select Your Roles</option>
                            <option value="Customer">Customer</option>
                            <option value="moderator">moderator</option>
                        </select>
                        <input type="submit" onClick={normalSignUp} />
                        <p className="AlreadyRegister">If you are Alredy Registerd Then Please <b><Link to="/login">Click Here</Link></b></p>
                        {signuperror ? <p className="AlreadyRegister">Already registered, please go to login</p> : ""}
                    </form>

                </div>
            </div>
        </>
    );
}

export default Signup