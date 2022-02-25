import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext"

const Header = ()=>{
    const {auth,setAuth}  = useContext(AuthContext)
   
    return <>
    <div className="header">
        <div className="left-header">
            <Link to="/" className="header-link">Home</Link>
        </div>
        {
            auth.token!==""?<div className="user">
               <span>Welcome To DashBords</span> 
               <Link to="/home"> <button className="header-btn" onClick={()=>setAuth({...auth, token:"", user:""})}>Logout</button></Link>
            </div>:
        <div className="right-header">
            <Link to="/login" className="header-link">Log-in</Link>
            <Link to="/register" className="header-link">Sign-up</Link>
        </div>
        }
    </div>
    
    </>
}

export default Header;