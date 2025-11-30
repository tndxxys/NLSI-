export interface BenchmarkResult {
  modelName: string;
  modelType: 'Linear' | 'NARX' | 'NeuralNet';
  rms: number;
}

export interface BenchmarkData {
  id: string;
  name: string;
  description: string;
  unit: string;
  datasets: {
    [key: string]: BenchmarkResult[];
  };
  sota?: {
    [key: string]: {
      name: string;
      rms: number;
      reference: string;
    };
  };
}

export enum ModelType {
  Linear = 'Linear',
  NARX = 'NARX',
  NeuralNet = 'NeuralNet',
}

export interface NavigationItem {
  id: string;
  label: string;
}