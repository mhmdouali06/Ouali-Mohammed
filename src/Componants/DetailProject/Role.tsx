import React from "react";
type Props = {
  blog?: any;
};
const Role: React.FC<Props> = ({ blog }) => {
  return (
    <div className="p-3" style={{ backgroundColor: "rgb(64, 64, 64)" }}>
      <h5 className="text-center text-white secondTitle">Role</h5>
      <p className="text-white text-center">
        {blog?.role}
      </p>
    </div>
  );
};

export default Role;
