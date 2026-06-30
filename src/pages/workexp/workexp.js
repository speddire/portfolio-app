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

export default function WorkExperience() {
  const PepBoys = OutlinedCard("Product Insights & Analytics Manager", "Pep Boys", [
    "Store Performance Analytics Platform",
    "Google Ratings Impact Analysis",
    "Competitive Intelligence Reporting",
    "Customer Journey Analytics",
    "Brake Service Conversion Insights",
    "Executive KPI Dashboards",
    "Lead Aging Reduction",
    "CVI / Declined Services Analytics",
    "SQL / Python",
    "Tableau / Power BI",
    "Jira / Confluence",
    "Marketing & Operations Analytics",
  ]);

  const CMUResearch = OutlinedCard(
    "Research Assistant to Prof. Dr. Raj Reddy",
    "Carnegie Mellon University",
    [
      "GenAI",
      "LLM Research",
      "Data Analytics",
      "SQL",
      "Data Visualization",
      "AI Product Research",
    ]
  );

  const PNC = OutlinedCard("Senior Product Consultant", "PNC Financial Services Group", [
    "Digital Migration Strategy",
    "Customer Segmentation",
    "Adoption Risk Analysis",
    "Communication Roadmap",
    "GenAI / LLM",
    "Data Analytics",
    "Executive Recommendations",
  ]);

  const Mobileforce = OutlinedCard("Senior Product Manager Intern", "Mobileforce Software", [
    "CPQ",
    "CRM",
    "AI-Driven Enhancements",
    "Product Roadmap",
    "User Research",
    "Data-Driven Decisions",
  ]);

  const MBA = OutlinedCard(
    "Master of Business Administration (STEM)",
    "Carnegie Mellon University - Tepper School of Business",
    [
      "Business Analytics",
      "Data-Driven Strategy",
      "Market Research",
      "Product Strategy",
      "Cross-Functional Collaboration",
      "Forte Fellow",
      "Toigo Fellow",
    ]
  );

  const JPMorgan = OutlinedCard("Senior Associate - Product Management Specialist", "JP Morgan Chase & Co.", [
    "Cloud Migration",
    "Document Management Platform",
    "AWS DMS / CloudWatch",
    "Mainframe Modernization",
    "Agile Delivery",
    "Backlog Prioritization",
    "ADA-Compliant Communications",
    "Compliance Reporting",
    "$3M Annual Savings",
  ]);

  const HSBC = OutlinedCard("Software Engineer Promoted to Team Lead", "HSBC", [
    "Core Banking Modernization",
    "Regulatory Enhancements",
    "Risk & Compliance Systems",
    "Application Delivery",
    "Defect Management",
    "Python",
    "PHP",
    "JavaScript",
    "Team Leadership",
  ]);

  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const timelineItems = [
    {
      date: "February 2025 - Present",
      card: PepBoys,
      icon: <InsightsIcon color="primary" />,
      direction: "right",
    },
    {
      date: "May 2024 - Present",
      card: CMUResearch,
      icon: <ConstructionIcon color="primary" />,
      direction: "left",
    },
    {
      date: "January 2024 - May 2024",
      card: PNC,
      icon: <CodeIcon color="primary" />,
      direction: "right",
    },
    {
      date: "June 2023 - December 2023",
      card: Mobileforce,
      icon: <InsightsIcon color="primary" />,
      direction: "left",
    },
    {
      date: "August 2022 - May 2024",
      card: MBA,
      icon: <CategoryIcon color="primary" />,
      direction: "right",
    },
    {
      date: "August 2017 - July 2022",
      card: JPMorgan,
      icon: <CloudQueueIcon color="primary" />,
      direction: "left",
    },
    {
      date: "July 2011 - August 2017",
      card: HSBC,
      icon: <ConstructionIcon color="primary" />,
      direction: "right",
    },
  ];

  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Grid container justifyContent="center">
          <Timeline position={isSmallScreen ? "left" : "alternate"}>
            {timelineItems.map((item, index) => (
              <Slide
                key={index}
                direction={item.direction}
                in={true}
                mountOnEnter
                unmountOnExit
                timeout={1500}
              >
                <TimelineItem>
                  {!isSmallScreen && (
                    <TimelineOppositeContent color="#264143">
                      <Typography fontFamily={"monospace"} style={{ marginTop: 10 }}>
                        {item.date}
                      </Typography>
                    </TimelineOppositeContent>
                  )}

                  <TimelineSeparator>
                    <TimelineDot color="secondary">{item.icon}</TimelineDot>
                    {index !== timelineItems.length - 1 && !isSmallScreen && (
                      <TimelineConnector sx={{ background: "#264143" }} />
                    )}
                  </TimelineSeparator>

                  <TimelineContent color={"#62b0a5"} width={100}>
                    {item.card}
                  </TimelineContent>

                  {isSmallScreen && (
                    <TimelineOppositeContent color="#264143">
                      <Typography fontFamily={"monospace"} style={{ marginTop: 10 }}>
                        {item.date}
                      </Typography>
                    </TimelineOppositeContent>
                  )}
                </TimelineItem>
              </Slide>
            ))}
          </Timeline>
        </Grid>
      </ThemeProvider>
    </>
  );
}
