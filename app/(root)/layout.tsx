import Insights from "@/components/custom/cards";
import Logo from "@/components/custom/logo";
import NavList from "@/components/custom/nav-list";
import { UserButton } from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const user = await currentUser();
  console.log(user?.username)
  return (
    <div className="w-full h-screen flex flex-col">
      <div className="bg-pattern px-40 pt-10 pb-20">
        <div className="flex items-center justify-between">
          <Logo />
          <div className="flex items-center space-x-4">
            <NavList />
            <UserButton />
          </div>
        </div>
        <div className="font-bold text-4xl pt-10 pb-8 flex items-center">
          <span className="text-white">Welcome back, </span>
          <span>@{user?.username}👋</span>
        </div>
        {/* <Insights /> */}
      </div>
      <div className="bg-white">{children}</div>
    </div>
  );
}
