import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="My Crypto Cart - mycryptocart.io"
        />
        <meta
          name="keywords"
          content="agency, business, crypto"
        />

        <link rel="icon" href="/" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
