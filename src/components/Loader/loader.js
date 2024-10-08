import React, { useEffect } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import * as loaderScreen from "./loaderjson.json";
import { useNavigate } from "react-router-dom";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import HomeBackground from "../homeBackground";
import theme from "../../assets/theme.js";
import { ThemeProvider, useMediaQuery } from "@mui/material";

let PreLoader2 = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width: 500px)");

  useEffect(() => {
    setTimeout(() => {
      navigate("/home", { replace: true });
    }, 5000);
  }, []);
  return (
    <>
      <ThemeProvider theme={theme}>
        <HomeBackground />
        <div className="center">
          {" "}
          <Player
            autoplay
            loop="false"
            src={loaderScreen}
            style={{ height: "300px", width: "300px" }}
            speed="1"
          ></Player>
        </div>

        <Fade in={true} style={{ transitionDelay: "100ms" }} timeout={1200}>
          <Typography
            fontFamily={"monospace"}
            align={"center"}
            variant={isMobile ? "h4" : "h2"}
            component={isMobile ? "h4" : "h2"}
            // color={"#62b0a5"}
            color={"#dcd6c1"}
            style={{
              backgroundImage: `linear-gradient(to left, rgba(38, 65, 67, 0),
          rgba(38, 65, 67, 1))`,
            }}
          >
            Shrutha Keerthi Peddireddy
          </Typography>
        </Fade>

        <Fade in={true} style={{ transitionDelay: "400ms" }} timeout={1200}>
          <Typography
            fontFamily={"monospace"}
            align={"center"}
            variant={isMobile ? "h5" : "h3"}
            component={isMobile ? "h5" : "h3"}
            // color={"#62b0a5"}
            color={"#dcd6c1"}
            style={{
              backgroundImage: `linear-gradient(to left, rgba(38, 65, 67, 0),
          rgba(38, 65, 67, 1))`,
            }}
          >
            Master of Business Administration
          </Typography>
        </Fade>

        {/* <Fade in={true} style={{ transitionDelay: "800ms" }} timeout={1200}>
          <Typography
            fontFamily={"monospace"}
            align={"center"}
            variant={"h3"}
            component={"h3"}
            color={"#ebdada"}
            style={{
              backgroundImage: `linear-gradient(to left, rgba(38, 65, 67, 0),
          rgba(38, 65, 67, 1))`,
            }}
          >
            @
          </Typography>
        </Fade> */}

        <Fade in={true} style={{ transitionDelay: "1200ms" }} timeout={1200}>
          <Typography
            fontFamily={"monospace"}
            align={"center"}
            variant={isMobile ? "h5" : "h3"}
            component={isMobile ? "h5" : "h3"}
            // color={"#62b0a5"}
            color={"#dcd6c1"}
            style={{
              backgroundImage: `linear-gradient(to left, rgba(38, 65, 67, 0),
          rgba(38, 65, 67, 1))`,
            }}
          >
            Carnegie Mellon University
          </Typography>
        </Fade>
      </ThemeProvider>
    </>
  );
};

export default PreLoader2;
