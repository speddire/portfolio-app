import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import Navbar from "../../components/Navbar/navbar";
import { ThemeProvider, Typography, useMediaQuery, Grid } from "@mui/material";
import theme from "../../assets/theme.js";
import CodeIcon from "@mui/icons-material/Code";
import InsightsIcon from "@mui/icons-material/Insights";
import CategoryIcon from "@mui/icons-material/Category";
import ConstructionIcon from "@mui/icons-material/Construction";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import OutlinedCard from "../../components/work_ex_card";
import Slide from "@mui/material/Slide";
import Code from "@mui/icons-material/Code";

export default function WorkExperience() {
  const HSBC = OutlinedCard("Software Engineer Promoted to Team Lead", "HSBC", [
    "PHP",
    "Python",
    "JavaScript",
    "Dialogflow",
  ]);
  const JPMorgan = OutlinedCard("Senior Associate - Product Management Specialist", "JP Morgan Chase & Co.", [
    "Python",
    "SQL",
    "Cloud Migration",
    "Digital Transformation",
  ]);
  const Mobileforce = OutlinedCard("Senior Product Manager Intern", "Mobileforce Software", [
    "CPQ",
    "CRM",
    "AI-driven Enhancements",
    "Data-Driven Decisions",
  ]);
  const PNC = OutlinedCard("Senior Product Consultant", "PNC Financial Services Group", [
    "GenAI",
    "LLM",
    "Data Analytics",
    "Digital Migration Strategy",
  ]);
  const CMUResearch = OutlinedCard(
    "Research Assistant to Prof. Dr. Raj Reddy", 
    "Carnegie Mellon University",
    ["GenAI", "LLM", "Data Analytics", "SQL", "Data Visualization"]
  );
  const MBA = OutlinedCard(
    "Master of Business Administration (STEM)", 
    "Carnegie Mellon University - Tepper School of Business", 
    ["Data-Driven Strategy", "Market Research", "Cross-Functional Collaboration"]
  );

  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Grid container justifyContent="center">
          <Timeline position={isSmallScreen ? "left" : "alternate"}>
            <Slide direction="right" in={true} mountOnEnter unmountOnExit timeout={1500}>
              <TimelineItem>
                {!isSmallScreen && (
                  <TimelineOppositeContent color="#264143">
                    <Typography fontFamily={"monospace"} style={{ marginTop: 10 }}>
                      May 2024 - Present
                    </Typography>
                  </TimelineOppositeContent>
                )}
                <TimelineSeparator>
                  <TimelineDot color="secondary">
                    <ConstructionIcon color="primary" />
                  </TimelineDot>
                  {!isSmallScreen && <TimelineConnector sx={{ background: "#264143" }} />}
                </TimelineSeparator>
                <TimelineContent color={"#62b0a5"} width={100}>
                  {CMUResearch}
                </TimelineContent>
                {isSmallScreen && (
                  <TimelineOppositeContent color="#264143">
                    <Typography fontFamily={"monospace"} style={{ marginTop: 10 }}>
                      May 2024 - Present
                    </Typography>
                  </TimelineOppositeContent>
                )}
              </TimelineItem>
            </Slide>

            <Slide direction="left" in={true} mountOnEnter unmountOnExit timeout={1500}>
              <TimelineItem>
                {!isSmallScreen && (
                  <TimelineOppositeContent color="#264143">
                    <Typography fontFamily={"monospace"} style={{ marginTop: 10 }}>
                      January 2024 - May 2024
                    </Typography>
                  </TimelineOppositeContent>
                )}
                <TimelineSeparator>
                  <TimelineDot color="secondary">
                    <CodeIcon color="primary" />
                  </TimelineDot>
                  {!isSmallScreen && <TimelineConnector sx={{ background: "#264143" }} />}
                </TimelineSeparator>
                <TimelineContent color={"#62b0a5"} width={100}>
                  {PNC}
                </TimelineContent>
                {isSmallScreen && (
                  <TimelineOppositeContent color="#264143">
                    <Typography fontFamily={"monospace"} style={{ marginTop: 10 }}>
                      January 2024 - May 2024
                    </Typography>
                  </TimelineOppositeContent>
                )}
              </TimelineItem>
            </Slide>

            <Slide direction="right" in={true} mountOnEnter unmountOnExit timeout={1500}>
              <TimelineItem>
                {!isSmallScreen && (
                  <TimelineOppositeContent color="#264143">
                    <Typography fontFamily={"monospace"} style={{ marginTop: 10 }}>
                      June 2023 - December 2023
                    </Typography>
                  </TimelineOppositeContent>
                )}
                <TimelineSeparator>
                  <TimelineDot color="secondary">
                    <InsightsIcon color="primary" />
                  </TimelineDot>
                  {!isSmallScreen && <TimelineConnector sx={{ background: "#264143" }} />}
                </TimelineSeparator>
                <TimelineContent color={"#62b0a5"} width={100}>
                  {Mobileforce}
                </TimelineContent>
                {isSmallScreen && (
                  <TimelineOppositeContent color="#264143">
                    <Typography fontFamily={"monospace"} style={{ marginTop: 10 }}>
                      June 2023 - December 2023
                    </Typography>
                  </TimelineOppositeContent>
                )}
              </TimelineItem>
            </Slide>

            <Slide direction="left" in={true} mountOnEnter unmountOnExit timeout={1500}>
              <TimelineItem>
                {!isSmallScreen && (
                  <TimelineOppositeContent color="#264143">
                    <Typography fontFamily={"monospace"} style={{ marginTop: 10 }}>
                      August 2022 - May 2024
                    </Typography>
                  </TimelineOppositeContent>
                )}
                <TimelineSeparator>
                  <TimelineDot color="secondary">
                    <CategoryIcon color="primary" />
                  </TimelineDot>
                  {!isSmallScreen && <TimelineConnector sx={{ background: "#264143" }} />}
                </TimelineSeparator>
                <TimelineContent color={"#62b0a5"} width={100}>
                  {MBA}
                </TimelineContent>
                {isSmallScreen && (
                  <TimelineOppositeContent color="#264143">
                    <Typography fontFamily={"monospace"} style={{ marginTop: 10 }}>
                      August 2022 - May 2024
                    </Typography>
                  </TimelineOppositeContent>
                )}
              </TimelineItem>
            </Slide>

            <Slide direction="right" in={true} mountOnEnter unmountOnExit timeout={1500}>
              <TimelineItem>
                {!isSmallScreen && (
                  <TimelineOppositeContent color="#264143">
                    <Typography fontFamily={"monospace"} style={{ marginTop: 10 }}>
                      August 2017 - July 2022
                    </Typography>
                  </TimelineOppositeContent>
                )}
                <TimelineSeparator>
                  <TimelineDot color="secondary">
                    <CloudQueueIcon color="primary" />
                  </TimelineDot>
                  {!isSmallScreen && <TimelineConnector sx={{ background: "#264143" }} />}
                </TimelineSeparator>
                <TimelineContent color={"#62b0a5"} width={100}>
                  {JPMorgan}
                </TimelineContent>
                {isSmallScreen && (
                  <TimelineOppositeContent color="#264143">
                    <Typography fontFamily={"monospace"} style={{ marginTop: 10 }}>
                      August 2017 - July 2022
                    </Typography>
                  </TimelineOppositeContent>
                )}
              </TimelineItem>
            </Slide>

            <Slide direction="left" in={true} mountOnEnter unmountOnExit timeout={1500}>
              <TimelineItem>
                {!isSmallScreen && (
                  <TimelineOppositeContent color="#264143">
                    <Typography fontFamily={"monospace"} style={{ marginTop: 10 }}>
                      July 2011 - August 2017
                    </Typography>
                  </TimelineOppositeContent>
                )}
                <TimelineSeparator>
                  <TimelineDot color="secondary">
                    <ConstructionIcon color="primary" />
                  </TimelineDot>
                  {!isSmallScreen && <TimelineConnector sx={{ background: "#264143" }} />}
                </TimelineSeparator>
                <TimelineContent color={"#62b0a5"} width={100}>
                  {HSBC}
                </TimelineContent>
                {isSmallScreen && (
                  <TimelineOppositeContent color="#264143">
                    <Typography fontFamily={"monospace"} style={{ marginTop: 10 }}>
                      July 2011 - August 2017
                    </Typography>
                  </TimelineOppositeContent>
                )}
              </TimelineItem>
            </Slide>
          </Timeline>
        </Grid>
      </ThemeProvider>
    </>
  );
}
