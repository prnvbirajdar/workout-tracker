import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

//   backup google font link
//          <link rel="preconnect" href="https://fonts.gstatic.com" />
//           <link
//             href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
//             rel="stylesheet"
//           />
