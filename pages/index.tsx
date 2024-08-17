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
import Projects from "@/Data/ProjectsData.json";
import Head from "next/head";
import Link from "next/link";
import Certificates from "../Data/CertificatesData.json";
import { DefaultMetaTag } from "@/components/MetaTag";
import { MouseEvent } from "react";

type HomeProps = {
  isFlowerFall: boolean;
  changeFlowerFall: Function;
};
export default function Home({ isFlowerFall, changeFlowerFall }: HomeProps) {
  const TheFlowerIcon = isFlowerFall ? FlowerIcon : OnlyFansIcon;
  const flowerTitle = isFlowerFall ? "in the spring" : "OnlyFans";

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
        <DefaultMetaTag />
        <title>Arikato111</title>
      </Head>
      <main className={`main-flex ${isFlowerFall ? "bg-transparent dark:bg-current" : ""}`}>
        {isFlowerFall && (
          <div className="absolute -z-20 w-screen h-screen bg-cover opacity-80 bg-beautiful dark:hidden"></div>
        )}
        <div className="preview flex flex-col items-center">
          <Banner isSwiching={isFlowerFall} />
          {isFlowerFall ? (
            <ThreeWord word1="Love" word2="Relationship" word3="Memories" />
          ) : (
            <ThreeWord word1="Learning" word2="Creating" word3="Development" />
          )}
          <nav className="sm:flex flex-wrap items-center justify-center">
            <a href="https://github.com/Arikato111">
              <ButtonContact
                Class="mobile-size"
                title="Github"
                Icon={GithubIcon}
              />
            </a>
            <Link href={"/certificates"}>
              <ButtonContact
                Class="mobile-size"
                title="Certificates"
                Icon={CertificateIcon}
              />
            </Link>
            <Link href={"/projects"}>
              <ButtonContact
                Class="mobile-size"
                title="Projects"
                Icon={FileIcon}
              />
            </Link>
            <a href="https://www.linkedin.com/in/nawasan/">
              <ButtonContact
                Class="mobile-size"
                title="Linkedin"
                Icon={LinkedinIcon}
              />
            </a>
            <a href="https://youtube.com/@Arikato111">
              <ButtonContact
                Class="mobile-size"
                Icon={YoutubeIcon}
                title="Youtube"
              />
            </a>
            <a
              href="https://youtu.be/lNvBbh5jDcA"
              onAuxClick={(e) => {
                e.preventDefault();
                // onSpecial();
              }}
              onContextMenu={evenClickThatButton}
              onMouseDown={(e) => e.preventDefault()}
              onClick={evenClickThatButton}
            >
              <ButtonContact
                Class="mobile-size"
                Icon={TheFlowerIcon}
                title={flowerTitle}
              />
            </a>
          </nav>
        </div>
      </main>
      {Certificates.map((cer, idx) => (
        <img width={300} height={200} key={idx} className="hidden" src={cer.img.low} alt="" />
      ))}
      {Projects.map((prj, idx) => (
        <img width={300} height={200} key={idx} className="hidden" src={prj.img} alt={prj.title} />
      ))}
    </>
  );
}
