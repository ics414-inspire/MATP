import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const EditableSpreadsheet2005 = () => {
  // State for the first table
  const [assetData, setAssetData] = useState([
    { category: 'Traditional Global Equity', allocation: '40.00%', return: '8.95%', deviation: '18.40%' },
    { category: 'Traditional Fixed Income', allocation: '17.00%', return: '4.00%', deviation: '5.50%' },
    { category: 'Traditional Real Assets', allocation: '5.00%', return: '6.20%', deviation: '20.50%' },
    { category: 'Hedge funds', allocation: '12.00%', return: '5.80%', deviation: '5.80%' },
    { category: 'Private Markets', allocation: '18.00%', return: '10.80%', deviation: '22.50%' },
    { category: 'Enhanced Liquidity', allocation: '3.00%', return: '3.10%', deviation: '2.50%' },
    { category: 'Hawaii Direct Investments', allocation: '5.00%', return: '3.60%', deviation: '5.50%' },
    { category: 'Total', allocation: '100.00%', return: '7.48%', deviation: '14.42%', isTotal: true },
  ]);

  // State for the second table
  const [multiYearData, setMultiYearData] = useState([
    {
      category: 'Traditional Global Equity',
      years: ['158,011,838', '124,226,300', '168,183,117', '162,068,767', '165,645,729', '169,176,531', '172,650,703', '176,018,492', '179,234,493', '182,266,746', '185,328,658', '188,427,265', '191,569,087'],
    },
    {
      category: 'Traditional Fixed Income',
      years: ['29,697,142', '69,701,867', '61,363,045', '68,879,226', '70,399,435', '71,900,025', '73,376,549', '74,807,859', '76,174,659', '77,463,367', '78,764,680', '80,081,588', '81,416,862'],
    },
    // Add more rows
    {
      category: 'Market Value',
      years: ['354,826,696', '358,150,624', '396,688,447', '405,171,918', '414,114,322', '422,941,326', '431,626,758', '440,046,230', '448,086,231', '455,666,864', '463,321,644', '471,068,162', '478,922,717'],
      isTotal: true,
    },
  ]);

  // Handle input changes for the first table
  const handleAssetInputChange = (index, field, value) => {
    const updatedData = [...assetData];
    updatedData[index][field] = value;
    setAssetData(updatedData);
  };

  // Handle input changes for the second table
  const handleMultiYearInputChange = (rowIndex, colIndex, value) => {
    const updatedData = [...multiYearData];
    updatedData[rowIndex].years[colIndex] = value;
    setMultiYearData(updatedData);
  };

  return (
    <div className="container mt-4">
      <h2>Asset Allocation Summary</h2>
      {/* First Table */}
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>Asset Category</th>
            <th>Target Asset Allocation</th>
            <th>Compound Return</th>
            <th>Standard Deviation</th>
          </tr>
        </thead>
        <tbody>
          {assetData.map((row, index) => (
            <tr key={index} className={row.isTotal ? 'font-weight-bold' : ''}>
              <td>{row.category}</td>
              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <td>
                <input
                  type="text"
                  value={row.allocation}
                  onChange={(e) => handleAssetInputChange(index, 'allocation', e.target.value)}
                  className="form-control"
                  disabled={row.isTotal}
                />
              </td>
              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <td>
                <input
                  type="text"
                  value={row.return}
                  onChange={(e) => handleAssetInputChange(index, 'return', e.target.value)}
                  className="form-control"
                  disabled={row.isTotal}
                />
              </td>
              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <td>
                <input
                  type="text"
                  value={row.deviation}
                  onChange={(e) => handleAssetInputChange(index, 'deviation', e.target.value)}
                  className="form-control"
                  disabled={row.isTotal}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Multi-Year Financial Data</h2>
      {/* Second Table */}
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>Asset Category</th>
            {Array.from({ length: 13 }).map((_, i) => (
              <th key={i}>Year {i + 1}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {multiYearData.map((row, rowIndex) => (
            <tr key={rowIndex} className={row.isTotal ? 'font-weight-bold' : ''}>
              <td>{row.category}</td>
              {row.years.map((value, colIndex) => (
                // eslint-disable-next-line jsx-a11y/control-has-associated-label
                <td key={colIndex}>
                  <input
                    type="text"
                    value={value}
                    onChange={(e) => handleMultiYearInputChange(rowIndex, colIndex, e.target.value)}
                    className="form-control"
                    disabled={row.isTotal}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EditableSpreadsheet2005;
