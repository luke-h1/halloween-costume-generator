import axios from "axios";

const imageService = {
  getImage: async (name: string): Promise<string> => {
    const { data } = await axios.get(`/api/image?text=${name}`);
    return data.url;
  },
};
export default imageService;
