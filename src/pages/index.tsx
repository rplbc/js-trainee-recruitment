import data from "@/assets/data";
import ActiveSectionLink from "@/components/activeSectionLink";
import Heading from "@/components/heading";
import Layout from "@/components/layout";
import Sidebar from "@/components/sidebar";
import styles from "@/styles/index.module.scss";
import { Inter } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

const inter = Inter({ weight: ["400", "500", "700"], subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  const [currentId, setCurrentId] = useState<string | null>(null);
  const uglyIds = data.map(({ uglyId }) => uglyId);

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

  const observedElements = useCallback(
    function () {
      return uglyIds
        .map((id) => document.querySelector(`#${id}`))
        .filter((elem) => elem !== null);
    },
    [uglyIds]
  );

  useEffect(() => {
    const elements = observedElements();
    const elementsVisibility = new Map<Element, boolean>();

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach((entry) => {
          elementsVisibility.set(entry.target, entry.isIntersecting);
        });

        const ids = Array.from(elementsVisibility.entries())
          .filter(([_, isIntersecting]) => isIntersecting)
          .map(([{ id }]) => id);

        setCurrentId(ids[0]);
      },
      {
        rootMargin: "0px",
        threshold: [0, 1],
      }
    );

    elements.forEach((elem) => {
      if (!elem) return;

      elementsVisibility.set(elem, false);
      observer.observe(elem);
    });

    return () => observer.disconnect();
  }, [observedElements]);

  return (
    <Layout className={`${inter.className}`}>
      <Sidebar sticky topTitle="Your new gang" className={styles.sidebar}>
        <nav className={styles.nav}>
          {data.map((item) => (
            <ActiveSectionLink
              key={item.title}
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
          <article
            key={item.uglyId}
            id={item.uglyId}
            className={styles.article}
          >
            <Heading as="h2" variant="sub">
              {item.title}
            </Heading>
            <Heading variant="primary">{item.heading}</Heading>
            <Image src={item.img} alt={item.title} />
          </article>
        ))}
      </main>
    </Layout>
  );
}
