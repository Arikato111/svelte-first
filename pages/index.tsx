import Banner from "@/components/Banner";
import ButtonContact from "@/components/ButtonContact";
import CertificateIcon from "@/components/icons/CertificateIcon";
import FileIcon from "@/components/icons/FileIcon";
import FlowerIcon from "@/components/icons/FlowerIcon";
import GithubIcon from "@/components/icons/GithubIcon";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import OnlyFansIcon from "@/components/icons/OnlyFansIcon";
import YoutubeIcon from "@/components/icons/YoutubeIcon";
import ThreeWord from "@/components/ThreeWord";
import Head from "next/head";
import Link from "next/link";
import Certificates from "../Data/CertificatesData.json";
import Projects from "../Data/ProjectsData.json";
import MetaTag from "@/components/MetaTag";
import { MouseEvent } from "react";

type HomeProps = {
  isFlowerFall: boolean;
  changeFlowerFall: Function;
};
export default function Home({ isFlowerFall, changeFlowerFall }: HomeProps) {
  const TheFlowerIcon = isFlowerFall ? FlowerIcon : OnlyFansIcon;
  const flowerTitle = isFlowerFall ? "at spring" : "OnlyFans";

  const onSpecial = () => {
    changeFlowerFall();
    if (isFlowerFall) {
      // @ts-ignore
      let sakura = new Sakura("body");
      sakura.stop();
    } else {
      // @ts-ignore
      let sakura = new Sakura("body");
    }
  };

  const evenClickThatButton = (e: MouseEvent) => {
    e.preventDefault();
    // if (!confirm("Are ou sure?")) return;
    onSpecial();
  };

  return (
    <>
      <Head>
        <MetaTag
          title="Arikato111"
          description="เว็บไซต์สำหรับการแนะนำตัว ช่องทางการติดต่อ และเก็บผลงานการเขียนเว็บไซต์ต่างๆ"
          image="https://arikato111.vercel.app/example-page.png"
          url="https://arikato111.vercel.app"
        />
        <title>Arikato111</title>
      </Head>
      <main className={`main-flex ${isFlowerFall ? "bg-transparent" : ""}`}>
        {isFlowerFall && (
          <div className="absolute -z-20 w-screen h-screen bg-cover opacity-80 bg-beautiful dark:hidden"></div>
        )}
        <Banner isSwiching={isFlowerFall} />
        {isFlowerFall ? (
          <ThreeWord word1="Love" word2="Relationship" word3="Memories" />
        ) : (
          <ThreeWord word1="Learning" word2="Creating" word3="Development" />
        )}
        <div className="sm:flex flex-wrap items-center justify-center">
          <a href="https://github.com/Arikato111">
            <ButtonContact title="Github" Icon={GithubIcon} />
          </a>
          <Link href={"/certificates"}>
            <ButtonContact Class="mobile-size" title="Certificates" Icon={CertificateIcon} />
          </Link>
          <Link href={"/projects"}>
            <ButtonContact Class="mobile-size" title="Projects" Icon={FileIcon} />
          </Link>
          <a href="https://www.linkedin.com/in/nawasan-wisitsingkhon-183680239/">
            <ButtonContact Class="mobile-size" title="Linkedin" Icon={LinkedinIcon} />
          </a>
          <a href="https://youtube.com/@Arikato111">
            <ButtonContact Class="mobile-size" Icon={YoutubeIcon} title="Youtube" />
          </a>
          <a
            href="/redirect?link=149afd631693c895f81e508eb5aaef37"
            onAuxClick={(e) => {
              e.preventDefault();
              // onSpecial();
            }}
            onContextMenu={evenClickThatButton}
            onMouseDown={(e)=> e.preventDefault()}
            onClick={evenClickThatButton}
          >
            <ButtonContact Class="mobile-size" Icon={TheFlowerIcon} title={flowerTitle} />
          </a>
        </div>
      </main>
      {Certificates.map((cer, idx) => (
        <img key={idx} className="hidden" src={"/cer/low/" + cer.img} alt="" />
      ))}
      {Projects.map((pj, idx) => (
        <img key={idx} className="hidden" src={pj.img} alt="" />
      ))}
    </>
  );
}
