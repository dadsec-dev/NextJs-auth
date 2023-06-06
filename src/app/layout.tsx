import  Link  from 'next/link';
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NextJs Authentication',
  description: 'Playaround using NextJs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='flex justify-between item-center gap-5'>
          <h1>Next Auth</h1>

          <div className='flex gap item-center'>
              <Link href="/">Home</Link>
              <Link href="/login">Login</Link>
              <Link href="/register">Register</Link>


              <Link href="/profile">Profile</Link>
          </div>
        </div>
        {children}
        <h1>Footer Testing</h1>
      </body>
    </html>
  )
}
