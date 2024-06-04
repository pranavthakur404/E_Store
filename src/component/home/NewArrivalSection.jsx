import React from "react";
import Container from "../../utils/Container";

const NewArrivalSection = () => {
  return (
    <div className="w-full my-[50px]">
      <Container>
        <div className="w-full text-center">
          <p className="text-[22px] font-[500]">New Arrival</p>
        </div>
        <div className="flex flex-wrap md:flex-nowrap justify-between my-5">
          <div
            className="w-[100%] m-1 md:w-[50%]  h-[60vh] md:h-[80vh] flex justify-start  items-end p-2"
            style={{
              background: `url(${data[0].img})`,
              backgroundPosition: "center center",
              backgroundSize: "cover",
            }}
          >
            <div className="text-white">
              <p className="text-[16px]">{data[0].title}</p>
              <p className="text-[12px] text-gray-300">{data[0].description}</p>
              <button className="text-[14px] border-b border-white">
                Shop Now
              </button>
            </div>
          </div>
          <div className="w-[100%] p-1  md:w-[50%]">
            <div
              className="w-[100%] mb-1 h-[20vh] md:h-[40vh] flex justify-start items-end p-2"
              style={{
                background: `url(${data[1].img})`,
                backgroundPosition: "center center",
                backgroundSize: "cover",
              }}
            >
              <div className="text-white">
                <p className="text-[16px]">{data[1].title}</p>
                <p className="text-[12px] text-gray-300">
                  {data[1].description}
                </p>
                <button className="text-[14px] border-b border-white">
                  Shop Now
                </button>
              </div>
            </div>

            <div className="w-full gap-1  flex">
              <div
                className="w-[50%] h-[20vh] md:h-[39vh]  flex justify-start items-end p-2"
                style={{
                  background: `url(${data[2].img})`,
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                }}
              >
                <div className="text-white">
                  <p className="text-[16px]">{data[2].title}</p>
                  <p className="text-[12px] text-gray-300">
                    {data[2].description}
                  </p>
                  <button className="text-[14px] border-b border-white">
                    Shop Now
                  </button>
                </div>
              </div>
              <div
                className="w-[50%] h-[20vh] md:h-[39vh]   flex justify-start items-end p-2"
                style={{
                  background: `url(${data[3].img})`,
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                }}
              >
                <div className="text-white">
                  <p className="text-[16px]">{data[3].title}</p>
                  <p className="text-[12px] text-gray-300">
                    {data[3].description}
                  </p>
                  <button className="text-[14px] border-b border-white">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NewArrivalSection;

const data = [
  {
    id: 1,
    title: "PlayStation 5",
    description: "Black and White version of the PS5 coming out on sale.",
    img: "https://w0.peakpx.com/wallpaper/113/87/HD-wallpaper-playstation-5-awesome-black-dark-game-light-play-station-playing-ps5-xbox.jpg",
  },
  {
    id: 2,
    title: "Women's Collection",
    description: "Featured woman collections that give you another vibe.",
    img: "https://www.desktopbackground.org/download/1400x1050/2011/09/16/266828_fashion-wallpapers-collection_2560x1600_h.jpg",
  },
  {
    id: 3,
    title: "Speaker",
    description: "Amazon wireless speakers",
    img: "https://imgeng.jagran.com/images/2023/dec/Best%20Bluetooth%20Party%20Speakers%20In%20India1702996413021.jpg",
  },
  {
    id: 4,
    title: "Perfume",
    description: "Gucci Intense OUD EDP",
    img: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/0d122a140931963.624aebad5c2dc.jpg",
  },
];
