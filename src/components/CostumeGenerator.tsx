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
    "spooky",
    "aroused",
    "Eerie",
    "Allured",
    "Haunting",
    "Spicy"
  ] as const;

  const buildRandName = (name: string) => {
    return `${
      defaultNames[Math.floor(Math.random() * defaultNames.length)]
    } ${name}`;
  };

  useEffect(() => {
    const run = async () => {
      const name = await nameService.getName();
      console.log("name is", name);
      console.log("setting name to", buildRandName(name));
      setName(buildRandName(name));
    };
    run();
  }, []);

  const onGenerate = async () => {
    setImage(null);
    const name = await nameService.getName();
    const haloweenName = buildRandName(name);
    console.log("setting name to", haloweenName);
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
