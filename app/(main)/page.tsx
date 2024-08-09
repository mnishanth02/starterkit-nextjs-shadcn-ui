export default function Home() {
  return (
    <main className="mt-20 flex flex-col items-center justify-center gap-2">
      <h1 className="text-4xl font-semibold">Next.js Starter Kit</h1>
      <div className="mt-10">
        <h3 className="text-2xl underline underline-offset-4">Technologies used</h3>
        <ul className="mt-4 pl-4">
          <li>Shadcn ui</li>
          <li>React hook form & Zod</li>
          <li>Tanstack Query</li>
          <li>Zustand</li>
          <li>Typescript</li>
        </ul>
      </div>
    </main>
  );
}
