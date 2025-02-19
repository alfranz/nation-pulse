export const germanyData = {
    economic: {
        gdpGrowth: [
            { date: "2019", value: 1.1 },
            { date: "2020", value: -4.6 },
            { date: "2021", value: 2.9 },
            { date: "2022", value: 1.8 },
            { date: "2023", value: 0.3 },
        ],
        unemployment: [
            { date: "2019", value: 5.0 },
            { date: "2020", value: 5.9 },
            { date: "2021", value: 5.7 },
            { date: "2022", value: 5.3 },
            { date: "2023", value: 5.7 },
        ],
        inflation: [
            { date: "2019", value: 1.4 },
            { date: "2020", value: 0.5 },
            { date: "2021", value: 3.1 },
            { date: "2022", value: 7.9 },
            { date: "2023", value: 6.1 },
        ],
    },
    social: {
        lifeSatisfaction: [
            { date: "2019", value: 7.3 },
            { date: "2020", value: 7.1 },
            { date: "2021", value: 6.9 },
            { date: "2022", value: 7.0 },
            { date: "2023", value: 7.2 },
        ],
        workLifeBalance: [
            { date: "2019", value: 8.4 },
            { date: "2020", value: 8.2 },
            { date: "2021", value: 8.3 },
            { date: "2022", value: 8.5 },
            { date: "2023", value: 8.4 },
        ],
    },
    crime: {
        violentCrimes: [
            { date: "2019", value: 181054 },
            { date: "2020", value: 178098 },
            { date: "2021", value: 164839 },
            { date: "2022", value: 175063 },
            { date: "2023", value: 179681 },
        ],
        safetyPerception: [
            { date: "2019", value: 7.8 },
            { date: "2020", value: 7.9 },
            { date: "2021", value: 7.7 },
            { date: "2022", value: 7.6 },
            { date: "2023", value: 7.5 },
        ],
    },
    financial: {
        householdIncome: [
            { date: "2019", value: 43058 },
            { date: "2020", value: 42938 },
            { date: "2021", value: 43760 },
            { date: "2022", value: 44501 },
            { date: "2023", value: 45123 },
        ],
        savingsRate: [
            { date: "2019", value: 10.9 },
            { date: "2020", value: 16.5 },
            { date: "2021", value: 15.1 },
            { date: "2022", value: 11.1 },
            { date: "2023", value: 10.8 },
        ],
    },
}

export type CountryData = typeof germanyData 