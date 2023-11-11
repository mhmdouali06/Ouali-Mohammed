import React from "react";

type Props = {
  blog?: any;
};
const OverView: React.FC<Props> = ({ blog }) => {
  return (
    <div className="px-3 py-3" style={{ backgroundColor: "rgb(64, 64, 64)" }}>
      <h5 className="text-center text-white secondTitle">OverView</h5>
      <p className="text-white text-center mb-0">
        {blog?.overView}
      </p>
    </div>
  );
};

export default OverView;
