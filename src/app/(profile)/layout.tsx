import ProfileTabs from "@/components/Profile/ProfileTabs";
import "./../globals.css";
import Sidebar from "@/components/Sidebar/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Sidebar />
      <div className="flex-1 flex flex-col mt-10">
        <ProfileTabs />
        {children}
      </div>
    </>
  );
}
