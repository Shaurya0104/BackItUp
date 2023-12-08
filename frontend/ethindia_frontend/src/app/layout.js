import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Crypto Backup',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth overflow-x-hidden'>
      <body className={inter.className}>
        {children}
      <script src="https://unpkg.com/taos@1.0.5/dist/taos.js" async></script>
      </body>
    </html>
  )
}
