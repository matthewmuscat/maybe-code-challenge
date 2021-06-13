import Head from "next/head"
import { InferGetStaticPropsType } from "next"
import { Tip } from "../models/tip"
import Header from "./components/Header"
import Tips from "./components/Tips"

export default function Home({ data }: InferGetStaticPropsType<typeof getServerSideProps>) {
  return (
    <div>
      <Head>
        <title>Coding challenge: Frontend - Maybe</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <main className="w-full text-center">
        <Header />
        <hr />
        <Tips tips={data} />
      </main>
    </div>
  )
}

export async function getServerSideProps() {
  const data = await fetch(`${process.env.DOMAIN_PATH}/api/tips`).then(res => res.json() as Tip[])
  return { props: { data } }
}
