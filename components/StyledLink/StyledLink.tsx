import { HomeOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import { Colors } from "../../helpers/enums/colors";

interface LinkProps {
  href?: string;
  title: string;
  className?: string;
  icon?: ReactNode;
}

const actives = {
  color: Colors.VistaBlue,
  fontWeight: 900,
};

export function CustomLink({ href, title, icon }: LinkProps) {
  const router = useRouter();

  return (
    <Link href={href!} passHref>
      <a style={router.pathname === href ? actives : {}}>
        {icon} {title}
      </a>
    </Link>
  );
}
