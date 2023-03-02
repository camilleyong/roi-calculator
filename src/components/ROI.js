import React, {useState} from "react";
import '../components/roi.css';


export default function ROICalculator() {
    const [investment, setInvestment] = useState('');
    const [returnAmount, setReturnAmount] = useState('');
    const [roi, setRoi] = useState('');
    const [email, setEmail] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
  
    const handleInvestmentChange = (e) => {
      setInvestment(e.target.value);
    };
  
    const handleReturnAmountChange = (e) => {
      setReturnAmount(e.target.value);
    };
  
    const calculateROI = () => {
      const roiValue = ((returnAmount - investment) / investment) * 100;
      setRoi(roiValue.toFixed(2));
    };

    const checkEmail = (email) => {
        return email
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };
  
    return (
      <div>
        <h2>ROI Calculator</h2>
        <div>
            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
            />
          <label htmlFor="investment">Investment:</label>
          <input
            type="number"
            id="investment"
            value={investment}
            onChange={handleInvestmentChange}
          />
        </div>
        <div>
          <label htmlFor="returnAmount">Return Amount:</label>
          <input
            type="number"
            id="returnAmount"
            value={returnAmount}
            onChange={handleReturnAmountChange}
          />
        </div>
        <div>
          <button onClick={calculateROI}>Calculate ROI</button>
        </div>
        <div>
          <label>ROI:</label> {roi}%
        </div>
      </div>
    );
  }