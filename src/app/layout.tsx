import Navbar from '@/components/Navbar'
import './globals.css'
import Footer from '@/components/Footer'

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body>
        <Navbar />
       {children}
        <Footer />
      </body>
    </html>
  )
}
