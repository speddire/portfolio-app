import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import { styled, useTheme } from "@mui/system";
import { CardActionArea, useMediaQuery } from '@mui/material';

import baseballImage from "../../assets/softwareImages/baseball_1.png";
import tartanmartImage from "../../assets/softwareImages/tartanmart.png";
import installm from "../../assets/softwareImages/installm.png";
import ticketmasterImage from "../../assets/softwareImages/ticketmaster.png";
import hiking from "../../assets/softwareImages/hiking.png";
import blockchainImage from "../../assets/softwareImages/blockchain.png";
import narrative from "../../assets/softwareImages/narrative.png";
import bookstore from "../../assets/softwareImages/bookstore.jpeg";
import mlip from "../../assets/dataImages/mlip.png";
import anomaly1 from "../../assets/dataImages/anomaly1.png";
import bigjab1 from "../../assets/dataImages/bigjab1.png";
import survey from "../../assets/dataImages/survey.png";
import swiggy from "../../assets/productImages/swiggy.png";
import classplus from "../../assets/productImages/classplus.png";
import gpay from "../../assets/productImages/gpay.png";
import workday from "../../assets/productImages/workday.png";
import linkedin from "../../assets/productImages/linkedin_competitive.png";
import recruit from "../../assets/productImages/recruiting_product.png";
import likewise from "../../assets/productImages/likewise_dating.png";
import tele from "../../assets/productImages/tele.png";
import zar1 from "../../assets/productImages/zar1.png";
import comm from "../../assets/productImages/comm.png";
import dms from "../../assets/productImages/dms.png";
import mm from "../../assets/productImages/mm.png";
import mm1 from "../../assets/productImages/mm1.png";
import mm2 from "../../assets/productImages/mm2.png";


const StyledCard = styled(Card)(({ theme }) => ({
  transition: "transform 0.15s ease-in-out",
  "&:hover": { transform: "scale3d(1.02, 1.02, 1)" },
  // margin: theme.spacing(6.25),
  marginBottom: 20,
  // marginRight: 20,
  backgroundColor: "#264143",
  color: "#dcd6c1",
  borderRadius: 20,
  padding: theme.spacing(6.25),
  // width: '100%'
}));

const StyledImageListItem = styled(ImageListItem)(({ theme }) => ({
  ".MuiImageListItem-img": {
    objectFit: "cover",
    width: "100%",
    height: "200px",
    display: "block",
    flexGrow: 1,
  },
  transition: "transform 0.15s ease-in-out",
  "&:hover": { transform: "scale3d(1.02, 1.02, 1)" },
}));

const StyledImageListItemBar = styled(ImageListItemBar)(({ theme }) => ({
  ".MuiImageListItemBar-title": {
    whiteSpace: "normal"
  },
  transition: "transform 0.15s ease-in-out",
  "&:hover": { transform: "scale3d(1.02, 1.02, 1)" },
}));

