import React from "react";
import { MdLayersClear } from "react-icons/md";
import { TbShoppingCartCheck } from "react-icons/tb";
import { useSelector } from "react-redux";

const BillInfo = () => {
  const cartData = useSelector((state) => {
    return state.cart;
  });

  const shippingRate = 50;

  const totalPrice = cartData.reduce((a, b) => {
    return a + b.price * b.quantity;
  }, 0);

  const grandTotal = totalPrice + shippingRate;

  return (
    <div className="sm:w-[80%]  my-0 mx-auto border border-gray-300 p-5 my-5">
      <p className="font-[500] text-[18px]">Your Order</p>

      {/* heading */}
      <div className="flex justify-between text-[13px]  my-5 border-b border-gray-300 pb-3">
        <span>Products</span>
        <span>Total</span>
      </div>

      <div className="my-5 border-b border-gray-300 pb-3">
        {cartData &&
          cartData.map((list) => {
            return (
              <div className="flex justify-between my-1">
                <p className="flex items-center">
                  <span
                    title={list.title}
                    className="truncate inline-block w-[180px] text-[13px]"
                  >
                    {list.title}
                  </span>
                  <span className="text-[13px]"> X {list.quantity}</span>
                </p>
                <span className="text-[13px]">
                  ₹ {list.price * list.quantity}
                </span>
              </div>
            );
          })}
      </div>

      <div className="my-5 border-b border-gray-300 pb-3">
        <div className="flex justify-between my-1">
          <span className="truncate inline-block w-[180px] text-[13px]">
            Subtotal
          </span>
          <span className="text-[13px] font-bold">₹ {totalPrice}</span>
        </div>
      </div>

      <div className="my-5 border-b border-gray-300 pb-3">
        <div className="flex justify-between my-1">
          <span className="truncate inline-block w-[180px] text-[13px]">
            Shipping
          </span>
          <span className="text-[13px] font-bold">
            Flat Rate : ₹{shippingRate}
          </span>
        </div>
      </div>

      <div className="my-5 border-b border-gray-300 pb-3">
        <div className="flex justify-between my-1">
          <span className="truncate inline-block w-[180px] text-[13px]">
            Grand Total
          </span>
          <span className="text-[13px] font-bold">₹{grandTotal}</span>
        </div>
      </div>

      <div className="my-5 border-b border-gray-300 pb-3">
        <div className="flex justify-between my-1">
          <span className="truncate inline-block w-[180px] text-[13px]">
            Grand Total
          </span>
          <span className="text-[13px] font-bold">₹{grandTotal}</span>
        </div>
      </div>

      <div className="my-5 border-b border-gray-300 pb-3">
        <p className="text-[13px] flex items-center gap-2">
          <input type="radio" name="modeOfDelivery" id="modeOfDelivery" />{" "}
          DIRECT BANK TRANSFER
        </p>
        <p className="text-[13px] flex items-center gap-2">
          <input type="radio" name="modeOfDelivery" id="modeOfDelivery" /> CHECK
          PAYMENTS
        </p>
        <p className="text-[13px] flex items-center gap-2">
          <input type="radio" name="modeOfDelivery" id="modeOfDelivery" /> CASH
          ON DELIVERY
        </p>
        <p className="text-[13px] flex items-center gap-2">
          <input type="radio" name="modeOfDelivery" id="modeOfDelivery" />{" "}
          PAYPAL EXPRESS CHECKOUT
        </p>
      </div>

      <div className="my-5 border-b border-gray-300 pb-3">
        <p className="text-[13px]">
          Your personal data will be used to process your order, support your
          experience throughout this website, and for other purposes described
          in our <span className="text-red-600">privacy policy</span>.
        </p>
        <p className="text-[13px] my-5 flex items-center gap-2">
          <input type="checkbox" />I have read and agree to the website terms
          and conditions *
        </p>
      </div>

      <div className="flex justify-end">
        <button className="px-5 py-2 bg-black text-white text-sm flex items-center justify-between gap-3 mt-5 sm:mt-0">
          Place Order <TbShoppingCartCheck className="text-[18px]" />
        </button>
      </div>
    </div>
  );
};

export default BillInfo;
