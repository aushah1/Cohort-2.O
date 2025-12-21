import React from "react";
import Card from "./Card";
import Count from "./Count";

const SectionOne = () => {
  return (
    <>
      <div className="flex  items-center justify-center gap-4 w-[98%] mx-auto my-10">
        <Card
          title="INDEPENDENCE"
          desc="Explore the creativity of independent designers from around the globe"
        />
        <Card
          title="UNIQUITY"
          desc="Explore the creativity of independent designers from around the globe"
        />
        <Card
          title="QUALITY"
          desc="Explore the creativity of independent designers from around the globe"
        />
        <Card
          title="SUSTANIBLITY"
          desc="Explore the creativity of independent designers from around the globe"
        />
      </div>
      <div className="flex items-center justify-around  w-[98%] mx-auto gap-4 mb-10">
        <Count title="DESIGNERS" count="150" />
        <Count title="CLIENTS" count="500" />
        <Count title="MASTERPIECES" count="20K" />
        <Count title="EVENTS" count="50" />
      </div>
    </>
  );
};

export default SectionOne;
