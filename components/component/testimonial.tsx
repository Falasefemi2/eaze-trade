

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/H9lLsvRtm3J
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Card } from "@/components/ui/card"
import { CarouselItem, CarouselContent, CarouselPrevious, CarouselNext, Carousel } from "@/components/ui/carousel"

export default function Testimonial() {
  return (
    <Carousel className="w-full max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <CarouselContent>
        <CarouselItem>
          <Card className="flex flex-col items-center gap-4 p-6">
            <Avatar>
              <AvatarImage alt="Jared Palmer" src="/placeholder-avatar.jpg" />
              <AvatarFallback>JP</AvatarFallback>
            </Avatar>
            <div className="text-center">
              <h4 className="text-lg font-semibold">Jared Palmer</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">CEO, Acme Inc</p>
            </div>
            <blockquote className="text-lg font-medium leading-relaxed">
              &quot;The customer service I received was exceptional. The support team went above and beyond to address my
              concerns.&quot;
            </blockquote>
          </Card>
        </CarouselItem>
        <CarouselItem>
          <Card className="flex flex-col items-center gap-4 p-6">
            <Avatar>
              <AvatarImage alt="Olivia Nguyen" src="/placeholder-avatar.jpg" />
              <AvatarFallback>ON</AvatarFallback>
            </Avatar>
            <div className="text-center">
              <h4 className="text-lg font-semibold">Olivia Nguyen</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">Product Manager, Globex Corp</p>
            </div>
            <blockquote className="text-lg font-medium leading-relaxed">
              &quot;I was impressed by the intuitive user interface and the wide range of features. It has become an
              essential tool for our team.&quot;
            </blockquote>
          </Card>
        </CarouselItem>
        <CarouselItem>
          <Card className="flex flex-col items-center gap-4 p-6">
            <Avatar>
              <AvatarImage alt="Michael Chen" src="/placeholder-avatar.jpg" />
              <AvatarFallback>MC</AvatarFallback>
            </Avatar>
            <div className="text-center">
              <h4 className="text-lg font-semibold">Michael Chen</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">CTO, Stark Industries</p>
            </div>
            <blockquote className="text-lg font-medium leading-relaxed">
              &quot;The platform&apos;s scalability and reliability have been a game-changer for our rapidly growing business.&quot;
            </blockquote>
          </Card>
        </CarouselItem>
        <CarouselItem>
          <Card className="flex flex-col items-center gap-4 p-6">
            <Avatar>
              <AvatarImage alt="Emily Sato" src="/placeholder-avatar.jpg" />
              <AvatarFallback>ES</AvatarFallback>
            </Avatar>
            <div className="text-center">
              <h4 className="text-lg font-semibold">Emily Sato</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">Marketing Manager, Capsule Corp</p>
            </div>
            <blockquote className="text-lg font-medium leading-relaxed">
              &quot;The analytics and reporting features have been invaluable in helping us make data-driven decisions.&quot;
            </blockquote>
          </Card>
        </CarouselItem>
        <CarouselItem>
          <Card className="flex flex-col items-center gap-4 p-6">
            <Avatar>
              <AvatarImage alt="David Lee" src="/placeholder-avatar.jpg" />
              <AvatarFallback>DL</AvatarFallback>
            </Avatar>
            <div className="text-center">
              <h4 className="text-lg font-semibold">David Lee</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">Developer, Wayne Enterprises</p>
            </div>
            <blockquote className="text-lg font-medium leading-relaxed">
              &quot;The developer tools and documentation have made it easy for our team to integrate and customize the
              platform.&quot;
            </blockquote>
          </Card>
        </CarouselItem>
        <CarouselItem>
          <Card className="flex flex-col items-center gap-4 p-6">
            <Avatar>
              <AvatarImage alt="Sarah Patel" src="/placeholder-avatar.jpg" />
              <AvatarFallback>SP</AvatarFallback>
            </Avatar>
            <div className="text-center">
              <h4 className="text-lg font-semibold">Sarah Patel</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">Designer, Stark Industries</p>
            </div>
            <blockquote className="text-lg font-medium leading-relaxed">
              &quot;The platform&apos;s design and accessibility features have been a huge benefit for our team and our
              customers.&quot;
            </blockquote>
          </Card>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

