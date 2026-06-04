import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="nav">
      <Link className="brand" href="/">
        <span className="brandMark" />
        <span>BUILD YOUR GHOST / 赛博永生器</span>
      </Link>
      <div className="navLinks">
        <Link href="/quiz">你是什么鬼？</Link>
        <Link href="/">首页</Link>
        <Link href="/ghost">数字幽灵</Link>
      </div>
    </nav>
  );
}
