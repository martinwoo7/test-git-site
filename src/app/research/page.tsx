import { Metadata } from "next";
import ClientPage from "./page.client";

export const metadata: Metadata = {
  title: "Projects | Queen's BAM Lab",
  description: "Lorem ipsum",
};

const Page = () => {
  return (
    <>
      <ClientPage />
    </>
  );
};

export default Page;
