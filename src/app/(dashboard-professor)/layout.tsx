import { Sidebar } from "@/components/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="min-h-screen grid grid-cols-app ">
      <Sidebar />
      <div className=' pb-12 pt-8 dark:bg-black w-[97vw] pl-80'>{children}</div>
    </section>
  );
}
