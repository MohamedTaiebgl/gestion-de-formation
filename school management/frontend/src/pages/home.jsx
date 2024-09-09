
import logo from '../img/logo.png';

function Home() {
  return (
	
    <div>
		
      <section>
			<div>
				<header>
					<h1>welcome to<br />
					<strong>Tac-Tic</strong></h1>
					
				</header>
			<p>good to see you</p>
			</div>
			<center>
			<span>
				<img src={logo} alt="" />
			</span>
			</center>

		</section>
    </div>
  );
}

export default Home;
