import { useEffect } from "react";

export default function Chatbot() {
  useEffect(() => {
    // Create the SnatchBot script element
    const script = document.createElement("script");
    script.src = "https://account.snatchbot.me/script.js";
    script.async = true;
    
    // Append the script to the body
    document.body.appendChild(script);

    // Initialize the chatbot
    script.onload = () => {
      window.sntchChat?.Init(404612); // Replace 404612 with your unique bot ID
    };

    return () => {
      // Cleanup the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return null; // The chatbot widget will appear without requiring any visible JSX
}
