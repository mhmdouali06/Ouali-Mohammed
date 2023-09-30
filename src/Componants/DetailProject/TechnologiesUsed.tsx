import React from "react";
type Props = {
  blog?: any;
};
const TechnologiesUsed: React.FC<Props> = ({ blog }) => {
  return (
    <div className="p-3 bg-dark">
      <h5 className="text-center text-white secondTitle">Technologies Used</h5>
      <p className="text-white text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        facilis adipisci excepturi corporis rem, non vel dolor molestiae,
        voluptate accusantium repudiandae molestias repellendus nesciunt
        eligendi nulla perferendis incidunt! Dignissimos, iure.
      </p>
    </div>
  );
};

export default TechnologiesUsed;
