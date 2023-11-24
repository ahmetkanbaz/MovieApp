/* eslint-disable react/prop-types */
const ModalButtons = ({ handleReset }) => {

  const resetForm = () => {
    if (window.confirm('Are you sure you want to clear the form?')) {
      console.log('The form has been cleared successfully.')
      handleReset()
    }

  }
  return (
    <div className="modal-footer">
      <button
        className="btn btn-secondary"
        onClick={handleReset}
      >
        Reset Form
      </button>
      <button className="btn btn-primary">Save changes</button>
    </div>
  );
};

export default ModalButtons;
