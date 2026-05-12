import { useLocation, useNavigate } from "react-router-dom";

const OrderConfirmation = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const order = state?.order;

  if (!order) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <p className="text-gray-600 text-lg">No order found</p>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl w-full">
        <h2 className="text-2xl font-bold text-green-600 mb-2">
          🎉 Order Placed Successfully!
        </h2>
        <p className="text-gray-600 mb-6">
          Thank you for your payment via <span className="font-semibold">{order.paymentMethod}</span>.
        </p>

        {/* Order Details */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">📦 Order Details</h3>
          <p><span className="font-medium">Order ID:</span> {order.id}</p>
          <p><span className="font-medium">Status:</span> {order.status}</p>
          <p><span className="font-medium">Total Amount:</span> ₹{order.totalAmount}</p>
        </div>

        {/* Items */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">🛒 Items</h3>
          {order.items && order.items.length > 0 ? (
            <ul className="divide-y divide-gray-200">
              {order.items.map(item => (
                <li key={item.menuItemId || item.id} className="py-2 flex justify-between">
                  <span>{item.name} × {item.quantity}</span>
                  <span className="text-gray-700">₹{item.unitPrice}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No items found in this order.</p>
          )}
        </div>

        {/* Delivery Address */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">📍 Delivery Address</h3>
          {order.address ? (
            <>
              <p>{order.address.fullName}</p>
              <p>{order.address.address1}, {order.address.city}</p>
              <p>{order.address.state} — {order.address.pin}</p>
              <p>Mobile: {order.address.mobile}</p>
            </>
          ) : (
            <p className="text-gray-500">No address found for this order.</p>
          )}
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button
            onClick={() => navigate("/")}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
          >
            ⬅ Back to Home
          </button>
          <button
            onClick={() => navigate("/orders")}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            📦 Track Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;