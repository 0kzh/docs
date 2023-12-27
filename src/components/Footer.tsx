'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Button } from '@/components/Button'
import { navigation } from '@/components/Navigation'

function PageLink({
  label,
  page,
  previous = false,
}: {
  label: string
  page: { href: string; title: string }
  previous?: boolean
}) {
  return (
    <>
      <Button
        href={page.href}
        aria-label={`${label}: ${page.title}`}
        variant="secondary"
        arrow={previous ? 'left' : 'right'}
      >
        {label}
      </Button>
      <Link
        href={page.href}
        tabIndex={-1}
        aria-hidden="true"
        className="text-base font-semibold text-zinc-900 transition hover:text-zinc-600 dark:text-white dark:hover:text-zinc-300"
      >
        {page.title}
      </Link>
    </>
  )
}

function PageNavigation() {
  let pathname = usePathname()
  let allPages = navigation.flatMap((group) => group.links)
  let currentPageIndex = allPages.findIndex((page) => page.href === pathname)

  if (currentPageIndex === -1) {
    return null
  }

  let previousPage = allPages[currentPageIndex - 1]
  let nextPage = allPages[currentPageIndex + 1]

  if (!previousPage && !nextPage) {
    return null
  }

  return (
    <div className="flex">
      {previousPage && (
        <div className="flex flex-col items-start gap-3">
          <PageLink label="Previous" page={previousPage} previous />
        </div>
      )}
      {nextPage && (
        <div className="ml-auto flex flex-col items-end gap-3">
          <PageLink label="Next" page={nextPage} />
        </div>
      )}
    </div>
  )
}

function TwitterIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17.9441 5.92641C17.9568 6.10406 17.9568 6.28176 17.9568 6.45941C17.9568 11.8782 13.8325 18.1218 6.29441 18.1218C3.97207 18.1218 1.81473 17.4492 0 16.2818C0.329961 16.3198 0.647187 16.3325 0.989844 16.3325C2.90605 16.3325 4.67004 15.6853 6.07867 14.5813C4.27664 14.5432 2.76648 13.363 2.24617 11.7386C2.5 11.7766 2.75379 11.802 3.02031 11.802C3.38832 11.802 3.75637 11.7513 4.09898 11.6625C2.22082 11.2817 0.812148 9.63199 0.812148 7.63961V7.58887C1.35781 7.89344 1.99238 8.08379 2.66492 8.10914C1.56086 7.37309 0.837539 6.11676 0.837539 4.69543C0.837539 3.93402 1.04055 3.23606 1.3959 2.62692C3.41367 5.11422 6.44668 6.73856 9.84766 6.91625C9.78422 6.61168 9.74613 6.29445 9.74613 5.97719C9.74613 3.71828 11.5736 1.8782 13.8451 1.8782C15.0253 1.8782 16.0913 2.37313 16.84 3.17262C17.7664 2.99496 18.6547 2.65231 19.4416 2.18277C19.137 3.13457 18.4898 3.93406 17.6395 4.44164C18.4644 4.35285 19.2639 4.12438 19.9999 3.80715C19.4416 4.6193 18.7436 5.34262 17.9441 5.92641Z"
        fill="currentColor"
      />
    </svg>
  )
}

function SlackIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <path
          d="M4.20179 12.6384C4.20179 13.7946 3.25714 14.7393 2.10089 14.7393C0.944643 14.7393 0 13.7946 0 12.6384C0 11.4821 0.944643 10.5375 2.10089 10.5375H4.20179V12.6384ZM5.26071 12.6384C5.26071 11.4821 6.20536 10.5375 7.36161 10.5375C8.51786 10.5375 9.4625 11.4821 9.4625 12.6384V17.8991C9.4625 19.0554 8.51786 20 7.36161 20C6.20536 20 5.26071 19.0554 5.26071 17.8991V12.6384ZM7.36161 4.20179C6.20536 4.20179 5.26071 3.25714 5.26071 2.10089C5.26071 0.944643 6.20536 0 7.36161 0C8.51786 0 9.4625 0.944643 9.4625 2.10089V4.20179H7.36161ZM7.36161 5.26071C8.51786 5.26071 9.4625 6.20536 9.4625 7.36161C9.4625 8.51786 8.51786 9.4625 7.36161 9.4625H2.10089C0.944643 9.4625 0 8.51786 0 7.36161C0 6.20536 0.944643 5.26071 2.10089 5.26071H7.36161ZM15.7982 7.36161C15.7982 6.20536 16.7429 5.26071 17.8991 5.26071C19.0554 5.26071 20 6.20536 20 7.36161C20 8.51786 19.0554 9.4625 17.8991 9.4625H15.7982V7.36161ZM14.7393 7.36161C14.7393 8.51786 13.7946 9.4625 12.6384 9.4625C11.4821 9.4625 10.5375 8.51786 10.5375 7.36161V2.10089C10.5375 0.944643 11.4821 0 12.6384 0C13.7946 0 14.7393 0.944643 14.7393 2.10089V7.36161ZM12.6384 15.7982C13.7946 15.7982 14.7393 16.7429 14.7393 17.8991C14.7393 19.0554 13.7946 20 12.6384 20C11.4821 20 10.5375 19.0554 10.5375 17.8991V15.7982H12.6384ZM12.6384 14.7393C11.4821 14.7393 10.5375 13.7946 10.5375 12.6384C10.5375 11.4821 11.4821 10.5375 12.6384 10.5375H17.8991C19.0554 10.5375 20 11.4821 20 12.6384C20 13.7946 19.0554 14.7393 17.8991 14.7393H12.6384Z"
          fill="currentColor"
        />
      </g>
    </svg>
  )
}

function LinkedInIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18.5714 0H1.42411C0.638393 0 0 0.647322 0 1.44196V18.558C0 19.3527 0.638393 20 1.42411 20H18.5714C19.3571 20 20 19.3527 20 18.558V1.44196C20 0.647322 19.3571 0 18.5714 0ZM6.04464 17.1429H3.08036V7.59821H6.04911V17.1429H6.04464ZM4.5625 6.29464C3.61161 6.29464 2.84375 5.52232 2.84375 4.57589C2.84375 3.62946 3.61161 2.85714 4.5625 2.85714C5.50893 2.85714 6.28125 3.62946 6.28125 4.57589C6.28125 5.52679 5.51339 6.29464 4.5625 6.29464ZM17.1562 17.1429H14.192V12.5C14.192 11.3929 14.1696 9.96875 12.6518 9.96875C11.1071 9.96875 10.8705 11.1741 10.8705 12.4196V17.1429H7.90625V7.59821H10.75V8.90179H10.7902C11.1875 8.15179 12.1563 7.36161 13.5982 7.36161C16.5982 7.36161 17.1562 9.33929 17.1562 11.9107V17.1429Z"
        fill="currentColor"
      />
    </svg>
  )
}

function SocialLink({
  href,
  icon: Icon,
  children,
}: {
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <Link href={href} className="group">
      <span className="sr-only">{children}</span>
      <Icon className="h-5 w-5 fill-zinc-700 transition group-hover:fill-zinc-900 dark:group-hover:fill-zinc-500" />
    </Link>
  )
}

function SmallPrint() {
  return (
    <div className="flex flex-col items-center justify-between gap-5 border-t border-zinc-900/5 pt-8 dark:border-white/5 sm:flex-row">
      <p className="text-xs text-zinc-600 dark:text-zinc-400">
        &copy; Copyright htmldocs {new Date().getFullYear()}. All rights
        reserved.
      </p>
      <div className="flex gap-4">
        <SocialLink href="https://twitter.com/htmldocs" icon={TwitterIcon}>
          Follow us on Twitter
        </SocialLink>
        <SocialLink
          href="https://join.slack.com/t/htmldocs/shared_invite/zt-29hw1bnmu-ShX6Jo1KNc_XeF~gFQJH_Q"
          icon={SlackIcon}
        >
          Join our Slack server
        </SocialLink>
        <SocialLink
          href="https://linkedin.com/company/htmldocs"
          icon={LinkedInIcon}
        >
          Follow us on LinkedIn
        </SocialLink>
      </div>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="mx-auto w-full max-w-2xl space-y-10 pb-16 lg:max-w-5xl">
      <PageNavigation />
      <SmallPrint />
    </footer>
  )
}
