
import Link from "next/link";
import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";
import { usePathname } from "next/navigation";
import { NavLink } from "./nav-link";
const MainHeader = () => {
  //this hook give the currently active path

  return (
    <>
      <MainHeaderBackground />

      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoImg} alt="imagelogo" priority />
          🍲Next Level Food🍲
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink
                href="/meals"     
              >
                Browse Meals
              </NavLink>
            </li>
            <li>
              <NavLink
                href="/community"
                
              >
                Foodies community
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
