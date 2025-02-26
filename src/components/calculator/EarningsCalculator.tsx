import { useEffect, useRef, useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const EarningsCalculator = () => {
  // State for slider values
  const [invoiceAmount, setInvoiceAmount] = useState(50000);
  const [referrals, setReferrals] = useState(1);
  
  // State for calculation results
  const [tier, setTier] = useState('');
  const [perReferral, setPerReferral] = useState(0);
  const [annualTotal, setAnnualTotal] = useState(0);
  const [breakdown, setBreakdown] = useState({
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
  const presetInvoices = [
    { label: 'Small ($50K)', value: 50000 },
    { label: 'Medium ($100K)', value: 100000 },
    { label: 'Large ($250K)', value: 250000 },
    { label: 'XL ($500K)', value: 500000 }
  ];
  
  const presetReferrals = [
    { label: '1', value: 1 },
    { label: '3', value: 3 },
    { label: '6', value: 6 },
    { label: '10', value: 10 }
  ];
  
  // Calculate commissions whenever inputs change
  useEffect(() => {
    calculateCommission();
  }, [invoiceAmount, referrals]);
  
  // Calculate the commission based on inputs
  const calculateCommission = () => {
    const netProfitMargin = 0.4;
    
    // Determine tier and commission rate
    let commissionRate, tierName, nextTierReferrals;
    
    if (referrals <= 2) {
      commissionRate = 0.05;
      tierName = 'Referral Partner (5%)';
      nextTierReferrals = 3;
      setProgressToNextTier((referrals / 3) * 100);
    } else if (referrals <= 5) {
      commissionRate = 0.07;
      tierName = 'Alliance Partner (7%)';
      nextTierReferrals = 6;
      setProgressToNextTier(((referrals - 3) / 3) * 100);
    } else {
      commissionRate = 0.1;
      tierName = 'Strategic Partner (10%)';
      nextTierReferrals = null;
      setProgressToNextTier(100);
    }
    
    // Calculations
    const monthlyNetProfit = invoiceAmount * netProfitMargin;
    const monthlyCommission = monthlyNetProfit * commissionRate;
    const totalPerReferral = monthlyCommission * 6;
    const totalAnnual = totalPerReferral * referrals;
    
    // Set results
    setTier(tierName);
    setPerReferral(totalPerReferral);
    setAnnualTotal(totalAnnual);
    setBreakdown({
      monthlyNetProfit,
      monthlyCommission,
      totalPerReferral,
      annualTotal: totalAnnual
    });
    
    // Set message
    if (referrals >= 6) {
      setMessage(`With ${referrals} referrals, you're a Strategic Partner earning our maximum 10% commission rate!`);
    } else {
      setMessage(`You qualify for our ${tierName} level. Keep growing your network!`);
    }
    
    // Dynamic tip
    if (referrals === 1 || referrals === 2) {
      const neededReferrals = 3 - referrals;
      setDynamicTip(`Add just ${neededReferrals} more referral${neededReferrals > 1 ? 's' : ''} to reach Alliance Partner status and earn 7% commission!`);
    } else if (referrals >= 3 && referrals <= 5) {
      const neededReferrals = 6 - referrals;
      setDynamicTip(`Only ${neededReferrals} more referral${neededReferrals > 1 ? 's' : ''} to become a Strategic Partner with 10% commission!`);
    } else {
      setDynamicTip(`You've reached our highest tier! Add more clients to maximize your earnings.`);
    }
  };
  
  // Chart data
  const chartData = {
    labels: Array.from({ length: 20 }, (_, i) => i + 1),
    datasets: [
      {
        label: 'Annual Commission',
        data: Array.from({ length: 20 }, (_, i) => {
          const refs = i + 1;
          const rate = refs <= 2 ? 0.05 : refs <= 5 ? 0.07 : 0.1;
          return invoiceAmount * 0.4 * rate * 6 * refs;
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
          label: function(context: any) {
            return `$${context.raw.toLocaleString()}`;
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
        }
      }
    }
  };
  
  // Handle preset button clicks
  const handlePresetInvoice = (value: number) => {
    setInvoiceAmount(value);
  };
  
  const handlePresetReferral = (value: number) => {
    setReferrals(value);
  };
  
  // Format currency
  const formatCurrency = (value: number) => {
    return '$' + value.toLocaleString(undefined, { maximumFractionDigits: 0 });
  };

  return (
    <div className="calculator-card bg-white rounded-2xl shadow-lg p-6 md:p-8 max-w-3xl mx-auto my-12">
      <h2 className="text-3xl font-bold text-center text-[#4945FF] mb-8 font-['Raleway']">Earnings Calculator</h2>
      
      <div className="inputs space-y-8">
        <div>
          <div className="flex justify-between mb-2">
            <label className="block font-medium text-gray-700 font-['Lato']">Monthly Invoice Amount</label>
            <span className="text-[#4945FF] font-bold font-['Lato']">{formatCurrency(invoiceAmount)}</span>
          </div>
          <input 
            type="range" 
            min="10000" 
            max="500000" 
            step="1000"
            value={invoiceAmount} 
            onChange={(e) => setInvoiceAmount(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#4945FF]"
          />
          <div className="preset-buttons flex flex-wrap gap-2 mt-3">
            {presetInvoices.map((preset) => (
              <button 
                key={preset.value}
                onClick={() => handlePresetInvoice(preset.value)}
                className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
                  invoiceAmount === preset.value 
                    ? 'bg-[#4945FF] text-white' 
                    : 'bg-[#4945FF]/20 text-[#4945FF] hover:bg-[#4945FF]/30'
                }`}
              >
                {preset.label}
              </button>
            ))}
          </div>
        </div>
        
        <div>
          <div className="flex justify-between mb-2">
            <label className="block font-medium text-gray-700 font-['Lato']">Number of Referrals</label>
            <span className="text-[#4945FF] font-bold font-['Lato']">{referrals}</span>
          </div>
          <input 
            type="range" 
            min="1" 
            max="20" 
            value={referrals} 
            onChange={(e) => setReferrals(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#4945FF]"
          />
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
        
        {/* Tier Progress Bar */}
        <div className="mt-4">
          <div className="flex justify-between mb-2">
            <span className="text-sm text-gray-500 font-['Lato']">Current Tier: {tier}</span>
            {progressToNextTier < 100 && (
              <span className="text-sm text-gray-500 font-['Lato']">Next Tier: {
                referrals <= 2 ? 'Alliance Partner (7%)' : 'Strategic Partner (10%)'
              }</span>
            )}
          </div>
          <div className="w-full h-2.5 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-[#4945FF] to-[#2d1b4d] rounded-full"
              style={{ width: `${progressToNextTier}%` }}
            ></div>
          </div>
          <p className="text-sm italic text-[#4945FF] mt-2 font-['Lato']">{dynamicTip}</p>
        </div>
      </div>
      
      <div className="results mt-10 bg-gray-50 rounded-xl p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="text-center p-4 bg-white rounded-lg shadow-sm">
            <h3 className="text-gray-500 text-sm mb-2 font-['Lato']">Your Tier</h3>
            <p className="text-xl font-bold text-[#2d1b4d] font-['Raleway']">{tier}</p>
          </div>
          <div className="text-center p-4 bg-white rounded-lg shadow-sm">
            <h3 className="text-gray-500 text-sm mb-2 font-['Lato']">Per Referral</h3>
            <p className="text-xl font-bold text-[#2d1b4d] font-['Raleway']">{formatCurrency(perReferral)}</p>
            <p className="text-xs text-gray-500 font-['Lato']">over 6 months</p>
          </div>
          <div className="text-center p-4 bg-white rounded-lg shadow-sm">
            <h3 className="text-gray-500 text-sm mb-2 font-['Lato']">Annual Total</h3>
            <p className="text-xl font-bold text-[#2d1b4d] font-['Raleway']">{formatCurrency(annualTotal)}</p>
            <p className="text-xs text-gray-500 font-['Lato']">for {referrals} referral{referrals > 1 ? 's' : ''}</p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-4 shadow-sm mb-6">
          <h3 className="text-lg font-semibold text-[#2d1b4d] mb-3 font-['Raleway']">Earnings Breakdown</h3>
          <div className="text-sm space-y-2 font-['Lato']">
            <p><span className="text-gray-500">Monthly Net Profit:</span> {formatCurrency(invoiceAmount)} × 40% = {formatCurrency(breakdown.monthlyNetProfit)}</p>
            <p><span className="text-gray-500">Monthly Commission:</span> {formatCurrency(breakdown.monthlyNetProfit)} × {referrals <= 2 ? '5%' : referrals <= 5 ? '7%' : '10%'} = {formatCurrency(breakdown.monthlyCommission)}</p>
            <p><span className="text-gray-500">Total per Referral:</span> {formatCurrency(breakdown.monthlyCommission)} × 6 months = {formatCurrency(breakdown.totalPerReferral)}</p>
            <p><span className="text-gray-500">Annual Total:</span> {formatCurrency(breakdown.totalPerReferral)} × {referrals} referral{referrals > 1 ? 's' : ''} = {formatCurrency(breakdown.annualTotal)}</p>
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
        <h3 className="text-lg font-semibold text-[#2d1b4d] mb-4 font-['Raleway']">Potential Earnings by Number of Referrals</h3>
        <div className="h-60 mt-4">
          <Line data={chartData} options={chartOptions} />
        </div>
      </div>
      
      {/* Tiers Comparison */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
          <h4 className="font-bold text-center mb-2 font-['Raleway']">Referral Partner</h4>
          <div className="flex justify-center items-center gap-1">
            <span className="text-2xl font-bold text-[#4945FF]">5%</span>
            <span className="text-xs text-gray-500">commission</span>
          </div>
          <p className="text-center text-sm mt-2 font-['Lato']">1-2 Referrals</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
          <h4 className="font-bold text-center mb-2 font-['Raleway']">Alliance Partner</h4>
          <div className="flex justify-center items-center gap-1">
            <span className="text-2xl font-bold text-[#4945FF]">7%</span>
            <span className="text-xs text-gray-500">commission</span>
          </div>
          <p className="text-center text-sm mt-2 font-['Lato']">3-5 Referrals</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
          <h4 className="font-bold text-center mb-2 font-['Raleway']">Strategic Partner</h4>
          <div className="flex justify-center items-center gap-1">
            <span className="text-2xl font-bold text-[#4945FF]">10%</span>
            <span className="text-xs text-gray-500">commission</span>
          </div>
          <p className="text-center text-sm mt-2 font-['Lato']">6+ Referrals</p>
        </div>
      </div>
      
      {/* CTA Button */}
      <div className="mt-10 text-center">
        <button 
          className="px-8 py-4 bg-[#4945FF] text-white rounded-md text-lg hover:bg-[#4945FF]/90 transition-colors font-medium font-['Lato'] transform hover:-translate-y-1 active:translate-y-0 duration-200"
          onClick={() => {
            const contactSection = document.getElementById('get-started');
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          REQUEST PROGRAM DETAILS
        </button>
      </div>
    </div>
  );
}

export default EarningsCalculator; 