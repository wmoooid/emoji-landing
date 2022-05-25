import React from 'react';
import { useInView } from 'react-intersection-observer';
import { threshold200, threshold100 } from '../utils/buildThresholdList';

export const SectionEngage: React.FC = () => {
  const [backRef, backInView, backEntry] = useInView({
    threshold: threshold200,
  });
  const backThreshold = backEntry?.intersectionRatio ? Number(backEntry.intersectionRatio) * 3.3 : 0;

  const [secondRef, secondInView, secondEntry] = useInView({
    threshold: threshold100,
  });
  const secondThreshold = secondEntry?.intersectionRatio ? Number(secondEntry.intersectionRatio) : 0;

  const [thirdRef, thirdInView, thirdEntry] = useInView({
    threshold: threshold100,
    rootMargin: '750px 0px 0px 0px',
  });
  const thirdThreshold = thirdEntry?.intersectionRatio ? Number(thirdEntry.intersectionRatio) : 0;

  return (
    <section className='section'>
      <div className='container'>
        <h2 className='h2'>
          <strong>Engage your customers</strong>
        </h2>
        <p className='body body-section'>
          It’s hard to pass through emoji pic and not to stop at it. <br /> Emoji is a famous symbol known worldwide.
        </p>
      </div>
      <div className='wrapper section-engage__wrapper'>
        <div
          ref={backRef}
          style={{
            transform: `scale3D(${0.9 + 0.1 * backThreshold}, 1, 1)`,
            backgroundColor: `rgb(${145 + Math.floor(-25 * secondThreshold) + Math.floor(110 * thirdThreshold)}, ${
              110 + Math.floor(115 * secondThreshold) + Math.floor(110 * thirdThreshold)
            }, ${250 + Math.floor(-115 * secondThreshold) + Math.floor(-175 * thirdThreshold)})`,
          }}
          className='section-engage__background'></div>
        <img src='section-engage__image-1.png' alt='' className='section-engage__image' />
        <img ref={secondRef} src='section-engage__image-2.png' alt='' className='section-engage__image' />
        <img ref={thirdRef} src='section-engage__image-3.png' alt='' className='section-engage__image' />
      </div>
    </section>
  );
};

export default SectionEngage;
