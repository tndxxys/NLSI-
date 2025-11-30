import React, { useState } from 'react';
import { BookOpen, BarChart2, Activity, Database, GitMerge, FileText, ChevronRight } from 'lucide-react';
import { BENCHMARK_DATA, METHODOLOGY_INFO } from './constants';
import BenchmarkChart from './components/BenchmarkChart';

const App: React.FC = () => {
  const [activeBenchmark, setActiveBenchmark] = useState(BENCHMARK_DATA[0].id);
  const [activeDataset, setActiveDataset] = useState<string>(Object.keys(BENCHMARK_DATA[0].datasets)[0]);
  const [showSota, setShowSota] = useState(true);

  const currentBenchmarkData = BENCHMARK_DATA.find(b => b.id === activeBenchmark) || BENCHMARK_DATA[0];

  const handleBenchmarkChange = (id: string) => {
    setActiveBenchmark(id);
    // Reset dataset to first available for the new benchmark
    const newData = BENCHMARK_DATA.find(b => b.id === id);
    if (newData) {
      setActiveDataset(Object.keys(newData.datasets)[0]);
    }
  };

  return (
    <div className="min-h-screen font-sans text-slate-800">
      
      {/* Header / Hero Section */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 bg-opacity-90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Activity className="text-indigo-600 h-6 w-6" />
            <h1 className="text-xl font-bold tracking-tight text-slate-900">NLSI 基准可视化</h1>
          </div>
          <nav className="hidden md:flex space-x-8 text-sm font-medium text-slate-500">
            <a href="#abstract" className="hover:text-indigo-600 transition-colors">摘要</a>
            <a href="#benchmarks" className="hover:text-indigo-600 transition-colors">基准介绍</a>
            <a href="#results" className="hover:text-indigo-600 transition-colors">测试结果</a>
            <a href="#conclusion" className="hover:text-indigo-600 transition-colors">结论</a>
          </nav>
          <a 
            href="https://arxiv.org/abs/2405.10779" 
            target="_blank" 
            rel="noreferrer"
            className="text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-1.5 rounded-full font-medium transition-colors"
          >
            查看论文
          </a>
        </div>
      </header>

      <main>
        {/* Title Section */}
        <section className="bg-gradient-to-b from-slate-50 to-white pt-20 pb-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-sm font-medium mb-6">
              <FileText size={16} />
              <span>arXiv:2405.10779v2 [eess.SY]</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              精选非线性系统辨识基准的<br/>基准结果
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              在 5 个流行基准上比较 10 种基准技术，为 NLSI (非线性系统辨识) 社区提供客观参考标准。
            </p>
            <div className="flex flex-wrap justify-center gap-2 text-sm text-slate-500">
              <span>Max D. Champneys</span> &bull;
              <span>Gerben I. Beintema</span> &bull;
              <span>Roland Tóth</span> &bull;
              <span>Maarten Schoukens</span> &bull;
              <span>Timothy J. Rogers</span>
            </div>
          </div>
        </section>

        {/* Abstract & Motivation Grid */}
        <section id="abstract" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <BookOpen className="text-indigo-500" />
                挑战
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                非线性系统辨识 (NLSI) 正迅速采用机器学习技术。然而，随着每年发表大量新方法，回答<strong>“哪种方法最好？”</strong>或者<strong>“我该用哪种方法？”</strong>变得困难。
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
                <p className="text-amber-800 font-medium italic">
                  "为了基于基准性能做出有意义的推断，重要的是要了解新方法与成熟方法的比较表现。"
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <GitMerge className="text-emerald-500" />
                贡献
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-emerald-600 font-bold text-sm">1</span>
                  </div>
                  <p className="text-slate-600">为 <strong className="font-semibold text-slate-900">10 种标准技术</strong> (包括线性模型、AR模型、神经网络) 建立基准结果。</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-emerald-600 font-bold text-sm">2</span>
                  </div>
                  <p className="text-slate-600">在 <strong className="font-semibold text-slate-900">5 个多样化的公开基准数据集</strong> 上进行评估。</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-emerald-600 font-bold text-sm">3</span>
                  </div>
                  <p className="text-slate-600">激发关于客观比较辨识方法的讨论。</p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Methodology Cards */}
        <section className="bg-slate-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">评估的基准模型类别</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {METHODOLOGY_INFO.map((method, idx) => (
                <div key={idx} className={`p-6 rounded-xl border ${method.color} shadow-sm transition-transform hover:-translate-y-1`}>
                  <h3 className="font-bold text-lg mb-2">{method.title}</h3>
                  <p className="text-sm opacity-80 mb-4">{method.description}</p>
                  <ul className="space-y-1">
                    {method.methods.map((m, i) => (
                      <li key={i} className="text-sm font-medium flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-current opacity-50"></span>
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Results Section */}
        <section id="results" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-2 flex items-center gap-3">
              <BarChart2 className="text-indigo-600" />
              基准测试结果
            </h2>
            <p className="text-slate-500">探索基准模型在不同数据集上的性能。与最先进技术 (SOTA) 结果进行比较。</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Controls */}
            <div className="lg:w-1/4 space-y-6">
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                  选择基准数据集
                </label>
                <div className="space-y-2">
                  {BENCHMARK_DATA.map((bench) => (
                    <button
                      key={bench.id}
                      onClick={() => handleBenchmarkChange(bench.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all flex items-center justify-between ${
                        activeBenchmark === bench.id
                          ? 'bg-indigo-600 text-white shadow-md'
                          : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      {bench.name}
                      {activeBenchmark === bench.id && <ChevronRight size={16} />}
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                  选择测试集
                </label>
                <div className="flex flex-wrap gap-2">
                  {Object.keys(currentBenchmarkData.datasets).map((dsKey) => (
                    <button
                      key={dsKey}
                      onClick={() => setActiveDataset(dsKey)}
                      className={`px-3 py-1.5 rounded-md text-xs font-medium border ${
                        activeDataset === dsKey
                          ? 'bg-indigo-50 border-indigo-200 text-indigo-700'
                          : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {dsKey.replace('_', ' ')}
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
                <span className="text-sm font-medium text-slate-700">显示 SOTA (最先进) 参考</span>
                <button 
                  onClick={() => setShowSota(!showSota)}
                  className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors ${showSota ? 'bg-indigo-600' : 'bg-slate-300'}`}
                >
                  <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${showSota ? 'translate-x-5' : 'translate-x-0'}`}></div>
                </button>
              </div>
            </div>

            {/* Main Visualization Area */}
            <div className="lg:w-3/4 space-y-6">
              {/* Benchmark Info Card */}
              <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{currentBenchmarkData.name}</h3>
                    <p className="text-slate-600 mt-1">{currentBenchmarkData.description}</p>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-xs font-semibold text-slate-400 uppercase">单位</span>
                    <span className="font-mono text-sm text-slate-700 bg-slate-100 px-2 py-1 rounded mt-1">
                      {currentBenchmarkData.unit}
                    </span>
                  </div>
                </div>
              </div>

              {/* Chart */}
              <BenchmarkChart 
                data={currentBenchmarkData} 
                datasetKey={activeDataset}
                showSota={showSota}
              />
              
              {/* Analysis Text based on Paper */}
              <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 text-sm text-slate-600">
                <h4 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                  <Activity size={16} />
                  性能说明
                </h4>
                {activeBenchmark === 'emps' && (
                  <p>
                    EMPS 基准表现出摩擦特性，这构成了重大挑战。线性模型在此表现非常挣扎。
                    请注意 GP NARX 的巨大误差 (1690mm)，这可能是由于初始化或核函数不适合这种重摩擦数据所致。
                    SOTA (dynoNet) 达到了 0.452mm，表明相对于基准模型仍有巨大的提升空间。
                  </p>
                )}
                {activeBenchmark === 'silverbox' && (
                  <p>
                    GP NARX 在此表现格外优异 (0.301 mV)，击败了标准的 pNARX 并且非常接近 SOTA (0.36 mV)。
                    这表明 Silverbox 的非线性是平滑的，非常适合高斯过程建模。
                  </p>
                )}
                 {activeBenchmark === 'wh' && (
                  <p>
                    Wiener-Hammerstein 对标准神经网络来说具有挑战性。GRU/LSTM 表现尚可，
                    但更简单的结构表现不佳。SOTA (DT Subnet) 比大多数基准好一个数量级 (0.241 mV)。
                  </p>
                )}
                 {activeBenchmark === 'tanks' && (
                  <p>
                    循环网络 (GRU/LSTM) 在此表现稳健。Cascaded Tanks 系统具有溢出非线性。
                    有趣的是，pNARX 也表现非常强劲 (0.413 V)。
                  </p>
                )}
                 {activeBenchmark === 'ced' && (
                  <p>
                    Coupled Electric Drives 仅测量绝对速度。pNARX 和 GP NARX 在此极具竞争力，
                    在某些指标上甚至击败了报告的 SOTA（尽管文献中的测试集略有不同）。
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Benchmarks Details Grid */}
        <section id="benchmarks" className="bg-white py-16 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
              <Database className="text-indigo-600" />
              基准数据集概览
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {BENCHMARK_DATA.map((b) => (
                <div key={b.id} className="p-5 rounded-lg bg-slate-50 hover:bg-white border border-slate-100 hover:border-indigo-200 hover:shadow-md transition-all">
                  <h3 className="font-bold text-slate-800 mb-2">{b.name}</h3>
                  <p className="text-sm text-slate-600 mb-4 h-16">{b.description}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <span className="text-xs font-medium text-slate-400">度量指标</span>
                    <span className="text-xs font-mono bg-white border border-slate-200 px-2 py-1 rounded text-slate-600">{b.unit}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section id="conclusion" className="bg-slate-900 text-slate-300 py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-white mb-6">结论</h2>
            <p className="text-lg leading-relaxed mb-8">
              虽然基准模型（特别是 pNARX 和 GRU）在几个基准测试中表现出色，但它们通常落后于最先进 (SOTA) 方法——有时甚至相差一个数量级。
              然而，建立这些基准对于该领域的科学完整性至关重要，确保复杂的新深度学习架构能够证明其相对于简单、经过良好调整的标准模型的复杂性是合理的。
            </p>
            <div className="inline-block p-4 rounded-lg bg-slate-800 border border-slate-700">
              <p className="text-sm font-mono text-indigo-300">
                代码获取地址: <a href="https://github.com/MDCHAMP/nonlinear_baselines" target="_blank" rel="noreferrer" className="underline hover:text-white">github.com/MDCHAMP/nonlinear_baselines</a>
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-950 py-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} 可视化基于 Champneys 等人论文 arXiv:2405.10779v2</p>
        </div>
      </footer>
    </div>
  );
};

export default App;