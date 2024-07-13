import css from "./ImageGallery.module.css";
import ImageCard from "./ImageCard/ImageCard";
import { Image } from "../../types";

interface ImageGalleryProps {
  items: Image[];
  openModal: (image: Image) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ items, openModal }) => {
  return (
    <div>
      <ul className={css.gallery}>
        {items.map((item) => (
          <li key={item.id}>
            <ImageCard item={item} openModal={openModal} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
