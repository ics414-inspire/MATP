import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Page2503 = () => {
  // State for "Approved Fringe Benefit Rates"
  const [fringeBenefitRates, setFringeBenefitRates] = useState([
    { category: 'Pension Accumulation', years: ['15.00%', '15.50%', '16.00%', '16.50%', '17.00%', '18.00%', '19.00%', '22.00%'] },
    { category: 'Retiree Health Insurance', years: ['7.96%', '10.35%', '10.12%', '10.12%', '8.07%', '10.14%', '10.14%', '22.84%'] },
    { category: 'Other Post-Employment Benefits', years: ['0.00%', '0.00%', '0.00%', '0.00%', '7.78%', '14.33%', '14.33%', '14.45%'] },
    { category: 'Employees Health Fund', years: ['7.02%', '6.84%', '6.81%', '6.81%', '7.62%', '7.69%', '7.69%', '7.71%'] },
    { category: 'Social Security', years: ['6.20%', '6.20%', '6.20%', '6.20%', '6.20%', '6.20%', '6.20%', '6.20%'] },
    { category: 'Medicare', years: ['1.45%', '1.45%', '1.45%', '1.45%', '1.45%', '1.45%', '1.45%', '1.45%'] },
    { category: 'Workers Compensation', years: ['1.22%', '0.88%', '1.16%', '1.16%', '1.27%', '1.24%', '1.24%', '1.24%'] },
    { category: 'Unemployment Compensation', years: ['0.91%', '0.31%', '0.25%', '0.25%', '0.09%', '0.02%', '0.02%', '0.02%'] },
    { category: 'Pension Administration', years: ['0.00%', '0.01%', '0.00%', '0.00%', '0.00%', '0.01%', '0.01%', '0.01%'] },
    { category: 'Composite Rate', years: ['39.76%', '41.54%', '41.99%', '42.49%', '49.54%', '59.08%', '63.08%', '63.88%'], isTotal: true },
  ]);

  // State for "Growth of Rates from Y-t-Y"
  const [growthRates, setGrowthRates] = useState([
    { category: 'Pension Accumulation', years: ['3.33%', '3.23%', '3.13%', '3.03%', '0.00%', '5.88%', '5.56%'], average: '3.81%' },
    { category: 'Retiree Health Insurance', years: ['30.03%', '-2.22%', '0.00%', '-20.26%', '16.36%', '7.99%', '0.00%'], average: '8.11%' },
    { category: 'Other Post-Employment Benefits', years: ['0.00%', '0.00%', '0.00%', '0.00%', '0.00%', '0.00%', '0.00%'], average: '0.12%' },
    { category: 'Employees Health Fund', years: ['-2.56%', '-0.44%', '0.00%', '11.89%', '-0.26%', '1.18%', '0.00%'], average: '0.31%' },
    { category: 'Social Security', years: ['0.00%', '0.00%', '0.00%', '0.00%', '0.00%', '0.00%', '0.00%'], average: '0.00%' },
    { category: 'Medicare', years: ['0.00%', '0.00%', '0.00%', '0.00%', '0.00%', '0.00%', '0.00%'], average: '0.00%' },
    { category: 'Workers Compensation', years: ['-27.87%', '31.82%', '0.00%', '9.48%', '-16.54%', '16.98%', '0.00%'], average: '0.15%' },
    { category: 'Unemployment Compensation', years: ['-65.93%', '-19.35%', '0.00%', '-40.00%', '-77.78%', '0.00%', '0.00%'], average: '-39.26%' },
    { category: 'Pension Administration', years: ['0.00%', '0.00%', '0.00%', '0.00%', '0.00%', '0.00%', '0.00%'], average: '0.00%' },
  ]);

  // State for "Composite - growth in all categories"
  const [compositeGrowth, setCompositeGrowth] = useState([
    { category: 'Pension Accumulation', years: ['15.00%', '15.50%', '16.00%', '16.50%', '17.00%', '18.00%', '19.00%', '22.00%', '22.43%', '22.86%', '23.30%', '23.75%'] },
    { category: 'Retiree Health Insurance', years: ['7.96%', '10.35%', '10.12%', '10.12%', '8.07%', '10.14%', '10.14%', '22.84%', '10.34%', '10.54%', '10.74%', '10.95%'] },
    // Add more rows...
    { category: 'Composite Rate', years: ['39.76%', '41.54%', '41.99%', '42.49%', '49.54%', '59.08%', '63.08%', '63.88%', '64.30%', '65.55%', '66.81%', '68.11%'], isTotal: true },
  ]);

  // State for "OPEB Only"
  const [opebOnly, setOpebOnly] = useState([
    { category: 'Pension Accumulation', years: ['15.00%', '15.50%', '16.00%', '16.50%', '17.00%', '18.00%', '19.00%', '22.00%', '22.00%', '22.00%', '22.00%', '22.00%'] },
    { category: 'Retiree Health Insurance', years: ['7.96%', '10.35%', '10.12%', '10.12%', '8.07%', '10.14%', '10.14%', '22.00%', '10.14%', '10.14%', '10.14%', '10.14%'] },
    { category: 'Composite Rate', years: ['39.76%', '41.54%', '41.99%', '42.49%', '49.54%', '59.08%', '63.08%', '63.88%', '64.02%', '65.03%', '66.03%', '67.03%'], isTotal: true },
  ]);

  // State for multipliers
  const [compositeMultiplier, setCompositeMultiplier] = useState('1.02');
  const [opebMultiplier, setOpebMultiplier] = useState('1.07');

  // Generic change handler for dynamic updates
  const handleInputChange = (setState, rowIndex, colIndex, value, isMultiplier = false) => {
    if (isMultiplier) {
      setState(value);
    } else {
      setState((prevState) => {
        const updatedState = [...prevState];
        updatedState[rowIndex].years[colIndex] = value;
        return updatedState;
      });
    }
  };

  // Render a dynamic table
  const renderTable = (data, setState, title, multiplierState = null, multiplierLabel = null) => (
    <div className="mt-4">
      <h4>{title}</h4>
      {multiplierState && (
        <div className="mb-2">
          <label htmlFor="multiplier" className="form-label">{multiplierLabel}:</label>
          <input
            id="multiplier"
            type="text"
            value={multiplierState}
            onChange={(e) => handleInputChange(multiplierState === compositeMultiplier ? setCompositeMultiplier : setOpebMultiplier, null, null, e.target.value, true)}
            className="form-control"
          />
        </div>
      )}
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>Category</th>
            {data[0].years.map((_, index) => (
              <th key={index}>Year {index + 1}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className={row.isTotal ? 'font-weight-bold' : ''}>
              <td>{row.category}</td>
              {row.years.map((value, colIndex) => (
                // eslint-disable-next-line jsx-a11y/control-has-associated-label
                <td key={colIndex}>
                  <input
                    type="text"
                    value={value}
                    onChange={(e) => handleInputChange(setState, rowIndex, colIndex, e.target.value)}
                    className="form-control"
                    disabled={row.isTotal} // Disable inputs for total row
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="container">
      <h2>Page 2503 - Input Screen</h2>
      {/* Render the first table */}
      {renderTable(fringeBenefitRates, setFringeBenefitRates, 'Approved Fringe Benefit Rates')}
      {/* Render the second table */}
      {renderTable(growthRates, setGrowthRates, 'Growth of Rates from Y-t-Y')}
      {/* Render the third table */}
      {renderTable(compositeGrowth, setCompositeGrowth, 'Composite - growth in all categories', compositeMultiplier, 'Multiplier - Composite')}
      {/* Render the fourth table */}
      {renderTable(opebOnly, setOpebOnly, 'OPEB Only', opebMultiplier, 'Multiplier - OPEB Only')}
    </div>
  );
};

export default Page2503;
