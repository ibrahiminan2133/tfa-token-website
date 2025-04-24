import '../styles/globals.css';

export const metadata = {
  title: 'The Fallen Angels',
  description: 'A blockchain-powered movement honoring women lost to violence.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
