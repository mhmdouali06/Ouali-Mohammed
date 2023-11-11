import React from "react";
type Props = {
  blog?: any;
};
const Objective: React.FC<Props> = ({ blog }) => {
  return (
    <div className="p-3 bg-dark">
      <h5 className="text-center text-white secondTitle">Objective</h5>
      <p className="text-white text-center">
       {blog?.objective}
      </p>
    </div>
  );
};

export default Objective;
