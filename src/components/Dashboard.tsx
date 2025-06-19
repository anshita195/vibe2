import { DashboardData } from '@/types/metrics';
import MetricCard from './MetricCard';

const dashboardData: DashboardData = {
  carbonFootprint: {
    currentValue: 45048,
    changePercentage: 16,
    baseYear: 2019,
    unit: 'tCO₂e',
    yearlyData: [
      { year: 2022, value: 45048 },
      { year: 2021, value: 14111 },
      { year: 2020, value: 32813 },
      { year: 2019, value: 38673 },
    ],
  },
  energyIntensity: {
    currentValue: 123,
    changePercentage: -22,
    baseYear: 2019,
    unit: 'kWh/m²',
    yearlyData: [
      { year: 2022, value: 123 },
      { year: 2021, value: 128 },
      { year: 2020, value: 135 },
      { year: 2019, value: 157 },
    ],
  },
  energyConsumption: {
    currentValue: 47790662,
    changePercentage: -27,
    baseYear: 2019,
    unit: 'kWh',
    yearlyData: [
      { year: 2022, value: 47790662 },
      { year: 2021, value: 49324077 },
      { year: 2020, value: 48794205 },
      { year: 2019, value: 65198706 },
    ],
  },
};

const Dashboard = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm transition-colors">
      <div className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <MetricCard
            title="Managed portfolio carbon footprint"
            data={dashboardData.carbonFootprint}
          />
          <MetricCard
            title="Managed portfolio energy intensity"
            data={dashboardData.energyIntensity}
          />
          <MetricCard
            title="Managed portfolio energy consumption"
            data={dashboardData.energyConsumption}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 