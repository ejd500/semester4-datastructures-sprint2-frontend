import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PostForm from "./components/PostForm"
import Home from "./components/Home"
import PreviousTrees from "./components/PreviousTrees"
import { useState } from "react";


function App() {

  const [term, setTerm] = useState("");
  const [searchResults, setSearchResults] = useState(null); // State to hold search results

  return (
  <Router basename="/">
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="/input-numbers" element={<PostForm searchTerm={term} setSearchTerm={setTerm}  searchResults={searchResults} setSearchResults={setSearchResults}/>}/>
      <Route path="/previous-trees" element={<PreviousTrees searchTerm={term} setSearchTerm={setTerm} searchResults={searchResults} setSearchResults={setSearchResults}/>}/>
    </Routes>
  </Router>
  );
}

export default App;
