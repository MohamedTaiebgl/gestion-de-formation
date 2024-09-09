import { Link } from 'react-router-dom';


export default function Navsd()
{
    return<>
        <nav id="nav">
            <ul>
                <li><Link to="/student"><span> Home </span></Link></li>
                <li><Link to="/student/courseList"><span> course List </span></Link></li>
                <li><Link to="/student/existing"><span> existing courses </span></Link></li>
                <li><Link to="/student/Contact"><span> Contact </span></Link></li>            
              </ul>
        </nav>
    </>
}