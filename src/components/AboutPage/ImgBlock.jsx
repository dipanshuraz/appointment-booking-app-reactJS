import React from "react";

const ImgBlock = props => {
  const { img } = props;
  return (
    <div className="col-md-6 col-sm-12 col-lg-6 p-5">
      <img src={img} className="img-fluid p-5" alt="" />
    </div>
  );
};

export default ImgBlock;
