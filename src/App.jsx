import React from 'react';
import './Styles.css';
import './App.css';
import './vegStyles.css';
import './milkStyles.css';
import './chocolateStyles.css';
import './cartStyles.css';
import './iceCreamStyles.css';
import './homeStyles.css';
import './contactUsStyles.css';
import './pageNotFoundStyles.css'
import './aboutUsStyles.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Veg from './Veg';
import NonVeg from './NonVeg';
import Chocolates from './Chocolates';
import Milk from './Milk';
import ContactUs from './ContactUs';
import Home from './Home';
import Cart from './Cart';
import AboutUs from './AboutUs';
import IceCreams from './IceCreams';
import { useDispatch, useSelector } from 'react-redux';
import OrdersComponent from './OrdersComponent';
import PageNotFound from './PageNotFound';
import SignIn from './SignIn';
import SignUp from './SignUp';
import { logOut } from './store';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const cartItems = useSelector(state => state.cart);
  const totalCartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  let dispatch=useDispatch();
  const isAuthenticated=useSelector((state)=>state.users.isAuthenticated);
  const currentUser=useSelector((state) => state.users.currentUser);
  return (
    <BrowserRouter>
    
      <nav className="navbar">
         <Link className="nav-link" to="/Home">
          <img src="/Images/images/home.png" alt="Home" className="nav-icon" />
          Home
        </Link>
        <Link className="nav-link" to="/Veg">
          <img src="/Images/images/veg.png" alt="Veg Items" className="nav-icon" />
          Veg Items
        </Link>
        <Link className="nav-link" to="/NonVeg">
          <img src="/Images/images/nonveg.png" alt="Non Veg Items" className="nav-icon" />
          Non Veg Items
        </Link>
        <Link className="nav-link" to="/Chocolates">
          <img src="/Images/images/chocolate.png" alt="Chocolates" className="nav-icon" />
          Chocolates
        </Link>
        <Link className="nav-link" to="/Milk">
          <img src="/Images/images/milk.png" alt="Milk" className="nav-icon" />
          Milk
        </Link>
        <Link className="nav-link" to="/IceCreams">
          <img src="/Images/images/icecream.png" alt="IceCream" className="nav-icon" />
         IceCreams
        </Link>
        <Link className="nav-link" to="/OrdersComponent">
          <img src="/Images/images/order.png" alt="OrdersComponent" className="nav-icon" />
          Orders
        </Link> 
        <Link className="nav-link" to="/ContactUs">
          <img src="/Images/images/contact.png" alt="Contact Us" className="nav-icon" />
          Contact Us
        </Link> 
        <Link className="nav-link" to="/AboutUs">
          <img src="/Images/images/about.png" alt="About Us" className="nav-icon" />
          About Us
        </Link>
        {isAuthenticated?(
            <div>
              <span>Welcome,{currentUser.username}</span>
              <button onClick={()=>dispatch(logOut())}>Log Out</button>
              </div>
          ):(
            <Link className="nav-link" to="/SignIn">
          <img src="/Images/images/about.png" alt="Sign In" className="nav-icon" />
          Sign In
        </Link>
          )}
        
         <Link className="nav-link" to="/Cart" >
          <img src="/Images/images/cart.png" alt="Cart" className="nav-icon" />
          Cart(<span style={{ color: 'black' }}>{totalCartCount}</span>)
        </Link>
        
      </nav>
      <div className="content">
        <Routes>
           <Route path="/Home" element={<Home />} />
          <Route path="/Veg" element={<Veg />} />
          <Route path="/NonVeg" element={<NonVeg />} />
          <Route path="/Chocolates" element={<Chocolates />} />
          <Route path="/Milk" element={<Milk />} />
          <Route path="/IceCreams" element={<IceCreams />} />
          <Route path="/OrdersComponent" element={<OrdersComponent />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/SignIn" element={<SignIn />} />
           <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/*PageNotFound" element={<PageNotFound/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
