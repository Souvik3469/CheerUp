import { StaticImageData } from "next/image";
import m1 from "@/assets/mental1.jpeg";
import m2 from "@/assets/mental2.jpeg";
interface ProcessData {
  imageUrl: StaticImageData;
  title: string;
  description: string;
}
const processData: ProcessData[] = [
  {
    imageUrl: m1,
    title: "Disovery Session",
    description:
      "We begin with an in-depth consultation to understand your business objectives, company culture, and specific staffing requirements.",
  },
  {
    imageUrl: m2,
    title: "Targeted Outreach",
    description:
      "Leveraging our extensive network and industry insights, we identify potential candidates who align with your criteria through targeted outreach.",
  },
  {
    imageUrl: m1,
    title: "Comprehensive Screening",
    description:
      "Our experienced recruiters conduct thorough screenings, assessing candidates for skills, experience, cultural fit, and alignment with your values.",
  },
  {
    imageUrl: m1,
    title: "Client Collaboration",
    description:
      "We value your input and collaborate with you throughout the process. Shortlisted candidates undergo personalized assessments tailored to your industry and job requirements, ensuring they possess the competencies needed to excel.",
  },
  {
    imageUrl: m1,
    title: "Transparent Communication",
    description:
      "We maintain open communication, providing regular updates and insights. Rigorous quality checks are conducted before presenting candidates to ensure they meet our high standards of excellence.",
  },
];
export default processData;
