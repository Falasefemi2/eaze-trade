/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/9QR5b5DHQpx
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import Image from "next/image"
import { Button } from "../ui/button"

export function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Discover Product and Buy
            </h1>
            <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
              Explore our wide range of products and find the perfect one for you.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button asChild>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md px-8 text-sm font-medium text-gray-50 shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="#"
              >
                Sell
              </Link>
            </Button>
            <Button asChild variant="secondary">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md border  px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50  dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                href="#"
              >
                Explore
              </Link>
            </Button>
          </div>
        </div>
        <Image
          alt="Hero"
          className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
          height="550"
          src="/hero.jpg"
          width="550"
        />
      </div>
    </section>
  )
}