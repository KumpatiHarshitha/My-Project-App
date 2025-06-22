import { useSelector } from "react-redux";
import './orderComponentStyles.css'; // Regular CSS import
import 'react-toastify/dist/ReactToastify.css';

function OrdersComponent() {
    const orderDetails = useSelector(globalState => globalState.orders);

    const orderDetailsItems = orderDetails.map((order, index) => (
        <li key={index} className="order-card">
            <p className="order-id">Order ID: <span>ORD_{index + 1}</span></p>
            <p className="date-time">Date and Time: {order.purchaseDateTime}</p>
            <p className="amount">Total Amount: ₹{order.finalPrice.toFixed(2)}</p>

            <ul className="item-list">
                {order.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="item">
                        <span>{item.name}</span> - ₹{item.price} × {item.quantity}
                    </li>
                ))}
            </ul>
        </li>
    ));

    return (
        <div className="container">
            <h1 className="title">Purchase History</h1>
            {orderDetails.length === 0 ? (
                <h2 className="empty">No purchase history available</h2>
            ) : (
                <ul className="orders-list">
                    {orderDetailsItems}
                </ul>
            )}
        </div>
    );
}

export default OrdersComponent;
