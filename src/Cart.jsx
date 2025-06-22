import { useDispatch, useSelector } from "react-redux";
import { AddToCart, clearCart, DecCart, IncCart, orderDetails, Remove } from "./store";
import './cartStyles.css';
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import QRCode  from "react-qr-code";
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from "react-toastify";
import Confetti from 'react-confetti-boom';
import emailjs from 'emailjs-com';


function Cart() {

  const cartObjects = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const [discountPercentage, setDiscountPercentage] = useState(0);
  const couponCodeRef = useRef();
  const emailRef=useRef();
  const [customerEmail,setCustomerEmail]=useState('');
  const [couponCodeDiscountPer, setCouponCodeDiscountPer] = useState(0);
  const [couponName, setCouponName] = useState("");
  let [paymentMethod,setPaymentMethod]=useState('')
  const [showConfetti, setShowConfetti] = useState(false);
  
  const handleCoupon = () =>
  {
    const couponCode = couponCodeRef.current.value.trim().toUpperCase();
    setCouponName(couponCode);
    switch (couponCode) 
    {
      case 'DIWALI10':
        setCouponCodeDiscountPer(10);
        break;
      case 'DIWALI20':
        setCouponCodeDiscountPer(20);
        break;
      case 'DIWALI30':
        setCouponCodeDiscountPer(30);
        break;
      default:
        alert('Invalid Coupon Code');
        setCouponCodeDiscountPer(0);
    }
  };
  const calculateAmount = () =>
 {
    const totalPrice = cartObjects.reduce((total, item) => total + item.price * item.quantity, 0);
    const discountAmount = (totalPrice * discountPercentage) / 100;
    const couponDiscount = (totalPrice * couponCodeDiscountPer) / 100;
    const priceAfterDiscount = totalPrice - discountAmount-couponDiscount;
    const taxPrice = (priceAfterDiscount * 5) / 100;
    const finalPrice = priceAfterDiscount+taxPrice;
    return { totalPrice, discountAmount, taxPrice, finalPrice,couponDiscount };
  };
  const { totalPrice, discountAmount, taxPrice, finalPrice,couponDiscount } = calculateAmount();
   let [showThankYou,setShowThankYou]=useState(false);
  let navigate=useNavigate();
  let handleCompletePurchase=()=>
  {
    const purchaseDateTime=new Date().toLocaleString();
    //take cart details and store into object purchaseDetails
   const orderId = 'ORD_' + new Date().getTime();

    let purchaseDetails=
    {
      orderId:orderId,
      purchaseDateTime:new Date().toLocaleString(),
      items:[...cartObjects],
      finalPrice:finalPrice,
    }
    //clear cart
    dispatch(clearCart());
    //after clearing cart send OrderODetailsObjects to orderSlice
    dispatch(orderDetails(purchaseDetails))
    setShowThankYou(true);
    setShowConfetti(true);
    setTimeout(()=>{navigate("/ordersComponent");},5000);
    const shipping=50;
  const templateParams = {
    order_id: orderId,
    orders: cartObjects.map(item => ({
      name: item.name,
      price: (item.price * item.quantity).toFixed(2),
      units: item.quantity,
      image:item.image
    })),
    cost: {
      shipping: shipping,
      priceAfterDiscount:discountAmount.toFixed(2),
      couponDiscount:couponDiscount.toFixed(2),
      tax: taxPrice.toFixed(2),
      total: (shipping+finalPrice).toFixed(2)
    },
    email:customerEmail
  };

  emailjs.send('service_8zv5doe', 'template_s8bh1z5', templateParams, 'VjCtQljsf0KI9VDzk')
    .then(() => {
      alert('✅ Email sent successfully!');
    })
    .catch((error) => {
      alert('❌ Email sending failed: ' + error.text);
    });
};
    
  
 
 return (
  <div className="cart-container">
    
    <ToastContainer position="top-right" autoClose={2000}/>
    {cartObjects.length === 0 ? (
      <h1>🛒Your Cart Is Empty</h1>
    ) : (
      <>
      <div style={{ paddingTop: '120px' }}>
        <h1 className="cart-title">🛒Your Cart</h1>
        </div>
        <div className="cart-items">
          {cartObjects.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.name} className="product-image" />
              <div className="item-details">
                <h3 className="item-name">{item.name}</h3>
                <p className="item-price">₹{item.price * item.quantity}</p>
                <div className="button-group">
                  <button className="btn btn-inc" onClick={() =>{ dispatch(IncCart(item)); toast.success(`  Incremented to cart successfully`);}}>+</button>
                  <p className="item-quantity"> Quantity: {item.quantity}</p>
                  <button className="btn btn-dec" onClick={() => {dispatch(DecCart(item)); toast.warn(` Decremented from cart successfully`);}}>−</button>
                  <button className="btn btn-remove" onClick={() =>{ dispatch(Remove(item)); toast.error(` Removed from cart successfully`);}}>Remove</button>
                </div>
              </div>
            </div>
          ))}
        </div>
       <div className="cart-summary-box">
  <h2>🧮 Total: ₹{totalPrice.toFixed(2)}</h2>
  <div className="discount-buttons">
    <button className="btn btn-dis10" onClick={() => {setDiscountPercentage(10);toast.success("10% Discount Applied successfully");}}>Apply 10% Discount</button>
    <button className="btn btn-dis20" onClick={() => {setDiscountPercentage(20);toast.success("20% Discount Applied successfully");}}>Apply 20% Discount</button>
    <button className="btn btn-dis30" onClick={() => {setDiscountPercentage(30);toast.success("30% Discount Applied successfully");}}>Apply 30% Discount</button>
  </div>
  <h2>💸 Discount Applied: ₹{discountAmount.toFixed(2)}</h2>
  <input type="text" ref={couponCodeRef} placeholder="Enter Coupon Code" />
  <button className="btn btn-cou" onClick={handleCoupon}>Apply Coupon</button>
  <h2>🏷️ Coupon Discount: ₹{couponDiscount}</h2>
  <h2>🧾 Tax: ₹{taxPrice.toFixed(2)}</h2>
  <h2>💰 Final Price: ₹{finalPrice.toFixed(2)}</h2>
  </div>
<div className="payment-page-wrapper">
  <div className="payment-method-container">
    <h3>Select Payment Method</h3>
    <div className="payment-method-buttons">
      <button onClick={() => setPaymentMethod('qr')}>QR Code</button>
      <button onClick={() => setPaymentMethod('card')}>Card</button>
    </div>
    <div className='mb-3'>
            <label className='form-label'>
              Enter Your Gmail to Recieve Order Confirmation
            </label>
            <input type='email' ref={emailRef}
            onChange={(e=>setCustomerEmail(e.target.value))}
            className='form-control'
            placeholder='you@example.com'/>
          </div>

    {paymentMethod === 'qr' && (
      <div className="qr-section">
        <h4>Scan UPI QR to Pay ₹{finalPrice.toFixed(2)}</h4>
        <QRCode value={`upi://pay?pa=9398939726@axl&pn=HarshithaStore&am=${finalPrice.toFixed(2)}&cu=INR`} />
        <p>UPI ID: 9398939726@axl</p>
      </div>
    )}

    {paymentMethod === 'card' && (
      <div className="card-form">
        <h5>Enter Card Details</h5>
        <div>
          <label>Card Number</label>
          <input type="text" className="form-control" placeholder="1234 5678 9012 3456" />
        </div>
        <div>
          <label>Card Holder Name</label>
          <input type="text" className="form-control" placeholder="Card Holder Name" />
        </div>
        <div className="row">
          <div className="col-md-6">
            <label>Expiry Date</label>
            <input type="text" className="form-control" placeholder="MM/YY" />
          </div>
          <div className="col-md-6">
            <label>CVV</label>
            <input type="password" className="form-control" placeholder="***" />
          </div>
        </div>
      </div>
    )}
  </div>
</div>

<button className="btn btn-pur-center" onClick={handleCompletePurchase}> Complete Purchase</button>
    
  </>

 ) }
 : (
  <>
    {showThankYou && (
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h2 style={{ color: 'blue' }}>
          Thank you for your purchase! Redirecting to orders...
        </h2>
        
        {showConfetti && (
  <Confetti
    mode="boom"
    particleCount={100}
    colors={['#ff0000', '#ffff00', '#ffcocb', '#ffa500']}
    effectCount={3}
    effectInterval={1000}
    shapeSize={16}
  />
)}
        <div >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    )}
  </>
   </div>

)
}


export default Cart;
