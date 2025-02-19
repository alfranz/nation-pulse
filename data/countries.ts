export interface CountryData {
  id: string;
  name: string;
  data: {
    economic: {
      gdpGrowth: { year: number; value: number }[];
      unemploymentRate: { year: number; value: number }[];
      inflationRate: { year: number; value: number }[];
      publicDebt: { year: number; value: number }[];
      tradeBalance: { year: number; value: number }[];
    };
    social: {
      lifeSatisfaction: { year: number; value: number }[];
      workLifeBalance: { year: number; value: number }[];
      socialSupport: { year: number; value: number }[];
      personalSecurity: { year: number; value: number }[];
    };
    health: {
      healthcareAccess: { year: number; value: number }[];
      lifeExpectancy: { year: number; value: number }[];
      crimeRates: { year: number; value: number }[];
      safetyPerception: { year: number; value: number }[];
    };
    financial: {
      householdIncome: { year: number; value: number }[];
      householdDebt: { year: number; value: number }[];
      housingAffordability: { year: number; value: number }[];
      savingsRate: { year: number; value: number }[];
    };
    fiscal: {
      governmentBalance: { year: number; value: number }[];
      taxRevenue: { year: number; value: number }[];
      publicSpending: { year: number; value: number }[];
    };
  };
}

export const countryData: CountryData[] = [
  {
    id: "de",
    name: "Germany",
    data: {
      economic: {
        gdpGrowth: [
          { year: 2019, value: 0.6 },
          { year: 2020, value: -4.6 },
          { year: 2021, value: 2.9 },
          { year: 2022, value: 1.8 },
          { year: 2023, value: -0.3 }
        ],
        unemploymentRate: [
          { year: 2019, value: 3.1 },
          { year: 2020, value: 3.8 },
          { year: 2021, value: 3.5 },
          { year: 2022, value: 3.0 },
          { year: 2023, value: 2.9 }
        ],
        inflationRate: [
          { year: 2019, value: 1.4 },
          { year: 2020, value: 0.5 },
          { year: 2021, value: 3.1 },
          { year: 2022, value: 7.9 },
          { year: 2023, value: 6.1 }
        ],
        publicDebt: [
          { year: 2019, value: 59.2 },
          { year: 2020, value: 68.7 },
          { year: 2021, value: 69.3 },
          { year: 2022, value: 66.3 },
          { year: 2023, value: 64.7 }
        ],
        tradeBalance: [
          { year: 2019, value: 7.1 },
          { year: 2020, value: 5.9 },
          { year: 2021, value: 6.8 },
          { year: 2022, value: 3.5 },
          { year: 2023, value: 4.2 }
        ]
      },
      social: {
        lifeSatisfaction: [
          { year: 2019, value: 7.0 },
          { year: 2020, value: 6.8 },
          { year: 2021, value: 6.9 },
          { year: 2022, value: 6.7 },
          { year: 2023, value: 6.8 }
        ],
        workLifeBalance: [
          { year: 2019, value: 8.2 },
          { year: 2020, value: 8.0 },
          { year: 2021, value: 7.8 },
          { year: 2022, value: 7.9 },
          { year: 2023, value: 8.0 }
        ],
        socialSupport: [
          { year: 2019, value: 7.5 },
          { year: 2020, value: 7.3 },
          { year: 2021, value: 7.4 },
          { year: 2022, value: 7.6 },
          { year: 2023, value: 7.5 }
        ],
        personalSecurity: [
          { year: 2019, value: 8.8 },
          { year: 2020, value: 8.9 },
          { year: 2021, value: 8.7 },
          { year: 2022, value: 8.6 },
          { year: 2023, value: 8.5 }
        ]
      },
      health: {
        healthcareAccess: [
          { year: 2019, value: 9.2 },
          { year: 2020, value: 8.8 },
          { year: 2021, value: 9.0 },
          { year: 2022, value: 9.1 },
          { year: 2023, value: 9.2 }
        ],
        lifeExpectancy: [
          { year: 2019, value: 81.3 },
          { year: 2020, value: 81.1 },
          { year: 2021, value: 80.9 },
          { year: 2022, value: 81.2 },
          { year: 2023, value: 81.4 }
        ],
        crimeRates: [
          { year: 2019, value: 6.7 },
          { year: 2020, value: 6.5 },
          { year: 2021, value: 6.3 },
          { year: 2022, value: 6.4 },
          { year: 2023, value: 6.2 }
        ],
        safetyPerception: [
          { year: 2019, value: 8.1 },
          { year: 2020, value: 8.2 },
          { year: 2021, value: 8.0 },
          { year: 2022, value: 7.9 },
          { year: 2023, value: 8.0 }
        ]
      },
      financial: {
        householdIncome: [
          { year: 2019, value: 43200 },
          { year: 2020, value: 42800 },
          { year: 2021, value: 43500 },
          { year: 2022, value: 44100 },
          { year: 2023, value: 44800 }
        ],
        householdDebt: [
          { year: 2019, value: 95.2 },
          { year: 2020, value: 97.1 },
          { year: 2021, value: 98.3 },
          { year: 2022, value: 96.8 },
          { year: 2023, value: 95.9 }
        ],
        housingAffordability: [
          { year: 2019, value: 6.8 },
          { year: 2020, value: 6.6 },
          { year: 2021, value: 6.2 },
          { year: 2022, value: 5.9 },
          { year: 2023, value: 5.7 }
        ],
        savingsRate: [
          { year: 2019, value: 10.9 },
          { year: 2020, value: 16.1 },
          { year: 2021, value: 15.0 },
          { year: 2022, value: 11.1 },
          { year: 2023, value: 10.8 }
        ]
      },
      fiscal: {
        governmentBalance: [
          { year: 2019, value: 1.5 },
          { year: 2020, value: -4.3 },
          { year: 2021, value: -3.7 },
          { year: 2022, value: -2.6 },
          { year: 2023, value: -2.0 }
        ],
        taxRevenue: [
          { year: 2019, value: 41.7 },
          { year: 2020, value: 41.5 },
          { year: 2021, value: 42.3 },
          { year: 2022, value: 42.9 },
          { year: 2023, value: 43.1 }
        ],
        publicSpending: [
          { year: 2019, value: 45.2 },
          { year: 2020, value: 50.8 },
          { year: 2021, value: 49.1 },
          { year: 2022, value: 47.2 },
          { year: 2023, value: 46.1 }
        ]
      }
    }
  }
];