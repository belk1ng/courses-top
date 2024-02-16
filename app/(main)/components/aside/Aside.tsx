import type { FC } from "react";

import type { AsideProps } from "./Aside.props";
import Nav from "../nav";

const Aside: FC<AsideProps> = ({ ...props }) => {
  return (
    <aside {...props}>
      Лого и поиск
      <Nav />
    </aside>
  );
};

export default Aside;
