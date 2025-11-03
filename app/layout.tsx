"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./globals.css";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName = usePathname();
  const [activeLink, setactiveLink] = useState({});
  const selectedTab = (data: string) => {
    let obj = {}
    obj[data] = "header-color";
    setactiveLink(obj);
  }
  useEffect(() => {
    if (pathName.length === 1)
      setactiveLink({ home: "header-color" })
    else if (pathName === "/about")
      setactiveLink({ about: "header-color" })
    else if (pathName === "/contact")
      setactiveLink({ contact: "header-color" })
    else if (pathName.includes("/blog/") || pathName ==="/blog")
      setactiveLink({ blog: "header-color" })
    else
      setactiveLink({})
  }, [])
  return (
    <html lang="en">
      <head>
        <title>RDX Next App</title>
        <link rel="icon" href="/RDXNextApp.png" type="image/x-icon"></link>
      </head>
      <body>
        <header className="bg-purple-800 shadow-sm border-b border-gray-200">
          <nav className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between">
              <Image src="/RDXNextApp.jpeg" alt="RDX Next App" width={193} height={0}></Image>
              <div className="flexs items-center gap-6">
                <Link href={"/"} className={"text-base text-white header-hover-link font-medium transition-colors pr-6 " + activeLink.home} title="home" onClick={() => { selectedTab("home") }}>Home</Link>
                <Link href={"/about"} className={" text-base text-white header-hover-link font-medium transition-colors  pr-6 " + activeLink.about} title="about" onClick={() => { selectedTab("about") }}>About</Link>
                <Link href={"/contact"} className={"text-base text-white header-hover-link font-medium transition-colors pr-6 " + activeLink.contact} title="contact" onClick={() => { selectedTab("contact") }}>Contact</Link>
                <Link href={"/blog"} className={"text-base text-white header-hover-link font-medium transition-colors " + activeLink.blog} title="blog" onClick={() => { selectedTab("blog") }}>Blog</Link>
              </div>
            </div>
          </nav>
        </header>
        <main>
          {children}
        </main>
        <footer className="bg-purple-800 text-white py-8">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <p className="text-white-400">
              &copy; {new Date().getFullYear()} RDX Next App — All Rights Reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
