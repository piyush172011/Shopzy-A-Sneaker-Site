import './App.css';
import Nav from './Components/Navbar/nav';
import Product from './Components/Products/product';
import Recom from './Components/Recom/recom'
//import Footer from './Components/Footer/footer';
import Side from './Components/Sidebar/side';
import { useState} from 'react';
import Login from './Components/Login/login';
import Cart from './Components/Cart/cart';

import { BrowserRouter, Route, Routes } from "react-router-dom";
//Database
import items from './Components/db/items';
import Card from './Components/Extra/card';
import './index.css';
function App() {
  const [category,setCategory]=useState(null);

//Cart
// const [cart, setCart] = useState([]);

// const handleAddToCart = (product) => {
//     setCart([...cart, product]);
// };


//Search Filter
const[search,setSearch]=useState('');
const handleInputChange = e =>{
  setSearch(e.target.value)
}
const filtereditems = items.filter((item)=>
  item.title.toLowerCase().indexOf(search.toLowerCase())!==
  -1
);



//Radio Filter - Category
const handleChange = e =>{
  setCategory(e.target.value);
}
//btn
const handleClick = e =>{
  setCategory(e.target.value);
}
function filterData(items,selected,search){
  let filterProducts = items;

  if(search){
    filterProducts=filtereditems;
  }
  if (selected) {
    filterProducts = filterProducts.filter(
      ({ category, rating, company, newPrice, title }) =>
        category === selected ||
        rating === selected ||
        company === selected ||
        newPrice === selected ||
        title === selected
    );
  }
  return filterProducts.map(
    ({ img, title, star, prevPrice, newPrice }) => (
      <Card
        key={Math.random()}
        img={img}
        title={title}
        star={star}
        prevPrice={prevPrice}
        newPrice={newPrice}
      />
    )
  );
}
const result = filterData(items, category, search);

//Cart




  return (
    <>
      
      <BrowserRouter>
	      <Routes>
          <Route path="/" element={<>
            <Side handleChange={handleChange}/>
            <Nav search={search} handleInputChange={handleInputChange}/> 
            <Recom handleClick={handleClick}/>
            <Product result={result}/>
            </>}>
          </Route>	
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
	      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
