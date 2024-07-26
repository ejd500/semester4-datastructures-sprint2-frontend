import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PostForm from "./components/PostForm"
import Home from "./components/Home"
import PreviousTrees from "./components/PreviousTrees"
import { useState } from "react";
import usePost from "./customhooks/usePost";


function App() {

  const [term, setTerm] = useState("");
  const [searchResults, setSearchResults] = useState(null); // State to hold search results
  const { data: treeData, loading: treeLoading, error: treeError, postData: postTreeData } = usePost('http://localhost:8080/tree');
  const [data, setData] = useState(null);

  return (
  <Router basename="/">
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="/input-numbers" element={<PostForm searchTerm={term} setSearchTerm={setTerm}  searchResults={searchResults} setSearchResults={setSearchResults} treeData={treeData} treeLoading={treeLoading} treeError={treeError} postTreeData={postTreeData} data={data} setData={setData}/>}/>
      <Route path="/previous-trees" element={<PreviousTrees searchTerm={term} setSearchTerm={setTerm} searchResults={searchResults} setSearchResults={setSearchResults}/>}/>
    </Routes>
  </Router>
  );
}

export default App;
