import React from "react";

import Container from "../../utils/Container";

const BrandLogos = () => {
  return (
    <div className="mt-[50px] ">
      <Container>
        <div className="w-[100%] md:w-[70%] brand-logo-container my-0 mx-auto border-b border-gray-20">
          {logos.map((logo) => {
            return <img key={logo.id} src={logo.img} alt="" />;
          })}
        </div>
      </Container>
    </div>
  );
};

export default BrandLogos;

const logos = [
  {
    id: 1,
    img: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-featured-in-logo-5.svg",
  },
  {
    id: 2,
    img: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-featured-in-logo-4.svg",
  },
  {
    id: 3,
    img: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-featured-in-logo-3.svg",
  },
  {
    id: 4,
    img: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-featured-in-logo-2.svg",
  },
];
