import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PostForm from "./components/PostForm"
import Home from "./components/Home"
import useFetch from "./customhooks/useFetch"
import PreviousTrees from "./components/PreviousTrees"
import { useState } from "react";


function App() {
    // useFetch hook to return the category list.
  // const { data: categoryList, loading: categoryLoading, error: categoryError } = useFetch('https://fakestoreapi.com/products/categories');
  const [term, setTerm] = useState("");
  const [searchResults, setSearchResults] = useState(null); // State to hold search results

  return (
  <Router basename="/">
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="/input-numbers" element={<PostForm searchTerm={term} setSearchTerm={setTerm}  searchResults={searchResults} setSearchResults={setSearchResults}/>}/>
      <Route path="/previous-trees" element={<PreviousTrees searchTerm={term} setSearchTerm={setTerm} searchResults={searchResults} setSearchResults={setSearchResults}/>}/>
      {/* <Route path="/productlist" element={<ProductList products={products} setProducts={setProducts} setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} totalQuantity={totalQuantity} categoryList={categoryList}/>}/>
      <Route path="/contact" element={<Contact cartItems={cartItems} totalQuantity={totalQuantity}/>}/>
      <Route path="/product/:id" element={<ProductDetail products={products} addToCart={addToCart} updateCart={updateCart} cartItems={cartItems} onClick={scrollToTop}/>}/>
      <Route path="/productcard1" element={<ProductCard1 object={object}/>}/>
      <Route path="/checkout" element={<Checkout cartItems={cartItems} setCartItems={setCartItems}/>}/> */}
    </Routes>
  </Router>
  );
}

export default App;
