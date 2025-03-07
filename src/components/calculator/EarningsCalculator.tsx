import { useEffect, useRef, useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip as ChartTooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, ChartTooltip, Legend);

// Tooltip component
const Tooltip = ({ text }: { text: string }) => (
  <div className="group relative">
    <span className="cursor-help ml-1">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 hover:text-[#4945FF]">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M12 16v-4"></path>
        <path d="M12 8h.01"></path>
      </svg>
    </span>
    <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity bg-[#2d1b4d] text-white text-xs rounded p-2 absolute z-50 left-1/2 -translate-x-1/2 bottom-full w-48">
      {text}
      <svg className="absolute text-[#2d1b4d] h-2 w-full left-0 top-full" viewBox="0 0 255 255">
        <polygon points="0,0 127.5,127.5 255,0"></polygon>
      </svg>
    </div>
  </div>
);

const EarningsCalculator = () => {
  // State for slider values
  const [projectAmount, setProjectAmount] = useState(0);
  const [referrals, setReferrals] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);
  
  // Fixed 6-month duration for all calculations
  const COMMISSION_PERIOD = 6;
  
  // State for calculation results
  const [tier, setTier] = useState('');
  const [tierNumber, setTierNumber] = useState(0);
  const [perReferral, setPerReferral] = useState(0);
  const [annualTotal, setAnnualTotal] = useState(0);
  const [breakdown, setBreakdown] = useState({
    monthlyInvoice: 0,
    monthlyNetProfit: 0,
    monthlyCommission: 0,
    totalPerReferral: 0,
    annualTotal: 0
  });
  const [message, setMessage] = useState('');
  const [progressToNextTier, setProgressToNextTier] = useState(0);
  const [dynamicTip, setDynamicTip] = useState('');
  
  // Chart reference
  const chartRef = useRef(null);
  
  // Preset values
  const presetProjects = [
    { label: 'Small ($50K)', value: 50000 },
    { label: 'Medium ($100K)', value: 100000 },
    { label: 'Large ($250K)', value: 250000 },
    { label: 'XL ($500K)', value: 500000 }
  ];
  
  const presetReferrals = [
    { label: '1', value: 1 },
    { label: '3', value: 3 },
    { label: '6', value: 6 },
    { label: '10', value: 10 },
    { label: '25', value: 25 },
    { label: '50', value: 50 }
  ];
  
  // Calculate commissions whenever inputs change
  useEffect(() => {
    if (hasInteracted) {
      calculateCommission();
    }
  }, [projectAmount, referrals, hasInteracted]);
  
  // Calculate the commission based on inputs
  const calculateCommission = () => {
    const netProfitMargin = 0.4;
    const monthlyInvoice = projectAmount / COMMISSION_PERIOD;
    
    // Determine tier and commission rate
    let commissionRate, tierName, nextTierReferrals, currentTierNumber;
    
    if (referrals <= 3) {
      commissionRate = 0.05;
      tierName = 'Referral Partner (5%)';
      nextTierReferrals = 4;
      currentTierNumber = 1;
      setProgressToNextTier((referrals / 4) * 100);
    } else if (referrals <= 6) {
      commissionRate = 0.07;
      tierName = 'Alliance Partner (7%)';
      nextTierReferrals = 7;
      currentTierNumber = 2;
      setProgressToNextTier(((referrals - 4) / 3) * 100);
    } else {
      commissionRate = 0.1;
      tierName = 'Strategic Partner (10%)';
      nextTierReferrals = null;
      currentTierNumber = 3;
      setProgressToNextTier(100);
    }
    
    // Calculations
    const monthlyNetProfit = monthlyInvoice * netProfitMargin;
    const monthlyCommission = monthlyNetProfit * commissionRate;
    const totalPerReferral = monthlyCommission * COMMISSION_PERIOD;
    const totalAnnual = totalPerReferral * referrals;
    
    // Set results
    setTier(tierName);
    setTierNumber(currentTierNumber);
    setPerReferral(totalPerReferral);
    setAnnualTotal(totalAnnual);
    setBreakdown({
      monthlyInvoice,
      monthlyNetProfit,
      monthlyCommission,
      totalPerReferral,
      annualTotal: totalAnnual
    });
    
    // Set message
    if (referrals >= 7) {
      setMessage(`With ${referrals} referrals, you're a Strategic Partner earning our maximum 10% commission rate!`);
    } else {
      setMessage(`You qualify for our ${tierName} level. Keep growing your network!`);
    }
    
    // Dynamic tip
    if (referrals === 1 || referrals === 2 || referrals === 3) {
      const neededReferrals = 4 - referrals;
      setDynamicTip(`Add just ${neededReferrals} more referral${neededReferrals > 1 ? 's' : ''} to reach Alliance Partner status and earn 7% commission!`);
    } else if (referrals >= 4 && referrals <= 6) {
      const neededReferrals = 7 - referrals;
      setDynamicTip(`Only ${neededReferrals} more referral${neededReferrals > 1 ? 's' : ''} to become a Strategic Partner with 10% commission!`);
    } else {
      setDynamicTip(`You've reached our highest tier! Add more clients to maximize your earnings.`);
    }
  };
  
  // Chart data
  const chartData = {
    labels: Array.from({ length: 50 }, (_, i) => i + 1),
    datasets: [
      {
        label: 'Annual Commission',
        data: Array.from({ length: 50 }, (_, i) => {
          const refs = i + 1;
          const rate = refs <= 3 ? 0.05 : refs <= 6 ? 0.07 : 0.1;
          return (projectAmount / COMMISSION_PERIOD) * 0.4 * rate * COMMISSION_PERIOD * refs;
        }),
        borderColor: '#4945FF',
        backgroundColor: 'rgba(73, 69, 255, 0.1)',
        pointBackgroundColor: '#4945FF',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#4945FF',
        fill: true,
        tension: 0.4
      }
    ]
  };
  
  // Chart options
  const chartOptions: any = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        callbacks: {
          title: function(context: any) {
            return `${context[0].label} Referrals`;
          },
          label: function(context: any) {
            return `Annual Commission: $${context.raw.toLocaleString()}`;
          },
          afterLabel: function(context: any) {
            const refs = parseInt(context.label);
            const tierText = refs <= 3 ? 'Tier 1: Referral Partner (5%)' : refs <= 6 ? 'Tier 2: Alliance Partner (7%)' : 'Tier 3: Strategic Partner (10%)';
            return `Tier: ${tierText}`;
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function(value: number) {
            return '$' + value.toLocaleString();
          }
        },
        title: {
          display: true,
          text: 'Annual Commission ($)'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Number of Referrals'
        }
      }
    }
  };
  
  // Handle preset button clicks
  const handlePresetProject = (value: number) => {
    if (!hasInteracted) setHasInteracted(true);
    setProjectAmount(value);
  };
  
  const handlePresetReferral = (value: number) => {
    if (!hasInteracted) setHasInteracted(true);
    setReferrals(value);
  };
  
  // Handle slider changes
  const handleProjectAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!hasInteracted) setHasInteracted(true);
    setProjectAmount(parseInt(e.target.value));
  };
  
  const handleReferralsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!hasInteracted) setHasInteracted(true);
    setReferrals(parseInt(e.target.value));
  };
  
  // Format currency
  const formatCurrency = (value: number) => {
    return '$' + value.toLocaleString(undefined, { maximumFractionDigits: 0 });
  };

  return (
    <div className="calculator-card bg-white rounded-2xl shadow-lg p-6 md:p-8 max-w-3xl mx-auto my-12">
      <h2 className="text-3xl font-bold text-center text-[#4945FF] mb-4 font-['Raleway']">Earnings Calculator</h2>
      <p className="text-center text-gray-600 mb-8 font-['Lato']">Estimate your potential earnings as a Buildable partner by adjusting project size and referral count</p>
      
      <div className="inputs space-y-8">
        {/* Number of Referrals - Now first */}
        <div>
          <div className="flex justify-between mb-2">
            <div className="flex items-center">
              <label className="block font-medium text-gray-700 font-['Lato']">Number of Referrals</label>
              <Tooltip text="How many projects you expect to refer in a year. More referrals can increase your commission rate." />
            </div>
            <span className="text-[#4945FF] font-bold font-['Lato']">{referrals}</span>
          </div>
          <input 
            type="range" 
            min="1" 
            max="50" 
            value={referrals} 
            onChange={handleReferralsChange}
            className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#4945FF]"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>1</span>
            <span>50</span>
          </div>
          <div className="preset-buttons flex flex-wrap gap-2 mt-3">
            {presetReferrals.map((preset) => (
              <button 
                key={preset.value}
                onClick={() => handlePresetReferral(preset.value)}
                className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
                  referrals === preset.value 
                    ? 'bg-[#4945FF] text-white' 
                    : 'bg-[#4945FF]/20 text-[#4945FF] hover:bg-[#4945FF]/30'
                }`}
              >
                {preset.label}
              </button>
            ))}
          </div>
        </div>
        
        {/* Total Project Amount - Now second */}
        <div>
          <div className="flex justify-between mb-2">
            <div className="flex items-center">
              <label className="block font-medium text-gray-700 font-['Lato']">Total Project Amount</label>
              <Tooltip text="The total value of the project you're referring (e.g., $100,000 for a 6-month project)." />
            </div>
            <span className="text-[#4945FF] font-bold font-['Lato']">{formatCurrency(projectAmount)}</span>
          </div>
          <input 
            type="range" 
            min="10000" 
            max="2000000" 
            step="10000"
            value={projectAmount} 
            onChange={handleProjectAmountChange}
            className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#4945FF]"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>$10K</span>
            <span>$2M</span>
          </div>
          <div className="preset-buttons flex flex-wrap gap-2 mt-3">
            {presetProjects.map((preset) => (
              <button 
                key={preset.value}
                onClick={() => handlePresetProject(preset.value)}
                className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
                  projectAmount === preset.value 
                    ? 'bg-[#4945FF] text-white' 
                    : 'bg-[#4945FF]/20 text-[#4945FF] hover:bg-[#4945FF]/30'
                }`}
              >
                {preset.label}
              </button>
            ))}
          </div>
        </div>
        
        {/* Tier Progress Bar */}
        <div className="mt-4 bg-gray-50 p-4 rounded-lg">
          <div className="flex justify-between mb-2">
            <div className="flex items-center">
              <span className="text-base font-medium text-[#2d1b4d] font-['Lato']">Tier {tierNumber}: {tier}</span>
              <Tooltip text="Your tier determines your commission rate: 0-3 referrals = 5%, 4-6 referrals = 7%, 7+ referrals = 10%" />
            </div>
            {progressToNextTier < 100 && (
              <span className="text-sm text-gray-500 font-['Lato']">Next Tier: {
                referrals <= 3 ? 'Tier 2: Alliance Partner (7%)' : 'Tier 3: Strategic Partner (10%)'
              }</span>
            )}
          </div>
          
          {/* Enhanced progress bar with markers */}
          <div className="relative w-full h-4 bg-gray-200 rounded-full overflow-hidden mt-2">
            {/* Tier markers */}
            <div className="absolute top-0 bottom-0 left-[50%] w-0.5 bg-gray-300 z-10"></div>
            <div className="absolute top-0 bottom-0 left-[100%] w-0.5 bg-gray-300 z-10"></div>
            
            {/* Tier labels */}
            <div className="absolute top-[-20px] left-0 text-xs text-gray-500">Tier 1</div>
            <div className="absolute top-[-20px] left-[47%] text-xs text-gray-500">Tier 2</div>
            <div className="absolute top-[-20px] left-[95%] text-xs text-gray-500">Tier 3</div>
            
            {/* Progress fill */}
            <div 
              className="h-full bg-gradient-to-r from-[#4945FF] to-[#2d1b4d] rounded-full transition-all duration-300"
              style={{ width: `${progressToNextTier < 100 ? progressToNextTier : 100}%` }}
            ></div>
          </div>
          
          <p className="text-sm italic text-[#4945FF] mt-3 font-['Lato']">{dynamicTip}</p>
        </div>
      </div>
      
      {/* New "Your Estimated Earnings" header */}
      <h3 className="text-2xl font-bold text-center text-[#00B67A] mt-12 mb-6 font-['Raleway']">
        Your Estimated Earnings
      </h3>
      
      <div className="results bg-gray-50 rounded-xl p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="text-center p-4 bg-white rounded-lg shadow-sm border-t-4 border-[#4945FF]">
            <h3 className="text-gray-500 text-sm mb-2 font-['Lato']">Your Tier</h3>
            <p className="text-xl font-bold text-[#2d1b4d] font-['Raleway']">Tier {tierNumber}: {tier}</p>
          </div>
          <div className="text-center p-4 bg-white rounded-lg shadow-sm border-t-4 border-[#4945FF]">
            <h3 className="text-gray-500 text-sm mb-2 font-['Lato']">Per Referral</h3>
            <p className="text-xl font-bold text-[#2d1b4d] font-['Raleway']">{formatCurrency(perReferral)}</p>
            <p className="text-xs text-gray-500 font-['Lato']">over 6 months</p>
          </div>
          <div className="text-center p-4 bg-white rounded-lg shadow-sm border-t-4 border-[#4945FF]">
            <h3 className="text-gray-500 text-sm mb-2 font-['Lato']">Annual Total</h3>
            <p className="text-xl font-bold text-[#2d1b4d] font-['Raleway']">{formatCurrency(annualTotal)}</p>
            <p className="text-xs text-gray-500 font-['Lato']">for {referrals} referral{referrals > 1 ? 's' : ''}</p>
          </div>
        </div>
        
        {/* Table Earnings Breakdown */}
        <div className="bg-white rounded-lg p-4 shadow-sm mb-6">
          <h3 className="text-lg font-semibold text-[#2d1b4d] mb-3 font-['Raleway']">Earnings Breakdown</h3>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Step
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Calculation
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Result
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Monthly Invoice
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {formatCurrency(projectAmount)} / 6 months
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                    {formatCurrency(breakdown.monthlyInvoice)}
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Monthly Net Profit
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {formatCurrency(breakdown.monthlyInvoice)} × 40%
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                    {formatCurrency(breakdown.monthlyNetProfit)}
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Monthly Commission
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {formatCurrency(breakdown.monthlyNetProfit)} × {referrals <= 3 ? '5%' : referrals <= 6 ? '7%' : '10%'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                    {formatCurrency(breakdown.monthlyCommission)}
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Total per Referral
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {formatCurrency(breakdown.monthlyCommission)} × 6 months
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                    {formatCurrency(breakdown.totalPerReferral)}
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Annual Total
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {formatCurrency(breakdown.totalPerReferral)} × {referrals} referral{referrals > 1 ? 's' : ''}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                    {formatCurrency(breakdown.annualTotal)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="top-partner-comparison bg-gradient-to-r from-[#2d1b4d]/10 to-[#4945FF]/10 rounded-lg p-4 mb-6">
          <p className="text-center text-[#2d1b4d] font-medium font-['Lato']">
            Top partners earned $270K in 2024 — see how you stack up!
          </p>
        </div>
        
        <p className="text-center text-[#4945FF] italic mb-4 font-['Lato']">{message}</p>
      </div>
      
      {/* Chart Section */}
      <div className="mt-8">
        <div className="flex items-center">
          <h3 className="text-lg font-semibold text-[#2d1b4d] mb-4 font-['Raleway']">Potential Earnings by Number of Referrals</h3>
          <Tooltip text="This chart shows how your annual commission increases with more referrals. Notice the jumps at 4 and 7 referrals when you reach higher commission tiers." />
        </div>
        <div className="h-72 mt-4">
          <Line data={chartData} options={chartOptions} />
        </div>
      </div>
      
      {/* Tiers Comparison */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-50 p-4 rounded-lg shadow-sm border-l-4 border-[#4945FF]/50">
          <h4 className="font-bold text-center mb-2 font-['Raleway']">Tier 1: Referral Partner</h4>
          <div className="flex justify-center items-center gap-1">
            <span className="text-2xl font-bold text-[#4945FF]">5%</span>
            <span className="text-xs text-gray-500">commission</span>
          </div>
          <p className="text-center text-sm mt-2 font-['Lato']">0-3 Referrals</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg shadow-sm border-l-4 border-[#4945FF]/70">
          <h4 className="font-bold text-center mb-2 font-['Raleway']">Tier 2: Alliance Partner</h4>
          <div className="flex justify-center items-center gap-1">
            <span className="text-2xl font-bold text-[#4945FF]">7%</span>
            <span className="text-xs text-gray-500">commission</span>
          </div>
          <p className="text-center text-sm mt-2 font-['Lato']">4-6 Referrals</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg shadow-sm border-l-4 border-[#4945FF]">
          <h4 className="font-bold text-center mb-2 font-['Raleway']">Tier 3: Strategic Partner</h4>
          <div className="flex justify-center items-center gap-1">
            <span className="text-2xl font-bold text-[#4945FF]">10%</span>
            <span className="text-xs text-gray-500">commission</span>
          </div>
          <p className="text-center text-sm mt-2 font-['Lato']">7+ Referrals</p>
        </div>
      </div>
    </div>
  );
}

export default EarningsCalculator; 