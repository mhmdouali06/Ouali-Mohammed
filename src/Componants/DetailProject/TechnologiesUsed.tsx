import React from "react";
type Props = {
  blog?: any;
};
const TechnologiesUsed: React.FC<Props> = ({ blog }) => {
  return (
    <div className="p-3 bg-dark">
      <h5 className="text-center text-white secondTitle">Technologies Used</h5>
      <p className="text-white text-center">
        {blog?.technologes}
      </p>
    </div>
  );
};

export default TechnologiesUsed;
