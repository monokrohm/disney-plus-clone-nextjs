import Image from "next/image";
import Link from "next/link";
import { ThemeButton } from "./ThemeButton";
import SearchInput from "./SearchInput";
import GenreDropdown from "./GenreDropdown";

function Header() {
  return (
    <header
      className="flex fixed justify-between items-center top-0 p-5 w-full z-50
    bg-gradient-to-t from-gray-200/0 via-gray-900/25 to-gray-900"
    >
      <Link href="/" className="mr-10">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Disney_wordmark.svg"
          alt="Disney Logo"
          width={120}
          height={100}
          className="cursor-pointer dark:invert"
        ></Image>
      </Link>

      <div className="flex items-center space-x-2">
        <GenreDropdown />
        <SearchInput />
        <ThemeButton />
      </div>
    </header>
  );
}

export default Header;
