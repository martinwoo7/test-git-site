import { Brain, Car, Eye, WifiCog, Database } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Project {
  title: string;
  description: string;
  status: "Active" | "Complete";
  funding: string[];
}

interface Research {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  projects: Project[];
}

const researchAreas: Research[] = [
  {
    id: "cog",
    icon: Brain,
    title: "Cognitive Computing",
    description: "Lorem ipsum",
    projects: [
      {
        title: "Remote Video-Based Biometric Monitoring (Veyetals)",
        description:
          "In collaboration with Markitech and YourDoctorsOnline, BAM Lab developed a smartphone-based system that measures heart rate, oxygen saturation, stress, blood pressure, and body temperature from video and contactless sensors.",
        status: "Active",
        funding: ["Markitech", "Mitacs"],
      },
      {
        title: "Medical Chat Summarization",
        description:
          "This project focuses on summarizing real patient-doctor chat transcripts to support doctors in providing informed advice, addressing challenges like short, noisy messages and domain-specific language.",
        status: "Active",
        funding: [],
      },
      {
        title: "Hierarchical Image Classification for Online Shopping",
        description:
          "In partnership with a startup, BAM Lab researchers designed an efficient hierarchical image classification algorithm to automatically categorize clothing items from camera images for e-commerce applications.",
        status: "Complete",
        funding: [],
      },
      {
        title: "Cognitive Data Analytics for Critical Disease Reporting",
        description:
          "Developed a hybrid rule-based and neural network pipeline to classify noisy medical data according to ministry guidelines, supporting accurate identification of reportable diseases.",
        status: "Active",
        funding: [],
      },
    ],
  },
  {
    id: "car",
    icon: Car,
    title: "Autonomous Vehicles",
    description: "Lorem ipsum",
    projects: [
      {
        title: "Intelligent Vehicle Communication and Autonomous Driving",
        description:
          "This project explores feature extraction from vehicular data for improved V2V and V2I communication. Students also built autonomous model cars using Raspberry Pi, Arduino, and deep learning to navigate tracks using sensors and cameras.",
        status: "Complete",
        funding: ["CUTRIC"],
      },
      {
        title: "Autonomous Vehicle Training with Evolutionary Computing",
        description:
          "Applied evolutionary algorithms with a feedforward neural network to train a simulated vehicle to complete a track at maximum speed without collisions, optimizing both navigation efficiency and control accuracy.",
        status: "Complete",
        funding: [],
      },
    ],
  },
  {
    id: "vis",
    icon: Eye,
    title: "Computer Vision",
    description: "Lorem ipsum",
    projects: [
      {
        title:
          "Intelligent Vehicle Communication and Autonomous Driving (CUTRIC Project)",
        description:
          "This project explores feature extraction from vehicular data for improved V2V and V2I communication. Students also built autonomous model cars using Raspberry Pi, Arduino, and deep learning to navigate tracks using sensors and cameras.",
        status: "Complete",
        funding: ["CUTRIC"],
      },
    ],
  },
  {
    id: "iot",
    icon: WifiCog,
    title: "Wearable Sensors and IoT",
    description: "Lorem ipsum",
    projects: [
      {
        title: "Fall Detection Using Wearable Sensors",
        description:
          "Implemented a deep learning model trained on the MobiAct dataset and deployed it within an IoT streaming framework for real-time fall detection using MbientLab MetaMotion R sensors.",
        status: "Complete",
        funding: ["CUTRIC"],
      },
    ],
  },
  {
    id: "data",
    icon: Database,
    title: "Data Analytics",
    description: "Lorem ipsum",
    projects: [
      {
        title: "Electronic Medical Records and CPCSSN Data Analysis",
        description:
          "Conducted research on the CPCSSN database, which contains anonymized records from over 1.6 million patients across Canada, to enable large-scale studies and insights into primary care trends.",
        status: "Complete",
        funding: [""],
      },
      {
        title: "Hypertension Prediction from Medical Records",
        description:
          "Developed a neural network model achieving 82% accuracy in diagnosing hypertension using structured patient health data.",
        status: "Complete",
        funding: [""],
      },
      {
        title: "Chronic Low Back Pain Diagnosis from Clinical Notes",
        description:
          "Created a text analytics pipeline to extract and analyze medical terms from anonymized doctor chart notes using cTAKES and ensemble machine learning models for diagnosing chronic low back pain.",
        status: "Complete",
        funding: [""],
      },
      {
        title: "PTSD Detection and Analysis from Clinical Notes",
        description:
          "In collaboration with the University of Manitoba, Western University, and Queen’s University, this project applies NLP and text mining to electronic medical records to identify PTSD cases among military veterans and their families, establish epidemiological standards, and analyze care quality, prevalence, and suicide risk patterns.",
        status: "Complete",
        funding: ["IBM", "Mitacs", "CIMVHR"],
      },
    ],
  },
];

export default researchAreas;
