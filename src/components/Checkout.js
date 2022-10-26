import React from "react";

const Checkout = () => {
  return (
    <div>
      <div class="card items-center lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src="https://placeimg.com/400/400/arch" alt="Album" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">Check Out</h2>
          <p>DisplayName and Id </p>
          <div class="card-actions">
            <button class="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
