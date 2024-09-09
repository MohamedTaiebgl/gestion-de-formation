
import { Outlet } from "react-router-dom";
import Nav from "./navp";
import Space from "../composantlayout/sapce";
function Layout() {
    return <>
	
	<section id="header">

		
			<div>
				
				<Nav/>
				
				<section>
					<Space/>
					<h1>Learning with Tac-Tic</h1>
				</section>
				<p>Hello professor welcome to our educational website</p>
				<Space/>
				
			</div>
		
		</section>
		<Outlet/>
		
    </>;
  }
  
  export default Layout;
  