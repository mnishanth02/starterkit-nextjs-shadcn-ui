import { FC } from "react";

interface HeaderLayoutProps {
  children: React.ReactNode;
}

const HeaderLayout: FC<HeaderLayoutProps> = ({ children }) => {
  return (
    <header className="inset-x-0 top-0 z-30 h-[60px] w-full py-3 backdrop-blur-md transition-all">
      <div className="container mx-auto px-4">{children}</div>
    </header>
  );
};

export default HeaderLayout;
