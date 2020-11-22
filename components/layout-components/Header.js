import { withRouter } from "next/router";
import Head from "next/head";

const Header = ({
  router,
  keywords = "siddhant,vinchurkar,tech,wild,script,wildscript,portfolio,full,stack,developer,web,android,profile,hello,world",
  description = "This is Siddhant's Portfolio",
  title = "Wildscript",
}) => {
  return (
    <div>
      <Head>
        <link
          rel="preconnect"
          href="https://wildscript.tech/"
          crossOrigin="true"
        />
        <link rel="preconnect" href="https://google.com" crossOrigin="true" />
        <link
          rel="preconnect"
          href="https://www.googletagmanager.com"
          crossOrigin="true"
        />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta httpEquiv="cache-control" content="Private" />
        <meta httpEquiv="Expires" content="31536000" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#008000" />
        <meta name="Description" content={description} />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="keywords" content={keywords} />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={title} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content="https://wildscript.tech/" />
        <meta property="og:image" content="/images/icons/logo/og_512.jpg" />
        <meta property="og:image:alt" content="/images/icons/logo/og_512.jpg" />
        <meta
          property="og:image:secure_url"
          content="/images/icons/logo/og_512.jpg"
        />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta property="og:locale" content="en_GB" />
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
          href="/fonts/ubuntu.css"
          media="screen,projection"
        />
        <link
          type="text/css"
          rel="stylesheet"
          href="/styles/index.css"
          media="screen,projection"
        />
        <title>{title}</title>
      </Head>
    </div>
  );
};

export default withRouter(Header);
