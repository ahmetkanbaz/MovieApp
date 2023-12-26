/* eslint-disable react/prop-types */
import { CustomButton } from "./ButtonStyle";

const Button = ({
  title,
  backgroundcolor,
  borderradius,
  bordercolor,
  textcolor,
  buttonpadding,
  buttonfontsize,
  hoverbackgroundcolor,
  hovertextcolor,
  buttonClassName,
  buttonOnClick,
  buttonType
}) => {
  return (
    <CustomButton
      className={`d-flex align-items-center justify-content-center gap-2 ${buttonClassName}`}
      backgroundcolor={backgroundcolor}
      borderradius={borderradius}
      bordercolor={bordercolor}
      textcolor={textcolor}
      buttonpadding={buttonpadding}
      buttonfontsize={buttonfontsize}
      hoverbackgroundcolor={hoverbackgroundcolor}
      hovertextcolor={hovertextcolor}
      onClick={buttonOnClick}
      type={buttonType}
    >
      {title}
    </CustomButton>
  );
};

export default Button;
