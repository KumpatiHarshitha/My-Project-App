import { configureStore, createSlice } from "@reduxjs/toolkit";
import Chocolates from "./Chocolates";
import IceCreams from "./IceCreams";
import 'react-toastify/dist/ReactToastify.css';

const savedCart=localStorage.getItem("cart");
const localStorageCart=savedCart?JSON.parse(savedCart):[];
const productsSlice=createSlice(
    {
        name:'products',
        initialState:{
            veg:[
                    {name  :'Tomato',description:'Juicy and ripe tomatoes, perfect for salads and sauces.',price:30,image:'/Images/images/tomatoes.jpg'},
                    {name :'Potato', description:'Versatile and starchy potatoes suitable for various dishes.', price:20.5, image:'/Images/images/potato.jpg'},
                    {name:'Beans',description:'Protein-rich legumes that support heart health and aid digestion.' , price:59.4,image:'/Images/images/beans.jpg'},
                    {name:'Carrot',description:'Crunchy root vegetables high in beta-carotene, promoting eye health.',price:48.5,image:'/Images/images/carrot.jpg'},
                    {name:'Cabbage',description:'Leafy cruciferous vegetable rich in vitamins C and K, supporting digestion and heart health.'
                     ,price:28.8,image:'/Images/images/cabbage.jpg'},
                    {name:'Capsicum',description:'Colorful peppers loaded with antioxidants, enhancing immunity and metabolism.',price:40.5,image:'/Images/images/capsicum.jpg'},
                    {name:'Spinash',description:'Leafy green packed with iron and vitamins, benefiting eye and bone health.',
                     price:40.5,image:'/Images/images/spinach.jpg'},
                    {name:'Brocolli',description:'Nutrient-dense cruciferous vegetable high in fiber and antioxidants, supporting heart and immune health.',price:130.5,image:'/Images/images/broccoli.jpg'},
                    {name:'Onion',description:'Flavorful bulb rich in antioxidants, promoting heart and gut health.',price:60.5,image:'/Images/images/onion.jpg'},
                    {name:'Lady Finger',description:'Fiber-rich pod vegetable aiding digestion and blood sugar control.',price:80.5,image:'/Images/images/ladyfinger.jpg'}
                 ],
            nonVeg:[
                {name:'Chicken',description:'Lean protein rich in B vitamins and selenium, supporting muscle growth and brain health.',price:150.5,image:'/Images/images/chicken.jpg'},
                {name:'Mutton',description:'Nutrient-dense red meat high in protein, iron, and B12, with lower fat content.'        ,price:2000.5,image:'/Images/images/mutton.jpg'},
                {name:'Fish',description:'High-quality protein source rich in omega-3 fatty acids, promoting heart and brain health.'        ,price:200.5,image:'/Images/images/fish.jpg'},
                {name:'Crab',description:'Protein-packed with omega-3s and vitamin B12, supporting muscle and heart health.'        ,price:180.5,image:'/Images/images/crab.jpg'},
                {name:'Pork',description:'Rich in protein, B vitamins, and minerals like zinc and iron, aiding muscle maintenance.'        ,price:210.5,image:'/Images/images/pork.jpg'},
                {name:'Shrimp',description:'Low-calorie seafood high in protein, iodine, and antioxidants, supporting heart health.'        ,price:1900.5,image:'/Images/images/shrimp.jpg'},
                {name:'Lobster',description: 'Lean protein with omega-3s, B12, and minerals, promoting heart and immune health.'        ,price:205.5,image:'/Images/images/lobster.jpg'},
                {name:'Beef',description:'Excellent protein source rich in iron, zinc, and B vitamins, supporting muscle growth.'        ,price:160.5,image:'/Images/images/beef.jpg'},
                {name:'Turkey',description:'High-quality protein with B vitamins and selenium, supporting muscle and immune health.'        ,price:300.5,image:'/Images/images/turkey.jpg'},
                {name:'Squid',description:'Low-fat seafood high in B12, selenium, and omega-3s, supporting heart and brain health.'        ,price:305.5,image:'/Images/images/squid.jpg'}
            ] ,       
            milk:[
                {name:'Cow Milk',description: 'Rich in calcium, vitamin D, and high-quality protein, cow milk supports strong bones, muscle growth, and overall health.'   ,price:200.5,image:'/Images/images/cowmilk.jpg'},
                {name:'Paneer',description:'A fresh, soft cheese high in protein and calcium, paneer aids in muscle development and bone strength.'     ,price:100.5,image:'/Images/images/paneer.jpg'},
                {name:'Ghee',description: 'Clarified butter rich in vitamins A, D, E, and K, ghee supports digestion, heart health, and immune function.'       ,price:190.5,image:'/Images/images/ghee.jpg'},
                
            ],
            chocolate:[
                {name:'Diary Milk',description:'Smooth and creamy milk chocolate offering a rich, velvety indulgence.'          ,price:200.5,image:'/Images/images/diarymilk.jpg'},
                {name:'Munch',description:'Crunchy wafer bar coated with rich chocolate, delivering the perfect crunch.'   ,price:100.5,image:'/Images/images/munch.jpg'},
                {name:'5 Star',description:'Chewy caramel and nougat center enveloped in smooth milk chocolate for a delightful treat.'   ,price:190.5,image:'/Images/images/fivestar.jpg'},
                {name:'Kit Kat',description:'Crispy wafer layers covered in creamy milk chocolate, perfect for a quick break.'   ,price:160.5,image:'/Images/images/kitkat.jpg'},
                {name:'Snickers',description:'Packed with roasted peanuts, nougat, caramel, and milk chocolate to satisfy your hunger.'
     ,price:150.5,image:'/Images/images/snickers.jpg'},
                {name:'Milky Bar',description:'Smooth white chocolate made with real milk, free from artificial colors and flavors.'   ,price:180.5,image:'/Images/images/milkybar.jpg'},
                {name:'Bounty',description:'Soft coconut center covered in creamy milk chocolate for a tropical delight.'   ,price:290.5,image:'/Images/images/bounty.jpg'},
                {name:'Toblerone',description:'Distinctive triangular milk chocolate with honey and almond nougat.'
     ,price:150.5,image:'/Images/images/toblerone.jpg'},
                {name:'Bournville',description:'Rich and smooth dark chocolate offering an intensely satisfying flavor.'   ,price:190.5,image:'/Images/images/bournville.jpg'},
                {name:'Galaxy',description: 'Silky smooth milk chocolate delivering a luxurious melt-in-the-mouth experience.'
     ,price:200.5,image:'/Images/images/galaxy.jpg'},
            ],
            iceCreams:[
                {name:'Vanilla', description: 'Classic and creamy, vanilla ice cream offers a timeless, smooth flavor.',price:200.5,image:'/Images/images/vanilla.jpg'},
                {name:'Strawberry', description:'Sweet and fruity, strawberry ice cream brings a refreshing berry taste.',price:100.5,image:'/Images/images/strawberry.jpg'},
                {name:'Chocolate', description:'Rich and indulgent, chocolate ice cream satisfies with its deep cocoa flavor.',price:190.5,image:'/Images/images/chocolate.jpg'},
                {name:'Butterscotch',description:'Buttery and sweet, butterscotch ice cream delivers a nostalgic, caramelized taste.',price:290.5,image:'/Images/images/butterscotch.jpg'},
                {name:'Pista',description:'Nutty and aromatic, pista ice cream combines creamy texture with the distinct flavor of pistachios.',price:300.5,image:'/Images/images/pista.jpg'},
                {name:'Badam Kulfi', description: 'A traditional Indian dessert, badam kulfi is a creamy almond-flavored ice cream with a hint of cardamom.',price:190.5,image:'/Images/images/badamkulfi.jpg'},
                {name:'Mango',description: 'Tropical and sweet, mango ice cream captures the essence of ripe, juicy mangoes.',price:200.5,image:'/Images/images/mango.jpg'},
                {name:'Black Current',description:'Tangy and vibrant, black currant ice cream offers a unique, berry-rich experience.',
  price:210.5,image:'/Images/images/blackcurrent.jpg'},
            ],
        },
        reducers:{}
    });
        let cartSlice=createSlice({
                name:'cart',
                initialState:localStorageCart,
                reducers:{
                    AddToCart:(state,inputItem)=>{
                        let item=state.find(item=>item.name===inputItem.payload.name);
                        if(item)
                        {
                            item.quantity+=1;
                        }
                        else 
                        {
                            state.push({...inputItem.payload,quantity:1});
                        }
                    },
                    IncCart:(state,inputItem)=>{
                        let item=state.find(item=>item.name===inputItem.payload.name);
                        if(item)
                        {
                            item.quantity+=1;
                        }
                       
                    } ,
                    DecCart:(state,inputItem)=>{
                        let item=state.find(item=>item.name===inputItem.payload.name);
                        if(item && item.quantity>1)
                        {
                            item.quantity-=1;
                        }
                        else
                        {
                           return state.filter((item=>item.name!== inputItem.payload.name))
                        }
                    },
                    Remove:(state,inputItem)=>{
                        
                         return state.filter((item=>item.name!== inputItem.payload.name))
                         
                    },
                   clearCart:()=>[]
                },
         });
         //orderSlice takes the orderDetails() reduce just pass the OrderDetailsObjects to state
         const orderSlice=createSlice({
            name:"orders",
            initialState:[],
            reducers:{
              orderDetails:(state,action)=>{
                state.push(action.payload)
              }
            }
         })
     let userSlice=createSlice({
    name:'users',
    initialState:{
        users:[],
        isAuthenticated:false,
        currentUser:null,
    },
    reducers:{
        registerUser:(state,action)=>{
            state.users.push(action.payload);
        },
        loginUser:(state,inputData)=>{
            const foundUser=state.users.find(user=>user.username===inputData.payload.username &&
                user.password===inputData.payload.password
            );
            if(foundUser){
                state.isAuthenticated=true;
                state.currentUser=foundUser;
            }
            else{
                alert('Invalid Credential');
            }
            
        },
        logOut:(state)=>{
            state.isAuthenticated=false;
            state.currentUser=null
        }
    }
 })
        export let {AddToCart,IncCart,DecCart,Remove,clearCart}=cartSlice.actions;
        export let {orderDetails}=orderSlice.actions;
        export let{registerUser,loginUser,logOut}=userSlice.actions
        const store=configureStore({
            reducer:{
                products:productsSlice.reducer,
                cart:cartSlice.reducer,
                orders:orderSlice.reducer,
                users:userSlice.reducer
            }
        });
        store.subscribe(()=>{
            const state=store.getState();
            localStorage.setItem("cart",JSON.stringify(state.cart));
        })
        export default store;