import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const MultipleAccordions = () => {
  const [expanded, setExpanded] = useState(null);
  const [value, setValue] = useState(50);

  const handleRange = (e) => {
    setValue(e.target.value);
  };

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "category"}
        onChange={handleChange("category")}
        elevation={0} // Remove shadow
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="category-content"
          id="category-header"
        >
          <Typography style={{ fontSize: "14px" }}>Category</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {categoryList.map((list) => {
              return (
                <label key={list.id} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="form-checkbox h-3 w-3 text-indigo-600"
                  />
                  <span className="text-gray-900 mb-2 text-[13px]">
                    {list.title}
                  </span>
                </label>
              );
            })}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "color"}
        onChange={handleChange("color")}
        elevation={0} // Remove shadow
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="color-content"
          id="color-header"
        >
          <Typography style={{ fontSize: "14px" }}>Color</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {colorList.map((list) => {
              return (
                <label key={list.id} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="form-checkbox h-3 w-3 text-indigo-600"
                  />
                  <span className="text-gray-900 mb-2 text-[13px]">
                    {list.title}
                  </span>
                </label>
              );
            })}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "size"}
        onChange={handleChange("size")}
        elevation={0} // Remove shadow
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="size-content"
          id="size-header"
        >
          <Typography style={{ fontSize: "14px" }}>Size</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {sizeList.map((list) => {
              return (
                <button
                  className="px-3 py-2 text-[12px] border m-1"
                  key={list.id}
                >
                  {list.size}
                </button>
              );
            })}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "fabric"}
        onChange={handleChange("fabric")}
        elevation={0} // Remove shadow
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="fabric-content"
          id="fabric-header"
        >
          <Typography style={{ fontSize: "14px" }}>Fabric</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {fabricList.map((list) => {
              return (
                <label key={list.id} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="form-checkbox h-3 w-3 text-indigo-600"
                  />
                  <span className="text-gray-900 mb-2 text-[13px]">
                    {list.title}
                  </span>
                </label>
              );
            })}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "price"}
        onChange={handleChange("price")}
        elevation={0} // Remove shadow
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="price-content"
          id="price-header"
        >
          <Typography style={{ fontSize: "14px" }}>Price</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <input
              id="range-slider"
              type="range"
              min="0"
              step={100}
              max="100000"
              value={value}
              onChange={handleRange}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              style={{
                accentColor: "#6366F1", // Tailwind indigo-500
              }}
            />
            <span>{`< ${value}`}</span>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "discount"}
        onChange={handleChange("discount")}
        elevation={0} // Remove shadow
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="discount-content"
          id="discount-header"
        >
          <Typography style={{ fontSize: "14px" }}>Discount</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {discountList.map((list) => {
              return (
                <label key={list.id} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="form-checkbox h-3 w-3 text-indigo-600"
                  />
                  <span className="text-gray-900 mb-2 text-[13px]">
                    {list.title}
                  </span>
                </label>
              );
            })}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default MultipleAccordions;

const categoryList = [
  {
    id: 1,
    title: "Blazers",
  },
  {
    id: 2,
    title: "Co-ords",
  },
  {
    id: 3,
    title: "Dress",
  },
  {
    id: 4,
    title: "Jackets",
  },
  {
    id: 5,
    title: "Jumpsuits",
  },
  {
    id: 6,
    title: "Livlin Pants",
  },
  {
    id: 7,
    title: "Shirts",
  },
  {
    id: 8,
    title: "Shorts",
  },
  {
    id: 9,
    title: "Skirts",
  },
  {
    id: 10,
    title: "Skorts",
  },
  {
    id: 11,
    title: "T-Shirt",
  },
  {
    id: 12,
    title: "Tops",
  },
  {
    id: 13,
    title: "Trousers",
  },
];

const colorList = [
  {
    id: 1,
    title: "Acid Green",
  },
  {
    id: 2,
    title: "Black",
  },
  {
    id: 3,
    title: "Blue",
  },
  {
    id: 4,
    title: "Blush Pink",
  },
  {
    id: 5,
    title: "Bottle Green",
  },
  {
    id: 6,
    title: "Brown",
  },
  {
    id: 7,
    title: "Coral",
  },
  {
    id: 8,
    title: "Green",
  },
  {
    id: 9,
    title: "Grey",
  },
  {
    id: 10,
    title: "Lavender",
  },
  {
    id: 11,
    title: "Lime",
  },
  {
    id: 12,
    title: "Maroon",
  },
  {
    id: 13,
    title: "Mauve",
  },
  {
    id: 14,
    title: "Multicolor",
  },
  {
    id: 15,
    title: "Orange",
  },
  {
    id: 16,
    title: "Peach",
  },
  {
    id: 17,
    title: "Pink",
  },
  {
    id: 18,
    title: "Red",
  },
  {
    id: 19,
    title: "Royal Blue",
  },
  {
    id: 20,
    title: "Violet",
  },
  {
    id: 21,
    title: "White",
  },
  {
    id: 22,
    title: "White And Green",
  },
  {
    id: 23,
    title: "Yellow",
  },
];

const fabricList = [
  {
    id: 1,
    title: "Chiffon",
  },
  {
    id: 2,
    title: "Cotton",
  },
  {
    id: 3,
    title: "Denim",
  },
  {
    id: 4,
    title: "Georgette",
  },
  {
    id: 5,
    title: "Knit",
  },
  {
    id: 6,
    title: "Linen",
  },
  {
    id: 7,
    title: "Nylon",
  },
  {
    id: 8,
    title: "Polyester",
  },
  {
    id: 9,
    title: "Rayon",
  },
  {
    id: 10,
    title: "Satin",
  },
];

const sizeList = [
  {
    id: 1,
    size: "XS (627)",
  },
  {
    id: 2,
    size: "S (627)",
  },
  {
    id: 3,
    size: "M (627)",
  },
  {
    id: 4,
    size: "L (627)",
  },
  {
    id: 5,
    size: "XL (627)",
  },
  {
    id: 6,
    size: "XXL (627)",
  },
  {
    id: 7,
    size: "3XL (627)",
  },
  {
    id: 8,
    size: "4XL (627)",
  },
  {
    id: 9,
    size: "5XL (627)",
  },
  {
    id: 10,
    size: "26 (627)",
  },
  {
    id: 11,
    size: "28 (627)",
  },
  {
    id: 12,
    size: "30 (627)",
  },
  {
    id: 13,
    size: "32 (627)",
  },
  {
    id: 14,
    size: "34 (627)",
  },
  {
    id: 15,
    size: "36 (627)",
  },
];

const discountList = [
  {
    id: 1,
    title: "10% and above",
  },
  {
    id: 2,
    title: "20% and above ",
  },
  {
    id: 3,
    title: "30% and above ",
  },
  {
    id: 4,
    title: "40% and above",
  },
  {
    id: 5,
    title: "50% and above",
  },
  {
    id: 6,
    title: "60% and above",
  },
  {
    id: 7,
    title: "Non discounted",
  },
];
