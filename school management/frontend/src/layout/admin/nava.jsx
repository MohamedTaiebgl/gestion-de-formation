
import { Link } from "react-router-dom"
export default function Nava()
{
    return<>
        <nav id="nav">
            <ul>
                <li><Link to="/admin"><span> Home </span></Link></li>
                <li><Link to="/admin/Listeetd"><span> student list </span></Link></li>
                <li><Link to="/admin/Listprof"><span> prof list </span></Link></li>                       
                <li><Link to="/admin/existing"><span> existing </span></Link></li>
               
                
                    
            </ul>   
        </nav>
    </>
}