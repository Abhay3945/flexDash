import React, { useContext } from "react";
import Link from "next/link";

// mui imports
import {
  ListItemIcon,
  List,
  styled,
  ListItemText,
  Chip,
  useTheme,
  Typography,
  ListItemButton,
  useMediaQuery,
  Theme,
} from "@mui/material";

import { useTranslation } from "react-i18next";

import { CustomizerContext } from "@/app/context/customizerContext";

type NavGroup = {
  [x: string]: any;
  id?: string;
  navlabel?: boolean;
  subheader?: string;
  title?: string;
  icon?: any;
  href?: any;
  children?: NavGroup[];
  chip?: string;
  chipColor?: any;
  variant?: string | any;
  external?: boolean;
  level?: number;
  onClick?: React.MouseEvent<HTMLButtonElement, MouseEvent>;
};

interface ItemType {
  item: NavGroup;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  hideMenu?: any;
  level?: number | any;
  pathDirect: string;
}

export default function NavItem({
  item,
  level,
  pathDirect,
  hideMenu,
  onClick,
}: ItemType) {
  const lgDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("lg"));

  const { isBorderRadius } = useContext(CustomizerContext);

  const Icon = item?.icon;
  const theme = useTheme();
  const { t } = useTranslation();
  const itemIcon =
    level > 1 ? (
      <Icon stroke={1.5} size="1rem" />
    ) : (
      <Icon stroke={1.5} size="1.3rem" />
    );

  const ListItemStyled = styled(ListItemButton)(() => ({
    padding: '5px 10px',
    gap: '10px',
    borderRadius: `${isBorderRadius}px`,
    marginBottom: level > 1 ? '3px' : '0px',
    color:
      level > 1 && pathDirect === item.href ? `${theme.palette.primary.main}!important` : theme.palette.text.primary,

    '&:hover': {
      backgroundColor: theme.palette.primary.light,
    },
    '&.Mui-selected': {
      color: level > 1 ? theme.palette.primary.main : 'white!important',
      backgroundColor: level > 1 ? 'transparent' : theme.palette.primary.main,
      '&:hover': {
        backgroundColor: level > 1 ? '' : theme.palette.primary.main,
        color: 'white',
      },
    },
  }));

  const listItemProps: {
    component: any;
    href?: string;
    target?: any;
    to?: any;
  } = {
    component: item?.external ? "a" : Link,
    to: item?.href,
    href: item?.external ? item?.href : "",
    target: item?.external ? "_blank" : "",
  };

  return (
    <List component="li" disablePadding key={item?.id && item.title}>
      <Link href={item.href}>
        <ListItemStyled
          // {...listItemProps}
          disabled={item?.disabled}
          selected={pathDirect === item?.href}
          onClick={lgDown ? onClick : undefined}
        >
          <ListItemIcon
            sx={{
              minWidth: 'auto',
              p: "3px 0",
              color:
                level > 1 && pathDirect === item?.href
                  ? `${theme.palette.primary.main}!important`
                  : "inherit",
            }}
          >
            {itemIcon}
          </ListItemIcon>
          <ListItemText>
            {hideMenu ? "" : <>{t(`${item?.title}`)}</>}
            <br />
            {item?.subtitle ? (
              <Typography variant="caption">
                {hideMenu ? "" : item?.subtitle}
              </Typography>
            ) : (
              ""
            )}
          </ListItemText>

          {!item?.chip || hideMenu ? null : (
            <Chip
              color={item?.chipColor}
              variant={item?.variant ? item?.variant : "filled"}
              size="small"
              label={item?.chip}
            />
          )}
        </ListItemStyled>
      </Link>
    </List>
  );
}
