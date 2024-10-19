import React from "react";

import { Typography } from "@mui/material";

import Grid from "@mui/material/Grid";
import Slide from "@mui/material/Slide";


const baseballImage = require("../../assets/images/baseball_1.png");
export default function Software() {
    return (
    <><Grid container spacing={5} columns={24}>
      <Grid item xs={8}>
        <Slide
          direction="right"
          in={true}
          mountOnEnter
          unmountOnExit
          timeout={1500}
        >
          <Typography
            mt={10}
            // mr={50}
            ml={10}
            width="75%"
            fontFamily={"monospace"}
            variant="h4"
            component={"h3"}
            color={"white"}
          >
            {/* <img src={mumbaiImage} alt="mumbai" width="200%" style={{
  borderRadius:"10%"
  }}/> */}
            <iframe
              src=""
              width="540"
              height="280"
              style={{
                borderRadius: "10%",
              }}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </Typography>
        </Slide>
      </Grid>
      <Slide
        direction="left"
        in={true}
        mountOnEnter
        unmountOnExit
        timeout={1500}
      >
        <Grid item xs={16}>
          <Grid item xs={8}>
            <Typography
              mt={10}
              ml={40}
              width="150%"
              fontFamily={"monospace"}
              variant="h4"
              component={"h3"}
              color={"white"}
            >
              <a
                href="https://github.com/speddire"
                target="_blank"
                style={{
                  color: "#dcd6c1",
                  textDecoration: "none",
                }}
              >
                1. Instagram LLM Search Engine
              </a>
            </Typography>
          </Grid>
        </Grid>
      </Slide>
    </Grid><Grid container spacing={5} columns={24}>
        <Grid item xs={8}>
          <Slide
            direction="right"
            in={true}
            mountOnEnter
            unmountOnExit
            timeout={1500}
          >
            <Typography
              mt={10}
              // mr={50}
              ml={10}
              width="75%"
              fontFamily={"monospace"}
              variant="h4"
              component={"h3"}
              color={"white"}
            >
              <a
                href=""
                target="_blank"
                style={{
                  color: "#fff",
                  textDecoration: "none",
                }}
              >
                <img
                  src={baseballImage}
                  alt="mumbai"
                  width="540"
                  height="280"
                  style={{
                    borderRadius: "10%",
                  }} />{" "}
              </a>
            </Typography>
          </Slide>
        </Grid>
        <Slide
          direction="left"
          in={true}
          mountOnEnter
          unmountOnExit
          timeout={1500}
        >
          <Grid item xs={16}>
            <Grid item xs={8}>
              <Typography
                mt={10}
                ml={40}
                width="150%"
                fontFamily={"monospace"}
                variant="h4"
                component={"h3"}
                color={"white"}
              >
                <a
                  href=""
                  target="_blank"
                  style={{
                    color: "#dcd6c1",
                    textDecoration: "none",
                  }}
                >
                  2. Baseball App{" "}
                </a>
              </Typography>
            </Grid>
          </Grid>
        </Slide>
      </Grid><Grid container spacing={5} columns={24}>
        <Grid item xs={8}>
          <Slide
            direction="right"
            in={true}
            mountOnEnter
            unmountOnExit
            timeout={1500}
          >
            <Typography
              mt={10}
              // mr={50}
              ml={10}
              width="75%"
              fontFamily={"monospace"}
              variant="h4"
              component={"h3"}
              color={"white"}
            >
              <iframe
                width="540"
                height="280"
                style={{
                  borderRadius: "10%",
                }}
                src="https://www.youtube.com/embed/qQwYqAtldx0"
                title="DFP Z2_Group9"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </Typography>
          </Slide>
        </Grid>
        <Slide
          direction="left"
          in={true}
          mountOnEnter
          unmountOnExit
          timeout={1500}
        >
          <Grid item xs={16}>
            <Grid item xs={8}>
              <Typography
                mt={10}
                ml={40}
                width="150%"
                fontFamily={"monospace"}
                variant="h4"
                component={"h3"}
                color={"white"}
              >
                <a
                  href=""
                  target="_blank"
                  style={{
                    color: "#dcd6c1",
                    textDecoration: "none",
                  }}
                >
                  3. Project Big Jab{" "}
                </a>
              </Typography>
            </Grid>
          </Grid>
        </Slide>
      </Grid></>
    );
  }