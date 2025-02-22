"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Chart } from "@/components/ui/chart";
import { countryData } from "@/data/countries";
import { ModeToggle } from "@/components/mode-toggle";

export default function Dashboard() {
  const [selectedCountry, setSelectedCountry] = useState("de");
  const country = countryData.find(c => c.id === selectedCountry)!;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          {/* Header */}
          <div className="flex flex-col space-y-4 md:flex-row md:justify-between md:items-center">
            <div>
              <h1 className="text-4xl font-bold">Nation Pulse 🌐</h1>
              <p className="mt-2 text-muted-foreground">
                This site makes global and national data accessible to everyone.
                It empowers citizens to track progress, demand accountability, and work toward a more prosperous future.


              </p>
            </div>
            <div className="flex items-center gap-4">
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
              <ModeToggle />
            </div>
          </div>

          {/* Main Dashboard */}
          <Tabs defaultValue="economic" className="space-y-4">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-6 gap-2">
              <TabsTrigger value="economic">Economic</TabsTrigger>
              <TabsTrigger value="social">Social</TabsTrigger>
              <TabsTrigger value="technology">Technology</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="civic">Civic</TabsTrigger>
              <TabsTrigger value="environment">Environment</TabsTrigger>
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
                <Card>
                  <Chart
                    data={country.data.economic.inflationRate}
                    xField="year"
                    yField="value"
                    title="Inflation Rate (%)"
                    description="Annual change in consumer prices. Moderate inflation (2-3%) is typically considered healthy for economic growth."
                    source={{
                      name: "World Bank Development Indicators",
                      url: "https://data.worldbank.org/indicator/FP.CPI.TOTL.ZG"
                    }}
                  />
                </Card>
                <Card>
                  <Chart
                    data={country.data.economic.publicDebt}
                    xField="year"
                    yField="value"
                    title="Public Debt (% of GDP)"
                    description="Total government debt as a percentage of GDP. High levels may affect government spending capacity and economic stability."
                    source={{
                      name: "IMF World Economic Outlook",
                      url: "https://www.imf.org/external/datamapper/GGXWDG_NGDP@WEO"
                    }}
                  />
                </Card>
                <Card>
                  <Chart
                    data={country.data.economic.incomeInequality}
                    xField="year"
                    yField="value"
                    title="Income Inequality (Gini Coefficient)"
                    description="Measure of income distribution inequality. A value of 0 represents perfect equality, while 100 indicates maximum inequality."
                    source={{
                      name: "World Bank",
                      url: "https://data.worldbank.org/indicator/SI.POV.GINI"
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
                <Card>
                  <Chart
                    data={country.data.social.socialSupport}
                    xField="year"
                    yField="value"
                    title="Social Support (0-10)"
                    description="Measure of social connections and community support networks. Higher scores indicate stronger social cohesion."
                    source={{
                      name: "OECD Better Life Index",
                      url: "https://www.oecdbetterlifeindex.org/"
                    }}
                  />
                </Card>
                <Card>
                  <Chart
                    data={country.data.social.personalSecurity}
                    xField="year"
                    yField="value"
                    title="Personal Security (0-10)"
                    description="Assessment of personal safety and security in daily life. Higher scores indicate greater perceived safety."
                    source={{
                      name: "OECD Better Life Index",
                      url: "https://www.oecdbetterlifeindex.org/"
                    }}
                  />
                </Card>
              </div>
            </TabsContent>

            {/* Technology */}
            <TabsContent value="technology" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <Chart
                    data={country.data.technology.rdExpenditure}
                    xField="year"
                    yField="value"
                    title="R&D Expenditure (% of GDP)"
                    description="Research and development spending as a percentage of GDP. Higher investment typically indicates stronger innovation capacity."
                    source={{
                      name: "UNESCO Institute for Statistics",
                      url: "http://data.uis.unesco.org/"
                    }}
                  />
                </Card>
                <Card>
                  <Chart
                    data={country.data.technology.internetPenetration}
                    xField="year"
                    yField="value"
                    title="Internet Penetration (%)"
                    description="Percentage of population with internet access. A key indicator of digital infrastructure and accessibility."
                    source={{
                      name: "International Telecommunication Union",
                      url: "https://www.itu.int/en/ITU-D/Statistics/"
                    }}
                  />
                </Card>
                <Card>
                  <Chart
                    data={country.data.technology.stemGraduates}
                    xField="year"
                    yField="value"
                    title="STEM Graduates (%)"
                    description="Percentage of graduates in Science, Technology, Engineering, and Mathematics fields."
                    source={{
                      name: "OECD Education Statistics",
                      url: "https://data.oecd.org/education.htm"
                    }}
                  />
                </Card>
                <Card>
                  <Chart
                    data={country.data.technology.patentApplications}
                    xField="year"
                    yField="value"
                    title="Patent Applications"
                    description="Number of patent applications filed. Indicates innovation output and technological development."
                    source={{
                      name: "World Intellectual Property Organization",
                      url: "https://www.wipo.int/portal/en/index.html"
                    }}
                  />
                </Card>
              </div>
            </TabsContent>

            {/* Education */}
            <TabsContent value="education" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <Chart
                    data={country.data.education.literacyRate}
                    xField="year"
                    yField="value"
                    title="Literacy Rate (%)"
                    description="Percentage of population aged 15 and above who can read and write. A fundamental indicator of educational achievement."
                    source={{
                      name: "UNESCO Institute for Statistics",
                      url: "http://data.uis.unesco.org/"
                    }}
                  />
                </Card>
                <Card>
                  <Chart
                    data={country.data.education.schoolEnrollment}
                    xField="year"
                    yField="value"
                    title="School Enrollment Rate (%)"
                    description="Percentage of school-age population enrolled in education. Indicates educational system coverage."
                    source={{
                      name: "World Bank Education Statistics",
                      url: "https://data.worldbank.org/topic/education"
                    }}
                  />
                </Card>
                <Card>
                  <Chart
                    data={country.data.education.pisaScores}
                    xField="year"
                    yField="value"
                    title="PISA Scores"
                    description="Programme for International Student Assessment scores. Measures educational quality and student performance."
                    source={{
                      name: "OECD PISA",
                      url: "https://www.oecd.org/pisa/"
                    }}
                  />
                </Card>
                <Card>
                  <Chart
                    data={country.data.education.educationExpenditure}
                    xField="year"
                    yField="value"
                    title="Education Expenditure (% of GDP)"
                    description="Public spending on education as a percentage of GDP. Shows national commitment to education."
                    source={{
                      name: "World Bank",
                      url: "https://data.worldbank.org/indicator/SE.XPD.TOTL.GD.ZS"
                    }}
                  />
                </Card>
              </div>
            </TabsContent>

            {/* Civic Engagement */}
            <TabsContent value="civic" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <Chart
                    data={country.data.civic.freedomSpeechIndex}
                    xField="year"
                    yField="value"
                    title="Freedom of Speech Index"
                    description="Measure of freedom of expression and press freedom. Higher scores indicate greater freedom."
                    source={{
                      name: "Reporters Without Borders",
                      url: "https://rsf.org/en"
                    }}
                  />
                </Card>
                <Card>
                  <Chart
                    data={country.data.civic.pressFreedom}
                    xField="year"
                    yField="value"
                    title="Press Freedom Score"
                    description="Assessment of media independence and freedom of journalists. Higher scores indicate greater press freedom."
                    source={{
                      name: "Freedom House",
                      url: "https://freedomhouse.org/"
                    }}
                  />
                </Card>
                <Card>
                  <Chart
                    data={country.data.civic.voterTurnout}
                    xField="year"
                    yField="value"
                    title="Voter Turnout (%)"
                    description="Percentage of eligible voters who cast ballots in elections. Indicates civic participation."
                    source={{
                      name: "International IDEA",
                      url: "https://www.idea.int/"
                    }}
                  />
                </Card>
                <Card>
                  <Chart
                    data={country.data.civic.trustInGovernment}
                    xField="year"
                    yField="value"
                    title="Trust in Government (%)"
                    description="Percentage of population expressing confidence in national government. Measures institutional trust."
                    source={{
                      name: "OECD Government at a Glance",
                      url: "https://www.oecd.org/gov/government-at-a-glance/"
                    }}
                  />
                </Card>
              </div>
            </TabsContent>

            {/* Environment */}
            <TabsContent value="environment" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <Chart
                    data={country.data.environment.carbonEmissions}
                    xField="year"
                    yField="value"
                    title="Carbon Emissions (tons per capita)"
                    description="CO2 emissions per person. Key indicator of climate impact and environmental sustainability."
                    source={{
                      name: "Global Carbon Project",
                      url: "https://www.globalcarbonproject.org/"
                    }}
                  />
                </Card>
                <Card>
                  <Chart
                    data={country.data.environment.airQualityIndex}
                    xField="year"
                    yField="value"
                    title="Air Quality Index"
                    description="Measure of air pollution levels. Lower values indicate better air quality."
                    source={{
                      name: "World Air Quality Index",
                      url: "https://waqi.info/"
                    }}
                  />
                </Card>
                <Card>
                  <Chart
                    data={country.data.environment.forestCoverage}
                    xField="year"
                    yField="value"
                    title="Forest Coverage (%)"
                    description="Percentage of land area covered by forests. Indicates biodiversity and environmental health."
                    source={{
                      name: "FAO Forest Resources Assessment",
                      url: "https://www.fao.org/forest-resources-assessment/"
                    }}
                  />
                </Card>
                <Card>
                  <Chart
                    data={country.data.environment.waterQuality}
                    xField="year"
                    yField="value"
                    title="Water Quality Index"
                    description="Measure of water quality and safety. Higher scores indicate better water quality."
                    source={{
                      name: "UN Water",
                      url: "https://www.unwater.org/"
                    }}
                  />
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <a
        target="_blank"
        rel="noopener"
        className="fixed bottom-0 right-0 z-50 flex items-center gap-2 border-t border-l rounded-tl-md bg-background text-foreground p-2 text-sm transition-colors hover:text-pink-500"
        href="https://alexfranz.com/"
      >
        <img
          src="https://alexfranz.com/images/alex_square.png"
          alt="Alex Franz"
          className="w-8 h-8 rounded"
        />
        <p>by Alex Franz</p>
      </a>
    </div>
  );
}