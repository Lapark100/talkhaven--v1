"use client";

import axios from "axios";

export default function CheckoutButton({ price }) {
  


  const handleCheckout = async () => {
      
    try {
      const response = await axios.post(
        "/api/paystack/initialize",
        {
          email: "joshua@email.com",
          amount: Number(price),
        }
      );

      

      window.location.href =
        response.data.data.authorization_url;

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button className="py-3 px-4 rounded-xl bg-[#ffcc00] text-black hover:text-white border-solid border-black text-center mt-4" onClick={handleCheckout}>
      Pay Now
    </button>
  );
}