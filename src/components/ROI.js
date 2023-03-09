import React, {useState} from "react";
import '../components/roi.css';


export default function ROICalculator() {
    const [investment, setInvestment] = useState('');
    const [returnAmount, setReturnAmount] = useState('');
    const [roi, setRoi] = useState('');
    const [email, setEmail] = useState('');
    const [physician, setPhysician] = useState('');
    const [staff, setStaff] = useState('');
    const [medicare, setMedicare] = useState('');
    const [time, setTime] = useState('');
    const [revenue, setRevenue] = useState('');
    const [savings, setSavings] = useState('');

    // Validate email
    const checkEmail = (email) => {
        return email
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);

        if (checkEmail(email)) {
            console.log("email is valid");
        } else {
            console.log("email is invalid");
            setEmail('Invalid email address');
        }
    };
  
    // Calulate ROI
    const handleInvestmentChange = (e) => {
      setInvestment(e.target.value);
    };
  
    const handleReturnAmountChange = (e) => {
      setReturnAmount(e.target.value);
    };
  
    const calculateROI = () => {
      const roiValue = ((returnAmount - investment) / investment) * 100;
      setRoi(roiValue.toFixed(2));

      const timeSavings = (15/60) * medicare;
      const revenueGenerated = medicare * 75;
      const savings = (15/60) * (physician + staff);
    };

    /* Time Savings = (15 min)/(60 min) x (#of AWV for MA members)
Revenue Generated =  (# of AWV for MA members) x ($75) 
Savings = (15 min)/(60 min) x (Average of Physician and staff composition) */
  
    return (
      <div>
        <h2>ROI Calculator</h2>

        {/* EMAIL */}
        <div>
            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
            />
            </div>

        {/* PHYSICIAN COMPENSATION */}
            <div>
            <label htmlFor="physician">Physician Compensation:</label>
            <input
                type="email"
                id="email"
                // value={}
                // onChange={}
                placeholder="per hour"
            />
            </div>

        {/* STAFF COMPENSATION */}
            <div>
            <label htmlFor="staff">Staff Compensation:</label>
            <input
                type="email"
                id="email"
                // value={}
                // onChange={}
                placeholder="per hour"
            />
            </div>

        {/* ANNUAL WELLNESS VISITS FOR MEDICARE ADVANTAGE MEMBERS */}
            <div>
            <label htmlFor="medicare">Annual Wellness Visits for Medicare Advantage Members:</label>
            <input
                type="email"
                id="email"
                // value={}
                // onChange={}
                placeholder="visits/hour"
            />
            </div>

        {/* CHECKBOX FOR WANTING TO SCHEDULE A DEMO */}
            <div>
            <label htmlFor="demo">Schedule a Demo:
                <input type="checkbox" />
            </label>
            </div>


            <div>
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

          {/* Time Savings = (15 min)/(60 min) x (#of AWV for MA members)
Revenue Generated =  (# of AWV for MA members) x ($75) 
Savings = (15 min)/(60 min) x (Average of Physician and staff composition) */}
        </div>
      </div>
    );
  }