import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const DescriptionAccordion = () => {
  const [expanded, setExpanded] = useState(null);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };
  return (
    <div>
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
          <Typography style={{ fontSize: "12px" }}>DESCRIPTION</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p className="text-[12px]">
              This T-shirt from snitch is for all the men who enjoy adding a
              touch of style to their everyday attire. Designed to keep you
              feeling good and comfortable, this T-shirt is made of cotton
              fabric. When you feel like styling up this T-shirt, wear it with a
              pair of classic denim shorts.
            </p>
            <p className="text-[13px] font-[500] mt-5">Product Description</p>
            <ul className="text-[12px] list-disc pl-4 mt-2">
              <li>Drop Shoulder</li>
              <li>Crew Neck</li>
              <li>Tye Dye Pattern</li>
              <li>Printed</li>
            </ul>
            <p className="text-[12px] mt-5">
              <span className="font-bold ">FABRIC:</span> 100% Cotton
            </p>
            <p className="text-[12px] mt-5">
              <span className="font-bold ">FIT:</span> Oversized Fit
            </p>
            <p className="text-[12px] mt-5">
              <span className="font-bold ">SIZE:</span> Model is wearing a size
              M
            </p>
            <p className="text-[12px] mt-5">
              <span className="font-bold ">MODEL HEIGHT:</span> 6 Feet
            </p>
            <p className="text-[12px] mt-5">
              <span className="font-bold ">WASH CARE:</span> machine wash.For
              more details see the wash care label attached
            </p>
            <p className="text-[12px] mt-5">
              <span className="font-bold ">
                Actual colour of the product may vary slightly due to
                photographic lighting sources or your device.
              </span>
            </p>
            <p className="text-[12px] mt-5">
              <span className="font-bold ">SKU:</span> 4MST2356-01
            </p>
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
          <Typography style={{ fontSize: "12px" }}>MORE INFORMATION</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p className="text-[12px] mt-5">
              <span className="font-bold ">Manufactured & Marketed by:</span>
            </p>
            <p className="text-[12px] mt-5">
              <span className="font-bold ">Snitch Apparels Pvt. Ltd.</span>{" "}
              <br /> No. 1/1, St. Johns Church Road, Bharathinagar, Bengaluru -
              560005
            </p>
            <p className="text-[12px] mt-5">
              <span className="font-bold ">Country of Origin:</span> <br />{" "}
              India
            </p>
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
          <Typography style={{ fontSize: "12px" }}>
            RETURNS & EXCHANGE INFORMATION
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ol className="list-decimal text-[12px] pl-3">
              <li>
                Hassle-free returns within 7 days; specific conditions apply
                based on products and promotions.
              </li>
              <li>
                Prepaid order refunds are processed to the original payment
                method; COD orders receive a coupon code refund.
              </li>
              <li>
                Issues with defective, incorrect, or damaged products must be
                reported within 24 hours of delivery.
              </li>
              <li>
                Items purchased during special sales with free product offers,
                like BOGO, are ineligible for returns.
              </li>
              <li>
                A reverse shipment fee of Rs 100 is charged, which will be
                deducted from the refund.
              </li>
              <li>
                For hygiene, items such as accessories, sunglasses, perfumes,
                masks, and innerwear are non-returnable.
              </li>
            </ol>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default DescriptionAccordion;
