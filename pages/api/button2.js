import React from "react";
import Head from "next/head";

const Button2 = (props) => {
  return (
    <div>
      <Head>
        <title>Button in tailwind</title>
        <meta name="desription" content="Generated by next app" />
        <link rel="icon" href="/favicon.ice" />
      </Head>

      <div className="flex justify-center items-center direction-column mt-48">
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-4 focus:ring-light-blue-100">
          + Button CTA
        </button>
      </div>
    </div>
  );
};

export default Button2;