import "./globals.css"
import { Toaster } from "sonner"
import type { Metadata } from "next"
import { TanstackProvider } from "@/src/providers/tanstack-provider"
import { Inter, Mansalva, Mogra, Space_Grotesk } from "next/font/google"
import { ThemeProvider } from "@/src/providers/theme-provider"
import TopLoader from "@/src/components/TopLoader"




const inter = Inter({
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
})

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
})

const mansalva = Mansalva({
  variable: "--font-mansalva",
  weight: ["400"],
  subsets: ["latin"],
})

const mogra = Mogra({
  variable: "--font-mogra",
  weight: ["400"],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${mansalva.variable} ${mogra.variable}`}>
        <TanstackProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
           <TopLoader />
            <Toaster richColors />
            {children}
          </ThemeProvider>
        </TanstackProvider>
      </body>
    </html>
  )
}