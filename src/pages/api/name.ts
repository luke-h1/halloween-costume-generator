import { NextApiRequest, NextApiResponse } from "next";

const nameHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const resposne = await fetch(
    "https://en.wikipedia.org/w/api.php?action=query&format=json&list=random&rnnamespace=0&rnlimit=1"
  );

  const data = await resposne.json();

  const name = data.query.random[0].title;

  res.status(200).json({
    name,
  });
};
export default nameHandler;
