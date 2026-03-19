export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      <section className="mx-auto max-w-5xl px-6 py-24">
        <p className="mb-4 text-sm tracking-[0.3em] text-sky-600">
          OOZORA PHOTO
        </p>

        <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
          やさしく、自然に、
          <br />
          その瞬間らしさを残す。
        </h1>

        <p className="max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
          滋賀を拠点に、福井・岐阜・愛知・京都まで対応。
          家族写真、ブライダル、スクールフォト、企業撮影まで、
          自然な表情と空気感を大切に撮影しています。
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="/contact"
            className="rounded-full bg-sky-600 px-6 py-3 text-white"
          >
            お問い合わせ
          </a>
          <a
            href="/portfolio"
            className="rounded-full border border-slate-300 px-6 py-3"
          >
            実績を見る
          </a>
        </div>
      </section>
    </main>
  );
}