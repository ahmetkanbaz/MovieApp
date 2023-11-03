/* eslint-disable react/prop-types */

const LabelValue = ({ title, value }) => {
  return (
    <>
      <span className="fw-bold">{title}:</span>
      <span className="ms-1">{value}</span>
    </>
  );
};

export default LabelValue;
