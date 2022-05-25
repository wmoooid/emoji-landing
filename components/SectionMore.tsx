import React from 'react';
import { useInView } from 'react-intersection-observer';
import { threshold200 } from '../utils/buildThresholdList';

export const SectionMore: React.FC = () => {
  const [ref, inView, entry] = useInView({
    threshold: threshold200,
    rootMargin: '750px 0px 0px 0px',
  });
  const threshold = entry?.intersectionRatio ? Number(entry.intersectionRatio) * 125 : 0;
  return (
    <section className='section'>
      <div className='container'>
        <p className='body body-section'>As well as:</p>
        <div className='section-more__content-wrapper'>
          <div style={{ transform: `translateX(${-35 - threshold}px)` }} className='section-more__content-item'>
            <img className='section-more__content-image' src='section-more__content-image-1.png' alt='' />
            <h3 className='section-more__content-text'>
              Activities<span className='hide'> and games</span>
            </h3>
          </div>
          <div style={{ transform: `translateX(${150 + threshold}px)` }} className='section-more__content-item'>
            <img className='section-more__content-image' src='section-more__content-image-2.png' alt='' />
            <h3 className='section-more__content-text'>
              Animals<span className='hide'> and plants</span>
            </h3>
          </div>
          <div style={{ transform: `translateX(${-25 - threshold}px)` }} className='section-more__content-item'>
            <img className='section-more__content-image' src='section-more__content-image-3.png' alt='' />
            <h3 className='section-more__content-text'>
              Food<span className='hide'> and drinks</span>
            </h3>
          </div>
          <div style={{ transform: `translateX(${100 + threshold}px)` }} className='section-more__content-item'>
            <img className='section-more__content-image' src='section-more__content-image-4.png' alt='' />
            <h3 className='section-more__content-text'>
              Travel<span className='hide'> and places</span>
            </h3>
          </div>
          <div className='section-more__anchor' ref={ref}></div>
        </div>
      </div>
    </section>
  );
};

export default SectionMore;
