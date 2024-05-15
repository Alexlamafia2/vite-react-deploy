import Hamburger from "./HamburgerMenu";
import NavigationLinks from "./NavigationLinks";
import NavigationLogo from "./NavigationLogo";

export default function Header() {
  return (
    <header className=" flex items-center justify-between px-10 py-3 md:py-5 bg-white bg-opacity-50 relative  z-20">
      <NavigationLogo />
      <Hamburger />
      <div className="hidden md:flex md:flex-row text-white px-10">
        <NavigationLinks />
      </div>
    </header>
  );
}
