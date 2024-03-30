import Image from 'next/image'
import Header from '../components/Home/Head';
import Main from '../components/Home/Main';
import Footer from '../components/Home/Footer';
import { Kalam } from 'next/font/google';
import "../css/customcss.css";
import Head from 'next/head';

const kalam = Kalam({subsets: ['latin'],
weight:["400"],
variable: '--font-kalam',});

export default function Home() {
  return (
    <><Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
 </Head>
 <div className={kalam.className}>
      <Header />
    </div>
 </>
   
  )
}
