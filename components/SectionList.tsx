import React from 'react';
import { useInView } from 'react-intersection-observer';

export const SectionList: React.FC = () => {
  const [ref, inView, entry] = useInView();

  return (
    <section className='section'>
      <div className='container'>
        {Array(100)
          .fill(1)
          .map((el, i) => (
            <img key={i} src={`section-list/image${i}.png`} alt='' />
          ))}
      </div>
    </section>
  );
};

export default SectionList;
