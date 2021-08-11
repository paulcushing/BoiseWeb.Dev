import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="bg-gradient-to-br from-gray-700 via-gray-900 to-black bg-fixed bg-cover">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
