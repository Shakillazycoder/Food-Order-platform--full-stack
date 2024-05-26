import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../Component/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutFrom from "./CheckoutFrom";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_HOSTING_KEY);

const Payment = () => {
  return (
    <div>
      <SectionTitle
        heading={"Payment"}
        subHeading={"Please pay to eat"}
      ></SectionTitle>
      <div>
        <Elements stripe={stripePromise}>
          <CheckoutFrom/>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
