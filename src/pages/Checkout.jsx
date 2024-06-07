import React from "react";

import InnerBanners from "../utils/InnerBanners";
import Container from "../utils/Container";
import AddressForm from "../component/checkout/AddressForm";
import BillInfo from "../component/checkout/BillInfo";

const Checkout = () => {
  return (
    <div className="w-full py-10">
      <Container>
        <div className="checkoutContainer my-0 mx-auto flex justify-between pb-10 py-3">
          {/* billing details */}
          <div className="checkoutBox">
            <AddressForm />
          </div>

          {/* billing info */}
          <div className="checkoutBox">
            <BillInfo />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Checkout;
