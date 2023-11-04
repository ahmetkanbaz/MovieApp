/* eslint-disable react/prop-types */
import Button from "../../../common/Button/Button";
import Toast from "../../../common/Toast/Toast";

const FormButtons = ({ handleReset }) => {
  const buttonStyle = {
    textcolor: "#FFFFFF",
    buttonpadding: ".4rem 1.4rem",
    bordercolor: "none",
    buttonfontsize: ".93rem",
    borderradius: "7px",
    hovertextcolor: "#000000",
  };

  const handleResetForm = () => {
    // Toast({
    //   message: "Form başarılı bir şekilde temizlendi.",
    //   type: "success",
    // });
    console.log('first')
    handleReset();
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
        buttonOnClick={() => {
          Toast({
            message: "Form Başarılı Bir Şekilde Temizlendi.",
            type: "success",
          });
          handleReset();
        }}
        {...buttonStyle}
      />
    </div>
  );
};

export default FormButtons;
