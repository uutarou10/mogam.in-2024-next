import Link from "next/link";

export default function Footer() {
  return <footer className={'bg-bg-brand p-6'}>
    <div className={'max-w-screen-xl mx-auto text-text-invert grid gap-3'}>
      <span className={'font-bold text-xl'}>mogam.in</span>
      <ul className={'text-xs flex flex-col gap-1'}>
        <Link href={'/posts'}>Posts</Link>
        <Link href={'/about'}>About</Link>
        <Link href={'/bookmarks'}>Bookmarks</Link>
      </ul>
      <span className={'text-[0.5rem]'}>© 2024 Kota Nonaka</span>
    </div>
  </footer>
}
