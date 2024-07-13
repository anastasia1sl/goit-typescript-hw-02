export interface Image {
  id: string;
  urls: {
    regular: string;
    small: string;
  };
  description: string;
  alt_description: string;
}
