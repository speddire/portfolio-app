import React from "react";
import Navbar from "../../components/Navbar/navbar.js";
import { UseTypingText } from "../../components/useTypingText.js";
import { Grid, Typography, ThemeProvider, useMediaQuery } from "@mui/material";
import Slide from "@mui/material/Slide";
import theme from "../../assets/theme.js";
import { InstagramEmbed } from "react-social-media-embed";
import {
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./home.scss";
import { SpotifyNowPlaying } from "../../components/Spotify/displaySpotify.js";

const Home = () => {
  const { word } = UseTypingText(
    [
      "Senior Product Manager.",
      "Data Enthusiast.",
      "Technology Lover.",
      "Business Strategist.",
    ],
    50,
    20
  );
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <ThemeProvider theme={theme}>
      <div className="home-page">
        <Navbar />
        <Grid container spacing={5} columns={24}>
          <Grid item xs={isMobile ? 24 : 8}>
            <Slide direction="up" in={true} mountOnEnter unmountOnExit timeout={1500}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  backgroundColor: "#62b0a5",
                  borderRadius: "10%",
                  marginTop: isMobile ? 50 : 100,
                  marginRight: isMobile ? 0 : 25,
                  marginLeft: isMobile ? 0 : "15%",
                  width: isMobile ? "100%" : 400,
                }}
              >
                <InstagramEmbed
                  url="https://www.instagram.com/p/DBRTxYnxepZ"
                  width={isMobile ? "75%" : 328}
                  height={isMobile ? 400 : 600}
                />
              </div>
            </Slide>
          </Grid>
          <Grid item xs={isMobile ? 24 : 16}>
            <Slide direction="left" in={true} mountOnEnter unmountOnExit timeout={1500}>
              <Grid container spacing={isMobile ? 2 : 5} columns={isMobile ? 24 : 8}>
                <Grid item xs={isMobile ? 24 : 8}>
                  <Typography
                    mt={isMobile ? 5 : 15}
                    ml={isMobile ? 0 : 25}
                    width={isMobile ? "100%" : "75%"}
                    fontFamily={"monospace"}
                    variant={isMobile ? "h5" : "h4"}
                    component={"h3"}
                    color={"264143"}
                    align={isMobile ? "center" : "left"}
                  >
                    Hey! <br />
                    This is <span style={{ color: "#dcd6c1" }}>Shrutha</span>, nice to meet you. <br />
                    I am a <span style={{ color: "#dcd6c1" }}>{word}</span>
                  </Typography>
                </Grid>
                <Grid item xs={isMobile ? 24 : 8}>
                  <Typography
                    ml={isMobile ? 0 : 25}
                    mt={isMobile ? 2 : 0}
                    fontFamily={"monospace"}
                    variant={isMobile ? "h5" : "h3"}
                    component={"h3"}
                    color={"white"}
                    align={isMobile ? "center" : "left"}
                  >
                    <div className="social-container">
                      <a
                        href="https://www.linkedin.com/in/shrutha_peddireddy/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="linkedin social"
                      >
                        <FontAwesomeIcon icon={faLinkedin} size="1x" />
                      </a>
                      <a
                        href="https://github.com/speddire"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github social"
                      >
                        <FontAwesomeIcon icon={faGithub} size="1x" />
                      </a>
                      <a
                        href="https://www.instagram.com/shrutha_peddireddy/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="instagram social"
                      >
                        <FontAwesomeIcon icon={faInstagram} size="1x" />
                      </a>
                    </div>
                    <SpotifyNowPlaying />
                  </Typography>
                </Grid>
              </Grid>
            </Slide>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
};

export default Home;
