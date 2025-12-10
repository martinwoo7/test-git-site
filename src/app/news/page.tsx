import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { News } from "@/lib/news";
import { ArrowRight, Calendar } from "lucide-react";
import ExportedImage from "next-image-export-optimizer";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import moment from "moment";

import { upcomingEvents } from "@/lib/news";

const Page = () => {
  const featuredNews = News.filter((item) => item.featured);
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Set to the beginning of the day for comparison

  const futureEvents = upcomingEvents.filter((event) => {
    const eventDate = event.endDate
      ? new Date(event.endDate)
      : new Date(event.date);
    return eventDate >= today;
  });

  const basepath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return (
    <div className="container py-12 max-w-7xl">
      <section className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
          News & Events
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl font-serif">
          Stay updated with the latest news, achievements, announcements, and
          upcoming events from BAM Lab.
        </p>
      </section>

      <section>
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-primary">
          Featured Stories
        </h2>
        <div className="grid lg:grid-cols-2 gap-8">
          <Dialog>
            <Card className="rounded-md lg:row-span-2 group">
              <div className="relative aspect-16/10 lg:aspect-4/3 overflow-hidden">
                <ExportedImage
                  src={
                    featuredNews[0].image
                      ? `${basepath}${featuredNews[0].image}`
                      : `${basepath}imgs/meeting.png`
                  }
                  alt={featuredNews[0].title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <h3 className="text-2xl md:text-3xl font-bold mb-2 leading-tight">
                  {featuredNews[0].title}
                </h3>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {featuredNews[0].date}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-2 font-serif line-clamp-3">
                  {featuredNews[0].description}
                </p>
                <DialogTrigger asChild>
                  <Button variant={"link"} className="group/btn">
                    Read More{" "}
                    <ArrowRight className="size-4 group-hover/btn:translate-x-1 duration-200" />
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>{featuredNews[0].title}</DialogTitle>
                    <DialogDescription>
                      {featuredNews[0].date}
                    </DialogDescription>
                    <DialogClose />
                  </DialogHeader>
                  <div>
                    <div className="relative aspect-16/10 lg:aspect-4/3 overflow-hidden">
                      <ExportedImage
                        src={
                          featuredNews[0].image
                            ? `${basepath}${featuredNews[0].image}`
                            : `${basepath}imgs/meeting.png`
                        }
                        alt={featuredNews[0].title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p>{featuredNews[0].description}</p>
                  </div>
                </DialogContent>
              </CardContent>
            </Card>
          </Dialog>
          {/* Secondary Featured */}
          <div className="flex flex-col gap-6">
            {featuredNews.slice(1, 3).map((item, index) => (
              <Dialog key={index}>
                <Card className="overflow-hidden flex flex-col md:flex-row rounded-md">
                  <div className="md:ml-4 relative aspect-16/10 md:aspect-square md:w-60 shrink-0 overflow-hidden">
                    <ExportedImage
                      src={
                        item.image
                          ? `${basepath}${item.image}`
                          : `${basepath}imgs/meeting.png`
                      }
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex flex-col justify-between items-start p-5">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm text-muted-foreground">
                          {item.date}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold leading-tight group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="line-clamp-3 text-sm text-muted-foreground font-serif">
                        {item.description}
                      </p>
                    </div>

                    <DialogTrigger asChild>
                      <Button variant={"link"} className="group/btn">
                        Read More{" "}
                        <ArrowRight className="size-4 group-hover/btn:translate-x-1 duration-200" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>{item.title}</DialogTitle>
                        <DialogDescription>{item.date}</DialogDescription>
                        <DialogClose />
                      </DialogHeader>
                      <div>
                        <div className="relative aspect-16/10 lg:aspect-4/3 overflow-hidden">
                          <ExportedImage
                            src={
                              item.image
                                ? `${basepath}${item.image}`
                                : `${basepath}imgs/meeting.png`
                            }
                            alt={item.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <p className="mt-2 font-serif text-sm">
                          {item.description}
                        </p>
                      </div>
                    </DialogContent>
                  </div>
                </Card>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-primary">
          Upcoming Events
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {futureEvents && futureEvents.length > 0 ? (
            futureEvents.map((event, index) => {
              const date = moment(event.date);
              const endDate = event.endDate ? moment(event.endDate) : null;

              return (
                <Card key={index} className="rounded-md">
                  <CardHeader className="pb-3">
                    <div
                      className={`flex items-center gap-2 text-primary font-medium mb-2`}
                    >
                      <Calendar className="h-4 w-4" />
                      <div>
                        {date.format("MMMM D")}

                        {endDate && <span>{`-` + endDate.format("D")}</span>}
                        {`, ` + date.format("YYYY")}
                      </div>
                    </div>

                    <CardTitle className="text-lg leading-tight">
                      {event.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm text-muted-foreground">
                    <p>{event.time}</p>
                    <p>{event.location}</p>
                    <p className="font-medium text-foreground">
                      {event.speaker}
                    </p>
                  </CardContent>
                </Card>
              );
            })
          ) : (
            <div className="col-span-2">
              <p>There are currently no upcoming events.</p>
            </div>
          )}
        </div>
      </section>

      {/* All News */}
      <section className="py-12 md:py-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-primary">
            All News
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {News.map((item, index) => (
            <Dialog key={index}>
              <Card className="rounded-md group overflow-hidden">
                <div className="relative aspect-16/10 lg:aspect-4/3 overflow-hidden">
                  <ExportedImage
                    src={
                      item.image
                        ? `${basepath}${item.image}`
                        : `${basepath}imgs/meeting.png`
                    }
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {item.date}
                  </div>
                  <CardTitle className="text-xl leading-tight">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-serif text-muted-foreground leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                  <DialogTrigger asChild>
                    <Button variant={"link"} className="group/btn">
                      Read More{" "}
                      <ArrowRight className="size-4 group-hover/btn:translate-x-1 duration-200" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>{item.title}</DialogTitle>
                      <DialogDescription>{item.date}</DialogDescription>
                      <DialogClose />
                    </DialogHeader>
                    <div>
                      <div className="relative aspect-16/10 lg:aspect-4/3 overflow-hidden">
                        <ExportedImage
                          src={
                            item.image
                              ? `${basepath}${item.image}`
                              : `${basepath}imgs/meeting.png`
                          }
                          alt={item.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <p className="mt-2 font-serif text-sm">
                        {item.description}
                      </p>
                    </div>
                  </DialogContent>
                </CardContent>
              </Card>
            </Dialog>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Page;
