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
                    content="Design, Modeling, Sculpting, Prototypes, Metalwork, Woodwork, Fiberglass, Carpentry, Welding, Trade Shows, Set Building, Custom Furniture, Painting, Finishing, Project Management, Logistics, Resin Work"
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
