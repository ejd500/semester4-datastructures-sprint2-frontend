import React, { useState } from 'react';
import usePost from '../customhooks/usePost';  // Adjust the path as necessary
import Nav from "./Nav"
import "../styles/postForm.css"

const PostForm = ({searchResults, setSearchResults, searchTerm, setSearchTerm}) => {
    const [number, setNumber] = useState('');  // Local state for number input
    const { data: treeData, loading: treeLoading, error: treeError, postData: postTreeData } = usePost('http://localhost:8080/tree');
    const [integerList, setIntegerList] = useState([]); // State to hold the list of integers

    
    const clearList = () =>{
        setIntegerList([]); // Clear integerList
        setSearchResults(null);
    }

    // Add number to integerList array
    const addNumberToArray = (event) => {
        event.preventDefault(); // Prevent form submission

        // Validate if input is a valid number
        const parsedNumber = parseInt(number);
        if (isNaN(parsedNumber)) {
            return; // Exit function early if input is not valid
        }
        
         // Add valid number to integerList
        setIntegerList([...integerList, parsedNumber]);
        setNumber(''); // Clear input field after adding
    };

    // Handle form submission to backend
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent form submission
        postTreeData(integerList); // Call postTreeData with the form data as an integer list
    };

  return (
    <div>
        <Nav searchTerm={searchTerm} setSearchTerm={setSearchTerm} setSearchResults={setSearchResults}/>

        <div className='main'>
            <form className="inputNumbersForm" onSubmit={addNumberToArray}>
    
                <label className='label' htmlFor="number">Enter Number: 
                    <input
                    type="integer"
                    id="number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}  // Update local state on input change
                    />
                
                    <button type="submit">Add Number</button>
                </label>
        
                <div className='integerList'>
                    {searchResults==null ? (
                        <h3>Integer List: [{integerList.join(', ')}]</h3>
                    ) : (
                        <h3>Integer List: [{searchResults.integerList.join(', ')}]</h3>
                    )}
                </div>

                <div className='clearOrSubmit'>
                    <button onClick={clearList}>Clear List</button>
                    <button onClick={handleSubmit}>Submit List</button>
                </div>


            
       
            </form>

        </div>

        {treeLoading && <h3 id="loading">Loading...</h3>}
        {treeError && <h3 id="error">Error: {treeError.message}</h3>}
        {treeData && 
        (<div>
            <h3 id="treeHeading">Binary Tree:</h3>
            <div className='binaryTree'>
                <pre>{JSON.stringify(treeData, null, 2)}</pre>
            </div>
        </div>
        )}

        {searchResults && 
        (<div>
            <h3 id="treeHeading">Binary Tree:</h3>
            <div className='binaryTree'>
                <pre>{JSON.stringify(searchResults, null, 2)}</pre>
            </div>
        </div>
        )}
    </div>
  );
};

export default PostForm;
