import "@/styles/globals.css";
import "@/styles/App.css";
import "@/public/sakura.min.css";
import Script from "next/script";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect, useState } from "react";
import YoutubeSong from "@/components/YoutubeSong";
import { checkTheme } from "@/components/CheckMode";
import ToggleMode from "@/components/ToggleMode";
import CertificateData from "../Data/CertificatesData.json";

export default function App({ Component, pageProps }: AppProps) {
  const [isFlowerFall, setIsFlowerFall] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    if (CertificateData[0].id == 0) {
      CertificateData.reverse();
    }
  }, []);

  useEffect(() => {
    checkTheme();
    setAudio(new Audio("/special.mp3"));
    setIsMobile(!!window.navigator.userAgent.match(/Mobile/));
  }, []);

  const changeFlowerFall = () => {
    setIsFlowerFall(!isFlowerFall);
    if (isMobile) {
      if (isFlowerFall) audio?.pause();
      else audio?.play();
    }
  };
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/icons/Na.svg" type="image/x-icon" />
      </Head>
      <ToggleMode />
      {isFlowerFall && !isMobile && <YoutubeSong />}
      <Component
        {...pageProps}
        isFlowerFall={isFlowerFall}
        changeFlowerFall={changeFlowerFall}
      />
      <Script src="/sakura.min.js" />
    </>
  );
}
