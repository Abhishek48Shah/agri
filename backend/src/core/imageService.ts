import axios from "axios";
import FormData from "form-data";
import { API_KEY } from "../config";
import { BadRequest } from "./apiError";
const imageService = async (image) => {
  try {
    const base64Image = `data:image/jpeg;base64,${image.toString("base64")}`;
    const requestData = {
      images: [base64Image],
      similar_images: true,
    };
    const response = await axios.post(
      "https://crop.kindwise.com/api/v1/identification",
      requestData,
      {
        headers: {
          "Content-Type": "application/json",
          "Api-Key": API_KEY,
        },
      },
    );
    const data = response.data;
    const results = {
      isPlant: data.result.is_plant.binary,
      confidence: data.result.is_plant.probability,
      diseases: data.result.disease.suggestions,
      crops: data.result.crop.suggestions,
      imageUrl: data.input.images[0],
    };
    return results;
  } catch (err: any) {
    throw new BadRequest("Bad request, Please try again later");
  }
};
export default imageService;
