import Link from 'next/link';
import Nav from '@/components/Nav';

const fragments = [
  '今天很累，但我还是想继续留下痕迹。',
  '我不是想复制自己，我只是怕被彻底忘记。',
  '有些话不适合发出去，但适合喂给幽灵。',
  '未来的我会不会感谢现在这一句？',
];

export default function GhostPage() {
  return (
    <main className="container cosmicPage">
      <Nav />

      <section className="ghostArchive">
        <div className="ghostArchiveCopy">
          <span className="eyebrow">GHOST ARCHIVE PROTOTYPE</span>
          <h1 className="landingTitle small">
            你的数字幽灵
            <small>正在缓慢生成</small>
          </h1>
          <p className="landingText secondary">
            每一句话都会变成一张记忆纸片，围绕光核漂浮。时间越久，它越像一个由你亲手喂大的 digital ghost。
          </p>
          <div className="actions left">
            <Link className="btn" href="/">
              回到赛博永生器首页
            </Link>
            <Link className="btn secondary" href="/quiz">
              重新测测我是什么鬼
            </Link>
          </div>
        </div>

        <div className="memoryField tall">
          <div className="moonDisc" />
          <div className="spiritCore">
            <div className="coreHalo coreHalo-1" />
            <div className="coreHalo coreHalo-2" />
            <div className="coreOrb" />
          </div>

          {fragments.map((fragment, index) => (
            <div
              key={fragment}
              className="memoryNote"
              style={
                {
                  '--note-left': ['12%', '62%', '18%', '58%'][index],
                  '--note-top': ['16%', '24%', '64%', '74%'][index],
                  '--note-rotate': ['-8deg', '7deg', '-4deg', '5deg'][index],
                  '--note-delay': `${index * 1.1}s`,
                } as React.CSSProperties
              }
            >
              {fragment}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
