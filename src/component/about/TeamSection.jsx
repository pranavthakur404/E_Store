import React from "react";

import Container from "../../utils/Container";

const TeamSection = () => {
  return (
    <Container>
      <div className="w-full mt-[100px]">
        <div className="w-full text-center">
          <h2 className="text-[35px] font-bold text-[#262b2c]">Our Team</h2>
          <p>There are many variations of passages of Lorem Ipsum available</p>
          <div className="w-full team-section">
            {data.map((list) => {
              return (
                <div className="w-full team-box">
                  <img src={list.img} alt={list.name} className="w-full" />
                  <p className="text-[#262b2c] mt-3 font-[500]">{list.name}</p>
                  <p className="text-gray-500 text-[14px]">
                    {list.designation}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default TeamSection;

const data = [
  {
    id: 1,
    img: "https://template.hasthemes.com/shome/shome/assets/img/team/1.webp",
    name: "Jander Durham",
    designation: "TEAM MEMBER",
  },
  {
    id: 2,
    img: "https://template.hasthemes.com/shome/shome/assets/img/team/2.webp",
    name: "Jaren Hammer",
    designation: "TEAM MEMBER",
  },
  {
    id: 3,
    img: "https://template.hasthemes.com/shome/shome/assets/img/team/3.webp",
    name: "Nurdan Denkel",
    designation: "TEAM MEMBER",
  },
  {
    id: 4,
    img: "https://template.hasthemes.com/shome/shome/assets/img/team/4.webp",
    name: "Monroe Bond",
    designation: "TEAM MEMBER",
  },
];
