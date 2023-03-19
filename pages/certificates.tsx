import Link from "next/link";
import ButtonContact from "@/components/ButtonContact";
import ArrowIcon from "@/components/icons/ArrowIcon";
import CertificateData from "../Data/CertificatesData.json";
import CertificateShow from "@/components/CertificateShow";
import { useEffect } from "react";
import Head from "next/head";
import MetaTag from "@/components/MetaTag";

export default function Certificates() {
  useEffect(() => {
    if (CertificateData[0].id == 0) {
      CertificateData.reverse();
    }
  }, []);
  return (
    <>
      <Head>
        <MetaTag
          title="Arikato111"
          description="เว็บไซต์สำหรับการแนะนำตัว ช่องทางการติดต่อ และเก็บผลงานการเขียนเว็บไซต์ต่างๆ"
          image="https://arikato111.vercel.app/example-page.png"
          url="https://arikato111.vercel.app"
        />
        <title>Certificates | Arikato111</title>
      </Head>
      <main className="main">
        <div className="inline-block">
          <Link href="/">
            <ButtonContact Icon={ArrowIcon} title="back" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 text-center">
          {CertificateData.map((Cer) => (
            <>
              <img className="hidden" src={"/cer/" + Cer.img} alt="" />
              <Link href={`/certificates/${Cer.id}`}>
                <CertificateShow
                  src={"/cer/low/" + Cer.img}
                  alt={Cer.title}
                  type={Cer.type}
                />
              </Link>
            </>
          ))}
        </div>
      </main>
    </>
  );
}
