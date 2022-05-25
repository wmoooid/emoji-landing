import React from 'react';
import { useInView } from 'react-intersection-observer';
import { threshold400 } from '../utils/buildThresholdList';

export const SectionExpress: React.FC = () => {
  const [ref, inView, entry] = useInView({
    threshold: threshold400,
    rootMargin: '750px 0px 0px 0px',
  });
  const threshold = entry?.intersectionRatio ? Number(entry.intersectionRatio) * 1500 - 500 : 0;

  return (
    <section className='section'>
      <div className='container'>
        <h2 className='h2'>
          emoji is cool way to <br />
          <strong>Express your feelings</strong>
        </h2>
      </div>
      <div ref={ref} className='section-express__emoji-slide-wrapper'>
        <div style={{ transform: `translateX(${-threshold}px)` }} className='section-express__emoji-slide'>
          <img src='section-express__emoji-1.png' alt='' className='section-express__emoji-image' />
          <img src='section-express__emoji-2.png' alt='' className='section-express__emoji-image' />
          <img src='section-express__emoji-3.png' alt='' className='section-express__emoji-image' />
          <img src='section-express__emoji-4.png' alt='' className='section-express__emoji-image' />
          <img src='section-express__emoji-5.png' alt='' className='section-express__emoji-image' />
          <img src='section-express__emoji-6.png' alt='' className='section-express__emoji-image' />
          <img src='section-express__emoji-7.png' alt='' className='section-express__emoji-image' />
        </div>
      </div>
      <div className='section-express__anchor' ref={ref}></div>
    </section>
  );
};

export default SectionExpress;
