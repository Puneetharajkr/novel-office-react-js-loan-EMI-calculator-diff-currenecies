const useEMICalculator = () => {
  const calculateEMI = (P, annualRate, N) => {
    if (!P || !annualRate || !N) return 0;
    
    const R = annualRate / 12 / 100;
    const emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    return emi.toFixed(2);
  };

  return { calculateEMI };
};

export default useEMICalculator;