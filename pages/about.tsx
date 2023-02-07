import Head from 'next/head';
import Certification from '@/components/About/Certification';
import Education from '@/components/About/Education';
import Info from '@/components/About/Info';
import SingleProject from '@/components/About/SingleProject';
import TeamProject from '@/components/About/TeamProject';

const About = () => {
  return (
    <>
      <Head>
        <title>Moon | About</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Info />
      <TeamProject />
      <SingleProject />
      <Education />
      <Certification />
    </>
  );
};

export default About;
