export interface CountryData {
  id: string;
  name: string;
  data: {
    economic: {
      gdpGrowth: { year: number; value: number }[];
      unemploymentRate: { year: number; value: number }[];
      inflationRate: { year: number; value: number }[];
      publicDebt: { year: number; value: number }[];
      incomeInequality: { year: number; value: number }[];
      tradeBalance: { year: number; value: number }[];
    };
    social: {
      lifeSatisfaction: { year: number; value: number }[];
      workLifeBalance: { year: number; value: number }[];
      socialSupport: { year: number; value: number }[];
      personalSecurity: { year: number; value: number }[];
      lifeExpectancy: { year: number; value: number }[];
      healthcareAccess: { year: number; value: number }[];
      crimeRates: { year: number; value: number }[];
      homicideRates: { year: number; value: number }[];
      happinessIndex: { year: number; value: number }[];
    };
    health: {
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
    technology: {
      rdExpenditure: { year: number; value: number }[];
      internetPenetration: { year: number; value: number }[];
      stemGraduates: { year: number; value: number }[];
      patentApplications: { year: number; value: number }[];
      renewableEnergy: { year: number; value: number }[];
    };
    education: {
      literacyRate: { year: number; value: number }[];
      schoolEnrollment: { year: number; value: number }[];
      pisaScores: { year: number; value: number }[];
      educationExpenditure: { year: number; value: number }[];
      stemGraduatesPerc: { year: number; value: number }[];
    };
    civic: {
      freedomSpeechIndex: { year: number; value: number }[];
      pressFreedom: { year: number; value: number }[];
      publicOpinionFreeSpeech: { year: number; value: number }[];
      voterTurnout: { year: number; value: number }[];
      trustInGovernment: { year: number; value: number }[];
    };
    environment: {
      carbonEmissions: { year: number; value: number }[];
      airQualityIndex: { year: number; value: number }[];
      forestCoverage: { year: number; value: number }[];
      renewableEnergyUsage: { year: number; value: number }[];
      waterQuality: { year: number; value: number }[];
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
        incomeInequality: [
          { year: 2019, value: 31.9 },
          { year: 2020, value: 31.7 },
          { year: 2021, value: 31.5 },
          { year: 2022, value: 31.8 },
          { year: 2023, value: 31.6 }
        ],
        tradeBalance: [
          { year: 2019, value: 7.4 },
          { year: 2020, value: 6.8 },
          { year: 2021, value: 7.2 },
          { year: 2022, value: 6.9 },
          { year: 2023, value: 7.1 }
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
        ],
        lifeExpectancy: [
          { year: 2019, value: 81.3 },
          { year: 2020, value: 81.1 },
          { year: 2021, value: 80.9 },
          { year: 2022, value: 81.2 },
          { year: 2023, value: 81.4 }
        ],
        healthcareAccess: [
          { year: 2019, value: 9.2 },
          { year: 2020, value: 8.8 },
          { year: 2021, value: 9.0 },
          { year: 2022, value: 9.1 },
          { year: 2023, value: 9.2 }
        ],
        crimeRates: [
          { year: 2019, value: 6.7 },
          { year: 2020, value: 6.5 },
          { year: 2021, value: 6.3 },
          { year: 2022, value: 6.4 },
          { year: 2023, value: 6.2 }
        ],
        homicideRates: [
          { year: 2019, value: 0.9 },
          { year: 2020, value: 0.8 },
          { year: 2021, value: 0.9 },
          { year: 2022, value: 0.8 },
          { year: 2023, value: 0.7 }
        ],
        happinessIndex: [
          { year: 2019, value: 7.1 },
          { year: 2020, value: 7.0 },
          { year: 2021, value: 7.2 },
          { year: 2022, value: 7.1 },
          { year: 2023, value: 7.3 }
        ]
      },
      health: {
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
      },
      technology: {
        rdExpenditure: [
          { year: 2019, value: 3.2 },
          { year: 2020, value: 3.1 },
          { year: 2021, value: 3.3 },
          { year: 2022, value: 3.4 },
          { year: 2023, value: 3.5 }
        ],
        internetPenetration: [
          { year: 2019, value: 88.1 },
          { year: 2020, value: 89.8 },
          { year: 2021, value: 91.2 },
          { year: 2022, value: 92.5 },
          { year: 2023, value: 93.8 }
        ],
        stemGraduates: [
          { year: 2019, value: 35.2 },
          { year: 2020, value: 36.1 },
          { year: 2021, value: 36.8 },
          { year: 2022, value: 37.4 },
          { year: 2023, value: 38.0 }
        ],
        patentApplications: [
          { year: 2019, value: 67423 },
          { year: 2020, value: 62105 },
          { year: 2021, value: 65872 },
          { year: 2022, value: 68341 },
          { year: 2023, value: 70125 }
        ],
        renewableEnergy: [
          { year: 2019, value: 17.4 },
          { year: 2020, value: 19.3 },
          { year: 2021, value: 21.0 },
          { year: 2022, value: 22.8 },
          { year: 2023, value: 24.5 }
        ]
      },
      education: {
        literacyRate: [
          { year: 2019, value: 99.0 },
          { year: 2020, value: 99.2 },
          { year: 2021, value: 99.4 },
          { year: 2022, value: 99.6 },
          { year: 2023, value: 99.8 }
        ],
        schoolEnrollment: [
          { year: 2019, value: 95.0 },
          { year: 2020, value: 95.2 },
          { year: 2021, value: 95.4 },
          { year: 2022, value: 95.6 },
          { year: 2023, value: 95.8 }
        ],
        pisaScores: [
          { year: 2019, value: 500.0 },
          { year: 2020, value: 502.0 },
          { year: 2021, value: 504.0 },
          { year: 2022, value: 506.0 },
          { year: 2023, value: 508.0 }
        ],
        educationExpenditure: [
          { year: 2019, value: 5.5 },
          { year: 2020, value: 5.6 },
          { year: 2021, value: 5.7 },
          { year: 2022, value: 5.8 },
          { year: 2023, value: 5.9 }
        ],
        stemGraduatesPerc: [
          { year: 2019, value: 30.0 },
          { year: 2020, value: 30.5 },
          { year: 2021, value: 31.0 },
          { year: 2022, value: 31.5 },
          { year: 2023, value: 32.0 }
        ]
      },
      civic: {
        freedomSpeechIndex: [
          { year: 2019, value: 100.0 },
          { year: 2020, value: 100.2 },
          { year: 2021, value: 100.4 },
          { year: 2022, value: 100.6 },
          { year: 2023, value: 100.8 }
        ],
        pressFreedom: [
          { year: 2019, value: 100.0 },
          { year: 2020, value: 100.2 },
          { year: 2021, value: 100.4 },
          { year: 2022, value: 100.6 },
          { year: 2023, value: 100.8 }
        ],
        publicOpinionFreeSpeech: [
          { year: 2019, value: 100.0 },
          { year: 2020, value: 100.2 },
          { year: 2021, value: 100.4 },
          { year: 2022, value: 100.6 },
          { year: 2023, value: 100.8 }
        ],
        voterTurnout: [
          { year: 2019, value: 80.0 },
          { year: 2020, value: 80.2 },
          { year: 2021, value: 80.4 },
          { year: 2022, value: 80.6 },
          { year: 2023, value: 80.8 }
        ],
        trustInGovernment: [
          { year: 2019, value: 70.0 },
          { year: 2020, value: 70.2 },
          { year: 2021, value: 70.4 },
          { year: 2022, value: 70.6 },
          { year: 2023, value: 70.8 }
        ]
      },
      environment: {
        carbonEmissions: [
          { year: 2019, value: 10.0 },
          { year: 2020, value: 9.8 },
          { year: 2021, value: 9.6 },
          { year: 2022, value: 9.4 },
          { year: 2023, value: 9.2 }
        ],
        airQualityIndex: [
          { year: 2019, value: 50.0 },
          { year: 2020, value: 50.2 },
          { year: 2021, value: 50.4 },
          { year: 2022, value: 50.6 },
          { year: 2023, value: 50.8 }
        ],
        forestCoverage: [
          { year: 2019, value: 30.0 },
          { year: 2020, value: 30.2 },
          { year: 2021, value: 30.4 },
          { year: 2022, value: 30.6 },
          { year: 2023, value: 30.8 }
        ],
        renewableEnergyUsage: [
          { year: 2019, value: 20.0 },
          { year: 2020, value: 20.2 },
          { year: 2021, value: 20.4 },
          { year: 2022, value: 20.6 },
          { year: 2023, value: 20.8 }
        ],
        waterQuality: [
          { year: 2019, value: 50.0 },
          { year: 2020, value: 50.2 },
          { year: 2021, value: 50.4 },
          { year: 2022, value: 50.6 },
          { year: 2023, value: 50.8 }
        ]
      }
    }
  },
  {
    id: "pl",
    name: "Poland",
    data: {
      economic: {
        gdpGrowth: [
          { year: 2019, value: 4.7 },
          { year: 2020, value: -2.5 },
          { year: 2021, value: 5.9 },
          { year: 2022, value: 4.8 },
          { year: 2023, value: 0.4 }
        ],
        unemploymentRate: [
          { year: 2019, value: 3.3 },
          { year: 2020, value: 3.2 },
          { year: 2021, value: 3.4 },
          { year: 2022, value: 2.9 },
          { year: 2023, value: 2.8 }
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
        ],
        incomeInequality: [
          { year: 2019, value: 29.7 },
          { year: 2020, value: 29.9 },
          { year: 2021, value: 30.1 },
          { year: 2022, value: 30.3 },
          { year: 2023, value: 30.5 }
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
        ],
        lifeExpectancy: [
          { year: 2019, value: 77.9 },
          { year: 2020, value: 77.4 },
          { year: 2021, value: 77.8 },
          { year: 2022, value: 78.1 },
          { year: 2023, value: 78.3 }
        ],
        healthcareAccess: [
          { year: 2019, value: 8.1 },
          { year: 2020, value: 7.8 },
          { year: 2021, value: 8.0 },
          { year: 2022, value: 8.2 },
          { year: 2023, value: 8.3 }
        ],
        crimeRates: [
          { year: 2019, value: 7.8 },
          { year: 2020, value: 7.5 },
          { year: 2021, value: 7.3 },
          { year: 2022, value: 7.4 },
          { year: 2023, value: 7.2 }
        ],
        homicideRates: [
          { year: 2019, value: 1.2 },
          { year: 2020, value: 1.1 },
          { year: 2021, value: 1.0 },
          { year: 2022, value: 1.1 },
          { year: 2023, value: 1.0 }
        ],
        happinessIndex: [
          { year: 2019, value: 6.2 },
          { year: 2020, value: 6.1 },
          { year: 2021, value: 6.3 },
          { year: 2022, value: 6.4 },
          { year: 2023, value: 6.5 }
        ]
      },
      health: {
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
      },
      technology: {
        rdExpenditure: [
          { year: 2019, value: 1.3 },
          { year: 2020, value: 1.4 },
          { year: 2021, value: 1.5 },
          { year: 2022, value: 1.6 },
          { year: 2023, value: 1.7 }
        ],
        internetPenetration: [
          { year: 2019, value: 78.0 },
          { year: 2020, value: 80.5 },
          { year: 2021, value: 82.3 },
          { year: 2022, value: 84.1 },
          { year: 2023, value: 85.8 }
        ],
        stemGraduates: [
          { year: 2019, value: 25.1 },
          { year: 2020, value: 25.8 },
          { year: 2021, value: 26.4 },
          { year: 2022, value: 27.1 },
          { year: 2023, value: 27.8 }
        ],
        patentApplications: [
          { year: 2019, value: 4521 },
          { year: 2020, value: 4612 },
          { year: 2021, value: 4834 },
          { year: 2022, value: 5102 },
          { year: 2023, value: 5341 }
        ],
        renewableEnergy: [
          { year: 2019, value: 12.2 },
          { year: 2020, value: 13.1 },
          { year: 2021, value: 14.3 },
          { year: 2022, value: 15.5 },
          { year: 2023, value: 16.8 }
        ]
      },
      education: {
        literacyRate: [
          { year: 2019, value: 98.1 },
          { year: 2020, value: 98.3 },
          { year: 2021, value: 98.5 },
          { year: 2022, value: 98.7 },
          { year: 2023, value: 98.9 }
        ],
        schoolEnrollment: [
          { year: 2019, value: 93.1 },
          { year: 2020, value: 93.4 },
          { year: 2021, value: 93.7 },
          { year: 2022, value: 94.0 },
          { year: 2023, value: 94.3 }
        ],
        pisaScores: [
          { year: 2019, value: 485 },
          { year: 2020, value: 487 },
          { year: 2021, value: 489 },
          { year: 2022, value: 491 },
          { year: 2023, value: 493 }
        ],
        educationExpenditure: [
          { year: 2019, value: 4.6 },
          { year: 2020, value: 4.7 },
          { year: 2021, value: 4.8 },
          { year: 2022, value: 4.9 },
          { year: 2023, value: 5.0 }
        ],
        stemGraduatesPerc: [
          { year: 2019, value: 22.1 },
          { year: 2020, value: 22.5 },
          { year: 2021, value: 22.9 },
          { year: 2022, value: 23.3 },
          { year: 2023, value: 23.7 }
        ]
      },
      civic: {
        freedomSpeechIndex: [
          { year: 2019, value: 85.2 },
          { year: 2020, value: 85.5 },
          { year: 2021, value: 85.8 },
          { year: 2022, value: 86.1 },
          { year: 2023, value: 86.4 }
        ],
        pressFreedom: [
          { year: 2019, value: 82.3 },
          { year: 2020, value: 82.6 },
          { year: 2021, value: 82.9 },
          { year: 2022, value: 83.2 },
          { year: 2023, value: 83.5 }
        ],
        publicOpinionFreeSpeech: [
          { year: 2019, value: 78.4 },
          { year: 2020, value: 78.7 },
          { year: 2021, value: 79.0 },
          { year: 2022, value: 79.3 },
          { year: 2023, value: 79.6 }
        ],
        voterTurnout: [
          { year: 2019, value: 61.2 },
          { year: 2020, value: 61.5 },
          { year: 2021, value: 61.8 },
          { year: 2022, value: 62.1 },
          { year: 2023, value: 62.4 }
        ],
        trustInGovernment: [
          { year: 2019, value: 45.3 },
          { year: 2020, value: 45.6 },
          { year: 2021, value: 45.9 },
          { year: 2022, value: 46.2 },
          { year: 2023, value: 46.5 }
        ]
      },
      environment: {
        carbonEmissions: [
          { year: 2019, value: 8.1 },
          { year: 2020, value: 7.9 },
          { year: 2021, value: 7.7 },
          { year: 2022, value: 7.5 },
          { year: 2023, value: 7.3 }
        ],
        airQualityIndex: [
          { year: 2019, value: 42.3 },
          { year: 2020, value: 42.6 },
          { year: 2021, value: 42.9 },
          { year: 2022, value: 43.2 },
          { year: 2023, value: 43.5 }
        ],
        forestCoverage: [
          { year: 2019, value: 29.8 },
          { year: 2020, value: 29.9 },
          { year: 2021, value: 30.0 },
          { year: 2022, value: 30.1 },
          { year: 2023, value: 30.2 }
        ],
        renewableEnergyUsage: [
          { year: 2019, value: 15.2 },
          { year: 2020, value: 15.5 },
          { year: 2021, value: 15.8 },
          { year: 2022, value: 16.1 },
          { year: 2023, value: 16.4 }
        ],
        waterQuality: [
          { year: 2019, value: 72.3 },
          { year: 2020, value: 72.6 },
          { year: 2021, value: 72.9 },
          { year: 2022, value: 73.2 },
          { year: 2023, value: 73.5 }
        ]
      }
    }
  },
  {
    id: "ro",
    name: "Romania",
    data: {
      economic: {
        gdpGrowth: [
          { year: 2019, value: 4.2 },
          { year: 2020, value: -3.7 },
          { year: 2021, value: 5.8 },
          { year: 2022, value: 4.7 },
          { year: 2023, value: 2.1 }
        ],
        unemploymentRate: [
          { year: 2019, value: 3.9 },
          { year: 2020, value: 5.0 },
          { year: 2021, value: 5.6 },
          { year: 2022, value: 5.4 },
          { year: 2023, value: 5.3 }
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
        ],
        incomeInequality: [
          { year: 2019, value: 29.7 },
          { year: 2020, value: 29.9 },
          { year: 2021, value: 30.1 },
          { year: 2022, value: 30.3 },
          { year: 2023, value: 30.5 }
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
        ],
        lifeExpectancy: [
          { year: 2019, value: 77.9 },
          { year: 2020, value: 77.4 },
          { year: 2021, value: 77.8 },
          { year: 2022, value: 78.1 },
          { year: 2023, value: 78.3 }
        ],
        healthcareAccess: [
          { year: 2019, value: 8.1 },
          { year: 2020, value: 7.8 },
          { year: 2021, value: 8.0 },
          { year: 2022, value: 8.2 },
          { year: 2023, value: 8.3 }
        ],
        crimeRates: [
          { year: 2019, value: 7.8 },
          { year: 2020, value: 7.5 },
          { year: 2021, value: 7.3 },
          { year: 2022, value: 7.4 },
          { year: 2023, value: 7.2 }
        ],
        homicideRates: [
          { year: 2019, value: 1.2 },
          { year: 2020, value: 1.1 },
          { year: 2021, value: 1.0 },
          { year: 2022, value: 1.1 },
          { year: 2023, value: 1.0 }
        ],
        happinessIndex: [
          { year: 2019, value: 6.2 },
          { year: 2020, value: 6.1 },
          { year: 2021, value: 6.3 },
          { year: 2022, value: 6.4 },
          { year: 2023, value: 6.5 }
        ]
      },
      health: {
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
      },
      technology: {
        rdExpenditure: [
          { year: 2019, value: 1.3 },
          { year: 2020, value: 1.4 },
          { year: 2021, value: 1.5 },
          { year: 2022, value: 1.6 },
          { year: 2023, value: 1.7 }
        ],
        internetPenetration: [
          { year: 2019, value: 78.0 },
          { year: 2020, value: 80.5 },
          { year: 2021, value: 82.3 },
          { year: 2022, value: 84.1 },
          { year: 2023, value: 85.8 }
        ],
        stemGraduates: [
          { year: 2019, value: 25.1 },
          { year: 2020, value: 25.8 },
          { year: 2021, value: 26.4 },
          { year: 2022, value: 27.1 },
          { year: 2023, value: 27.8 }
        ],
        patentApplications: [
          { year: 2019, value: 4521 },
          { year: 2020, value: 4612 },
          { year: 2021, value: 4834 },
          { year: 2022, value: 5102 },
          { year: 2023, value: 5341 }
        ],
        renewableEnergy: [
          { year: 2019, value: 12.2 },
          { year: 2020, value: 13.1 },
          { year: 2021, value: 14.3 },
          { year: 2022, value: 15.5 },
          { year: 2023, value: 16.8 }
        ]
      },
      education: {
        literacyRate: [
          { year: 2019, value: 98.1 },
          { year: 2020, value: 98.3 },
          { year: 2021, value: 98.5 },
          { year: 2022, value: 98.7 },
          { year: 2023, value: 98.9 }
        ],
        schoolEnrollment: [
          { year: 2019, value: 93.1 },
          { year: 2020, value: 93.4 },
          { year: 2021, value: 93.7 },
          { year: 2022, value: 94.0 },
          { year: 2023, value: 94.3 }
        ],
        pisaScores: [
          { year: 2019, value: 485 },
          { year: 2020, value: 487 },
          { year: 2021, value: 489 },
          { year: 2022, value: 491 },
          { year: 2023, value: 493 }
        ],
        educationExpenditure: [
          { year: 2019, value: 4.6 },
          { year: 2020, value: 4.7 },
          { year: 2021, value: 4.8 },
          { year: 2022, value: 4.9 },
          { year: 2023, value: 5.0 }
        ],
        stemGraduatesPerc: [
          { year: 2019, value: 22.1 },
          { year: 2020, value: 22.5 },
          { year: 2021, value: 22.9 },
          { year: 2022, value: 23.3 },
          { year: 2023, value: 23.7 }
        ]
      },
      civic: {
        freedomSpeechIndex: [
          { year: 2019, value: 85.2 },
          { year: 2020, value: 85.5 },
          { year: 2021, value: 85.8 },
          { year: 2022, value: 86.1 },
          { year: 2023, value: 86.4 }
        ],
        pressFreedom: [
          { year: 2019, value: 82.3 },
          { year: 2020, value: 82.6 },
          { year: 2021, value: 82.9 },
          { year: 2022, value: 83.2 },
          { year: 2023, value: 83.5 }
        ],
        publicOpinionFreeSpeech: [
          { year: 2019, value: 78.4 },
          { year: 2020, value: 78.7 },
          { year: 2021, value: 79.0 },
          { year: 2022, value: 79.3 },
          { year: 2023, value: 79.6 }
        ],
        voterTurnout: [
          { year: 2019, value: 61.2 },
          { year: 2020, value: 61.5 },
          { year: 2021, value: 61.8 },
          { year: 2022, value: 62.1 },
          { year: 2023, value: 62.4 }
        ],
        trustInGovernment: [
          { year: 2019, value: 45.3 },
          { year: 2020, value: 45.6 },
          { year: 2021, value: 45.9 },
          { year: 2022, value: 46.2 },
          { year: 2023, value: 46.5 }
        ]
      },
      environment: {
        carbonEmissions: [
          { year: 2019, value: 8.1 },
          { year: 2020, value: 7.9 },
          { year: 2021, value: 7.7 },
          { year: 2022, value: 7.5 },
          { year: 2023, value: 7.3 }
        ],
        airQualityIndex: [
          { year: 2019, value: 42.3 },
          { year: 2020, value: 42.6 },
          { year: 2021, value: 42.9 },
          { year: 2022, value: 43.2 },
          { year: 2023, value: 43.5 }
        ],
        forestCoverage: [
          { year: 2019, value: 29.8 },
          { year: 2020, value: 29.9 },
          { year: 2021, value: 30.0 },
          { year: 2022, value: 30.1 },
          { year: 2023, value: 30.2 }
        ],
        renewableEnergyUsage: [
          { year: 2019, value: 15.2 },
          { year: 2020, value: 15.5 },
          { year: 2021, value: 15.8 },
          { year: 2022, value: 16.1 },
          { year: 2023, value: 16.4 }
        ],
        waterQuality: [
          { year: 2019, value: 72.3 },
          { year: 2020, value: 72.6 },
          { year: 2021, value: 72.9 },
          { year: 2022, value: 73.2 },
          { year: 2023, value: 73.5 }
        ]
      }
    }
  }
];