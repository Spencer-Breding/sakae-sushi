import '../styles/globals.css'
import Navbar from '../components/navbar'

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff" />
                <meta
                    name="description"
                    content="Sakae Sushi Gardena, California"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, viewport-fit=cover" />
            </head>
            <body>
                <Navbar />
                <main>
                    {children}
                </main>
            </body>
        </html>
    )
}
