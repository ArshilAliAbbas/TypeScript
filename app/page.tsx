import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen mx-auto grid grid-rows-[10px_1fr_1000px] justify-items-center min-h-screen p-8 pb-20 gap-10 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="mx-auto flex flex-col gap-[40px] row-start-1 items-center justify-items-center sm:items-start">
        <div className="mx-auto flex flex-col gap-[40px] items-center justify-items-center sm:items-start text-6xl font-bold bg-gradient-to-r from-[#F9F7F7] to-[#3F72AF] bg-clip-text text-transparent ">
          Arshil Ali Abbas
        </div>

        <div className="mx-auto mb-10 tracking-[.8em] text-center animate-flicker animate-pulse  drop-shadow-[0_0_10px_#4F1C51)] text-[#60B5FF]">
          Student | Entrepreneur | Developer
        </div>

        <div className=" mx-auto text-lg  text-center  sm:text-left gap-1  font-[family-name:var(--font-geist-sans)] text-[#60B5FF]  ">
          {/* //for jitter effect. */}
          <div className="text-[#B6FFFA] animate-flicker animate-pulse text-center text-3xl drop-shadow-[0_0_10px_rgb(177,50,228)]">
            Howdy!! <br />
          </div>
          <div className="text-[#7895B2] animate-flicker text-center text-2xl drop-shadow-[0_0_10px_rgb(204,204,204)] font-semibold bg-#cccc bg-clip-text ">
            <p>
              I'm Arshil Ali Abbas
              <br />I am passionate web developer & tech enthusiast on a mission
              to build sleek, high-performing websites and master the world of
              coding & AI. I’m constantly pushing my limits to learn new
              technologies, perfect my coding skills, and create stunning
              digital experiences. My goal? To crack high-paying tech jobs at
              Google, win hackathons, and turn ideas into powerful,
              user-friendly products.
            </p>
          </div>
        </div>
        <div className="mx-auto flex gap-4 items-center justify-items-center flex-col sm:flex-row animate-bounce ">
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
            className="text-[#FFECDB]  pd-10  rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center dark:hover:bg-[#3D0000] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-10 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://linktr.ee/Arshil.io"
            target="_blank"
            rel="noopener noreferrer" //page security.
          >
            More about me.
          </a>
        </div>
        <div>
          <h2 className="mx-auto text-3xl mt-20 font-bold bg-gradient-to-r from-[#C9D6DF] to-[#52616B] bg-clip-text text-transparent">
            Skills
          </h2>
          <div className="justify-items-center min-h-screen p-8 pb-20 gap-10 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <div className="">Git</div>
            <div className="">DaVinci</div>
            <div className="">C</div>
            <div className="">Python</div>
            <div className="">Figma</div>
            <div>Type Scirpt.</div>
          </div>
        </div>
      </main>

      {/* <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
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
      </footer> */}
    </div>
  );
}
