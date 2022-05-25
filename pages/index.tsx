import type { NextPage } from 'next';
import Head from 'next/head';
import SectionDescribe from '../components/SectionDescribe';
import SectionEngage from '../components/SectionEngage';
import SectionExpress from '../components/SectionExpress';
import SectionHero from '../components/SectionHero';
import SectionList from '../components/SectionList';
import SectionMore from '../components/SectionMore';
import SectionTry from '../components/SectionTry';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta charSet='UTF-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0, user-scalable=false' />
        <title>emoji</title>
        <link href='https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600&display=swap' rel='stylesheet' />
      </Head>
      <main>
        <SectionHero />
        <SectionExpress />
        <SectionEngage />
        <SectionDescribe />
        <SectionMore />
        <SectionTry />
      </main>
    </>
  );
};

export default Home;
