export type BuildingType = 'Refurbishment' | 'New build';
export type Status = 'Complete' | 'Estimate';

export interface EmissionDataPoint {
  id: string;
  value: number;
  buildingType: BuildingType;
  status: Status;
}

export interface TargetLine {
  year: number;
  value: number;
  label: string;
} 