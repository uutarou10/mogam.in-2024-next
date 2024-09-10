import Link from 'next/link';

export default function Header() {
  return (
    <header
      className={'px-6 pt-12 pb-8 text-text-primary gap-12 flex flex-col'}
    >
      <Link href={'/'}>
        <h1 className={'text-center text-2xl'}>mogam.in</h1>
      </Link>
      <ul className={'flex justify-center gap-2'}>
        <NavigationItem href={'/posts'}>Posts</NavigationItem>
        <NavigationItem href={'/about'}>About</NavigationItem>
        <NavigationItem href={'/bookmarks'}>Bookmarks</NavigationItem>
      </ul>
    </header>
  );
}

function NavigationItem({
  href,
  children,
}: {
  href: string;
  children: string;
}) {
  return (
    <li className={'block px-4 py-1'}>
      <Link href={href}>{children}</Link>
    </li>
  );
}
