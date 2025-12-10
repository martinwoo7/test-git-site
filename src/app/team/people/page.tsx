import { Metadata } from "next";

import ClientPage from "./page.client";

export const metadata: Metadata = {
  title: "Our People | Queen's BAM Lab",
  description: "Lorem ipsum",
};

const PeoplePage = () => {
  return (
    <>
      <ClientPage />
    </>
  );
};

export default PeoplePage;
