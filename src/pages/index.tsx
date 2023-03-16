import data from "@/assets/data";
import ActiveSectionLink from "@/components/activeSectionLink";
import Card from "@/components/card";
import Layout from "@/components/layout";
import Sidebar from "@/components/sidebar";
import styles from "@/styles/index.module.scss";
import type { InferGetStaticPropsType } from "next";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

const inter = Inter({ weight: ["400", "500", "700"], subsets: ["latin"] });

export const getStaticProps = async () => {
  const uglyIds = data.map(({ uglyId }) => uglyId);

  return {
    props: {
      uglyIds,
      data,
    },
  };
};

export default function Home({
  uglyIds,
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();
  const [currentId, setCurrentId] = useState<string | null>(null);
  const refs = useRef<Map<string, Element | null>>(new Map());

  useEffect(() => {
    function onHashChange(hash: string) {
      const id = hash.split("#")[1];
      if (uglyIds.includes(id)) {
        setCurrentId(id);
      }
    }

    router.events.on("hashChangeComplete", onHashChange);

    return () => router.events.off("hashChangeComplete", onHashChange);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const elemsVisibility = new Map<Element, boolean>();

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach((entry) => {
          elemsVisibility.set(entry.target, entry.isIntersecting);
        });

        const ids = Array.from(elemsVisibility.entries())
          .filter(([, isIntersecting]) => isIntersecting)
          .map(([{ id }]) => id);

        setCurrentId(ids[0] || null);
      },
      {
        rootMargin: "0px",
        threshold: [0, 1],
      }
    );

    Array.from(refs.current).forEach(([, elem]) => {
      if (!elem) return;

      elemsVisibility.set(elem, false);
      observer.observe(elem);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Layout className={`${inter.className}`}>
      <Sidebar sticky topTitle="Your new gang" className={styles.sidebar}>
        <nav className={styles.nav}>
          {data.map((item) => (
            <ActiveSectionLink
              key={item.uglyId}
              href={`#${item.uglyId}`}
              className={styles.nav__link}
              isActive={currentId === item.uglyId}
            >
              {item.title}
            </ActiveSectionLink>
          ))}
        </nav>
      </Sidebar>

      <main className={styles.main}>
        {data.map((item) => (
          <Card
            key={item.uglyId}
            ref={(el) => {
              refs.current.set(item.title, el);
            }}
            className={styles.article}
            {...item}
          />
        ))}
      </main>
    </Layout>
  );
}
