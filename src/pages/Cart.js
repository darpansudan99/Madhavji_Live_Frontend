import React from "react";
import { useSelector } from "react-redux";
import CartProduct from "../component/cartProduct";
import emptyCartImage from "../Assets/empty.gif";
import { toast } from "react-hot-toast";
import { loadStripe } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const productCartItem = useSelector((state) => state.product.cartItem);
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const totalPrice = productCartItem.reduce(
    (acc, curr) => acc + parseInt(curr.total),
    0
  );
  const totalQty = productCartItem.reduce(
    (acc, curr) => acc + parseInt(curr.qty),
    0
  );

  const handlePayment = async () => {
    if (user.email) {
      try {
        const stripePromise = await loadStripe(
          process.env.REACT_APP_STRIPE_PUBLIC_KEY
        );
  
        const res = await fetch(
          `${process.env.REACT_APP_SERVER_DOMAIN}/create-checkout-session`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(productCartItem),
          }
        );
  
        if (!res.ok) {
          console.error(
            `Failed to create checkout session. Status: ${res.status}`
          );
          // Log the response text for more information
          const responseText = await res.text();
          console.error(`Response text: ${responseText}`);
          return;
        }
  
        const data = await res.json();
  
        if (!data || !data.id) {
          console.error("Invalid session data received from the server");
          console.error("Received data:", data);
          return;
        }
  
        console.log("Session data from the server:", data);
  
        toast("Redirect to the payment gateway...!");
        await stripe.redirectToCheckout({
          sessionId: session.data.session.id
        });
        // await stripePromise.redirectToCheckout({ sessionId: data.id });
      } catch (error) {
        console.error("Error during payment processing:", error);
        // You can handle the error as needed, e.g., show an error toast
        toast.error("An error occurred during payment processing");
      }
    } else {
      toast("You have not logged in!");
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    }
  };
  
  return (
    <>
      <div className="p-2 md:p-4">
        <h2 className="text-lg md:text-2xl font-bold text-slate-600">
          Your Cart Items
        </h2>

        {productCartItem[0] ? (
          <div className="my-4 flex flex-col md:flex-row gap-3">
            {/* display cart items  */}
            <div className="w-full md:w-3/4">
              {productCartItem.map((e1) => (
                <CartProduct
                  key={e1._id}
                  id={e1._id}
                  name={e1.name}
                  image={e1.image}
                  category={e1.category}
                  qty={e1.qty}
                  total={e1.total}
                  price={e1.price}
                />
              ))}
            </div>

            {/* total cart item  */}
            <div className="w-full md:w-1/4">
              <h2 className="bg-blue-500 text-white p-2 text-lg">
                {" "}
                Order Summary
              </h2>
              <div className="flex w-full py-2 text-lg border-b">
                <p>Total Qty :</p>
                <p className="ml-auto w-32 font-bold">{totalQty}</p>
              </div>
              <div className="flex w-full py-2 text-lg border-b">
                <p>Total Price</p>
                <p className="ml-auto w-32 font-bold">
                  <span className="text-red-500">₹</span> {totalPrice}
                </p>
              </div>
              <button
                className="bg-red-500 w-full text-lg font-bold py-2 text-white"
                onClick={handlePayment}
              >
                Payment
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="flex w-full justify-center items-center flex-col">
              <img src={emptyCartImage} alt="" className="w-full max-w-sm" />
              <p className="text-slate-500 text-3xl font-bold">Empty Cart</p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
