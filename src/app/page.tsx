import Header from "@/components/Header";
import {SectionHeading} from "@/components/SectionHeading";
import PostCard from "@/components/PostCard";

export default function Home() {
  return (
    <main className={'flex flex-col gap-16 px-4 max-w-screen-xl mx-auto'}>
      <section className={'grid gap-5'}>
        <SectionHeading>Recently Posts</SectionHeading>
        <div className={'grid grid-cols-1 gap-8 md:gap-4 lg:gap-8 md:grid-cols-3'}>
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
      </section>
      <section className={'grid gap-5 text-text-primary'}>
        <SectionHeading>About</SectionHeading>
        <img src={'/icon.jpg'} alt={'アイコン画像'} className={'w-24 h-24 rounded-full border border-border-default'} />
        <div className={'[&>p:not(:last-child)]:mb-2'}>
          <p>フロントエンド中心になんでもやるWeb系エンジニアです。</p>
          <p>Unipos株式会社(旧Fringe81株式会社)→note株式会社に在籍し、2023年8月からはSaaSセールスのためのプラットフォームを開発する株式会社KAENの一人目エンジニアとしてJoin。</p>
          <p>日々の開発の中での学びなどをシェアしていきます。</p>
        </div>
      </section>
    </main>
  );
}
