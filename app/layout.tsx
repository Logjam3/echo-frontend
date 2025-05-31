export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-white font-sans">{children}</body>
    </html>
  );
}
