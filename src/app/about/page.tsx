import { Heading } from '@/components/Heading';

export default function Page() {
  return (
    <main className={'max-w-screen-xl mx-auto grid gap-5 px-4 text-sm'}>
      <Heading>About</Heading>
      <article className={'text-text-primary grid gap-2'}>
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
      </article>

      <article className={'grid gap-4 text-text-primary'}>
        <Heading level={3}>職歴</Heading>
        <section className={'grid gap-2'}>
          <JobHistoryHeader
            companyName={'Fringe81株式会社(現Unipos株式会社)'}
            dateRange={'2019年4月〜2021年8月'}
          />
          <p>
            大学卒業後、2019年4月に新卒入社。
            自社プロダクト「Unipos」のスマートフォンアプリ開発チームへ配属され、React
            Native/TypeScriptを用いた開発を行っていました。
          </p>
          <p>
            アプリケーションの新規機能開発に加え、リアーキテクチャの実施や、ネイティブアプリケーションであるが故にWebクライアントとの機能差分が発生し、ユーザー体験を阻害しているという課題の解決のためにOTAアップデートを行える仕組みの提案から運用方法の整備などを主導しました。
          </p>
          <p>
            その他にも、関数型プログラミングを採用したAltJSであるElmを用いたWebフロントエンドアプリケーションの開発を経験しました。
          </p>
        </section>

        <section className={'grid gap-2'}>
          <JobHistoryHeader
            companyName={'note株式会社'}
            dateRange={'2021年8月〜2023年8月'}
          />
          <p>
            2021年8月に中途入社。
            <br />
            入社後は領域を定めず横断的に短中期的なプロダクトの改善を行うカイゼンチームに配属され、横断的に様々な領域の機能改善の企画・実装・効果検証を行いました。
          </p>
          <p>
            少数メンバーでそれぞれが別の開発アイテムを持つスタイルで日々進めていたため、フロントエンド領域に関わらずRuby
            on
            Railsを用いたバックエンドAPIの実装や、専門チームと連携して、機能に関連するクラウドインフラ周りの調整・実装なども担当していました。
          </p>
          <p>
            また、メイン業務と並行して社内のフロントエンドチーム/Webアクセシビリティの向上を行う横断チームへ所属し、他職種のメンバーや社外のアドバイザーと連携しnoteのアクセシビリティ向上施策も担当していました。
          </p>
        </section>

        <section className={'grid gap-2'}>
          <JobHistoryHeader
            companyName={'株式会社KAEN'}
            dateRange={'2023年8月〜'}
          />
          <p>
            小さなチームで、自分の力でプロダクトを作り会社へ貢献するという経験をしたいと思い、当時正規メンバーが役員2名だけだった株式会社KAENへダイブ。
          </p>
          <p>
            入社以前よりあったセールスプラットフォーム「TAAAN」のシステムフルリニューアルプロジェクトに参加。技術選定や設計、実装などを一通り行っています。（現在進行形でフルリニューアルは進行中…）
          </p>
          <p>
            エンジニアとしての仕事だけではなく、既存システム利用顧客の運用サポート、社内業務効率改善のためのアプリケーション開発、会社としてのセキュリティ認証資格の取得、果てはオフィス移転の手続きなど、スタートアップなんでもやる人と化しています。
          </p>
        </section>
      </article>

      <article className={'grid gap-4 text-text-primary'}>
        <Heading level={3}>資格</Heading>
        <ul className={'list-disc list-inside'}>
          <li>情報処理安全確保支援士(登録番号: 024331)</li>
          <li>応用情報処理技術者(2021年秋期)</li>
        </ul>
      </article>
    </main>
  );
}

function JobHistoryHeader({
  companyName,
  dateRange,
}: {
  companyName: string;
  dateRange: string;
}) {
  return (
    <hgroup className={'grid gap-0.5'}>
      <h4 className={'text-base'}>{companyName}</h4>
      <p className={'text-text-secondary text-xs'}>{dateRange}</p>
    </hgroup>
  );
}
