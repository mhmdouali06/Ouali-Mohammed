import React from "react";

type Props = {
  blog?: any;
};
const OverView: React.FC<Props> = ({ blog }) => {
  return (
    <div className="px-3 py-3" style={{ backgroundColor: "rgb(64, 64, 64)" }}>
      <h5 className="text-center text-white secondTitle">OverView</h5>
      <p className="text-white text-center mb-0">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        facilis adipisci excepturi corporis rem, non vel dolor molestiae,
        voluptate accusantium repudiandae molestias repellendus nesciunt
        eligendi nulla perferendis incidunt! Dignissimos, iure.
      </p>
    </div>
  );
};

export default OverView;
