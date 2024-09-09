import { Link } from "react-router-dom"

export default function Nav()
{
    return<>
        <nav id="nav">
            <ul>
                <li><Link to="/"><span> Home </span></Link></li>
                <li><Link to="/Contact"><span>Contact</span></Link></li>
                <li><Link to="/login"><span>Login</span></Link></li>
                <li><Link to="register"><span style={
                    {border: "2px solid #9C4D6B",
                    
                    
                    color: "#9C4D6B",
                    padding: "14px 28px",
                    fontSize: "16px",
                    cursor: "pointer",
                    }}> Register</span></Link></li>
            </ul>
        </nav>
        <hr></hr>
    </>
}