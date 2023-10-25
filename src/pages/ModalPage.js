import Modal from "../components/Modal"
import Button from "../components/Button"
import { useState } from "react"

export default function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleModal = () => {
        setShowModal(showModal => !showModal);
    }

    return (
        <div>
            <Button primary onClick={handleModal} >Open Modal</Button>
            {showModal && <Modal onClose={handleModal} />}
        </div>
    )
}