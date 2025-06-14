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
        <li>
          <a
            href="/.auth/login/google"
            className="flex items-center hover:underline"
            title="Login with Google"
          >
            {/* Replace the SVG below with your Heroicons SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;