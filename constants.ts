
import { BenchmarkData, ModelType } from './types';

// Data derived from Table 3 and Table 4 of the paper
export const BENCHMARK_DATA: BenchmarkData[] = [
  {
    id: 'silverbox',
    name: 'Silverbox (银箱)',
    description: '模拟 Duffing 振荡器 / Fitz-Nagumo 模型。非线性系统的标准基准。',
    unit: 'RMS (mV)',
    datasets: {
      multisine: [
        { modelName: 'LTI SS', modelType: ModelType.Linear, rms: 6.96 },
        { modelName: 'LTI ARX', modelType: ModelType.Linear, rms: 6.95 },
        { modelName: 'pNARX', modelType: ModelType.NARX, rms: 0.640 },
        { modelName: 'GP NARX', modelType: ModelType.NARX, rms: 0.301 },
        { modelName: 'MLP NARX', modelType: ModelType.NARX, rms: 2.80 },
        { modelName: 'MLP FIR', modelType: ModelType.NeuralNet, rms: 18.9 },
        { modelName: 'RNN', modelType: ModelType.NeuralNet, rms: 1.64 },
        { modelName: 'GRU', modelType: ModelType.NeuralNet, rms: 1.49 },
        { modelName: 'LSTM', modelType: ModelType.NeuralNet, rms: 1.50 },
        { modelName: 'OLSTM', modelType: ModelType.NeuralNet, rms: 1.51 },
      ],
      arrow_full: [
        { modelName: 'LTI SS', modelType: ModelType.Linear, rms: 14.4 },
        { modelName: 'LTI ARX', modelType: ModelType.Linear, rms: 14.2 },
        { modelName: 'pNARX', modelType: ModelType.NARX, rms: 2.25 },
        { modelName: 'GP NARX', modelType: ModelType.NARX, rms: 0.60 },
        { modelName: 'MLP NARX', modelType: ModelType.NARX, rms: 5.18 },
        { modelName: 'MLP FIR', modelType: ModelType.NeuralNet, rms: 20.2 },
        { modelName: 'RNN', modelType: ModelType.NeuralNet, rms: 4.88 },
        { modelName: 'GRU', modelType: ModelType.NeuralNet, rms: 2.80 },
        { modelName: 'LSTM', modelType: ModelType.NeuralNet, rms: 2.68 },
        { modelName: 'OLSTM', modelType: ModelType.NeuralNet, rms: 2.38 },
      ],
      arrow_no_extrap: [
        { modelName: 'LTI SS', modelType: ModelType.Linear, rms: 6.58 },
        { modelName: 'LTI ARX', modelType: ModelType.Linear, rms: 6.59 },
        { modelName: 'pNARX', modelType: ModelType.NARX, rms: 0.571 },
        { modelName: 'GP NARX', modelType: ModelType.NARX, rms: 0.259 },
        { modelName: 'MLP NARX', modelType: ModelType.NARX, rms: 2.40 },
        { modelName: 'MLP FIR', modelType: ModelType.NeuralNet, rms: 15.3 },
        { modelName: 'RNN', modelType: ModelType.NeuralNet, rms: 1.73 },
        { modelName: 'GRU', modelType: ModelType.NeuralNet, rms: 0.947 },
        { modelName: 'LSTM', modelType: ModelType.NeuralNet, rms: 0.960 },
        { modelName: 'OLSTM', modelType: ModelType.NeuralNet, rms: 1.08 },
      ],
    },
    sota: {
      multisine: { name: 'DT Subnet', rms: 0.36, reference: 'Beintema et al., 2021' },
      arrow_full: { name: 'DT Subnet', rms: 1.4, reference: 'Beintema et al., 2021' },
      arrow_no_extrap: { name: 'DT Subnet', rms: 0.32, reference: 'Beintema et al., 2021' },
    }
  },
  {
    id: 'wh',
    name: 'Wiener-Hammerstein (维纳-哈默斯坦)',
    description: '包含夹在两个 LTI (线性时不变) 模块之间的饱和非线性。',
    unit: 'RMS (mV)',
    datasets: {
      test: [
        { modelName: 'LTI SS', modelType: ModelType.Linear, rms: 43.4 },
        { modelName: 'LTI ARX', modelType: ModelType.Linear, rms: 43.4 },
        { modelName: 'pNARX', modelType: ModelType.NARX, rms: 27.3 },
        { modelName: 'GP NARX', modelType: ModelType.NARX, rms: 23.1 },
        { modelName: 'MLP NARX', modelType: ModelType.NARX, rms: 310 },
        { modelName: 'MLP FIR', modelType: ModelType.NeuralNet, rms: 24.8 },
        { modelName: 'RNN', modelType: ModelType.NeuralNet, rms: 6.87 },
        { modelName: 'GRU', modelType: ModelType.NeuralNet, rms: 3.97 },
        { modelName: 'LSTM', modelType: ModelType.NeuralNet, rms: 4.45 },
        { modelName: 'OLSTM', modelType: ModelType.NeuralNet, rms: 4.55 },
      ]
    },
    sota: {
      test: { name: 'DT Subnet', rms: 0.241, reference: 'Beintema et al., 2021' }
    }
  },
  {
    id: 'emps',
    name: 'EMPS (机电定位系统)',
    description: 'Electro-Mechanical Positioning System. 表现出显著的摩擦行为。',
    unit: 'RMS (mm)',
    datasets: {
      test: [
        { modelName: 'LTI SS', modelType: ModelType.Linear, rms: 5.53 },
        { modelName: 'LTI ARX', modelType: ModelType.Linear, rms: 12.6 },
        { modelName: 'pNARX', modelType: ModelType.NARX, rms: 5.17 },
        { modelName: 'GP NARX', modelType: ModelType.NARX, rms: 1690 },
        { modelName: 'MLP NARX', modelType: ModelType.NARX, rms: 133 },
        { modelName: 'MLP FIR', modelType: ModelType.NeuralNet, rms: 121 },
        { modelName: 'RNN', modelType: ModelType.NeuralNet, rms: 89.2 },
        { modelName: 'GRU', modelType: ModelType.NeuralNet, rms: 220 },
        { modelName: 'LSTM', modelType: ModelType.NeuralNet, rms: 74.1 },
        { modelName: 'OLSTM', modelType: ModelType.NeuralNet, rms: 111 },
      ]
    },
    sota: {
      test: { name: 'dynoNet', rms: 0.452, reference: 'Forgione & Piga, 2021b' }
    }
  },
  {
    id: 'tanks',
    name: 'Cascaded Tanks (级联水箱)',
    description: '具有溢出非线性的液位控制系统。',
    unit: 'RMS (V)',
    datasets: {
      test: [
        { modelName: 'LTI SS', modelType: ModelType.Linear, rms: 0.588 },
        { modelName: 'LTI ARX', modelType: ModelType.Linear, rms: 0.685 },
        { modelName: 'pNARX', modelType: ModelType.NARX, rms: 0.413 },
        { modelName: 'GP NARX', modelType: ModelType.NARX, rms: 0.622 },
        { modelName: 'MLP NARX', modelType: ModelType.NARX, rms: 2.04 },
        { modelName: 'MLP FIR', modelType: ModelType.NeuralNet, rms: 1.43 },
        { modelName: 'RNN', modelType: ModelType.NeuralNet, rms: 0.543 },
        { modelName: 'GRU', modelType: ModelType.NeuralNet, rms: 0.396 },
        { modelName: 'LSTM', modelType: ModelType.NeuralNet, rms: 0.490 },
        { modelName: 'OLSTM', modelType: ModelType.NeuralNet, rms: 0.471 },
      ]
    },
    sota: {
      test: { name: 'Grey-box', rms: 0.191, reference: 'Worden et al., 2018' }
    }
  },
  {
    id: 'ced',
    name: 'Coupled Electric Drives (耦合电驱动)',
    description: '两个电动机驱动滑轮系统。仅测量绝对速度。',
    unit: 'RMS (ticks/s)',
    datasets: {
      test1: [
        { modelName: 'LTI SS', modelType: ModelType.Linear, rms: 0.224 },
        { modelName: 'LTI ARX', modelType: ModelType.Linear, rms: 0.291 },
        { modelName: 'pNARX', modelType: ModelType.NARX, rms: 0.10 },
        { modelName: 'GP NARX', modelType: ModelType.NARX, rms: 0.102 },
        { modelName: 'MLP NARX', modelType: ModelType.NARX, rms: 0.142 },
        { modelName: 'MLP FIR', modelType: ModelType.NeuralNet, rms: 0.122 },
        { modelName: 'RNN', modelType: ModelType.NeuralNet, rms: 0.096 },
        { modelName: 'GRU', modelType: ModelType.NeuralNet, rms: 0.286 },
        { modelName: 'LSTM', modelType: ModelType.NeuralNet, rms: 0.303 },
        { modelName: 'OLSTM', modelType: ModelType.NeuralNet, rms: 0.151 },
      ],
      test2: [
        { modelName: 'LTI SS', modelType: ModelType.Linear, rms: 0.384 },
        { modelName: 'LTI ARX', modelType: ModelType.Linear, rms: 0.331 },
        { modelName: 'pNARX', modelType: ModelType.NARX, rms: 0.141 },
        { modelName: 'GP NARX', modelType: ModelType.NARX, rms: 0.090 },
        { modelName: 'MLP NARX', modelType: ModelType.NARX, rms: 0.101 },
        { modelName: 'MLP FIR', modelType: ModelType.NeuralNet, rms: 0.095 },
        { modelName: 'RNN', modelType: ModelType.NeuralNet, rms: 0.235 },
        { modelName: 'GRU', modelType: ModelType.NeuralNet, rms: 0.238 },
        { modelName: 'LSTM', modelType: ModelType.NeuralNet, rms: 0.145 },
        { modelName: 'OLSTM', modelType: ModelType.NeuralNet, rms: 0.259 },
      ]
    },
    sota: {
      test1: { name: 'CT subnet', rms: 0.115, reference: 'Beintema et al., 2023' },
      test2: { name: 'CT subnet', rms: 0.074, reference: 'Beintema et al., 2023' }
    }
  },
];

export const METHODOLOGY_INFO = [
  {
    title: "线性模型 (Linear Models)",
    description: "系统辨识的基础。简单、可解释，但局限于较小的工作范围。",
    methods: ["LTI 状态空间 (LTI SS)", "带外生输入的自回归 (LTI ARX)"],
    color: "bg-slate-100 text-slate-700 border-slate-200"
  },
  {
    title: "自回归 (NARX)",
    description: "利用静态非线性映射函数扩展线性模型。",
    methods: ["多项式 NARX (pNARX)", "高斯过程 NARX (GP NARX)", "多层感知机 NARX (MLP NARX)"],
    color: "bg-indigo-50 text-indigo-700 border-indigo-200"
  },
  {
    title: "循环神经网络 (RNN)",
    description: "保持内部状态以模拟动态特性的深度学习方法。",
    methods: ["标准 RNN", "门控循环单元 (GRU)", "LSTM 和 优化版 LSTM (OLSTM)"],
    color: "bg-emerald-50 text-emerald-700 border-emerald-200"
  }
];
