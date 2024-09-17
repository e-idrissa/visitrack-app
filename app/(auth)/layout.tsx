import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="bg-white min-h-screen flex items-center justify-center">
        {children}
      </div>
      <div className="hidden lg:flex bg-pattern min-h-screen items-center justify-center p-[20%]">
        <div className="bg-white/20 rounded-2xl border-white border relative h-full w-full p-8">
          <Image
            src="/woman.png"
            alt="woman"
            width={600}
            height={600}
            className="absolute bottom-0 -right-36"
          />
          <Image
            src="/logo.png"
            alt="woman"
            width={80}
            height={80}
            className="absolute bottom-24 -left-10"
          />
          <div className="h-full w-full text-4xl font-semibold leading-normal">
            <p>
              Very good
              <br />
              works are
              <br />
              waiting for
              <br />
              you Login
              <br />
              Now!!!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
