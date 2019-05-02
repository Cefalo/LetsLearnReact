import React from "react"
import Modal from "./Modal"
import LoginForm from "./LoginForm"

const LoginModal = ({ open, show, hide }) => {
  return (
    <Modal isOpen={open} onOpen={show} onClose={hide}>
      <LoginForm />
    </Modal>
  )
}

export default LoginModal
