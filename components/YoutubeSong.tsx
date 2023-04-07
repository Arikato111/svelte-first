import { FC, useState } from "react";

const YoutubeSong: FC = () => {
  const SongList = ["UlmvjbjCLeA", "H5ohDQ-umHM"];

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
