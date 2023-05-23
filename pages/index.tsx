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
import { decryptText } from "@/components/lib";

type HomeProps = {
  isFlowerFall: boolean;
  changeFlowerFall: Function;
};
export default function Home({ isFlowerFall, changeFlowerFall }: HomeProps) {
  const TheFlowerIcon = isFlowerFall ? FlowerIcon : OnlyFansIcon;
  const flowerTitle = isFlowerFall ? "in the spring" : "OnlyFans";

  const message =
    "Xibu!jg!po!uif!34se!pg!Opwfncfs!3128!J!tbx!uibu!npwjf@!Xjmm!bmm!pg!uijt!dibohf@!Xjmm!uif!qbui!J!dipptf!tujmm!uif!tbnf@!Xjmm!J!tujmm!cf!xip!J!bn@!Xjmm!uif!jnqpsubou!uijoht!tujmm!fyjtu@!Xjmm!J!tujmm!gffm!tbe!bcpvu!uibu!tpoh@!Xjmm!uibu!tupsz!tujmm!nfbo!up!nf@!Xjmm!J!tujmm!cf!bcmf!up!nffu!uibu!qfstpo!ps!opu@";

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
          <a href="https://www.linkedin.com/in/nawasan-wisitsingkhon-183680239/">
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
            href="/redirect?link=149afd631693c895f81e508eb5aaef37"
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
        </div>
        {isFlowerFall && Math.floor(Math.random() * 10) === 5 && (
          <div className="hidden lg:block fixed bottom-0 text-pink-200 w-full">
            <div className="marquee">
              <p>{decryptText(message)}</p>
            </div>
          </div>
        )}
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
