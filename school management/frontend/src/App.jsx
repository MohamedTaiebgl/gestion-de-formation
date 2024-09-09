
import { router } from "./routes/router"
import {RouterProvider} from "react-router-dom";
import Footer from "./layout/composantlayout/footer";

function App() {

  return (
    <>
    <div id="page-wrapper">
      
      <div className="container">
        <section id="features" >
          <RouterProvider router={router}/>
        </section>
      </div>
      <Footer/>
    </div>
    </>
  )
}

export default App
