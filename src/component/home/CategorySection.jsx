import React from "react";

import Container from "../../utils/Container";

const data = [
  {
    id: 1,
    title: "Category1",
    img: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-shop-men-image-thumbnail.jpg",
  },
  {
    id: 2,
    title: "Category2",
    img: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-shop-men-image-thumbnail.jpg",
  },
  {
    id: 3,
    title: "Category3",
    img: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-shop-men-image-thumbnail.jpg",
  },
  {
    id: 4,
    title: "Category4",
    img: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-shop-men-image-thumbnail.jpg",
  },
];

const CategorySection = () => {
  return (
    <Container>
      <div className="flex justify-between flex-wrap mt-[100px] px-2">
        {data.map((list) => {
          return (
            <div
              key={list.id}
              className="w-[100%] mb-5 sm:mb-0 sm:w-[50%] md:w-[25%]  overflow-hidden relative h-[200px] flex justify-center items-center text-[#fff]"
              style={{
                backgroundImage: `url(${list.img})`,
                backgroundSize: "cover", // Optional: Adjust the background size
                backgroundPosition: "center", // Optional: Adjust the background position
                // You can add more background-related styles as needed
              }}
            >
              <h2 className="text-[25px] font-bold">{list.title}</h2>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default CategorySection;
