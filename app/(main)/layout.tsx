import { Header, Footer } from '../views';

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className="mt-16 flex h-fit w-full grow items-center justify-center">
        <div className="flex h-full w-full items-start justify-center">
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}
