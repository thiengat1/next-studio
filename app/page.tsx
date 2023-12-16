import Image from 'next/image';
import Header from './components/Header/page';
import About from './components/About/page';
import Business from './components/Business/page';
import OurClient from './components/OurClient/page';
import Products from './components/Products/page';
import Review from './components/Review/page';
import Subscribe from './components/Subscribe/page';
import Footer from './components/Footer/page';

export default function Home() {
  return (
    <main className='px-24 py-6'>
      <Header />
      <About />
      <OurClient />
      <Business />
      <Products />
      <Review />
      <Subscribe />
      <div className='mt-[100px] divide-y divide-dashed w-full h-0.5 bg-slate-400 opacity-50' />
      <Footer />
    </main>
  );
}
