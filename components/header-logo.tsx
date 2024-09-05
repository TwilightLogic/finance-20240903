import Image from "next/image";
import Link from "next/link";

export const HeaderLogo = () => {
  return (
    <Link href="/">
      <div className="items-center hidden lg:flex">
        <Image src="/logo.svg" alt="logo" width={28} height={28} />
        <p className="text-2xl font-semibold ml-2.5">
          <span className="text-white">F</span>
          <span className="text-blue-300">i</span>
          <span className="text-white">n</span>
          <span className="text-blue-300">a</span>
          <span className="text-white">n</span>
          <span className="text-blue-300">c</span>
          <span className="text-white">e</span>
        </p>
      </div>
    </Link>
  );
};
