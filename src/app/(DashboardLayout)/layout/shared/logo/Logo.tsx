'use client'
import { useContext } from "react";

import Link from "next/link";
import { styled } from "@mui/material";
import config from '@/app/context/config'
import Image from "next/image";
import { CustomizerContext } from "@/app/context/customizerContext";

const Logo = () => {
  const { isCollapse, isSidebarHover, activeDir, activeMode } = useContext(CustomizerContext);
  const TopbarHeight = config.topbarHeight;

  const LinkStyled = styled(Link)(() => ({
    height: TopbarHeight,
    width: isCollapse == "mini-sidebar" && !isSidebarHover ? '40px' : '180px',
    overflow: "hidden",
    display: "block",
  }));

  if (activeDir === "ltr") {
    return (
      <LinkStyled href="/">
        {activeMode === "dark" ? (
          <Image
            src="/images/logos/logo-white.svg"
            alt="logo"
            height={TopbarHeight}
            width={106}
            priority
          />
        ) : (
          <Image
            src={"/images/logos/logo-dark.svg"}
            alt="logo"
            height={TopbarHeight}
            width={106}
            priority
          />
        )}
      </LinkStyled>
    );
  }

  return (
    <LinkStyled href="/">
      {activeMode === "dark" ? (
        <Image
          src="/images/logos/rtl-logo-white.svg"
          alt="logo"
          height={TopbarHeight}
          width={106}
          priority
        />
      ) : (
        <Image
          src="/images/logos/rtl-logo-dark.svg"
          alt="logo"
          height={TopbarHeight}
          width={106}
          priority
        />
      )}
    </LinkStyled>
  );
};

export default Logo;
