
import { Outlet } from "react-router-dom";
import Nav from "./nava";
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
				
				<p>Hello admin welcome to our educational website</p>
				<Space/>
			</div>
		
		</section>
		<Outlet/>
		
    </>;
  }
  
  export default Layout;
  