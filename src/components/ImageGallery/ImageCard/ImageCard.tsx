import css from "./ImageCard.module.css";
import { Image } from "../../../types";

interface ImageCardProps {
  item: Image;
  openModal: (image: Image) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ item, openModal }) => {
  const hanldeClick = () => {
    openModal(item);
  };
  return (
    <div>
      <img
        src={item.urls.small}
        alt={item.alt_description}
        onClick={hanldeClick}
        className={css.img}
      />
    </div>
  );
};

export default ImageCard;
