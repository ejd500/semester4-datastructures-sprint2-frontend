import Nav from "./Nav"
import "../styles/home.css"
import { Link } from "react-router-dom"

const Home = () => {
        
  return (
    <>
        <Nav/>
        <div className="homeMain">
          <h3 id="welcome">
            Welcome to Treeify <br/>Enter a list of numbers and get back a balanced binary tree!
          </h3>
          <Link to="/input-numbers"><button>Start Now</button></Link>
        </div>
        
        
    </>
  )
}

export default Home