export default function TitlebarBelowImageList({ tabName }) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const activeTab = tabName;

  const itemData = {
    'software': [
      {
        img: tartanmartImage,
        title: 'CMU Marketplace',
        author: 'Shrutha Keerthi',
        skill: ['Web Development', 'Django', 'React', 'REST APIs', 'AWS Cloud', 'Full Stack'],
        url: 'https://drive.google.com/drive/u/3/folders/1lDL0gdnZaEsXVhJX7ZI67XQs-PAA4-88'
      },
      {
        img: narrative,
        title: 'Lending Club Risk Assessment',
        author: 'Shrutha Keerthi',
        skill: ['Machine Learning', 'R', 'Business Analytics'],
        url: 'https://drive.google.com/drive/u/3/folders/1ANBq1NQGPst3b_s3z2u-Zy-8xCjyNBtM'
      },
      {
        img: installm,
        title: 'Instagram LLM Search Engine',
        author: 'Shrutha Keerthi',
        skill: ['Django', 'OpenAI API', 'LLM'],
        url: 'https://drive.google.com/drive/u/3/folders/1W0KXa-wEVzNgOXPTNhffsTH5KZoNLd2y'
      },
      {
        img: bookstore,
        title: 'Bookstore API Application',
        author: 'Shrutha Keerthi',
        skill: ['REST APIs', 'Django', 'Postman', 'Kafka', 'Async Programming', 'BFF Design'],
        url: 'https://drive.google.com/drive/u/3/folders/1rsz78_IDmC-Lq3DG1KKNh6oXwJo3-R4-'
      },
      {
        img: hiking,
        title: 'Viking Tours - Web Architecture',
        author: 'Shrutha Keerthi',
        skill: ['Object-Oriented', 'Domain Diagram', 'Sequence Diagram', 'Figma Wireframing'],
        url: 'https://drive.google.com/drive/u/3/folders/1JU0W0g9eju7DJV_OVeAzBgUEI0186qw2'
      },
      {
        img: ticketmasterImage,
        title: 'Ticketmaster API - Android Mobile App',
        author: 'Shrutha Keerthi',
        skill: ['Android', 'REST APIs', 'Mobile Development', 'Web Analytics', 'Java', 'Android Studio'],
        url: 'https://drive.google.com/drive/u/3/folders/1JU0W0g9eju7DJV_OVeAzBgUEI0186qw2'
      },
      {
        img: baseballImage,
        title: 'Baseball API Application',
        author: 'Shrutha Keerthi',
        skill: ['API Development', 'Java Servlets'],
        url: 'https://drive.google.com/drive/u/3/folders/1Mk2QLwZka3umlUZjzF6EOVl9qoDsD12u'
      },
      {
        img: blockchainImage,
        title: 'Blockchain - Ground up',
        author: 'Shrutha Keerthi',
        skill: ['Blockchain', 'Java', 'Cryptography'],
        url: 'https://drive.google.com/drive/u/3/folders/12ZZaLYxR7QHXVaBuYINlFoqOD5NVQ1vW'
      },
    ],
    'data': [
      {
        img: mlip,
        title: 'Movie Recommendation System',
        author: 'Shrutha Keerthi',
        skill: ['MLOps', 'Machine Learning', 'ML Security', 'A/B Testing', 'Model Evaluation', 'Model Deployment', 'Github Actions', 'CI/CD Pipeline', 'Prometheus', 'Grafana'],
        url: 'https://drive.google.com/drive/u/3/folders/1muk0m5lG64Zo5mkoChBxRQlVIfFCwLND'
      },
      {
        img: survey,
        title: 'Survey Analysis',
        author: 'Shrutha Keerthi',
        skill: ['Machine Learning', 'Model Evaluation', 'Data Visualization', 'Jupyter Notebook'],
        url: 'https://drive.google.com/drive/u/3/folders/1KO6o9C1H0Kbf9aq0hu5oDSY2aF9hPB68'
      },
      {
        img: anomaly1,
        title: 'Anomaly Seekers - Time Series Forecasting',
        author: 'Shrutha Keerthi',
        skill: ['Time Series Forecasting', 'Machine Learning', 'Model Evaluation', 'Jupyter Notebook'],
        url: 'https://drive.google.com/drive/u/3/folders/1eOU1XO3pqasBR9cTONFTSmU-QZvx1JHP'
      },
      {
        img: bigjab1,
        title: 'Project Big Jab',
        author: 'Shrutha Keerthi',
        skill: ['Web Scraping', 'Data Visualization', 'GUI Development', 'API Data'],
        url: 'https://www.youtube.com/watch?v=qQwYqAtldx0'
      },
    ],
    'product': [

      {
        img: zar1,
        title: 'Zara Case Study',
        author: 'Shrutha Keerthi',
        skill: ['Human Computer Interaction','Customer Journey Map','Usability Testing', 'Feature Breakdown', 'Differentiation','Prototypes','Figma'],
        url: 'https://drive.google.com/drive/u/3/folders/1KO6o9C1H0Kbf9aq0hu5oDSY2aF9hPB68'
    },
      {
          img: tele,
          title: 'Tele health App',
          author: 'Shrutha Keerthi',
          skill: ['New Product', 'User Personas', 'User Interviews', 'Competitor Analysis', 'Differentiation', 'Financial Analysis'],
          url: 'https://drive.google.com/drive/u/3/folders/1eajvMnIkqBYgVu-ifitQdAQy6AQ7FOZd'
      },
      {
          img: comm,
          title: 'PNC Communication Strategy',
          author: 'Shrutha Keerthi',
          skill: ['Competitor Analysis', 'SWOT Analysis', 'Market Research', 'Product Teardown', 'Growth Strategy', 'Marketing Strategy'],
          url: 'https://drive.google.com/drive/u/3/folders/1j2f2ORhgf8mmBDzinK_yX1QoRMqPf0kQ'
      },

      {
          img: recruit,
          title: 'Veterans Leadership Program',
          author: 'Shrutha Keerthi',
          skill: ['Pro Bono Consulting', 'Strategy' ],
          url: 'https://drive.google.com/drive/u/3/folders/19NaYHqvegZIo4rlgJN7CA96G4iSjqSUV'
      },

      {
        img: dms,
        title: 'Digital Marketing and Social Media Strategy',
        author: 'Shrutha Keerthi',
        skill: ['Air France Case', 'L’Oreal Paris', 'Rocket Fuel' , 'Artea', 'Glossier', 'Getty Museum'],
        url: 'https://drive.google.com/drive/u/3/folders/1l_IxQsbDOLSJymQOMzwLH_NUaZEm9I_o'
      },
      {
      img: mm,
      title: 'Marketing Management',
      author: 'Shrutha Keerthi',
      skill: ['Cialis Case', 'Adobe', 'NY Times' , 'Drop Box'],
      url: 'https://drive.google.com/drive/u/3/folders/1g3PxwEK_HhsoWB2teIX5BbJo-ItzMMca'
      },
      {
      img: mm1,
      title: 'Market Research',
      author: 'Shrutha Keerthi',
      skill: ['SPSS', 'Microvan Case'],
      url: 'https://drive.google.com/drive/u/3/folders/1UbMgKP85kBsElc-fuuBRrNA0zXNtZJAX'
      },
    {
      img: mm2,
      title: 'Operations Management',
      author: 'Shrutha Keerthi',
      skill: ['Regression', 'Optimization', "Simulation"],
      url: 'https://drive.google.com/drive/u/3/folders/1UbMgKP85kBsElc-fuuBRrNA0zXNtZJAX'
    },

      {
        img: workday,
        title: 'Workday Talent Assessment',
        author: 'Shrutha Keerthi',
        skill: ['Business Strategy', 'Marketing', 'Financial Analysis', 'Market Positioning', 'Product Concept', 'Wireframing'],
        url: 'https://drive.google.com/drive/u/3/folders/1eOU1XO3pqasBR9cTONFTSmU-QZvx1JHP'
    },
      {
          img: swiggy,
          title: 'Swiggy - Food Delivery',
          author: 'Shrutha Keerthi',
          skill: ['Problem Solving', 'User Persona'],
          url: 'https://drive.google.com/drive/u/3/folders/1KO6o9C1H0Kbf9aq0hu5oDSY2aF9hPB68'
      },
      {
        img: classplus,
        title: 'Classplus Feature Critique',
        author: 'Shrutha Keerthi',
        skill: ['User Journey', 'User Persona', 'Prioritization', 'Metrics'],
        url: 'https://drive.google.com/drive/u/3/folders/1j2f2ORhgf8mmBDzinK_yX1QoRMqPf0kQ'
    },
    ]
  };

  return (
    <ImageList style={{ margin: isSmallScreen ? 20 : 20 }} cols={isSmallScreen ? 1 : 3}>
      {itemData[activeTab].map((item) => (
        <StyledCard key={item.title} style={{margin: isSmallScreen ? "" : 30}}>
          <CardActionArea href={item.url} target='_blank'>
            <StyledImageListItem>
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                style={{ borderRadius: 20 }}
                className='MuiImageListItem-img'
              />
              <StyledImageListItemBar
                title={item.title}
                style={{ color: "#dcd6c1", fontWeight: "bolder", fontFamily: "monospace", whiteSpace: "normal", // Enable text wrapping
                overflowWrap: "break-word",}}
                position="below"
                className='MuiImageListItemBar-title css-dasnyc-MuiImageListItemBar-title'
              />
              <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                {item.skill.map((skill) => (
                  <Chip
                    key={skill}
                    label={skill}
                    variant="outlined"
                    style={{
                      color: "#264143",
                      borderColor: "black",
                      backgroundColor: "#dcd6c1",
                      fontSize: 10,
                      width: "100%",
                      fontWeight: "bolder",
                    }}
                  />
                ))}
              </Stack>
            </StyledImageListItem>
          </CardActionArea>
        </StyledCard>
      ))}
    </ImageList>
  );
}
