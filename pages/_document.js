import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheets } from "@material-ui/core/styles";

var keywords =
  "siddhant,vinchurkar,tech,wild,script,wildscript,portfolio,full,stack,developer,web,android,profile,hello,world";
var description = "This is Siddhant's Portfolio";
var title = "Wildscript";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en-GB">
        <Head>
          {/* Preconnect to resource URLs */}

          <link rel="preconnect" href="https://wildscript.tech/" />
          <link rel="preconnect" href="https://google.com" crossOrigin="true" />
          <link
            rel="preconnect"
            href="https://www.googletagmanager.com"
            crossOrigin="true"
          />
          <link
            rel="preconnect"
            href="https://storage.googleapis.com"
            crossOrigin="true"
          />
          <link
            rel="preconnect"
            href="https://firebaseinstallations.googleapis.com"
            crossOrigin="true"
          />
          <link
            rel="preconnect"
            href="https://fonts.googleapis.com/"
            crossOrigin="true"
          />

          {/* Basic website information */}

          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta httpEquiv="cache-control" content="Private" />
          <meta httpEquiv="Expires" content="31536000" />
          {/*<meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />*/}
          <meta name="theme-color" content="#008000" />
          <meta name="Description" content={description} />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="keywords" content={keywords} />
          <meta name="robots" content="index, follow" />

          {/* Open Graph Protocol (OGP) information */}

          <meta property="og:type" content="website" />
          <meta property="og:site_name" content={title} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:url" content="https://wildscript.tech/" />
          <meta property="og:image" content="/images/icons/logo/og_512.jpg" />
          <meta
            property="og:image:alt"
            content="/images/icons/logo/og_512.jpg"
          />
          <meta
            property="og:image:secure_url"
            content="/images/icons/logo/og_512.jpg"
          />
          <meta property="og:image:type" content="image/jpeg" />
          <meta property="og:image:width" content="512" />
          <meta property="og:image:height" content="512" />
          <meta property="og:locale" content="en_GB" />

          {/* Load website resources */}

          <link rel="icon" href="/images/icons/logo/circle/favicon_48.png" />
          <link
            rel="shortcut icon"
            type="image/png"
            href="/images/icons/logo/circle/favicon_48.png"
          />
          <link
            rel="apple-touch-icon"
            href="/images/icons/logo/circle/favicon_192.png"
          />
          <link rel="manifest" href="/manifest.json" />
          <link
            type="text/css"
            rel="stylesheet"
            href="/styles/index.css"
            media="screen,projection"
          />
        </Head>
        <body>
          <noscript>
            Unfortunately, your browser does not support javascript. Either that
            or it's disabled. Maybe try to enable it? Privacy centric browsers
            like Tor or Brave tend to do this more often than you think. Don't
            worry. We respect your privacy and will never collect personal data
            from you without your explicit consent.
          </noscript>
          <Main />
          <script type="text/javascript" src="/scripts/index.js" defer={true} />
          <NextScript />
        </body>
      </Html>
    );
  }
}
MyDocument.getInitialProps = async (ctx) => {
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
    ],
  };
};
