import React from "react";

import Greeting from "./Greeting";
import Profile from "./Profile";
import Address from "./Address";
import OrderContainer from "./OrderContainer";
import WishListContainer from "./WishListContainer";
import CartContainer from "./CartContainer";
import RecentlyViewedContainer from "./RecentlyViewedContainer";
import ReferelContainer from "./ReferelContainer";
import ChangePasswordContainer from "./ChangePasswordContainer";

const RightContainer = ({ activeTab }) => {
  if (activeTab == "profile") {
    return (
      <div className="w-full">
        <Greeting />
        <Profile />
      </div>
    );
  } else if (activeTab == "address") {
    return (
      <div className="w-full">
        <Greeting />
        <Address />
      </div>
    );
  } else if (activeTab == "order") {
    return (
      <div className="w-full">
        <Greeting />
        <OrderContainer />
      </div>
    );
  } else if (activeTab == "wishList") {
    return (
      <div className="w-full">
        <Greeting />
        <WishListContainer />
      </div>
    );
  } else if (activeTab == "cart") {
    return (
      <div className="w-full">
        <Greeting />
        <CartContainer />
      </div>
    );
  } else if (activeTab == "recentlyViewed") {
    return (
      <div className="w-full">
        <Greeting />
        <RecentlyViewedContainer />
      </div>
    );
  } else if (activeTab == "refer") {
    return (
      <div className="w-full">
        <Greeting />
        <ReferelContainer />
      </div>
    );
  } else if (activeTab == "changePassword") {
    return (
      <div className="w-full">
        <Greeting />
        <ChangePasswordContainer />
      </div>
    );
  }
};

export default RightContainer;
