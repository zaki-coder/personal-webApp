import Footer from './components/footer/Footer'
import NavBar from './components/navbar/NavBar'
import './globals.css'
import { Inter, Roboto, Poppins } from 'next/font/google';
import { ThemeProvider } from '../context/ThemeContext'
import AuthProvider from './components/AuthProvider/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Zaki Dev',
  description: 'This is the description',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <AuthProvider>
            <div className="container">
              <NavBar />
              {children}
              <Footer />
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
