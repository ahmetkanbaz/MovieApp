/* eslint-disable react/prop-types */
const ModalButtons = ({ handleSubmit }) => {
  return (
    <div className="modal-footer pb-0">
      <button className="btn btn-primary" onClick={handleSubmit} type="submit">
        Save changes
      </button>
    </div>
  );
};

export default ModalButtons;
