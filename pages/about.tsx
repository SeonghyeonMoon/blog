import Head from 'next/head';
import { Certification, Education, Info, SingleProject, TeamProject } from '@/components/About';

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
