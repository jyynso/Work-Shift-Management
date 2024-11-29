import '@styles/globals.css';

export const metadata = {
    title: "A Work Shift Management App",
    description: 'A handy tool to organize your shifts and schedules'
}
const RootLayout = ({children}) => {
  return (
    <html lang="en">
        <body>
            <main>
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout