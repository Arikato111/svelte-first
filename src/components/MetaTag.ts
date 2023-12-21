import { Metadata } from "next";

type MetaTagProps = {
  title: string;
  description: string;
  url: string;
  image: string;
};

export function MetaTag({ title, description, url, image, }: MetaTagProps): Metadata {
  return {
    keywords: "Arikato111, Nawasan, Nawasan Wisitsingkhon, portfolio, ณวสันต์, ณวสันต์ วิศิษฏ์ศิงขร",
    description,
    openGraph: {
      title,
      description,
      images: image,
      type: "website",
      url,
    },
  };
}

export function DefaultMetaTag(title: string) {
    return MetaTag({
      title,
      description: "เว็บไซต์สำหรับการแนะนำตัว ช่องทางการติดต่อ และเก็บผลงานการเขียนเว็บไซต์ต่างๆ",
      image: "/example-page.png",
      url: "https://nawasan.dev"
    })
}