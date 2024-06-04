import React from "react";
import CategoryCard from "./CategoryCard";
import Container from "../../utils/Container";

const MainCategorySection = () => {
  return (
    <Container>
      <div className="w-full flex flex-wrap md:flex-nowrap justify-between gap-1 my-[50px]">
        {data.map((list) => {
          return <CategoryCard key={list.id} {...list} />;
        })}
      </div>
    </Container>
  );
};

export default MainCategorySection;

const data = [
  {
    id: 1,
    title: "SNITCH LUXE",
    img: "https://www.snitch.co.in/cdn/shop/files/4MSS2652-08-M13_1000x.jpg?v=1714461971",
  },
  {
    id: 2,
    title: "OVERSIZED SHIRT",
    img: "https://www.snitch.co.in/cdn/shop/files/4MSS2931-01-M25_1000x.jpg?v=1715069585",
  },
  {
    id: 3,
    title: "OVERSHIRT",
    img: "https://www.snitch.co.in/cdn/shop/files/4MSK8580-02-M56_1000x.jpg?v=1712042328",
  },
  {
    id: 4,
    title: "PERFUMES",
    img: "https://www.snitch.co.in/cdn/shop/files/Noir_1000x.jpg?v=1691769612",
  },
];
