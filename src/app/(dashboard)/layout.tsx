import SidebarMenu from "@/components/SidebarMenu";
import Navbar from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/* LEFT */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%]">
        <Link
          href={"/"}
          className="flex justify-cente lg:justify-startr items-center gap-x-2 p-4"
        >
          <Image src={"/images/logo.png"} alt="logo" width={32} height={32} />
          <span className="hidden lg:block font-bold">CK-School</span>
        </Link>
        <SidebarMenu />
      </div>
      {/* RIGHT */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
