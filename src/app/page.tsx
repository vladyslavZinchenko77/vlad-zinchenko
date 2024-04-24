import Image from 'next/image';

import Header from '@/components/ui/Header/Header';
import Hero from '@/components/ui/Hero/Hero';
import Summary from '@/components/ui/Summary/Summary';
import Works from '@/components/ui/Works/Works';
import Skills from '@/components/ui/Skills/Skills';
import Github from '@/components/ui/Github/Github';
import Experience from '@/components/ui/Experience/Experience';
import Contacts from '@/components/ui/Contacts/Contacts';
import Footer from '@/components/ui/Footer/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Summary />
      <Works />
      <Skills />
      <Github />
      <Experience />
      <Contacts />
      <Footer />
    </main>
  );
}
