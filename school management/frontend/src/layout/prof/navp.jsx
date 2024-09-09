import { Link } from "react-router-dom"
export default function Navp()
{
    return<>
        <nav id="nav">
            <ul>
                <li><Link to="/prof"><span>Home</span></Link></li>
                <li><Link to="/prof/studentList"><span>student list</span></Link></li>
                <li><Link to="/prof/courselist"><span>courses</span></Link></li>                       
                <li><Link to="/prof/createcourse"><span> add-course </span></Link></li>
                <li><Link to="/prof/Contact"><span> Contact </span></Link></li>   
            </ul>
        </nav>
    </>
}