type MetaTagInput = {
    title: string;
    description: string;
    url: string;
    image: string;

}

export default function MetaTag({ title, description, url, image }: MetaTagInput) {
    return <>
        <meta name="title" content={title} />
        <meta name="description" content={description} />

        <meta name="keywords" content="Arikato111, Nawasan, Nawasan Wisitsingkhon, portfolio, ณวสันต์, ณวสันต์ วิศิษฏ์ศิงขร, เว็บไซต์แนะนำตัว"></meta>

        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
    </>
}