import { SectionHeading } from '@/components/SectionHeading';

export default function Page() {
  return (
    <main className={'max-w-screen-xl mx-auto grid gap-5 px-4'}>
      <SectionHeading>About</SectionHeading>
      <section className={'text-text-primary grid gap-2'}>
        <img
          src={'/icon.jpg'}
          alt={'アイコン画像'}
          className={'w-24 h-24 rounded-full border border-border-default'}
        />
        <p>1997年2月生まれ。多趣味なフロントエンドエンジニアです。</p>
        <p>
          Fringe81株式会社(現Unipos株式会社)、note株式会社にてフロントエンドエンジニアとして従事した後、2023年8月よりSaaSセールスのためのセールスプラットフォーム「TAAAN」を運営・開発する株式会社KAENへ実質1人目エンジニアメンバーとして入社。
        </p>
        <p>
          フロントエンド領域にとどまらず、サーバーサイド、インフラ、セキュリティ認証資格の取得など何でもやる人として日々右往左往しています。
        </p>
        <p>仕事のお供はホットコーヒー、多趣味だが飽きやすいのが悩みです。</p>
      </section>
    </main>
  );
}
