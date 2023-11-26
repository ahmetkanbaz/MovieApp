/* eslint-disable react/prop-types */
const ModalButtons = ({ handleReset }) => {
  return (
    <div className="modal-footer pb-0">
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
