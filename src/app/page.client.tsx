import { Fragment } from "react";
import ExportedImage from "next-image-export-optimizer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import {
  Card,
  CardHeader,
  CardTitle,
  CardFooter,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

import {
  ArrowRight,
  Calendar,
  File,
  SquareArrowOutUpRight,
  Brain,
  Database,
  Cloud,
} from "lucide-react";

import { openPositions } from "@/lib/positions";
import { chunkAlternating, splitIntoTwoRows } from "@/lib/utils";

import { News } from "@/lib/news";
// import { Publications } from "@/lib/publications";
import type { EnrichedPublication } from "./publications/page.client";

const logos = [
  "imgs/logos/CAC-logo.png",
  "imgs/logos/CFI-logo.png",
  "imgs/logos/cimvhr-logo.png",
  "imgs/logos/CM-logo.png",
  "imgs/logos/cutric-logo.svg",
  "imgs/logos/DRAC-logo.svg",
  "imgs/logos/gnowit-logo.png",
  "imgs/logos/ibm-logo.png",
  "imgs/logos/Mitacs-logo.png",
  "imgs/logos/MT-logo.png",
  "imgs/logos/NF-logo.png",
  "imgs/logos/NSERC-logo.png",
  "imgs/logos/OCI-logo.webp",
  "imgs/logos/pfizer-logo.svg",
  "imgs/logos/QU-logo.png",
  "imgs/logos/Roche-logo.png",
  "imgs/logos/SOSCIP-logo.png",
  "imgs/logos/UM-logo.png",
];

