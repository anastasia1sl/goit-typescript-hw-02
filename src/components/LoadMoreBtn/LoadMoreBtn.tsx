import css from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  onClick: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick }) => {
  return (
    <div className={css.container}>
      <button onClick={onClick} type="button" className={css.button}>
        Load More
      </button>
    </div>
  );
};

export default LoadMoreBtn;
