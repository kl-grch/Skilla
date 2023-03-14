import "./audioPlayer.scss";
import { useState } from "react";

export default function AudioPlayer({ duration }) {
  const [play, setPlay] = useState(true);

  const handlePlay = () => {
    setPlay(!play);
  };

  const getAudioFile = () => {
    fetch(
      `https://api.skilla.ru/mango/getRecord?record='MToxMDA2NzYxNToxNDMwMDM3NzExNzow'&partnership_id=578`,
      {
        method: "POST",
        headers: {
          Authorization: "Bearer testtoken",
          "Content-Type":
            "audio/mpeg, audio/x-mpeg, audio/x-mpeg-3, audio/mpeg3",
          "Content-Transfer-Encoding": "binary",
          "Content-Disposition": "filename='record.mp3'",
        },
        body: null,
      }
    )
      .then((res) => res.blob())
      .then((blob) => {
        let file = window.URL.createObjectURL(blob);
        window.location.assign(file);
      });
  };
  return (
    <div className="audio-player">
      <div className="audio-player__time">{duration}</div>
      <div onClick={handlePlay} className="audio-player__play">
        {play ? (
          <img src="/img/icons/button-play.svg" alt="play" />
        ) : (
          <img src="/img/icons/button-pause.svg" alt="pause" />
        )}
      </div>
      <div className="audio-player__range"></div>
      <div onClick={getAudioFile} className="audio-player__download">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 20H19V18.1176H6V20ZM19 9.64706H15.2857V4H9.71429V9.64706H6L12.5 16.2353L19 9.64706Z"
            fill="#ADBFDF"
          />
        </svg>
      </div>
      <div className="audio-player__close">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_60_3331)">
            <path
              d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
              fill="#ADBFDF"
            />
          </g>
          <defs>
            <clipPath id="clip0_60_3331">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
}
