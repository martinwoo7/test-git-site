import { Metadata } from "next";
import ClientPage from "./page.client";

export const metadata: Metadata = {
  title: "Contact Us | Queen's BAM Lab",
  description: "Lorem ipsum",
};

const ContactPage = () => {
  return (
    <>
      <ClientPage />
    </>
  );
};

export default ContactPage;
