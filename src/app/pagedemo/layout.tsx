export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <body>
        <p>Layout niveau 2</p>
        {children}
      </body>
  );
}
