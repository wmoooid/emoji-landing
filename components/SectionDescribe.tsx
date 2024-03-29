import React from 'react';

export const SectionDescribe: React.FC = () => {
  const [value, setValue] = React.useState('3');
  const [showPopup, setShowPopup] = React.useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  function handlePopup() {
    if (showPopup) setShowPopup(false);
  }

  return (
    <section className='section'>
      <div className='container'>
        <h2 className='h2'>
          <strong>Describe your mood</strong>
        </h2>
        <p className='body body-section'>Find emoji for every mood you need.</p>
        <div className={`section-describe__wrapper wrapper value-${value}`}>
          <div onMouseDown={handlePopup} onTouchStart={handlePopup} className='section-describe__picker'>
            <div
              style={{ transform: `translateX(${-300 * Number(value)}px)` }}
              className='section-describe__picker-image-container'>
              <img src='section-describe__picker-image-1.png' alt='' className='section-describe__picker-image' />
              <img src='section-describe__picker-image-2.png' alt='' className='section-describe__picker-image' />
              <img src='section-describe__picker-image-3.png' alt='' className='section-describe__picker-image' />
              <img src='section-describe__picker-image-4.png' alt='' className='section-describe__picker-image' />
              <img src='section-describe__picker-image-5.png' alt='' className='section-describe__picker-image' />
            </div>
            <div className='section-describe__picker-wrapper'>
              {showPopup && (
                <div className='popup__container'>
                  <small className='popup__text'>Drag me!</small>
                  <svg width='48' height='16' viewBox='0 0 48 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M38.5 16L29 0L48 1.61515e-06L38.5 16Z' fill='var(--red)' />
                  </svg>
                </div>
              )}
              <input
                value={value}
                onChange={(e) => handleChange(e)}
                className='section-describe__picker-input'
                type='range'
                name='picker'
                id='picker'
                min={0}
                max={4}
              />
              <div className='section-describe__picker-values'>
                <div className='section-describe__picker-dots'>
                  <div
                    className={value === '0' ? 'section-describe__picker-dot active' : 'section-describe__picker-dot'}></div>
                  <div
                    className={value === '1' ? 'section-describe__picker-dot active' : 'section-describe__picker-dot'}></div>
                  <div
                    className={value === '2' ? 'section-describe__picker-dot active' : 'section-describe__picker-dot'}></div>
                  <div
                    className={value === '3' ? 'section-describe__picker-dot active' : 'section-describe__picker-dot'}></div>
                  <div
                    className={value === '4' ? 'section-describe__picker-dot active' : 'section-describe__picker-dot'}></div>
                </div>
                <div className='section-describe__picker-captions'>
                  <small className='section-describe__picker-caption'>Not really</small>
                  <small className='section-describe__picker-caption'>Amazing</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionDescribe;
