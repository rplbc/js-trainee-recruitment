import { TDataItem } from "@/assets/data";
import Heading from "@/components/heading";
import Image from "next/image";
import { forwardRef } from "react";

export default forwardRef<HTMLElement, CardProps>(function Card(
  { uglyId, title, heading, img, ...props },
  ref
) {
  return (
    <article ref={ref} id={uglyId} {...props}>
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
});

type CardOwnProps = TDataItem;

type CardRootElemProps = Omit<
  React.ComponentPropsWithoutRef<"article">,
  keyof CardOwnProps
>;

type CardProps = CardOwnProps & CardRootElemProps;
