/* eslint-disable react/prop-types */
import Button from "../../../common/Button/Button";

const FormButtons = ({ handleReset }) => {
  const buttonStyle = {
    textcolor: "#FFFFFF",
    buttonpadding: ".4rem 1.4rem",
    bordercolor: "none",
    buttonfontsize: ".93rem",
    borderradius: "7px",
    hovertextcolor: "#000000",
  };
  return (
    <div className="d-flex gap-2 gap-md-4">
      <Button
        title="Add"
        backgroundcolor="#18496a"
        hoverbackgroundcolor="#1680c7"
        {...buttonStyle}
      />
      <Button
        title="Reset Form"
        backgroundcolor="#da7800"
        hoverbackgroundcolor="#ff9412"
        buttonOnClick={handleReset}
        {...buttonStyle}
      />
    </div>
  );
};

export default FormButtons;
