// 20250701 UPDATE FOR PUBLIC REPO -SNIPPET WORKS
 
import Image, { type ImageProps } from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import HeroSectionApp from '@/components/herosection/HeroSectionApp'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'

const imagePaths = [
  '/images/photos/decurelabs-beach.jpg',
  '/images/photos/decurelabs-fintech.jpg',
  '/images/photos/decurelabs-lego.jpg',
  '/images/photos/decurelabs-mammothca.jpg',
];


import { type ArticleWithSlug, getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function BriefcaseIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Article({ article }: { article: ArticleWithSlug }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Newsletter() {
  return (
    <form
      action="/thank-you"
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">DecureLabs Newsletter: Coming Q4-2027</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Sign up to learn more about the intersection of finance & technology
      </p>
      <div className="mt-6 flex">
        <input
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10"
        />
        <Button type="submit" className="ml-4 flex-none">
          Join
        </Button>
      </div>
    </form>
  )
}

interface Role {
  company: string;
  title: string;
  logo: ImageProps['src'];
  start: string | { label: string; dateTime: string };
  end: string | { label: string; dateTime: string };
}

function LabIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={clsx("h-12 w-12", className)}
    >
      <path
        fill="none"
        stroke="#c7adf4"
        strokeDasharray={36}
        strokeDashoffset={36}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 3L9.65 8.76L3.44 9.22L8.2 13.24L6.71 19.28L12 16M12 3L14.35 8.76L20.56 9.22L15.8 13.24L17.29 19.28L12 16"
      >
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          dur="0.5s"
          values="36;0"
        />
        <animate
          attributeName="d"
          dur="1.5s"
          repeatCount="indefinite"
          values="M12 3L9.65 8.76L3.44 9.22L8.2 13.24L6.71 19.28L12 16M12 3L14.35 8.76L20.56 9.22L15.8 13.24L17.29 19.28L12 16;
                  M12 7L10.82 10.38L7.24 10.45L10.1 12.62L9.06 16.05L12 14M12 7L13.18 10.38L16.76 10.45L13.9 12.62L14.94 16.05L12 14;
                  M12 3L9.65 8.76L3.44 9.22L8.2 13.24L6.71 19.28L12 16M12 3L14.35 8.76L20.56 9.22L15.8 13.24L17.29 19.28L12 16"
        />
      </path>
    </svg>
  );
}


function Role({ role }: { role: Role }) {
  const startLabel = typeof role.start === 'string' ? role.start : role.start.label;
  const startDate = typeof role.start === 'string' ? role.start : role.start.dateTime;

  const endLabel = typeof role.end === 'string' ? role.end : role.end.label;
  const endDate = typeof role.end === 'string' ? role.end : role.end.dateTime;

  return (
    <li className="flex gap-4 items-center">
      <div className="relative flex h-12 w-12 flex-none items-center justify-center rounded-full shadow-md ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <LabIcon />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">{role.title}</dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={`${startDate} until ${endDate}`}
        >
          <time dateTime={startDate}>{startLabel}</time>{' '}
          <span aria-hidden="true">—</span>{' '}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  );
}

function Resume() {
  let resume: Role[] = [
    {
      company: 'Snowflake | Data Clean Room',
      title: 'Sales Engineer',
      logo: '/images/logos/lab.svg',
      start: '2024',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'MiQ | Adtech',
      title: 'Solutions Engineer',
      logo: '/images/logos/lab.svg',
      start: '2022',
      end: {
        label: '2024',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'BCD | IoT',
      title: 'Senior Sales Engineer',
      logo: '/images/logos/lab.svg',
      start: '2019',
      end: {
        label: '2022',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'Hustle | SaaS',
      title: 'Senior Sales Engineer',
      logo: '/images/logos/lab.svg',
      start: '2018',
      end: {
        label: '2019',
        dateTime: new Date().getFullYear().toString(),
      },
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">SE Journey</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
    </div>
  )
}

function Photos() {
  const rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2'];

  return (
    <div className="mt-16 sm:mt-20">
      <div
        className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4"
        style={{ gridAutoRows: 'minmax(100px, auto)' }}
      >
        {imagePaths.map((image, imageIndex) => (
          <div
            key={image}
            className={clsx(
              'relative overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800',
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image
              src={image}
              alt={`Gallery Image ${imageIndex + 1}`}
              width={300}
              height={300}
              className="object-cover w-full h-full rounded-xl"
              priority
            />
          </div>
        ))}
      </div>
    </div>
  );
}


export default async function Home() {
  let articles = (await getAllArticles()).slice(0, 4)

  return (
    <>
      <Container className="mt-9">
        {/* Embed YouTube Video */}
        <HeroSectionApp />

        {/* Intro Section */}
        <div className="max-w-2xl">
          <div></div>
          <div className="mb-6"></div>

          {/* Journey Section */}
          <h2 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Journey
          </h2>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            ⏭️ Please click the 'Journey' tab to learn about my SE Journey.
          </p>
          <hr className="my-8 border-t border-zinc-300 dark:border-zinc-600" />

          {/* Portfolio Section */}
          <h2 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Portfolio
          </h2>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            ⏭️ Please click the 'Portfolio' tab to test-drive the TypeScript & Python Apps I've developed.
          </p>
          <hr className="my-8 border-t border-zinc-300 dark:border-zinc-600" />
          {/* Calendly Section */}
          <h2 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Calendly
          </h2>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            ⏭️ Let's connect to learn more about your GTM needs or talk about music if you're a huge gaming & soundcloud nerd like me 🤓
          </p>
          <hr className="my-8 border-t border-zinc-300 dark:border-zinc-600" />

          {/* Calendly Button */}
          <div className="mt-6 flex justify-center">
            <Link href="https://calendly.com/malcolm-decuire/15min" target="_blank" rel="noopener noreferrer">
              <Button className="px-6 py-3 text-lg font-semibold">
                Schedule a Call 📅
              </Button>
            </Link>
          </div>

          {/* Social Links */}
          <div className="mt-6 flex gap-6">
            <SocialLink href="https://x.com/malcolm_decuire" aria-label="Follow on X" icon={XIcon} />
            <SocialLink href="https://www.instagram.com/womenin_fintech/?hl=en" aria-label="Follow on Instagram" icon={InstagramIcon} />
            <SocialLink href="https://github.com/malcolm-decuire" aria-label="Follow on GitHub" icon={GitHubIcon} />
            <SocialLink href="https://www.linkedin.com/in/malcolmdecuire/" aria-label="Follow on LinkedIn" icon={LinkedInIcon} />
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Newsletter />
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}