import axios from "axios";

export type wikipediaResponse = {
  query: {
    random: {
      id: number;
      ns: number;
      title: string;
    }[];
  };
};

const nameService = {
  getName: async (): Promise<string> => {
    const { data } = await axios.get(
      `/api/name`
    );

    return data.name
  },
};
export default nameService;
