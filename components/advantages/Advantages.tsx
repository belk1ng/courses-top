import Image from "next/image";
import type { FC } from "react";

import Heading from "@/components/heading";
import Typography from "@/components/typography";

import classes from "./Advantages.module.css";
import type { AdvantagesProps } from "./Advantages.props";

const Advantages: FC<AdvantagesProps> = ({ values }) => {
  return (
    <section className={classes.advantages}>
      <header>
        <Heading as="h2">Преимущества</Heading>
      </header>
      <ul className={classes.advantages__list}>
        {values.map((advantage) => (
          <li className={classes.advantages__item} key={advantage._id}>
            <Image
              alt=""
              className={classes.advantages__img}
              height={50}
              src="/advantage.svg"
              width={50}
            />
            <Heading as="h3">{advantage.title}</Heading>
            {advantage.description && (
              <>
                <div className={classes.advantages__divider} />
                <Typography className={classes.advantages__description}>
                  {advantage.description}
                </Typography>
              </>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Advantages;
