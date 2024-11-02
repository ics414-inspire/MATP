// EditableSpreadsheetDetailed.jsx

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const EditableSpreadsheetDetailed = () => {
  const [data, setData] = useState([
    { selectScenario: 0, description: 'Refinance for 5 years', interest: '', principal: '', totalDebtService: '', percentCoreBudget: '' },
    { selectScenario: 0, description: 'Refinance for 7 years', interest: '', principal: '', totalDebtService: '', percentCoreBudget: '' },
    { selectScenario: 1, description: 'Refinance for 9 years', interest: '', principal: '', totalDebtService: '', percentCoreBudget: '' },
  ]);

  const updateCellData = (rowIndex, columnId, value) => {
    setData((prevData) => prevData.map((row, index) => {
      if (index === rowIndex) {
        return { ...row, [columnId]: value };
      }
      return row;
    }));
  };

  const renderEditableCell = (rowIndex, columnId, value) => (
    <input
      type="text"
      value={value}
      onChange={(e) => updateCellData(rowIndex, columnId, e.target.value)}
      className="form-control"
      style={{
        border: 'none',
        textAlign: 'center',
        background: 'transparent',
        outline: 'none',
      }}
      aria-label={`${columnId} for row ${rowIndex + 1}`}
    />
  );

  return (
    <div className="container mt-4">
      <h2>Building B Line of Credit Projections</h2>
      <table className="table table-bordered" style={{ borderCollapse: 'collapse', tableLayout: 'fixed' }}>
        <thead>
          <tr>
            <th style={{ width: '10%', color: 'blue' }}>Select Scenario</th>
            <th style={{ width: '20%', color: 'blue' }}>Description</th>
            <th style={{ width: '15%' }}>Interest</th>
            <th style={{ width: '15%' }}>Principal</th>
            <th style={{ width: '20%' }}>Total Debt Service</th>
            <th style={{ width: '20%' }}>% of Core Op Budget</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <React.Fragment key={rowIndex}>
              <tr>
                {/* Select Scenario Cell with a button to represent the scenario */}
                <td style={{ textAlign: 'center', backgroundColor: row.selectScenario ? '#cccccc' : '#e0e0e0' }}>
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm"
                    onClick={() => updateCellData(rowIndex, 'selectScenario', row.selectScenario ? 0 : 1)}
                  >
                    {row.selectScenario}
                  </button>
                </td>
                {/* Description Cell */}
                <td style={{ color: 'blue', fontWeight: 'bold' }}>{row.description}</td>
                {/* Editable Cells for Financial Data */}
                <td>{renderEditableCell(rowIndex, 'interest', row.interest)}</td>
                <td>{renderEditableCell(rowIndex, 'principal', row.principal)}</td>
                <td>{renderEditableCell(rowIndex, 'totalDebtService', row.totalDebtService)}</td>
                <td>{renderEditableCell(rowIndex, 'percentCoreBudget', row.percentCoreBudget)}</td>
              </tr>

              {/* Bank Section Subcategories */}
              {rowIndex === 0 && (
                <>
                  <tr style={{ fontWeight: 'bold' }}>
                    <td colSpan="6">Bank of Hawaii 5 Year Secured</td>
                  </tr>
                  <tr>
                    <td>Interest</td>
                    <td>{renderEditableCell(rowIndex, 'interest', row.interest)}</td>
                    <td>Principal</td>
                    <td>{renderEditableCell(rowIndex, 'principal', row.principal)}</td>
                    <td>% of Core Op Budget</td>
                  </tr>
                  <tr>
                    <td>Total Debt Service</td>
                    <td colSpan="4">{renderEditableCell(rowIndex, 'totalDebtService', row.totalDebtService)}</td>
                  </tr>
                </>
              )}
              {rowIndex === 1 && (
                <>
                  <tr style={{ fontWeight: 'bold' }}>
                    <td colSpan="6">Bank of Hawaii 7 Year Secured</td>
                  </tr>
                  <tr>
                    <td>Interest</td>
                    <td>{renderEditableCell(rowIndex, 'interest', row.interest)}</td>
                    <td>Principal</td>
                    <td>{renderEditableCell(rowIndex, 'principal', row.principal)}</td>
                    <td>% of Core Op Budget</td>
                  </tr>
                  <tr>
                    <td>Total Debt Service</td>
                    <td colSpan="4">{renderEditableCell(rowIndex, 'totalDebtService', row.totalDebtService)}</td>
                  </tr>
                </>
              )}
              {rowIndex === 2 && (
                <>
                  <tr style={{ fontWeight: 'bold' }}>
                    <td colSpan="6">Bank of Hawaii 9 Year Secured</td>
                  </tr>
                  <tr>
                    <td>Interest</td>
                    <td>{renderEditableCell(rowIndex, 'interest', row.interest)}</td>
                    <td>Principal</td>
                    <td>{renderEditableCell(rowIndex, 'principal', row.principal)}</td>
                    <td>% of Core Op Budget</td>
                  </tr>
                  <tr>
                    <td>Total Debt Service</td>
                    <td colSpan="4">{renderEditableCell(rowIndex, 'totalDebtService', row.totalDebtService)}</td>
                  </tr>
                </>
              )}
            </React.Fragment>
          ))}
          {/* Projected Core Op Budget Row */}
          <tr style={{ fontWeight: 'bold' }}>
            <td colSpan="2">Core Op. Budget (projected)</td>
            <td colSpan="4">{/* Add editable or static content here as needed */}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default EditableSpreadsheetDetailed;
