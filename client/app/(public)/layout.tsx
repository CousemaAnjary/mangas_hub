
export default function AuthLayout({ children }: { children: React.ReactNode }) {
    /**
     * ! STATE (état, données) de l'application
     */


    /**
     * ! COMPORTEMENT (méthodes, fonctions) de l'application
     */


    /**
     * ! AFFICHAGE (render) de l'application
     */
    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* <Toaster richColors /> */}
            {/* En-tête */}
            <header>
                {/* <Navbar /> */}
            </header>

            {/* Contenu principal */}
            <main >
                {/* Section 1 */}
                <section className="flex min-h-[84vh]  items-center justify-center ">
                    {children}
                </section>
            </main>

            {/* Pied de page */}
            <footer></footer>
        </div>
    )
}