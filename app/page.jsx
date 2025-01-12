"use client";
import { useContext, useEffect } from "react";
import { context } from "@/contexts/context";
import { Home } from "@/components/home/Home";
import Layout from "@/components/layout/Layout";
import { About } from "@/components/about/About";
import { Service } from "@/components/service/Service";
import { Portfolio } from "@/components/portfolio/Portfolio";
import { Blog } from "@/components/blog/Blog";
import { Contact } from "@/components/contact/Contact";

export default function HomePage() {
  const { animationChange } = useContext(context);

  useEffect(() => {
    animationChange(null);
  }, []);

  return (
    <Layout>
      <Home />
      <About />
      <Service />
      <Portfolio />
      <Blog />
      <Contact />
    </Layout>
  );
}
