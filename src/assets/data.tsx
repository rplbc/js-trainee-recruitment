import Highlight from "@/components/highlight";
import addUglyId from "@/helpers/uglifyList";
import type { StaticImageData } from "next/image";
import { renderToStaticMarkup } from "react-dom/server";

import butterflyImg from "./butterfly.png";
import cheetahImg from "./cheetah.png";
import elephantImg from "./elephant.png";
import foxImg from "./fox.png";
import pandaImg from "./panda.png";
import polarBearImg from "./polar-bear.png";
import squirrelImg from "./squirrel.png";

export type TListItem = {
  title: string;
  heading: string;
  img: StaticImageData;
};

export const data: TListItem[] = [
  {
    title: "Polar bear",
    heading: renderToStaticMarkup(
      <>
        Say hello to your new <Highlight>friend</Highlight>
      </>
    ),
    img: polarBearImg,
  },
  {
    title: "Cheetah",
    heading: renderToStaticMarkup(
      <>
        No petting before <Highlight>eating</Highlight>
      </>
    ),
    img: cheetahImg,
  },
  {
    title: "Panda",
    heading: renderToStaticMarkup(
      <>
        Eating always with <Highlight>pleasure</Highlight>
      </>
    ),
    img: pandaImg,
  },
  {
    title: "Fox",
    heading: renderToStaticMarkup(
      <>
        Sometimes quite <Highlight>suspicious</Highlight>
      </>
    ),
    img: foxImg,
  },
  {
    title: "Squirrel",
    heading: renderToStaticMarkup(
      <>
        Staying <Highlight>curious</Highlight>
      </>
    ),
    img: squirrelImg,
  },
  {
    title: "Butterfly",
    heading: renderToStaticMarkup(
      <>
        <Highlight>Majestic</Highlight> every time of a day
      </>
    ),
    img: butterflyImg,
  },
  {
    title: "Elephant",
    heading: renderToStaticMarkup(
      <>
        It makes a <Highlight>huge</Highlight> difference
      </>
    ),
    img: elephantImg,
  },
];

export default addUglyId(data, "title", "article-");
