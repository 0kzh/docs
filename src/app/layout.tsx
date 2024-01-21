import glob from 'fast-glob'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'
import '@/styles/global.css'
import { type Metadata } from 'next'
import { type Section } from '@/components/SectionProvider'
import PlausibleProvider from 'next-plausible'

export const metadata: Metadata = {
  title: {
    template: '%s - htmldocs API Reference',
    default: 'htmldocs API Reference',
  },
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  let pages = await glob('**/*.mdx', { cwd: 'src/app' })
  let allSectionsEntries = (await Promise.all(
    pages.map(async (filename) => [
      '/' + filename.replace(/(^|\/)page\.mdx$/, ''),
      (await import(`./${filename}`)).sections,
    ]),
  )) as Array<[string, Array<Section>]>
  let allSections = Object.fromEntries(allSectionsEntries)

  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <head>
      <meta
          name="description"
          content="An online document editor for creating and automating generation of PDF documents from HTML/CSS. No installation required, REST API, and free to use. Hundreds of templates from invoices, reports, resumes, legal documents, and more."
        />
        <meta
          name="keywords"
          content="pdf, document, editor, generator, html, css, javascript, api, automate, template, invoice, report, resume, legal, document, free, online"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="https://htmldocs.com" />
        <meta name="twitter:creator" content="@htmldocs" />
        <meta name="twitter:title" content="htmldocs" />
        <meta
          name="twitter:description"
          content="An online document editor for creating and automating generation of PDF documents from HTML/CSS. No installation required, REST API, and free to use. Hundreds of templates from invoices, reports, resumes, legal documents, and more."
        />
        <meta
          name="twitter:image"
          content="https://htmldocs.com/og-image.jpg"
        />
        <meta
          name="twitter:image:src"
          content="https://htmldocs.com/og-image.jpg"
        />
        <meta
          name="twitter:image:alt"
          content="htmldocs - build and generate PDF documents from HTML"
        />
        <meta name="twitter:url" content="https://htmldocs.com" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="https://htmldocs.com/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://htmldocs.com/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="https://htmldocs.com/favicon-16x16.png"
        />
        <link rel="manifest" href="https://htmldocs.com/site.webmanifest" />
        <link
          rel="mask-icon"
          href="https://htmldocs.com/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <PlausibleProvider domain="htmldocs.com" />
      </head>
      <body className="flex min-h-full bg-white antialiased dark:bg-zinc-900">
        <Providers>
          <div className="w-full">
            <Layout allSections={allSections}>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
