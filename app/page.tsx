import Link from 'next/link';
import Nav from '@/components/Nav';

const memoryNotes = [
  'Day 03｜今天不想变强，只想被理解一下。',
  'Day 11｜我想留下的不是答案，是版本。',
  'Day 27｜有些话不适合发朋友圈，适合喂给幽灵。',
  'Day 46｜原来被记住，也是一种活着。',
];

export default function Home() {
  return (
    <main className="container cosmicPage">
      <Nav />

      <section className="landingGrid">
        <div className="landingCopy">
          <span className="eyebrow">DIGITAL AFTERLIFE PROTOTYPE</span>
          <h1 className="landingTitle">
            Build Your Ghost
            <small>赛博永生器</small>
          </h1>
          <p className="landingText">每天一句话，创造你的数字幽灵。</p>
          <p className="landingText secondary">
            当所有人忘记你时，它仍然记得。你留下的碎片，会慢慢长成一个会发光的你。
          </p>

          <div className="actions left">
            <Link className="btn" href="/ghost">
              开始留下第一句话
            </Link>
            <Link className="btn secondary" href="/quiz">
              先测测我是什么鬼
            </Link>
          </div>

          <div className="quoteRail">
            <div className="quoteCard">
              <p className="quoteLabel">核心概念</p>
              <p className="quoteBody">AI 日记 × 数字人格档案馆 × 记忆星图。</p>
            </div>
            <div className="quoteCard">
              <p className="quoteLabel">一句话版本</p>
              <p className="quoteBody">不是记录生活，而是训练一个会记住你的幽灵。</p>
            </div>
          </div>
        </div>

        <div className="memoryField">
          <div className="moonDisc" />
          <div className="spiritCore">
            <div className="coreHalo coreHalo-1" />
            <div className="coreHalo coreHalo-2" />
            <div className="coreOrb" />
          </div>

          {memoryNotes.map((note, index) => (
            <div
              key={note}
              className="memoryNote"
              style={
                {
                  '--note-left': ['10%', '61%', '6%', '58%'][index],
                  '--note-top': ['14%', '20%', '62%', '68%'][index],
                  '--note-rotate': ['-7deg', '6deg', '-3deg', '9deg'][index],
                  '--note-delay': `${index * 0.9}s`,
                } as React.CSSProperties
              }
            >
              {note}
            </div>
          ))}

          <div className="signalBits">
            <span className="signalBit signalBit-1" />
            <span className="signalBit signalBit-2" />
            <span className="signalBit signalBit-3" />
            <span className="signalBit signalBit-4" />
          </div>
        </div>
      </section>

      <section className="featureStrip">
        <article className="featureCard">
          <p className="featureIndex">01</p>
          <h2>每天一句话</h2>
          <p>不是高压写作，也不是长文日记。只留一句，也足够让幽灵继续长大。</p>
        </article>
        <article className="featureCard">
          <p className="featureIndex">02</p>
          <h2>记忆碎片</h2>
          <p>每一句话都变成一张漂浮的纸片，围绕着光核，慢慢形成你的精神星图。</p>
        </article>
        <article className="featureCard">
          <p className="featureIndex">03</p>
          <h2>人格版本</h2>
          <p>今天的你、三十天后的你、第一百天后的你，不必是同一个鬼。</p>
        </article>
      </section>
    </main>
  );
}
