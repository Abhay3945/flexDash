import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import { Grid2 as Grid } from '@mui/material'
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
// images
import mainDemo from "/public/images/landingpage/demo-main.jpg";
import darkDemo from "/public/images/landingpage/demo-dark.jpg";
import horizontalDemo from "/public/images/landingpage/demo-horizontal.jpg";
import rtlDemo from "/public/images/landingpage/demo-rtl.jpg";
import minidemo from '/public/images/landingpage/demo-minisidebar.jpg'
import nextauth from '/public/images/landingpage/demo-firebase.jpg'


import app1 from "/public/images/landingpage/app-calendar.jpg";
import app2 from "/public/images/landingpage/app-chat.jpg";
import app3 from "/public/images/landingpage/app-contact.jpg";
import app4 from "/public/images/landingpage/app-email.jpg";
import app5 from "/public/images/landingpage/app-notes.jpg";
import app6 from "/public/images/landingpage/app-userprofile.jpg";
import app7 from "/public/images/landingpage/app-blog.jpg";
import app9 from '/public/images/landingpage/app-ecomproducts.jpg';
import app10 from '/public/images/landingpage/app-ecomproduct-details.jpg';
import app13 from '/public/images/landingpage/app-blogdetail.jpg';
import app14 from '/public/images/landingpage/app-kanban.jpg';
import app15 from '/public/images/landingpage/app-invoice.jpg';

import Page1 from "/public/images/landingpage/front-homepage.jpg";
import Page2 from "/public/images/landingpage/front-aboutus.jpg";
import Page3 from "/public/images/landingpage/front-portfolio.jpg";
import Page4 from "/public/images/landingpage/front-pricing.jpg";

import DemoTitle from "./DemoTitle";
import Image from "next/image";
import React from "react";

interface sliderData {
  avatar: string | any;
  link: string;
  demo: string;
  applink?: boolean;
}

interface DemoTypes {
  link: string;
  img: string | any;
  title: string;
  hot?: boolean;
}

const demos: DemoTypes[] = [
  {
    link: "https://flexy-next-js-dashboard.vercel.app/",
    img: mainDemo,
    title: "Main",
  },
  {
    link: "https://flexy-nextjs-dark.vercel.app/",
    img: darkDemo,
    title: "Dark",
  },
  {
    link: "https://flexy-nextjs-horizontal.vercel.app/",
    img: horizontalDemo,
    title: "Horizontal",
  },
  {
    link: "https://flexy-nextjs-rtl.vercel.app/",
    img: rtlDemo,
    title: "RTL",
  },
  {
    link: "https://flexy-nextjs-minisidebar.vercel.app/",
    img: minidemo,
    title: "Minisidebar",
  },
  {
    link: "https://flexy-nextjs-nextauth.vercel.app/auth/auth1/login",
    img: nextauth,
    title: "NextAuth",
  },
];

const pages: DemoTypes[] = [
  {
    link: "https://flexy-next-js-dashboard.vercel.app/frontend-pages/homepage",
    img: Page1,
    title: "Homepage",
  },
  {
    link: "https://flexy-next-js-dashboard.vercel.app/frontend-pages/about",
    img: Page2,
    title: "About us",
  },
  {
    link: "https://flexy-next-js-dashboard.vercel.app/frontend-pages/portfolio",
    img: Page3,
    title: "Portfolio",
  },
  {
    link: "https://flexy-next-js-dashboard.vercel.app/frontend-pages/pricing",
    img: Page4,
    title: "Pricing",
  },
];

const apps: DemoTypes[] = [
  {
    link: 'apps/kanban',
    img: app14,
    title: 'Kanban App',
  },
  {
    link: 'apps/invoice/list',
    img: app15,
    title: 'Invoice App',
  },
  {
    link: '/apps/calendar',
    img: app1,
    title: 'Calendar App',
  },
  {
    link: '/apps/chats',
    img: app2,
    title: 'Chat App',
  },
  {
    link: 'apps/contacts',
    img: app3,
    title: 'Contact App',
  },
  {
    link: 'apps/email',
    img: app4,
    title: 'Email App',
  },
  {
    link: '/apps/notes',
    img: app5,
    title: 'Note App',
  },
  {
    link: '/apps/user-profile',
    img: app6,
    title: 'User Profile App',
  },
  {
    link: '/frontend-pages/blog',
    img: app7,
    title: 'Blog App',
  },
  {
    link: '/frontend-pages/blog/detail/streaming-video-way-before-it-was-cool-go-dark-tomorrow',
    img: app13,
    title: 'Blog Detail App',
  },
  // {
  //   link: '/apps/tickets',
  //   img: app8,
  //   title: 'Ticket App',
  // },
  {
    link: '/apps/ecommerce/shop',
    img: app9,
    title: 'eCommerce Shop App',
  },
  {
    link: '/apps/ecommerce/detail/1',
    img: app10,
    title: 'eCommerce Detail App',
  },
];

