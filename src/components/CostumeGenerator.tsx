"use client";

import imageService from "@frontend/services/imageService";
import nameService from "@frontend/services/nameService";
import Image from "next/image";
import { useEffect, useState } from "react";

const CostumeGenerator = () => {
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");

  const defaultNames = [
    "seductive",
    "spooky",
    "Eerie",
    "Allured",
    "Haunting",
    "Spicy"
  ] as const;

  const buildRandName = (name: string) => {
    const randName = defaultNames[Math.floor(Math.random() * defaultNames.length)];
    return `${name} ${randName}`;
  };

  useEffect(() => {
    const run = async () => {
      const nameServiceResult = await nameService.getName();
      const haloweenName = buildRandName(nameServiceResult);
      setName(haloweenName);
    };
    run();
  }, []);

  const onGenerate = async () => {
    setImage(null);
    const nameServiceResult = await nameService.getName();
    const haloweenName = buildRandName(nameServiceResult);
    setName(haloweenName);
    setLoading(true);
    const image = await imageService.getImage(haloweenName);
    setImage(image);
    setLoading(false);
  };

  console.log(image);

  return (
    <>
      <div>{name && <h1>{name}</h1>}</div>
      <div>
        {loading && <div>LOADING....</div>}
        {image && <Image src={image} alt={name} width={500} height={500} />}
      </div>
      <button onClick={onGenerate}>Generate</button>
    </>
  );
};
export default CostumeGenerator;
