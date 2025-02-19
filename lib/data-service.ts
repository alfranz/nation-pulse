import { germanyData, CountryData } from './data/germany'

const AVAILABLE_COUNTRIES = ['germany'] as const
type AvailableCountry = typeof AVAILABLE_COUNTRIES[number]

export function getCountryData(country: AvailableCountry): CountryData {
    switch (country) {
        case 'germany':
            return germanyData
        default:
            return germanyData // Default to Germany for now
    }
}

export function getAvailableCountries(): typeof AVAILABLE_COUNTRIES {
    return AVAILABLE_COUNTRIES
} 