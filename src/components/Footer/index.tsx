import Link from 'next/link';

export default function Footer() {
  return (
    <footer
      className={
        'bg-bg-brand p-6 mt-8 relative before:bg-[url(/wave.svg)] before:content=[""] before:absolute before:bottom-full before:left-0 before:w-full before:h-[31px]'
      }
    >
      <div
        className={
          'max-w-screen-xl mx-auto text-text-invert grid gap-3 bg-bg-brand'
        }
      >
        <Link href={'/'} className={'font-bold text-xl'}>
          mogam.in
        </Link>
        <ul className={'text-xs flex flex-col gap-1'}>
          <Link href={'/posts'}>Posts</Link>
          <Link href={'/about'}>About</Link>
          <Link href={'/bookmarks'}>Bookmarks</Link>
        </ul>
        <span className={'text-[0.5rem]'}>© 2024 Kota Nonaka</span>
      </div>
    </footer>
  );
}