const StyledBox = styled(Box)((theme) => ({
  overflow: "auto",
  position: "relative",

  ".MuiButton-root": {
    display: "none",
  },
  "&:hover": {
    ".MuiButton-root": {
      display: "block",
      transform: "translate(-50%,-50%)",
      position: "absolute",
      left: "50%",
      right: "50%",
      top: "50%",
      minWidth: "110px",
      zIndex: "9",
    },
    "&:before": {
      content: '""',
      position: "absolute",
      top: "0",
      left: " 0",
      width: "100%",
      height: "100%",
      zIndex: "8",
      backgroundColor: "rgba(55,114,255,.2)",
    },
  },
}));

const DemoSlider = () => {
  return (
    (<Box
      id="demos"
      pb={10}
      overflow="hidden"
      sx={{
        pt: {
          sm: "60px",
          lg: "0",
        },
        backgroundColor: (theme) => theme.palette.background.paper
      }}
    >
      <Container maxWidth="lg">
        {/* Title */}
        <DemoTitle />

        {/* demos */}
        <Box mt={9}>
          <Grid container mt={2} spacing={3}>
            {demos.map((demo, index) => (
              <Grid
                key={index}
                size={{
                  xs: 12,
                  sm: 4,
                  lg: 4
                }}>
                <Box>
                  <StyledBox>
                    <Image
                      src={demo.img}
                      alt="demo" unoptimized={true}
                      style={{
                        borderRadius: "8px",
                        width: "100%",
                        height: "100%",
                      }}
                    />
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      href={demo.link}
                      target="_blank"
                    >
                      Live Preview
                    </Button>
                  </StyledBox>
                  <Typography
                    variant="h6"
                    color="textPrimary"
                    textAlign="center"
                    fontWeight={500}
                    mt={2}
                  >
                    {demo.title}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box mb={2} mt={5} textAlign="center">
          <Chip label="Frontend Pages" color="primary" />
        </Box>
        {/* apps */}
        <Box>
          <Grid container mt={2} spacing={3}>
            {pages.map((page, index) => (
              <Grid
                key={index}
                size={{
                  xs: 12,
                  lg: 3
                }}>
                <Box>
                  <StyledBox>
                    <Image
                      src={page.img}
                      width={500} unoptimized={true}
                      height={500}
                      alt="app"
                      style={{
                        borderRadius: "8px",
                        width: "100%",
                        height: "100%",
                      }}
                    />
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      href={page.link}
                      target="_blank"
                    >
                      Live Preview
                    </Button>
                  </StyledBox>
                  <Typography
                    variant="h6"
                    color="textPrimary"
                    textAlign="center"
                    fontWeight={500}
                    mt={2}
                  >
                    {page.title}{" "}
                    {page.hot ? (
                      <Chip label="New" color="error" size="small" />
                    ) : null}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box mb={2} mt={5} textAlign="center">
          <Chip label="Apps" color="primary" />
        </Box>
        {/* apps */}
        <Box>
          <Grid container mt={2} spacing={3}>
            {apps.map((app, index) => (
              <Grid
                key={index}
                size={{
                  xs: 12,
                  lg: 3
                }}>
                <Box>
                  <StyledBox>
                    <Image
                      src={app.img}
                      alt="app" unoptimized={true}
                      style={{
                        borderRadius: "8px",
                        width: "100%",
                        height: "100%",
                      }}
                    />
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      href={app.link}
                      target="_blank"
                    >
                      Live Preview
                    </Button>
                  </StyledBox>
                  <Typography
                    variant="h6"
                    color="textPrimary"
                    textAlign="center"
                    fontWeight={500}
                    mt={2}
                  >
                    {app.title}{" "}
                    {app.hot ? (
                      <Chip label="New" color="error" size="small" />
                    ) : null}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>)
  );
};

export default DemoSlider;
