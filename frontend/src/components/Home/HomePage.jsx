import React from "react";
import Header from "./Header";
import QuickLinks from "./QuickLinks";
import FeaturedBlog from "./FeaturedBlog";
import QuoteOfTheDay from "./QuoteOfTheDay";

const HomePage = () => {
  return (
    <main>
      <Header />

      <QuickLinks />

      <FeaturedBlog />

      <QuoteOfTheDay />
    </main>
  );
};

export default HomePage;
