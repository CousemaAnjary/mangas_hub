import { CalendarDays } from "lucide-react"

export default function DashboadPage() {
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
    <>
      {/* Header */}
      <div className="mb-8 flex w-full items-center justify-between rounded-lg bg-white p-4 px-6 shadow-sm border">
        <div>
          <h1 className="font-spaceGrotesk text-xl font-medium text-gray-800">
            Tableau de bord
          </h1>
          <p className="text-gray-600 mt-1 text-sm font-spaceGrotesk">
            Vue d&apos;ensemble de vos activités et tendances.
          </p>
        </div>
        <div className="text-right flex flex-col items-end gap-1">
          <div className="flex items-center gap-1 text-sm text-muted-foreground font-spaceGrotesk">
            <CalendarDays className="h-4 w-4" />
            <span>Aujourd&apos;hui</span>
          </div>
          <p className="font-semibold text-gray-800 font-spaceGrotesk">
            {new Date().toLocaleDateString("fr-FR", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </div>
    </>
  )
}
