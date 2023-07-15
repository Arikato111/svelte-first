import { FC, useState } from "react";

const YoutubeSong: FC = () => {
  const SongList = [
    "dHDNHIxmBNU", // pancreas
    "iB3_NR5bYVc", // pancreas
    "5Z3kPL_UAys", // pancreas
    "5Z3kPL_UAys", // kyoubyou bunko

    "KFvVslApCPc", // Fanfare - Shunkashuto

    "4uOHQ7mO-Kk", // Last Scene - Ikimono Gakari
    "Hy9s13hWsoc", // Orange - seven oops
  ];

  const [randomNumber, setRandomNumber] = useState(
    Math.floor(Math.random() * SongList.length)
  );

  return (
    <iframe
      style={{ position: "absolute" }}
      width="0"
      height="0"
      src={`https://www.youtube.com/embed/${SongList[randomNumber]}?autoplay=1&vq=medium&loop=1&controls=0&modestbranding=0&playlist=${SongList[randomNumber]}`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    />
  );
};

export default YoutubeSong;
