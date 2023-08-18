import Image from "next/image";
import Link from "next/link";

const LinkItem = ({ image_src }) => {
  return (
    <Link href="/">
      <Image
        src={image_src}
        alt="logo-image-link"
        width={30}
        height={30}
        className="h-8"
      />
    </Link>
  );
};

export default LinkItem;
