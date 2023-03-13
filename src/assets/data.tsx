import Highlight from "@/components/highlight";
import type { StaticImageData } from "next/image";

import butterflyImg from "./butterfly.png";
import cheetahImg from "./cheetah.png";
import elephantImg from "./elephant.png";
import foxImg from "./fox.png";
import pandaImg from "./panda.png";
import polarBearImg from "./polar-bear.png";
import squirrelImg from "./squirrel.png";

export type TListItem = {
  title: string;
  heading: string | JSX.Element;
  img: StaticImageData;
};

const data: TListItem[] = [
  {
    title: "Polar bear",
    heading: (
      <>
        Say hello to your new <Highlight>friend</Highlight>
      </>
    ),
    img: polarBearImg,
  },
  {
    title: "Cheetah",
    heading: (
      <>
        No petting before <Highlight>eating</Highlight>
      </>
    ),
    img: cheetahImg,
  },
  {
    title: "Panda",
    heading: (
      <>
        Eating always with <Highlight>pleasure</Highlight>
      </>
    ),
    img: pandaImg,
  },
  {
    title: "Fox",
    heading: (
      <>
        Sometimes quite <Highlight>suspicious</Highlight>
      </>
    ),
    img: foxImg,
  },
  {
    title: "Squirrel",
    heading: (
      <>
        Staying <Highlight>curious</Highlight>
      </>
    ),
    img: squirrelImg,
  },
  {
    title: "Butterfly",
    heading: (
      <>
        <Highlight>Majestic</Highlight> every time of a day
      </>
    ),
    img: butterflyImg,
  },
  {
    title: "Elephant",
    heading: (
      <>
        It makes a <Highlight>huge</Highlight> difference
      </>
    ),
    img: elephantImg,
  },
];

export default data;
