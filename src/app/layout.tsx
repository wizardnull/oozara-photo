import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "OOZORA PHOTO",
  description:
    "滋賀を拠点に、福井・岐阜・愛知・京都まで対応する撮影サービス。家族写真、ブライダル、スクールフォト、企業撮影など幅広く対応。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="bg-white text-slate-800 antialiased">
        <div className="min-h-screen">
          <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
              <Link
                href="/"
                className="text-lg font-bold tracking-[0.2em] text-sky-600"
              >
                OOZORA PHOTO
              </Link>

              <nav className="hidden gap-6 text-sm font-medium text-slate-600 md:flex">
                <Link href="/" className="transition hover:text-sky-600">
                  HOME
                </Link>
                <Link href="/about" className="transition hover:text-sky-600">
                  ABOUT
                </Link>
                <Link href="/service" className="transition hover:text-sky-600">
                  SERVICE
                </Link>
                <Link
                  href="/portfolio"
                  className="transition hover:text-sky-600"
                >
                  PORTFOLIO
                </Link>
                <Link href="/gallery" className="transition hover:text-sky-600">
                  GALLERY
                </Link>
                <Link href="/contact" className="transition hover:text-sky-600">
                  CONTACT
                </Link>
              </nav>
            </div>
          </header>

          {children}

          <footer className="mt-20 border-t border-slate-200 bg-slate-50">
            <div className="mx-auto max-w-6xl px-6 py-10">
              <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-lg font-bold tracking-[0.2em] text-sky-600">
                    OOZORA PHOTO
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    滋賀を拠点に、福井・岐阜・愛知・京都まで対応。
                    <br />
                    家族写真、ブライダル、スクールフォト、企業撮影など
                    幅広い撮影に対応しています。
                  </p>
                </div>

                <div className="text-sm text-slate-500">
                  <p>© 2026 OOZORA PHOTO</p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}