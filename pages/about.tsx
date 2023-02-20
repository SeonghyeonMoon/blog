import Head from 'next/head';
import { Certification, Education, Info, SingleProject, TeamProject } from '@/components/About';
import Ability from '@/components/About/Ability';
import Intro from '@/components/About/Intro';
import useFade from '@/hooks/useFade';

const About = () => {
  useFade({ selector: 'section, th, td, h2, section > ul > li' });

  return (
    <>
      <Head>
        <title>Moon | About</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Intro />
      <Info />
      <Ability />
      <TeamProject />
      <SingleProject />
      <Education />
      <Certification />
    </>
  );
};

export default About;
