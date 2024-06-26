/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/ef3EgZl7l5e
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
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Product() {
  return (
    <section className="flex flex-col items-center justify-center py-12 md:py-16 lg:py-20">
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">Featured Products</h2>
      <div className="mt-8 grid w-full max-w-md grid-cols-1 gap-6 sm:grid-cols-2 md:max-w-2xl md:grid-cols-2 lg:max-w-3xl lg:grid-cols-3">
        <div className="overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
          <Image
            alt="Product Image"
            className="h-48 w-full object-cover"
            height={400}
            src="/placeholder.svg"
            style={{
              aspectRatio: "600/400",
              objectFit: "cover",
            }}
            width={600}
          />
          <div className="bg-white px-4 py-5 dark:bg-gray-950">
            <h3 className="text-lg font-semibold">Acme Wireless Headphones</h3>
            <div className="mt-2 flex items-center justify-between">
              <p className="text-gray-500 dark:text-gray-400">$99.99</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Lagos, Nigeria</p>
            </div>
            <div className="mt-4">
              <Button size="sm">Preview</Button>
            </div>
          </div>
        </div>
        <div className="overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
          <Image
            alt="Product Image"
            className="h-48 w-full object-cover"
            height={400}
            src="/placeholder.svg"
            style={{
              aspectRatio: "600/400",
              objectFit: "cover",
            }}
            width={600}
          />
          <div className="bg-white px-4 py-5 dark:bg-gray-950">
            <h3 className="text-lg font-semibold">Acme Wireless Headphones</h3>
            <div className="mt-2 flex items-center justify-between">
              <p className="text-gray-500 dark:text-gray-400">$99.99</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Lagos, Nigeria</p>
            </div>
            <div className="mt-4">
              <Button size="sm">Preview</Button>
            </div>
          </div>
        </div>
        <div className="overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
          <Image
            alt="Product Image"
            className="h-48 w-full object-cover"
            height={400}
            src="/placeholder.svg"
            style={{
              aspectRatio: "600/400",
              objectFit: "cover",
            }}
            width={600}
          />
          <div className="bg-white px-4 py-5 dark:bg-gray-950">
            <h3 className="text-lg font-semibold">Acme Wireless Headphones</h3>
            <div className="mt-2 flex items-center justify-between">
              <p className="text-gray-500 dark:text-gray-400">$99.99</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Lagos, Nigeria</p>
            </div>
            <div className="mt-4">
              <Button size="sm">Preview</Button>
            </div>
          </div>
        </div>
        <div className="overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
          <Image
            alt="Product Image"
            className="h-48 w-full object-cover"
            height={400}
            src="/placeholder.svg"
            style={{
              aspectRatio: "600/400",
              objectFit: "cover",
            }}
            width={600}
          />
          <div className="bg-white px-4 py-5 dark:bg-gray-950">
            <h3 className="text-lg font-semibold">Acme Wireless Headphones</h3>
            <div className="mt-2 flex items-center justify-between">
              <p className="text-gray-500 dark:text-gray-400">$99.99</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Lagos, Nigeria</p>
            </div>
            <div className="mt-4">
              <Button size="sm">Preview</Button>
            </div>
          </div>
        </div>
        <div className="overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
          <Image
            alt="Product Image"
            className="h-48 w-full object-cover"
            height={400}
            src="/placeholder.svg"
            style={{
              aspectRatio: "600/400",
              objectFit: "cover",
            }}
            width={600}
          />
          <div className="bg-white px-4 py-5 dark:bg-gray-950">
            <h3 className="text-lg font-semibold">Acme Wireless Headphones</h3>
            <div className="mt-2 flex items-center justify-between">
              <p className="text-gray-500 dark:text-gray-400">$99.99</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Lagos, Nigeria</p>
            </div>
            <div className="mt-4">
              <Button size="sm">Preview</Button>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}