const ClientPage = ({
  publications,
}: {
  publications: EnrichedPublication[];
}) => {
  const chunkedItems = chunkAlternating(logos);
  const mobileItems = splitIntoTwoRows(logos);
  const basepath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <div className="w-full">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 space-y-4 lg:flex lg:flex-row lg:gap-x-8 lg:items-center">
          <div className="flex flex-col items-center md:items-start gap-2">
            <Badge
              variant={"outline"}
              className="rounded-lg px-4 py-2 space-x-2"
            >
              <ExportedImage
                src={`${basepath}imgs/queens_logo_cropped.png`}
                alt="Queen's University Logo"
                width={100}
                height={50}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <span className="uppercase font-semibold text-lg">Computing</span>
            </Badge>
            <h1 className="text-5xl font-extrabold tracking-tight lg:text-6xl text-primary pb-2">
              BAM Lab
            </h1>
            <h2 className="text-muted-foreground font-semibold font-serif text-3xl text-center md:text-start ">
              Big Data & Analytics Management Lab
            </h2>
            <h3 className="text-center md:text-start font-serif">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              vehicula nulla purus, a feugiat neque venenatis in. Donec et quam.
            </h3>
            <div className="flex gap-2">
              <Button size={"sm"} asChild className="group">
                <Link href={"/research"}>
                  Explore Research
                  <ArrowRight className="group-hover:translate-x-1 duration-200" />
                </Link>
              </Button>
              <Button asChild variant={"outline"} size={"sm"}>
                <Link href={"/contact"}>Contact Us</Link>
              </Button>
            </div>
          </div>

          <div className="relative w-full lg:max-w-xl h-auto aspect-video shadow-xl rounded-md overflow-hidden border border-border/50">
            <ExportedImage
              src={`${basepath}imgs/queens_university.jpg`}
              fill
              alt="Queen's University"
              className="object-cover hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="w-full bg-primary/5 border-y border-y-primary/10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="font-bold text-primary text-5xl">200+</p>
              <p className="font-serif text-sm text-muted-foreground mt-1">
                Publications
              </p>
            </div>
            <div className="text-center">
              <p className="font-bold text-primary text-5xl">4000+</p>
              <p className="font-serif text-sm text-muted-foreground mt-1">
                Citations
              </p>
            </div>
            <div className="text-center">
              <p className="font-bold text-primary text-5xl">20+</p>
              <p className="font-serif text-sm text-muted-foreground mt-1">
                Team Members
              </p>
            </div>
            <div className="text-center">
              <p className="font-bold text-primary text-5xl">10+</p>
              <p className="font-serif text-sm text-muted-foreground mt-1">
                Active Projects
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Research Focus */}
      <div className="w-full">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 flex flex-col items-center">
          <h2 className="text-primary font-bold text-3xl text-center mb-2">
            Research Focus Areas
          </h2>
          <p className="text-center font-serif text-sm max-w-xl text-muted-foreground">
            Cutting-edge research spanning cognitive science, big-data
            analytics, and cloud computing infrastructures
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 w-full">
            {[
              {
                title: "Cognitive Science",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultrices massa vitae lectus imperdiet mattis eu id lectus. Sed egestas.",
                href: "/research#cognitive-science",
                icon: <Brain className="size-6 text-chart-1" />,
              },
              {
                title: "Big-Data Analytics",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultrices massa vitae lectus imperdiet mattis eu id lectus. Sed egestas.",
                href: "/research#data-analytics",
                icon: <Database className="size-6 text-chart-1" />,
              },
              {
                title: "Cloud Computing",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultrices massa vitae lectus imperdiet mattis eu id lectus. Sed egestas.",
                href: "/research#cloud-computing",
                icon: <Cloud className="size-6 text-chart-1" />,
              },
            ].map((focus) => (
              <Card
                className="w-full rounded-lg hover:shadow-lg transition-all duration-300 border-border/50 hover:border-chart-1/20 group"
                key={focus.href}
              >
                <CardHeader>
                  <div className="size-12 bg-chart-1/10 rounded-lg flex items-center justify-center mb-2 group-hover:bg-chart-1/20 transition-colors">
                    {focus.icon}
                  </div>
                  <CardTitle>
                    <p className="font-semibold text-lg">{focus.title}</p>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-serif text-sm text-muted-foreground leading-relaxed">
                    {focus.description}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button
                    asChild
                    variant={"ghost"}
                    className="group/btn p-0 hover:bg-transparent hover:text-chart-1"
                  >
                    <Link href={focus.href} className="flex items-center gap-2">
                      Learn More{" "}
                      <ArrowRight className="size-4 group-hover/btn:translate-x-1 duration-200" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* About This Lab - Zebra Striped */}
      <div className="w-full bg-secondary/40 py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col items-center">
          {openPositions.length >= 1 && (
            <Badge
              asChild
              variant="outline"
              className="rounded-md mx-auto mb-2 group"
            >
              <Link href="/contact#hiring">
                <span
                  className="flex size-2 rounded-full bg-chart-1"
                  title="New"
                />
                We have open positions{" "}
                <ArrowRight className="group-hover:translate-x-1 duration-200" />
              </Link>
            </Badge>
          )}
          <h2 className="text-primary font-bold text-3xl text-center">
            About This Lab
          </h2>
          <p className="text-center font-serif text-sm max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            vehicula nulla purus, a feugiat neque venenatis in.
          </p>
          <div className="flex flex-col lg:flex-row w-full items-center space-x-8 space-y-4 mt-8">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="size-8 bg-chart-1/20 rounded-md shrink-0 flex items-center justify-center">
                  <div className="size-2 bg-chart-1 rounded-full" />
                </div>
                <div>
                  <p className="font-medium">Collaborative Environment</p>
                  <p className="font-serif text-sm text-muted-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean vehicula nulla purus, a feugiat neque venenatis in.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="size-8 bg-chart-1/20 rounded-md shrink-0 flex items-center justify-center">
                  <div className="size-2 bg-chart-1 rounded-full" />
                </div>
                <div>
                  <p className="font-medium">Well-Funded Research</p>
                  <p className="font-serif text-sm text-muted-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean vehicula nulla purus, a feugiat neque venenatis in.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="size-8 bg-chart-1/20 rounded-md shrink-0 flex items-center justify-center">
                  <div className="size-2 bg-chart-1 rounded-full" />
                </div>
                <div>
                  <p className="font-medium">Diverse Research Topics</p>
                  <p className="font-serif text-sm text-muted-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean vehicula nulla purus, a feugiat neque venenatis in.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative w-full lg:max-w-xl h-auto aspect-video shadow-lg rounded-lg overflow-hidden">
              <ExportedImage
                src={`${basepath}imgs/bamlab_people.png`}
                fill
                alt="BAM Lab Picnic"
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Latest News */}
      <div className="w-full">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 flex flex-col items-center">
          <h2 className="text-primary font-bold text-3xl text-center">
            Latest News
          </h2>
          <p className="text-center font-serif text-sm max-w-xl">
            Stay updated with the latest achievements, events, and
            announcements.
          </p>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {News.slice(0, 6).map((news, i) => (
              <Card
                key={i}
                className="rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 group border-border/50 border-t-4 border-t-chart-1"
              >
                <div className="relative aspect-16/10 overflow-hidden">
                  <ExportedImage
                    src={
                      news.image
                        ? `${basepath}${news.image}`
                        : `${basepath}imgs/meeting.png`
                    }
                    alt={news.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="size-4 text-chart-1" />
                    {news.date}
                  </div>
                  <CardTitle className="leading-tight text-lg">
                    <p className="font-bold">{news.title}</p>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-sm font-serif line-clamp-3">
                    {news.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <Button asChild variant={"link"} className="mt-4">
            <Link href={"/news"} className="capitalize">
              View more news
            </Link>
          </Button>
        </div>
      </div>

      {/* Recent Publications */}
      <div className="w-full bg-secondary/10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 gap-2">
          <div className="flex flex-col items-center gap-2 md:flex-row md:items-end justify-between">
            <div className="">
              <h2 className="text-primary font-bold text-3xl text-center md:text-left ">
                Recent Publications
              </h2>
              <p className="text-center md:text-left font-serif text-sm max-w-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent in ante eget ante consectetur sollicitudin. Sed eget
                eros viverra, placerat.
              </p>
            </div>

            <Button variant={"outline"} asChild className="text-xs" size={"sm"}>
              <Link href="/publications">All Publications</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-8 w-full">
            {publications.map((publication, i) => (
              <Card
                className="w-full rounded-lg border-l-4 border-l-primary hover:bg-secondary/20 transition-colors duration-200 shadow-sm"
                key={i}
              >
                <CardHeader>
                  <div className="flex gap-2">
                    <Badge
                      variant={"secondary"}
                      className="rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    >
                      {publication.year}
                    </Badge>
                    <Badge
                      variant={"outline"}
                      className="rounded-md border-primary/20 text-primary"
                    >
                      {publication.type}
                    </Badge>
                  </div>

                  <CardTitle className="font-bold text-lg">
                    {publication.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="font-serif">
                  <p className="text-muted-foreground text-sm mb-2">
                    {publication.enrichedAuthors.map((author, j) => (
                      <Fragment key={j}>
                        <span
                          className={
                            author.isLabMember
                              ? "underline font-bold text-foreground"
                              : ""
                          }
                        >
                          {author.name}
                        </span>
                        {j < publication.enrichedAuthors.length - 1 ? ", " : ""}
                      </Fragment>
                    ))}
                  </p>
                  <p className="text-muted-foreground text-xs">
                    <span className="font-medium text-foreground">
                      Published in:
                    </span>{" "}
                    {publication.venue}
                  </p>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button size={"sm"} className="text-xs" variant={"outline"}>
                    <File className="size-3 mr-1" />
                    PDF
                  </Button>
                  {publication.link && (
                    <Button
                      size={"sm"}
                      asChild
                      className="text-xs"
                      variant={"outline"}
                    >
                      <Link href={publication.link}>
                        <SquareArrowOutUpRight className="size-3 mr-1" /> Link
                      </Link>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Sponsors */}
      <div className="w-full">
        <section className="text-center max-w-7xl mx-auto px-4 md:px-6 py-16">
          <h2 className="text-primary font-bold text-3xl">
            A thanks to our current and previous sponsors
          </h2>
          <div className="mt-8">
            <div className="lg:hidden">
              {chunkedItems.map((row, rowIndex) => (
                <div
                  key={rowIndex}
                  className="flex justify-center space-x-8 sm:space-x-16"
                >
                  {row.map((item, i) => {
                    return (
                      <div key={i} className="relative size-20 sm:size-30">
                        <ExportedImage
                          src={`${basepath}${item}`}
                          alt={"Icon"}
                          fill
                          className="object-contain"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>

            <div className="hidden lg:block max-w-5xl mx-auto">
              {mobileItems.map((row, rowIndex) => (
                <div
                  key={rowIndex}
                  className="flex flex-wrap justify-center space-x-12"
                >
                  {row.map((item, i) => (
                    <div key={i} className="relative size-32">
                      <ExportedImage
                        src={`${basepath}${item}`}
                        alt={"Icon"}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ClientPage;
