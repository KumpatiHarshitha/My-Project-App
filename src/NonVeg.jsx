import { useDispatch, useSelector } from "react-redux";
import './nonVegStyles.css';
import { AddToCart } from "./store";
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from "react-toastify";
import { useState } from "react";

function NonVeg() {
const nonVegProducts = useSelector(globalState => globalState.products.nonVeg);
  const itemsPerPage = 5;
const [currentPage, setCurrentPage] = useState(1);
  let dispatch=useDispatch()     
   const[selectedRange,setSelectedRange]=useState([])
      const priceRanges=[
          {value:'Rs 10 to Rs 50',min:10,max:50},
          {value:'Rs 50 to Rs 100',min:50,max:100},
          {value:'Rs 100 to Rs 200',min:100,max:200},
          {value:'Rs 200 to Rs 500',min:200,max:500},
          {value:'Rs 500 And Above',min:500,max:Infinity},
         ];
         const handleCheckboxChange=(rangeValue)=>{
          if(selectedRange.includes(rangeValue)){
              const updated=selectedRange.filter(r=>r!==rangeValue);
              setSelectedRange(updated);
          }
          else{
              const updated=[...selectedRange,rangeValue];
              setSelectedRange(updated)
          }
         }
         const activeRanges=priceRanges.filter(range=>selectedRange.includes(range.value));
         const filtered=selectedRange.length===0?
         nonVegProducts:nonVegProducts.filter(product=>
          activeRanges.some(range=>
              product.price>=range.min && product.price<=range.max))
    const indexForLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexForLastItem - itemsPerPage;

// Use the filtered array (or vegProducts if no filter)
const paginatedItems = filtered.slice(indexOfFirstItem, indexForLastItem);

const totalPages = Math.ceil(filtered.length / itemsPerPage);
   const nonVegListItems = paginatedItems.map((product, index) => (
  <li key={product.id || index} className="nonveg-item">
    <img src={product.image} alt={product.name} />
    <h3>{product.name}</h3>
    <p>{product.description}</p>
    <p>₹{product.price}</p>
    <button
      onClick={() => {
        dispatch(AddToCart(product));
        toast.success(`${product.name} Added to cart successfully`);
      }}
    >
      Add To Cart
    </button>
  </li>
));


  return (
    <>
    <div className="nonveg-container">
       <div style={{ paddingTop: '120px' }}>
       <ToastContainer position="top-right" autoClose={2000}/>
        <h2>Filter by Price</h2>
        </div>
    {priceRanges.map(range => (
      <label key={range.value}>
        <input
          type="checkbox"
          checked={selectedRange.includes(range.value)}
          onChange={() => handleCheckboxChange(range.value)}
        />
        {range.value}
      </label>
    ))}
      <h1>NON VEG</h1>
      <ul className="nonveg-list">
        {nonVegListItems}
      </ul>
    </div>
     <div>
     <button onClick={()=>setCurrentPage(currentPage-1) } disabled={currentPage===1}>Previous</button>
   {Array.from({ length: totalPages }, (_, index) => (
  <button key={index + 1} onClick={() => setCurrentPage(index + 1)}>{index + 1}
 </button>
))}
      <button onClick={()=>setCurrentPage(currentPage+1) }disabled={currentPage===totalPages}>Next</button>
      </div>
      </>
  );
}

export default NonVeg;
