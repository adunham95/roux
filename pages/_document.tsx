import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  function getHeaderElms() {
    switch (process.env.NEXT_PUBLIC_ENV) {
      case 'development':
        return (
          <>
            <link
              rel="mask-icon"
              href={`/favicon/${process.env.NEXT_PUBLIC_ENV}/safari-pinned-tab.svg`}
              color="#061A40"
            />
            <link
              rel="shortcut icon"
              href={`/favicon/${process.env.NEXT_PUBLIC_ENV}/favicon.ico`}
            />
            <meta name="apple-mobile-web-app-title" content="Kitchendry Dev" />
            <meta name="application-name" content="Kitchendry Dev" />
            <meta name="msapplication-TileColor" content="#061A40" />
            <meta
              name="msapplication-config"
              content={`/favicon/${process.env.NEXT_PUBLIC_ENV}/browserconfig.xml`}
            />
            <meta name="theme-color" content="#061A40"></meta>
          </>
        );
      case 'staging':
        <>
          <link
            rel="mask-icon"
            href={`/favicon/${process.env.NEXT_PUBLIC_ENV}/safari-pinned-tab.svg`}
            color="#061A40"
          />
          <link
            rel="shortcut icon"
            href={`/favicon/${process.env.NEXT_PUBLIC_ENV}/favicon.ico`}
          />
          <meta name="apple-mobile-web-app-title" content="Kitchendry" />
          <meta name="application-name" content="Kitchendry" />
          <meta name="msapplication-TileColor" content="#061A40" />
          <meta
            name="msapplication-config"
            content={`/favicon/${process.env.NEXT_PUBLIC_ENV}/browserconfig.xml`}
          />
          <meta name="theme-color" content="#061A40"></meta>
        </>;
      default:
        <>
          <link
            rel="mask-icon"
            href={`/favicon/${process.env.NEXT_PUBLIC_ENV}/safari-pinned-tab.svg`}
            color="#649dad"
          />
          <link
            rel="shortcut icon"
            href={`/favicon/${process.env.NEXT_PUBLIC_ENV}/favicon.ico`}
          />
          <meta name="apple-mobile-web-app-title" content="Kitchendry" />
          <meta name="application-name" content="Kitchendry" />
          <meta name="msapplication-TileColor" content="#649dad" />
          <meta
            name="msapplication-config"
            content={`/favicon/${process.env.NEXT_PUBLIC_ENV}/browserconfig.xml`}
          />
          <meta name="theme-color" content="#649dad"></meta>
        </>;
    }
  }

  return (
    <Html lang="en" className="h-full">
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`/favicon/${process.env.NEXT_PUBLIC_ENV}/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`/favicon/${process.env.NEXT_PUBLIC_ENV}/favicon-32x32.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`/favicon/${process.env.NEXT_PUBLIC_ENV}/favicon-16x16.png`}
        />
        <link
          rel="manifest"
          href={`/favicon/${process.env.NEXT_PUBLIC_ENV}/site.webmanifest`}
        />
        {getHeaderElms()}
      </Head>
      <body className="h-full">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
