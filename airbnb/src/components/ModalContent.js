import React from "react"
import ReactDOM from "react-dom"

const ModalContent = ({ content, modalRef, onClickAway, onClose, isOpen }) => {
  return ReactDOM.createPortal(
    <aside
      className={isOpen ? "modal fade show" : "modal fade"}
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      onClick={onClickAway}
    >
      <div className="modal-dialog" role="document" ref={modalRef}>
        <div className="modal-content">
          {React.cloneElement(content, { onClose })}
        </div>
      </div>
    </aside>,
    document.body
  )
}

export default ModalContent
