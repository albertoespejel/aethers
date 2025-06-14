import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const menuItems = ["AI","Tech", "Music", "Art"]; // Add new pages here

  return (
    <nav className="flex items-center justify-between px-0 py-0 text-[var(--foreground)] fixed top-0 left-0 w-full z-50" style={{backgroundColor: "#0a0a0a", fontFamily: "var(--font-geist-mono)",}}>
      {/* Logo Section */}
      <div className="flex items-center gap-x-0">
        <Image
          src="/images/logo.png"
          alt="SPN Icon"
          width={70}
          height={70}
          className="rounded-full sm:width-[100px] sm:height-[100px]"
        />
        <Image
          src="/images/textwhite.png"
          alt="Aethers Media"
          width={210}
          height={50}
          className="hidden sm:block"
        />
      </div>

      {/* Menu Section */}
      <ul className="flex gap-x-8 sm:gap-x-20 pr-6 text-sm">
        {menuItems.map((item) => (
          <li key={item}>
            <Link href={`/${item.toLowerCase()}`} className="hover:underline">
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;