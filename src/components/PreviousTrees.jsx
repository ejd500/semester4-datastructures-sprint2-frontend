import Nav from "./Nav"
import "../styles/previoustrees.css"
import { Link } from "react-router-dom"
import useFetch from "../customhooks/useFetch"

const PreviousTrees = ({searchResults, setSearchResults, searchTerm, setSearchTerm}) => {

    const { data: treeData, loading: treeLoading, error: treeError } = useFetch('http://localhost:8080/trees');
    const viewAllTrees = () => {
        setSearchResults(null)
    }

  return (
    <>
        <Nav searchTerm={searchTerm} setSearchTerm={setSearchTerm} setSearchResults={setSearchResults}/>
        {searchResults==null ? (
            // True case
            <div id="falseCase" className="previousTreesMain">
                <div>

                    <h3 id="title">All Trees:</h3>
                
                    {treeLoading && <h3 id="loading">Loading...</h3>}
                    {treeError && <h3 id="error">Error: {treeError.message}</h3>}
                    {treeData && 
                    (<div>
                        <pre className="binaryTrees">{JSON.stringify(treeData, null, 2)}</pre>
                    </div>)}
                </div>
    
            </div>
        ) : (
        // False case
            <div id="falseCase">
                {searchResults && 
                    (<div>
                        <h3 id="title">Search Results:</h3>
                        <pre className="binaryTrees">{JSON.stringify(searchResults, null, 2)}</pre>
                    </div>)}
                <button id="viewAllTrees" onClick={viewAllTrees}>View All Trees</button>
            </div>
        )}

        
       
        
        
        
    </>
  )
}

export default PreviousTrees