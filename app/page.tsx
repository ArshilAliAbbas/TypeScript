import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[10px_1fr_1000px] justify-items-center min-h-screen p-8 pb-20 gap-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[40px] row-start-1 items-center justify-items-center sm:items-start">
        <Image
          className="mx-auto"
          src="/rmgName.png"
          alt="Next.js logo"
          width={500}
          height={500}
          priority
        />
        <ol className=" flex items-center justify-center justify-items-center list-inside list-decimal text-sm/15 text-center sm:text-left font-[family-name:var(--font-geist-mono)] bg-name gap-1">
          <ul className="mb-10 tracking-[.8em] text-center">
            Student | Entrepreneur | Developer
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold "></code>
          </ul>
        </ol>

        <div className="mx-auto flex gap-4 items-center justify-items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-1 hover:bg-[#E4EFE7] dark:hover:bg-[#E4EFE7] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto "
            href="https://www.linkedin.com/in/arshilaliabbas/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className=""
              src="/wr.png"
              alt="linkdlnlogo"
              width={30}
              height={30}
            />
            LinkedIn
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#E83F25] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-10 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://linktr.ee/Arshil.io"
            target="_blank"
            rel="noopener noreferrer" //page security.
          >
            About Me.
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Instagram
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          G i t h u b
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          M o n e y
        </a>
      </footer>
    </div>
  );
}
