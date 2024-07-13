import css from "./SearchBar.module.css";
import { Field, Formik, Form, ErrorMessage, FormikHelpers } from "formik";
import toast, { Toaster } from "react-hot-toast";

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

interface FormikValues {
  query: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const handleSubmit = (
    values: FormikValues,
    { resetForm }: FormikHelpers<FormikValues>
  ) => {
    const query = values.query;

    if (!query.trim()) {
      toast.error("Please enter a search query");
      return;
    }

    onSubmit(query);
    resetForm();
  };

  return (
    <header className={css.header}>
      <Formik initialValues={{ query: "" }} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <Field
            className={css.input}
            type="text"
            name="query"
            placeholder="Search images and photos"
          ></Field>
          <ErrorMessage name="query" component="span" />
          <Toaster position="top-center" />

          <button type="submit" className={css.button}>
            Search
          </button>
        </Form>
      </Formik>
    </header>
  );
};

export default SearchBar;
