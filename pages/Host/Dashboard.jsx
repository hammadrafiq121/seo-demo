import React from "react";
import { Helmet } from "react-helmet-async";

export default function Dashboard() {
  return (
    <>
      <Helmet>
        <title>Host</title>
        <meta name="description" content="the is my host page" />
        <link rel="canonical" href="/host" />
      </Helmet>
      ;<h1>Dashboard goes here</h1>
    </>
  );
}
