"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Chart } from "@/components/ui/chart";
import { countryData } from "@/data/countries";

export default function Dashboard() {
  const [selectedCountry, setSelectedCountry] = useState("de");
  const country = countryData.find(c => c.id === selectedCountry)!;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          {/* Header */}
          <div className="flex flex-col space-y-4 md:flex-row md:justify-between md:items-center">
            <h1 className="text-4xl font-bold">Nation Pulse 🌐</h1>
            <Select value={selectedCountry} onValueChange={setSelectedCountry}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select country" />
              </SelectTrigger>
              <SelectContent>
                {countryData.map((country) => (
                  <SelectItem key={country.id} value={country.id}>
                    {country.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Main Dashboard */}
          <Tabs defaultValue="economic" className="space-y-4">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 gap-2">
              <TabsTrigger value="economic">Economic</TabsTrigger>
              <TabsTrigger value="social">Social</TabsTrigger>
              <TabsTrigger value="health">Health</TabsTrigger>
              <TabsTrigger value="financial">Financial</TabsTrigger>
              <TabsTrigger value="fiscal">Fiscal</TabsTrigger>
            </TabsList>

            {/* Economic Indicators */}
            <TabsContent value="economic" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <Chart
                    data={country.data.economic.gdpGrowth}
                    xField="year"
                    yField="value"
                    title="GDP Growth (%)"
                    description="Annual growth rate of GDP, adjusted for inflation. This indicator shows how much the economy has grown or contracted compared to the previous year."
                    source={{
                      name: "World Bank National Accounts Data",
                      url: "https://data.worldbank.org/indicator/NY.GDP.MKTP.KD.ZG"
                    }}
                  />
                </Card>
                <Card>
                  <Chart
                    data={country.data.economic.unemploymentRate}
                    xField="year"
                    yField="value"
                    title="Unemployment Rate (%)"
                    description="Percentage of the labor force that is without work but available for and seeking employment. Lower rates indicate a healthier job market."
                    source={{
                      name: "International Labour Organization (ILO)",
                      url: "https://ilostat.ilo.org/data/"
                    }}
                  />
                </Card>
              </div>
            </TabsContent>

            {/* Social Well-being */}
            <TabsContent value="social" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <Chart
                    data={country.data.social.lifeSatisfaction}
                    xField="year"
                    yField="value"
                    title="Life Satisfaction (0-10)"
                    description="Average reported life satisfaction on a scale from 0 to 10. This measure reflects people's overall evaluation of their lives and well-being."
                    source={{
                      name: "OECD Better Life Index",
                      url: "https://www.oecdbetterlifeindex.org/"
                    }}
                  />
                </Card>
                <Card>
                  <Chart
                    data={country.data.social.workLifeBalance}
                    xField="year"
                    yField="value"
                    title="Work-Life Balance (0-10)"
                    description="Assessment of work-life balance, measuring the ability to combine work, family commitments, and personal life. Higher scores indicate better balance."
                    source={{
                      name: "OECD Better Life Index",
                      url: "https://www.oecdbetterlifeindex.org/"
                    }}
                  />
                </Card>
              </div>
            </TabsContent>

            {/* Health & Safety */}
            <TabsContent value="health" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <Chart
                    data={country.data.health.lifeExpectancy}
                    xField="year"
                    yField="value"
                    title="Life Expectancy (Years)"
                    description="Average number of years a newborn can expect to live. This is a key indicator of population health and quality of healthcare systems."
                    source={{
                      name: "World Health Organization",
                      url: "https://www.who.int/data/gho/data/indicators"
                    }}
                  />
                </Card>
                <Card>
                  <Chart
                    data={country.data.health.healthcareAccess}
                    xField="year"
                    yField="value"
                    title="Healthcare Access (0-10)"
                    description="Measure of healthcare system accessibility, including factors like coverage, waiting times, and out-of-pocket costs. Higher scores indicate better access."
                    source={{
                      name: "OECD Health Statistics",
                      url: "https://www.oecd.org/health/health-statistics.htm"
                    }}
                  />
                </Card>
              </div>
            </TabsContent>

            {/* Financial Well-being */}
            <TabsContent value="financial" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <Chart
                    data={country.data.financial.householdIncome}
                    xField="year"
                    yField="value"
                    title="Household Income (€)"
                    description="Average annual disposable income per household, adjusted for inflation. This indicates the purchasing power and living standards of households."
                    source={{
                      name: "Eurostat",
                      url: "https://ec.europa.eu/eurostat/web/income-and-living-conditions"
                    }}
                  />
                </Card>
                <Card>
                  <Chart
                    data={country.data.financial.savingsRate}
                    xField="year"
                    yField="value"
                    title="Savings Rate (%)"
                    description="Percentage of disposable income that households save. Higher rates indicate greater financial security and future investment capacity."
                    source={{
                      name: "OECD National Accounts",
                      url: "https://data.oecd.org/hha/household-savings.htm"
                    }}
                  />
                </Card>
              </div>
            </TabsContent>

            {/* Fiscal Health */}
            <TabsContent value="fiscal" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <Chart
                    data={country.data.fiscal.governmentBalance}
                    xField="year"
                    yField="value"
                    title="Government Balance (% of GDP)"
                    description="Government's fiscal position as a percentage of GDP. Positive values indicate a surplus, while negative values show a deficit."
                    source={{
                      name: "IMF Fiscal Monitor",
                      url: "https://www.imf.org/external/datamapper/fiscalmonitor"
                    }}
                  />
                </Card>
                <Card>
                  <Chart
                    data={country.data.fiscal.taxRevenue}
                    xField="year"
                    yField="value"
                    title="Tax Revenue (% of GDP)"
                    description="Total tax revenue as a percentage of GDP. This indicates the government's capacity to fund public services and infrastructure."
                    source={{
                      name: "OECD Revenue Statistics",
                      url: "https://stats.oecd.org/Index.aspx?DataSetCode=REV"
                    }}
                  />
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}