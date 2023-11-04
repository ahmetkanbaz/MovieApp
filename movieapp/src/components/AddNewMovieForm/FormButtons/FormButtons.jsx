import Button from "../../../common/Button/Button";

const FormButtons = () => {
  return (
    <div className="d-flex gap-2 gap-md-4">
      <Button
        title="Add"
        backgroundcolor="#121212"
        borderradius="7px"
        bordercolor="none"
        textcolor="#F5F5F5"
        buttonpadding='.7rem 1.2rem'
        buttonfontsize='.93rem'
        hoverbackgroundcolor='#848484'
        hovertextcolor='#121212'
        />
      <Button title='Reset Form' />
    </div>
  );
};

export default FormButtons;
