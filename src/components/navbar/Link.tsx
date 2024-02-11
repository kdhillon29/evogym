import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setIsMenuToggled?: (value: boolean) => void;

  setSelectedPage: (value: SelectedPage) => void;
};

const Link = ({
  page,
  selectedPage,
  setIsMenuToggled,
  setSelectedPage,
}: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

  return (
    <AnchorLink
      offset="100"
      className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""}
        transition duration-500 hover:text-primary-300
      `}
      href={`#${lowerCasePage}`}
      onClick={() => {
        setSelectedPage(lowerCasePage);
        setIsMenuToggled ? setIsMenuToggled(false) : "";
      }}
    >
      {page}
    </AnchorLink>
  );
};
export default Link;
