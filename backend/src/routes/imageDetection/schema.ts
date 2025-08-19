import joi from "joi";
const schema = () => {
  image: JoiImageValidator().required();
};
