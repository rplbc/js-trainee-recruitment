import data from "@/assets/data";
import Heading from "@/components/heading";
import Sidebar from "@/components/sidebar";
import SidebarLink from "@/components/sidebarLink";
import SidebarMenu from "@/components/sidebarMenu";
import styles from "@/styles/index.module.scss";
import { Inter } from "next/font/google";
import Image from "next/image";
import { useState } from "react";

const inter = Inter({ weight: ["400", "500", "700"], subsets: ["latin"] });

export default function Home() {
  const [currentSection, setCurrentSection] = useState("Polar bear");

  return (
    <div className={`${inter.className} ${styles.inner} ${styles.grid}`}>
      <Sidebar sticky className={styles.sidebar}>
        <Heading as="h2" className={styles.sidebar__heading}>
          Your new gang
        </Heading>
        <SidebarMenu className={styles.nav}>
          <div className={styles.nav__links}>
            {data.map((item) => (
              <SidebarLink
                href={`#`}
                isActive={item.title === currentSection}
                onClick={(e) => {
                  e.currentTarget.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                    inline: "center",
                  });

                  setCurrentSection(item.title);
                }}
                key={item.title}
              >
                {item.title}
              </SidebarLink>
            ))}
          </div>
        </SidebarMenu>
      </Sidebar>
      <main className={styles.main}>
        {data.map((item) => (
          <article key={item.title} id={item.title} className={styles.article}>
            <Heading as="h2" variant="sub">
              {item.title}
            </Heading>
            <Heading variant="primary">{item.heading}</Heading>
            <Image src={item.img} placeholder="blur" alt={item.title} />
          </article>
        ))}
      </main>
    </div>
  );
}
