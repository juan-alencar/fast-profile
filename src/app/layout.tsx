import { ReactNode } from 'react'
import './globals.css'
// eslint-disable-next-line camelcase
import { Plus_Jakarta_Sans } from 'next/font/google'

// const manrope = Manrope({ subsets: ['latin'] })
const plusJakarta = Plus_Jakarta_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Juan Alencar',
  description: 'Desenvolvedor de Software',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt">
      <body className={plusJakarta.className} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  )
}
