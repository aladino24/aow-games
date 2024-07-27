import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BroadcastMessage = ({ getBroadcastMessage, handleCopyClick, handleWhatsAppShare }) => {
  const handleCopyClickWithNotification = () => {
    handleCopyClick();
    toast.success('Broadcast message copied to clipboard!');
  };

  return (
    <div className="card mb-5">
      <div className="card-header text-center">
        <h2>Broadcast Message</h2>
      </div>
      <div className="card-body">
        <textarea
          id="broadcastMessage"
          className="form-control"
          value={getBroadcastMessage()}
          readOnly
          rows="10"
        />
        <div className="d-flex justify-content-between mt-2">
          <button className="btn btn-secondary btn-sm custom-button" onClick={handleCopyClickWithNotification}>
            <i className="fas fa-clipboard"></i>
          </button>
          <button className="btn btn-success btn-sm custom-button" onClick={handleWhatsAppShare}>
            <i className="fab fa-whatsapp"></i>
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default BroadcastMessage;
