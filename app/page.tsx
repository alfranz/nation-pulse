import { CountrySelector } from '@/components/country-selector'
import { DashboardHeader } from '@/components/dashboard-header'
import { StatisticsGrid } from '@/components/statistics-grid'

export default function Home() {
    return (
        <main className="min-h-screen bg-background p-4 md:p-8">
            <DashboardHeader />
            <div className="mx-auto max-w-7xl space-y-8">
                <CountrySelector />
                <StatisticsGrid />
            </div>
        </main>
    )
} 