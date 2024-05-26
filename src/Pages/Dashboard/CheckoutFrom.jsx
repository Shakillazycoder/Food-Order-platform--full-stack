import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import useCart from "../../Hook/useCart";
import useAuth from "../../Hook/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckoutFrom = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const axiosSecure = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const { user } = useAuth();
  const navigate = useNavigate()
  const [cart, refetch] = useCart();
  const subtotal = cart.reduce((total, item) => total + item.price, 0);

  useEffect(() => {
   if(subtotal > 0){
    axiosSecure
    .post("/create-payment-intent", { price: subtotal })
    .then((res) => {
      console.log(res.data.clientSecret);
      setClientSecret(res.data.clientSecret);
    });
   }
  }, [axiosSecure, subtotal]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setError(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setError("");
    }

    //   confirm payment method
    const { error: confirmError, paymentIntent } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "anonymous",
            email: user?.email || "anonymous",
          },
        },
      });
    if (confirmError) {
      console.log("[Confirm]", confirmError);
    } else {
      console.log("[PaymentIntent]", paymentIntent);
      if (paymentIntent?.status === "succeeded") {
        setTransactionId(paymentIntent.id);
        console.log("Payment Succeeded");
        // now save the payment in the database
        const payment = {
            email: user?.email,
            price: subtotal,
            transactionId: paymentIntent.id,
            date: new Date(), // utc date convert use moment js 
            cartIds: cart.map(item => item._id),
            menuIds: cart.map(item => item.menuId),
            status: "pending",
        }
       
        const res = await axiosSecure.post('/payments', payment)
        console.log(res.data);
        refetch()
        if(res.data?.paymentResult?.insertedId){
            console.log("Payment Succeeded");
            Swal.fire({
              title: "Payment Succeeded",
              text: "Your order has been placed",
              icon: "success",
              showCancelButton: false,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "OK"
            });
            // clear the cart
            setTransactionId("");
            setClientSecret("");
            navigate('/dashboard/paymentHistory')
        }

      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="mx-10">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-primary mt-5"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
        {error && <div className=" mt-3 text-red-500">{error}</div>}
        {transactionId && (
          <div className=" mt-3 text-green-500">
            Transaction Id: {transactionId}
          </div>
        )}
      </form>
    </div>
  );
};

export default CheckoutFrom;
