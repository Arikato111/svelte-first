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
        <noscript>
          <meta httpEquiv="refresh" content="2; URL=https://html.nawasan.dev" />
          <div className='fixed w-full h-[100vh] top-0 z-[100] bg-white'>
            <h1 className='md:text-6xl text-center'>redirect to no script page</h1>
          </div>
        </noscript>
        {children}
        <Footer />
      </body>
    </html>
  )
}
