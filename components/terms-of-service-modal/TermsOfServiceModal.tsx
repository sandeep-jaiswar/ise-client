import Modal from "../modal/Modal";

interface TermsOfServiceModalProps {
    isOpen: boolean;
    onClose: ()=> void;
}

const TermsOfServiceModal =({isOpen, onClose}: TermsOfServiceModalProps)=>{
    return(
        <Modal
            isOpen={isOpen}
            onClose={onClose}
        >
        TermsOfServiceModal
        </Modal>
    )
};

export default TermsOfServiceModal;