import Image from "next/image";
import Link from "next/link";
import logo from "@/app/icon.png";
import style from "./main-header-style.module.css";
import MainHeaderBackground from "./main-header-background";
const links = [
  { href: "/meals", label: "Meals" },
  { href: "/meals/share", label: "Share Meal" },
  { href: "/meals/community", label: "Community" },
];

const MainHeader = () => {
  return (
    <>
      <MainHeaderBackground />
      <header className={style.header}>
        <Link href="/" className={style.logo}>
          <Image src={logo.src} alt="logo" height={48} width={48} priority />
          {/* <img  src={logo.src} alt="logo" height={48}/> */}
          NextLevelFood
        </Link>
        <nav className={style.nav}>
          <ul>
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
