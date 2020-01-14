import Head from "next/head";
import "../pages/styles.scss";

const HeadComponent: React.FC = () => {
  return (
    <Head>
      <link
        rel="stylesheet"
        href="https://unpkg.com/purecss@1.0.1/build/pure-min.css"
        integrity="sha384-oAOxQR6DkCoMliIh8yFnu25d7Eq/PHS21PClpwjOTeU2jRSq11vu66rf90/cZr47"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Permanent+Marker&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Raleway&display=swap"
        rel="stylesheet"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  );
};

export default HeadComponent;
