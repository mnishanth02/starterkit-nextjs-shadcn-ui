import Footer from "./_components/footer";
import { Header } from "./_components/header";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col">
      <Header />
      <main className="h-cover container">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
