import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";

import "./app.css"
import Header from "@/components/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body>
        <Header />
        <main>
        {children}
        </main>

        </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
