import { useNavigate } from "react-router-dom";
import "../css/Header.css"
import { FiLogOut } from "react-icons/fi";

const Header=()=>{
    const navigate = useNavigate()
     const handleLogout=()=>{
        localStorage.clear()
        navigate('/login')
     }
    return(<div className="main-container">
        <div className="header-text">OSCODE DASHBOARD</div>
        <div><input className="header-input" type="text" placeholder="Seaching..."/></div>
        <div className="logout-container" onClick={handleLogout}><FiLogOut className="logout-icon"/><span>Logout</span></div>
        </div>)
}



export default Header