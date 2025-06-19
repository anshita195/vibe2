export interface YearlyMetric {
  year: number;
  value: number;
}

export interface MetricData {
  currentValue: number;
  changePercentage: number;
  baseYear: number;
  yearlyData: YearlyMetric[];
  unit: string;
}

export interface DashboardData {
  carbonFootprint: MetricData;
  energyIntensity: MetricData;
  energyConsumption: MetricData;
} 