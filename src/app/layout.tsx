import Navbar from '@/components/Navbar'
import './globals.css'

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/na.svg" type="image/x-icon" />
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
