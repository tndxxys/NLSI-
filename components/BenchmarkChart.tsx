import React, { useMemo } from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  ReferenceLine,
  Cell
} from 'recharts';
import { BenchmarkData, ModelType } from '../types';

interface BenchmarkChartProps {
  data: BenchmarkData;
  datasetKey: string;
  showSota: boolean;
}

const BenchmarkChart: React.FC<BenchmarkChartProps> = ({ data, datasetKey, showSota }) => {
  const chartData = data.datasets[datasetKey];
  const sotaData = data.sota?.[datasetKey];

  // Helper to color bars based on model type
  const getBarColor = (type: ModelType) => {
    switch(type) {
      case ModelType.Linear: return '#94a3b8'; // Slate 400
      case ModelType.NARX: return '#6366f1'; // Indigo 500
      case ModelType.NeuralNet: return '#10b981'; // Emerald 500
      default: return '#cbd5e1';
    }
  };

  // Calculate domain max for better visual scaling if outlier exists (like GP NARX in EMPS)
  const yAxisDomain = useMemo(() => {
    if (!chartData) return ['auto', 'auto'];
    const maxVal = Math.max(...chartData.map(d => d.rms));
    // If we have a huge outlier (more than 5x the median), cap the chart to keep others visible
    const sorted = [...chartData].map(d => d.rms).sort((a,b) => a-b);
    const median = sorted[Math.floor(sorted.length / 2)];
    if (maxVal > median * 10) {
      return [0, median * 5]; 
    }
    return [0, 'auto'];
  }, [chartData]);

  if (!chartData) return <div className="p-4 text-center text-gray-500">该选择暂无数据。</div>;

  return (
    <div className="w-full h-[400px] bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
      <h3 className="text-sm font-semibold text-gray-500 mb-4 uppercase tracking-wider text-center">
        RMSE 性能 ({data.unit}) - 越低越好
      </h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={chartData}
          margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.3} />
          <XAxis 
            dataKey="modelName" 
            angle={-45} 
            textAnchor="end" 
            height={60} 
            tick={{fontSize: 12, fill: '#64748b'}}
          />
          <YAxis 
            domain={yAxisDomain} 
            tick={{fontSize: 12, fill: '#64748b'}}
            label={{ value: data.unit, angle: -90, position: 'insideLeft', style: { fill: '#94a3b8' } }}
          />
          <Tooltip 
            cursor={{fill: '#f1f5f9'}}
            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
          />
          <Legend wrapperStyle={{paddingTop: '20px'}} />
          <Bar dataKey="rms" name="均方根误差 (RMSE)" radius={[4, 4, 0, 0]} animationDuration={1000}>
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={getBarColor(entry.modelType)} />
            ))}
          </Bar>
          
          {showSota && sotaData && (
            <ReferenceLine 
              y={sotaData.rms} 
              label={{ 
                value: `SOTA: ${sotaData.name} (${sotaData.rms})`, 
                position: 'top', 
                fill: '#ef4444',
                fontSize: 12,
                fontWeight: 600
              }} 
              stroke="#ef4444" 
              strokeDasharray="5 5" 
            />
          )}
        </BarChart>
      </ResponsiveContainer>
      <div className="flex justify-center gap-4 mt-2 text-xs text-gray-500">
        <div className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-slate-400"></span>线性模型</div>
        <div className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-indigo-500"></span>NARX (自回归)</div>
        <div className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-emerald-500"></span>神经网络</div>
      </div>
    </div>
  );
};

export default BenchmarkChart;