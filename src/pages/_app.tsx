import React from "react";
import App from "next/app";
import Head from "next/head";

import "../styles/index.css";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>Quick Feather Icons</title>
          <meta
            name="description"
            content="Quickly copy links to Feather icons for use in Notion and other apps"
          />
        </Head>

        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
