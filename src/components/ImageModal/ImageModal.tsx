import ReactModal from "react-modal";
import Modal from "react-modal";
import { Image } from "../../types";

Modal.setAppElement("body");

type ImageModalProps = {
  selectedImage: Image | null;
  isOpen: boolean;
  closeModal: () => void;
};

const ImageModal: React.FC<ImageModalProps> = ({
  selectedImage,
  isOpen,
  closeModal,
}) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <div>
      <ReactModal
        isOpen={isOpen}
        onRequestClose={closeModal}
        shouldCloseOnEsc={true}
        style={customStyles}
      >
        <div>
          {selectedImage?.urls?.regular && (
            <img src={selectedImage.urls.regular} alt="Selected" />
          )}
        </div>
      </ReactModal>
    </div>
  );
};

export default ImageModal;
