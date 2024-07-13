import "./App.css";
import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import { fetchImage } from "./photos-api";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

interface Image {
  id: string;
  urls: {
    regular: string;
    small: string;
  };
  description: string;
  alt_description: string;
}

interface FetchImagesResponse {
  results: Image[];
  total_pages: number;
}

function App() {
  const [images, setImages] = useState<Image[]>([]);
  const [loader, setLoader] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>("");
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoader(true);
        const data: FetchImagesResponse = await fetchImage(query, page);
        console.log(data);
        setImages((prev) => [...prev, ...data.results]);

        setLoader(false);
      } catch (error) {
        setError(true);
      } finally {
        setLoader(false);
      }
    };

    if (query !== "") {
      fetchData();
    }
  }, [page, query]);

  const handleSearch = async (newQuery: string) => {
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  };

  const handleLoadMore = async () => {
    setPage(page + 1);
    setLoader(true);
  };

  function openModal(image: Image): void {
    setIsOpen(true);
    setSelectedImage(image);
  }

  function closeModal(): void {
    setIsOpen(false);
  }

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage />}
      <ImageGallery items={images} openModal={openModal} />
      {loader && <Loader />}
      {images.length > 0 && <LoadMoreBtn onClick={handleLoadMore} />}

      <ImageModal
        isOpen={modalIsOpen}
        closeModal={closeModal}
        selectedImage={selectedImage}
      />
    </div>
  );
}

export default App;
