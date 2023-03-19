import Head from "next/head";
import Link from "next/link";
import { FC } from "react";

const ErrorPage: FC = ()=> {
    return <>
    <Head>
        <title>not found this page</title>
    </Head>
    <main className="main-flex">
        <h3 className="text-4xl dark:text-slate-200">Page not found</h3>
        <Link className="underline text-lg dark:text-slate-200" href={'/'}>go to homepage</Link>
    </main>
    </>
}

export default ErrorPage;