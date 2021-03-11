import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <noscript>You need to enable JavaScript to run this app.</ noscript>
        <link href="../util/img/favicon.ico" rel="icon" />
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" /> 
        <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet" />
        <Head />
        <body>
          <Main />
          <NextScript />
            <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></script>
            {/* <script src="../util/lib/slick/slick.min.js" type="text/javascript" />
            <script src="../util/lib/isotope/isotope.pkgd.min.js" type="text/javascript" />
            <script src="../util/lib/lightbox/js/lightbox.min.js" type="text/javascript" /> */}
            <script src="../util/js/main.js" type="text/javascript" />
        </body>
      </Html>
    )
  }
}

export default MyDocument
