import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header"

const Cart = () => {
 
  const cartItems = [
    { id: 1, name: "Product 1", price: 99.99, quantity: 2 },
    { id: 2, name: "Product 2", price: 129.99, quantity: 1 },
    { id: 3, name: "Product 3", price: 79.99, quantity: 3 }
  ];


  const totalCartPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
      <Header />
     <div className="container py-4">
        <h1 className="mb-4">Shopping Cart</h1>
       {cartItems.map((item) => (
          <div key={item.id} className="card mb-3 p-3 position-relative">
            
            <h4>{item.name}</h4>
            <p>
             Price: ${item.price.toFixed(2)}
            </p>
            <p>
             Quantity:{item.quantity}
            </p>
            <p className="position-absolute top-0 end-0 m-3 ">
              Total: ${(item.price * item.quantity).toFixed(2)}
            </p>
          </div>
        ))}
        <p className="mt-4 text-start">
          <strong>Total Price:</strong> ${totalCartPrice.toFixed(2)}
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
