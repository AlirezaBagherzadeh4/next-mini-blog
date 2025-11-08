export const Header: React.FC = () => {
  return (
    <header className="fixed top-0 z-10 flex h-fit max-h-20 w-full items-center justify-center bg-black py-4 text-white">
      <div className="flex h-fit w-full max-w-lg flex-col items-center justify-between gap-4 bg-inherit">
        <h1 className="text-center text-2xl font-bold">Next Mini Blog</h1>
      </div>
    </header>
  );
};
