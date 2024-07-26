import { Link } from "react-router-dom"
import "../styles/nav.css"
import { RiSearchLine } from 'react-icons/ri';
import useFetch from "../customhooks/useFetch";
import { useState } from "react";
import { clear } from "@testing-library/user-event/dist/clear";

const Nav = ({searchTerm, setSearchTerm, setSearchResults}) => {

  const viewPreviousTrees = () => {
    setSearchResults(null)
  }

  const handleSearch = async (event) => {
    event.preventDefault(); 
    console.log("starting search...")
    try {
      const response = await fetch(`http://localhost:8080/tree/${searchTerm}`);
      const json = await response.json();
      console.log(json);
      setSearchResults(json);
      event.target.reset(); // Resets the form
    } catch (error) {
      console.error('Error searching:', error);
    }
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };


    return (
      <>
        <div className="nav">
          <div className="left">

          
            <div className="frame1">
              Treeify
            </div>
            
            <div className="frame2">
              <Link to="/"><div className="navItem">Home</div></Link>
              <Link to="/input-numbers"><div className="navItem">Input Numbers</div></Link>
              <Link to="/previous-trees" onClick={viewPreviousTrees}><div className="navItem">View Previous Trees</div></Link>
            </div>

          </div>
          
          <div className="right">
            <form id="searchForm" onSubmit={handleSearch}>
              <input
                type="search"
                name="search"
                id="search"
                placeholder="Search By ID"
                // value={searchTerm}
                onChange={handleChange}
              />
              <button id="find" type="submit"><RiSearchLine/></button>
            </form>
          </div>


        </div>
      </>
    )
  }
  
  export default Nav