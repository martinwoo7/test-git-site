import ClientPage from "./page.client";
import { getPublications } from "@/lib/utils";

export default async function Home() {
  const publications = await getPublications();
  return (
    <>
      <ClientPage publications={publications.slice(0, 4)} />
    </>
  );
}
