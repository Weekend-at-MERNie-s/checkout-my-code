import React from "react";
import css from "./style.css";

function Main() {
  return (
    <section>
      <div className="checkout">
        <h1>Checkout Code!</h1>
        <h3>
          Browse other users code samples and leave some uplifting commentary or
          import your own files and put them up for review! Please be kind and
          happy coding!
        </h3>
        <div className="code-display">
           *list of users posted code files here*
          
        </div>
      </div>
    </section>
  );
}
export default Main;
