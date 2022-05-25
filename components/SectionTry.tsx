import React from 'react';

const emojiList = [
  'section-try__emoji-1.png',
  'section-try__emoji-2.png',
  'section-try__emoji-3.png',
  'section-try__emoji-4.png',
  'section-try__emoji-5.png',
  'section-try__emoji-6.png',
  'section-try__emoji-7.png',
  'section-try__emoji-8.png',
  'section-try__emoji-9.png',
  'section-try__emoji-10.png',
  'section-try__emoji-11.png',
  'section-try__emoji-12.png',
  'section-try__emoji-13.png',
  'section-try__emoji-14.png',
];

const colorList = ['blue', 'green', 'red', 'purple', 'yellow'];

const genLayout = () => (Math.random() > 0.5 ? 'left' : 'right');
const genLength = () => `${Math.round(Math.random() * 50 + 50)}%`;
const genEmoji = () => Math.round(Math.random() * emojiList.length);
const genColor = () => Math.round(Math.random() * (colorList.length - 1));

export const SectionTry: React.FC = () => {
  const [list, setList] = React.useState([
    { layout: 'left', fl: '75%', sl: '50%', emoji: 1, color: 0 },
    { layout: 'right', fl: '85%', sl: '25%', emoji: 2, color: 1 },
  ]);

  function handleClick(event: any) {
    setList([...list, { layout: genLayout(), fl: genLength(), sl: genLength(), emoji: event.target.id, color: genColor() }]);
  }

  return (
    <section className='section'>
      <div className='container'>
        <h2 className='h2'>
          <strong>Just try it!</strong>
        </h2>
        <div className='section-try__wrapper'>
          <div className='section-try__window-head'>
            <div className='section-try__window-buttons'>
              <div className='section-try__window-button red'></div>
              <div className='section-try__window-button yellow'></div>
              <div className='section-try__window-button green'></div>
            </div>
            <strong className='section-try__window-heading'>Click the emoji</strong>
          </div>
          <div className='section-try__chat-box-wrapper'>
            <div style={{ transform: `translateY(${-181 * (list.length - 2)}px)` }} className='section-try__chat-box'>
              {list.map((item, index) => (
                <div
                  key={`${item.color}_${index}`}
                  style={{ backgroundColor: `var(--${colorList[item.color]})` }}
                  className={`section-try__chat-bubble ${item.layout}`}>
                  <div className='section-try__chat-buble-text'>
                    <div style={{ width: item.fl }} className='section-try__chat-buble-line'></div>
                    <div style={{ width: item.sl }} className='section-try__chat-buble-line'></div>
                  </div>
                  <img src={`section-try__emoji-${item.emoji}.png`} alt='' />
                </div>
              ))}
            </div>
          </div>
          <ul className='section-try__emoji-list'>
            {emojiList.map((item, index) => (
              <li id={`${index + 1}`} key={item} className='section-try__emoji-item' onClick={(event) => handleClick(event)}>
                <img className='section-try__emoji-item-image' src={item} alt='' />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SectionTry;
