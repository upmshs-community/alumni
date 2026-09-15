import './globals.css';
import Shell from '../components/Shell';

export const metadata = {
  title: 'UPM SHS AlumniTrack',
  description: 'Department of Medicine alumni tracking and outcomes system'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body><Shell>{children}</Shell></body>
    </html>
  );
}
