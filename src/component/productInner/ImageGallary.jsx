import React, { useState } from "react";

const ImageGallary = () => {
  const [showingImage, setShowingImage] = useState(images[0].img);
  return (
    <div className="w-full">
      <div className="w-full">
        <img
          src={showingImage}
          className="w-full rounded-lg h-[380px]"
          alt=""
        />
      </div>
      <div className="w-full flex justify-between my-2">
        {images.map((list) => {
          return (
            <div
              key={list.id}
              className={`w-[24%]  border border-gray-200 ${
                showingImage == list.img ? "border-2 border-gray-700" : null
              }`}
            >
              <img
                src={list.img}
                className="w-[100%] h-[100px] cursor-pointer"
                alt=""
                onClick={() => {
                  setShowingImage(list.img);
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageGallary;

const images = [
  {
    id: 1,
    img: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-019-400x400.jpg",
  },
  {
    id: 2,
    img: "https://myrite.co/cdn/shop/files/GutHealthStarterpack_15_460x.jpg?v=1715076901",
  },
  {
    id: 3,
    img: "https://myrite.co/cdn/shop/files/Rite-Gummies-Balance-Fruit_460x.jpg?v=1706354271",
  },
  {
    id: 4,
    img: "https://nobero.com/cdn/shop/files/WhatsAppImage2024-01-05at10.51.50AM_8_7_1.jpg?v=1713533149&width=360",
  },
];
