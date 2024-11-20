import { Table } from 'react-bootstrap';
import React from 'react';

const SnapShot = () => {
  // Hardcoded Snap Shot data
  const snapshotData = [
    { year: 'YEAR 1', assets: 660137198, liabilities: 510692581, netPosition: 149444617, cashOnHand: 143912689, investment: 354178236, utility: 33543139, debt: 214615747, revenues: 373746543, opex: 83585519, netIncome: 290160023 },
    { year: 'YEAR 2', assets: 670492102, liabilities: 514859093, netPosition: 155633009, cashOnHand: 145654721, investment: 360744805, utility: 33890716, debt: 30865457, revenues: 377663608, opex: 82616033, netIncome: 295047575 },
    { year: 'YEAR 3', assets: 680447782, liabilities: 519201382, netPosition: 161246400, cashOnHand: 146679046, investment: 367721859, utility: 34229610, debt: 30160955, revenues: 381852765, opex: 81680554, netIncome: 300172211 },
    { year: 'YEAR 4', assets: 703048834, liabilities: 538002209, netPosition: 165046625, cashOnHand: 148155895, investment: 375076157, utility: 34571906, debt: 21740000, revenues: 384892873, opex: 80782546, netIncome: 304110328 },
    { year: 'YEAR 5', assets: 710534774, liabilities: 541920356, netPosition: 168614418, cashOnHand: 150601672, investment: 381455788, utility: 34916256, debt: 24000000, revenues: 389168412, opex: 79904739, netIncome: 309263674 },
    { year: 'YEAR 6', assets: 720452877, liabilities: 547057409, netPosition: 173395468, cashOnHand: 151235432, investment: 387456191, utility: 35263474, debt: 18000000, revenues: 392711670, opex: 79103646, netIncome: 313607024 },
    { year: 'YEAR 7', assets: 731007202, liabilities: 552489676, netPosition: 178517526, cashOnHand: 153124212, investment: 393616743, utility: 35613609, debt: 15000000, revenues: 396873882, opex: 78312649, netIncome: 318561233 },
    { year: 'YEAR 8', assets: 741062577, liabilities: 557485527, netPosition: 183577050, cashOnHand: 155089623, investment: 399617188, utility: 35966746, debt: 11000000, revenues: 401468479, opex: 77529552, netIncome: 322938926 },
    { year: 'YEAR 9', assets: 751289702, liabilities: 562875247, netPosition: 188414455, cashOnHand: 157065454, investment: 405856784, utility: 36322892, debt: 9500000, revenues: 406140649, opex: 76763979, netIncome: 327376670 },
    { year: 'YEAR 10', assets: 761723302, liabilities: 568658572, netPosition: 193064730, cashOnHand: 159028764, investment: 412356371, utility: 36682021, debt: 8500000, revenues: 410968473, opex: 76009780, netIncome: 331958693 },
    { year: 'YEAR 11', assets: 772687307, liabilities: 574756277, netPosition: 197931030, cashOnHand: 161090902, investment: 418885256, utility: 37044141, debt: 12500000, revenues: 415918121, opex: 75259766, netIncome: 336658355 },
    { year: 'YEAR 12', assets: 785147763, liabilities: 581178072, netPosition: 203969691, cashOnHand: 163101587, investment: 425345634, utility: 37409267, debt: 15000000, revenues: 420929856, opex: 74514609, netIncome: 341415247 },
  ];

  return (
    <div>
      <h2>Snap Shot Data</h2>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Year</th>
            <th>Assets</th>
            <th>Liabilities</th>
            <th>Net Position</th>
            <th>Cash on Hand</th>
            <th>Investment</th>
            <th>Utility</th>
            <th>Debt</th>
            <th>Revenues</th>
            <th>Opex</th>
            <th>Net Income</th>
          </tr>
        </thead>
        <tbody>
          {snapshotData.map((row, index) => (
            <tr key={index}>
              <td>{row.year}</td>
              <td>{row.assets.toLocaleString()}</td>
              <td>{row.liabilities.toLocaleString()}</td>
              <td>{row.netPosition.toLocaleString()}</td>
              <td>{row.cashOnHand.toLocaleString()}</td>
              <td>{row.investment.toLocaleString()}</td>
              <td>{row.utility.toLocaleString()}</td>
              <td>{row.debt.toLocaleString()}</td>
              <td>{row.revenues.toLocaleString()}</td>
              <td>{row.opex.toLocaleString()}</td>
              <td>{row.netIncome.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default SnapShot;
