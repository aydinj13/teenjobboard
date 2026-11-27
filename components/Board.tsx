import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const listings = Array.from({ length: 12 }, (_, index) => index);

export function Board() {
  return (
    <section className="px-4 pb-10 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {listings.map((id) => (
          <Card key={id} className="h-full justify-between">
            <CardHeader>
              <CardTitle className="text-base">Job Title</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2.5">
                <Image
                  src="/image.png"
                  alt="Company"
                  width={32}
                  height={32}
                  className="size-8 shrink-0 rounded-full object-cover"
                />
                <p className="text-sm text-muted-foreground">Company Name</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Learn More</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
