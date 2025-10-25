import { Globe, File, AppWindow } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans text-zinc-900 dark:bg-black dark:text-zinc-50">
      <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-lg dark:border-zinc-800 dark:bg-black/80">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
            <Globe className="h-6 w-6" />
            <span>coderKaylee</span>
          </Link>
        </div>
      </header>

      <main className="flex-grow">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            My Journey Learning to Code
          </h1>
          <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            A personal blog documenting the ups, downs, and code of my
            transition into tech.
          </p>
        </div>

        <div className="mx-auto max-w-5xl px-6 pb-24">
          <h2 className="text-center text-2xl font-semibold tracking-tight">
            What to Expect
          </h2>
          <p className="mt-2 text-center text-zinc-600 dark:text-zinc-400">
            Follow along as I explore new technologies and share what I&apos;ve learned.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
              <File className="h-8 w-8 text-zinc-500" />
              <h3 className="mt-4 text-lg font-semibold">
                &quot;Hello World, Meet CoderKaylee&quot;
              </h3>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                My mission statement and what this blog is all about.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
              <AppWindow className="h-8 w-8 text-zinc-500" />
              <h3 className="mt-4 text-lg font-semibold">My Starting Stack</h3>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                The languages, courses, and resources I&apos;m using to learn.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
              <svg
                className="h-8 w-8 text-zinc-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m18 16 4-4-4-4" />
                <path d="m6 8-4 4 4 4" />
                <path d="m14.5 4-5 16" />
              </svg>
              <h3 className="mt-4 text-lg font-semibold">
                Day 1: The Dreaded Semicolon
              </h3>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                A focused technical post about variables, types, and syntax.
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-5xl px-6 py-8 text-center text-sm text-zinc-500">
          <p>&copy; {new Date().getFullYear()} coderKaylee. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
