import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="hd_logo">
      <Link href="/">
        <a>
          <Image src="/logo.png" alt="로고" width={200} height={60} />
        </a>
      </Link>
    </div>
  );
};

export default Logo;
