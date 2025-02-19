# NationPulse - Initial Project Concept

## Dashboard Requirements

### Core Features

- Single page dashboard using Next.js and Shadcn/UI
- Country selector component (starting with Germany)
- Multiple data visualizations using charts

### Data Categories

1. Economic Indicators
   - GDP growth
   - Unemployment rate
   - Inflation rate
   - Public debt
   - Trade balance

2. Social Well-being
   - Life satisfaction
   - Work-life balance
   - Social support
   - Personal security

3. Health & Safety
   - Healthcare access
   - Life expectancy
   - Crime rates
   - Personal safety perception

4. Financial Well-being
   - Household income
   - Household debt
   - Housing affordability
   - Savings rate

5. Public Finance
   - Government deficit/surplus
   - Tax revenue
   - Public spending

### Data Visualization

- Time series charts for trends
- Bar charts for comparisons
- Interactive elements for data exploration

## Setup & Deployment Instructions

### Local Development

1. Create new Next.js project:

```bash
npx create-next-app@latest nationpulse --typescript --tailwind --app
cd nationpulse
```

2. Install dependencies:

```bash
npm install recharts @radix-ui/react-select @radix-ui/react-tabs lucide-react
npm install class-variance-authority clsx tailwind-merge
```

3. Install and initialize Shadcn/UI:

```bash
npx shadcn-ui@latest init
```

4. Run development server:

```bash
npm run dev
```

### Deployment to Vercel

1. Push code to GitHub:

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/alfranz/nationpulse.git
git push -u origin main
```

2. Deploy:

- Go to [Vercel](https://vercel.com)
- Import your GitHub repository
- Select the "nationpulse" repository
- Click "Deploy"

The app will be automatically deployed and available at: <https://nationpulse.vercel.app>
