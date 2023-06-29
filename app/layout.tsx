import Header from './components/header'
import { Roboto_Mono } from 'next/font/google'
import './globals.css'

const roboto_mono = Roboto_Mono({ subsets: ['latin'] })

export const metadata = {
  title: 'NULLPTRS©',
  description: 'In computing, a null pointer or null reference is a value saved for indicating that the pointer or reference does not refer to a valid object.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto_mono.className}>
        <Header/>
        {children}
      </body>
    </html>
  )
}
