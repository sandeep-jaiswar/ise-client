import Modal from "../modal/Modal";

interface PrivacyModalProps {
    isOpen: boolean;
    onClose: ()=> void;
}

const PrivacyModal =({isOpen, onClose}: PrivacyModalProps)=>{
    return(
        <Modal
            isOpen={isOpen}
            onClose={onClose}
        >
        hellow
        </Modal>
    )
};

export default PrivacyModal;