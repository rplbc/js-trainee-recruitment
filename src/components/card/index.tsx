import { TDataItem } from "@/assets/data";
import Heading from "@/components/heading";
import Image from "next/image";

export default function Card({
  uglyId,
  title,
  heading,
  img,
  ...props
}: CardProps) {
  return (
    <article id={uglyId} {...props}>
      <Heading as="h2" variant="sub">
        {title}
      </Heading>
      <Heading
        variant="primary"
        dangerouslySetInnerHTML={{ __html: heading }}
      />
      <Image src={img} alt={title} />
    </article>
  );
}

type CardOwnProps = TDataItem;

type CardRootElemProps = Omit<
  React.ComponentPropsWithoutRef<"article">,
  keyof CardOwnProps
>;

type CardProps = CardOwnProps & CardRootElemProps;
