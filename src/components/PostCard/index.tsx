export default function PostCard() {
  return (
    <article className={'rounded-lg shadow-md grid overflow-hidden gap-2'}>
      <h3
        className={
          'text-base text-text-primary px-4 line-clamp-1 text-ellipsis'
        }
      >
        記記事のタイトル記事のタイトル記事のタイトル記事のタイトル事のタイトル
      </h3>
      <img
        src={'/thumbnail.png'}
        alt={'サムネイル画像'}
        className={'row-start-1'}
      />
      <p
        className={'text-xs text-text-primary px-4 line-clamp-2 text-ellipsis'}
      >
        記事のリード文が入ります。CSSと改めてちゃんと向き合ってみるというのは結構大事かも
      </p>
      <time className={'text-xs text-text-secondary px-4 pb-2'}>
        2024.09.01
      </time>
    </article>
  );
}
