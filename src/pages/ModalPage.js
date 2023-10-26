import Modal from "../components/Modal"
import Button from "../components/Button"
import { useEffect, useState } from "react"

export default function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleModal = () => {
        setShowModal(showModal => !showModal);
    }

    useEffect(() => {
        if (showModal) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [showModal]);

    const actionable = <Button primary onClick={handleModal}>Close</Button>
    const modal = showModal && (
        <Modal onClose={handleModal} action={actionable}>
            <h1 className="text-xl font-bold">Modal</h1>
            <p className="text-gray-600">This is a modal. Click outside or in the button to close.</p>
        </Modal>
    )

    return (
        <div>
            <Button primary onClick={handleModal} >Open Modal</Button>
            {modal}
        </div>
    )
}