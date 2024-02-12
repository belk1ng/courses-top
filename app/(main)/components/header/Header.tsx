import type { FC } from "react";

import type { HeaderProps } from "./Header.props";

const Header: FC<HeaderProps> = ({ ...props }) => {
  return <header {...props}>Хедер</header>;
};

export default Header;
