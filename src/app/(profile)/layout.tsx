import ProfileTabs from "@/components/Profile/ProfileTabs";
import "./../globals.css";
import Sidebar from "@/components/Sidebar/Sidebar";

export default function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Sidebar />
      <div className="mt-10 flex flex-col gap-8  max-w-[600px]  w-full  mx-auto lg:mx-0 h-fit flex-1">
        <ProfileTabs />
        {children}
      </div>
    </>
  );
}
