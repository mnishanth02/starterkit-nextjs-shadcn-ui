import ThemeToggle from "@/components/common/theme-toggle";

export default function Home() {
  return (
    <main className="container mx-auto flex h-screen items-center justify-center text-2xl font-semibold">
      Starter Kit - Nextjs - shadcn/ui
      <ThemeToggle />
    </main>
  );
}
