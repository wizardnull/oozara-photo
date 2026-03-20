import Link from "next/link";

const services = [
  {
    title: "Family Photo",
    text: "自然な表情や空気感を大切に、家族の今をやさしく残します。",
  },
  {
    title: "Bridal Photo",
    text: "特別な一日を、飾りすぎず美しく。思い出に残る瞬間を丁寧に撮影します。",
  },
  {
    title: "School Photo",
    text: "幼稚園から中学校までの撮影経験を活かし、安心感のある撮影を行います。",
  },
  {
    title: "Corporate Photo",
    text: "企業紹介、店舗紹介、SNS発信用など、伝わる写真づくりをサポートします。",
  },
];

export default function HomePage() {
  return (
    <main>
      <section className="bg-gradient-to-b from-sky-50 to-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold tracking-[0.3em] text-sky-600">
              OOZORA PHOTO
            </p>

            <h1 className="text-4xl font-bold leading-tight text-slate-900 md:text-6xl">
              やさしく、自然に、
              <br />
              その瞬間らしさを残す。
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 md:text-lg">
              滋賀を拠点に、福井・岐阜・愛知・京都まで対応。
              家族写真、ブライダル、スクールフォト、企業撮影まで、
              自然な表情とその場の空気感を大切に撮影しています。
              全国出張もご相談ください。
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-700"
              >
                お問い合わせ
              </Link>

              <Link
                href="/portfolio"
                className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-sky-600 hover:text-sky-600"
              >
                実績を見る
              </Link>
            </div>
          </div>

          <div>
            <div className="rounded-3xl border border-sky-100 bg-white p-8 shadow-sm">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-sky-100 p-6">
                  <p className="text-sm font-semibold text-sky-700">対応エリア</p>
                  <p className="mt-3 text-sm leading-7 text-slate-700">
                    滋賀 / 福井 / 岐阜 / 愛知 / 京都
                    <br />
                    全国対応可
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-100 p-6">
                  <p className="text-sm font-semibold text-slate-700">撮影ジャンル</p>
                  <p className="mt-3 text-sm leading-7 text-slate-700">
                    家族写真 / ブライダル
                    <br />
                    スクールフォト / 企業撮影
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-100 p-6">
                  <p className="text-sm font-semibold text-slate-700">写真配布</p>
                  <p className="mt-3 text-sm leading-7 text-slate-700">
                    イベントごとのギャラリーで
                    <br />
                    写真閲覧・配布対応予定
                  </p>
                </div>

                <div className="rounded-2xl bg-sky-100 p-6">
                  <p className="text-sm font-semibold text-sky-700">料金</p>
                  <p className="mt-3 text-sm leading-7 text-slate-700">
                    要相談
                    <br />
                    簡単な目安は今後掲載予定
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10">
          <p className="text-sm font-semibold tracking-[0.2em] text-sky-600">
            SERVICE
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            撮影したいのは、見た目だけじゃなく、その場の空気。
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-slate-900">
                {service.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                {service.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-4">
        <div className="rounded-3xl bg-slate-50 p-8 md:p-12">
          <p className="text-sm font-semibold tracking-[0.2em] text-sky-600">
            GALLERY
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            イベント写真を、見やすく、選びやすく、受け取りやすく。
          </h2>
          <p className="mt-5 max-w-3xl text-sm leading-8 text-slate-600 md:text-base">
            今後はイベントごとのギャラリー機能を整え、
            パスワード付きで写真を閲覧できる形にしていきます。
            選択した写真をまとめてダウンロードできる、
            シンプルで使いやすい仕組みを目指しています。
          </p>

          <div className="mt-8">
            <Link
              href="/gallery"
              className="rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-700"
            >
              ギャラリーを見る
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-8 rounded-3xl border border-slate-200 p-8 md:grid-cols-2 md:p-12">
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] text-sky-600">
              CONTACT
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              撮影のご相談は、お気軽にお問い合わせください。
            </h2>
            <p className="mt-5 text-sm leading-8 text-slate-600 md:text-base">
              家族写真、ブライダル、スクールフォト、企業撮影など、
              内容に応じて柔軟に対応します。
              まずはご希望の撮影内容や地域、日程をご相談ください。
            </p>
          </div>

          <div className="flex items-center md:justify-end">
            <Link
              href="/contact"
              className="rounded-full border border-sky-600 px-8 py-4 text-sm font-semibold text-sky-600 transition hover:bg-sky-600 hover:text-white"
            >
              お問い合わせページへ
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}