import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import swal from 'sweetalert';
import { Card, Col, Row } from 'react-bootstrap';
import { AutoForm, ErrorsField, HiddenField, NumField, SubmitField } from 'uniforms-bootstrap5';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { AuditedBalanceSheet } from '../../api/Inputs/AuditedBalanceSheetCollection';
import { updateMethod } from '../../api/base/BaseCollection.methods';

const bridge = new SimpleSchema2Bridge(AuditedBalanceSheet._schema);

const sumArray = (array) => array.reduce((sum, item) => sum + Object.values(item).reduce((innerSum, value) => innerSum + (typeof value === 'number' ? value : 0), 0), 0);

const submit = (audBalSheet, data) => {
  const { cashStuff, otherAssets, investments, loanFund, assets, land, compBAssets, restrictedCash, defOutflowsPension, defOutflowsOPEB, liabilities, liaWithinYr, liaAfterYr, defInflowsPension, defInflowsOPEB, commitAndContin } = data;
  const docID = audBalSheet._id;
  const collectionName = AuditedBalanceSheet.getCollectionName();
  const updateData = {
    id: docID, cashStuff, otherAssets, investments, loanFund, assets, land, compBAssets, restrictedCash, defOutflowsPension, defOutflowsOPEB, liabilities, liaWithinYr, liaAfterYr, defInflowsPension, defInflowsOPEB, commitAndContin };

  updateMethod.callPromise({ collectionName, updateData })
    .catch(error => swal('Error', error.message, 'error'))
    .then(() => swal('Success', 'Item updated successfully', 'success'));
};

const DisplayAudBalSheet = ({ audBalSheet }) => {
  const [totalCash, setTotalCash] = useState(0);
  const [subtotalOtherAssets, setSubtotalOtherAssets] = useState(0);
  const [totalInvestments, setTotalInvestments] = useState(0);
  const [totalLoanFund, setTotalLoanFund] = useState(0);
  const [totalInvestLoan, setTotalInvestLoan] = useState(0);
  const [totalAssets, setTotalAssets] = useState(0);
  const [totalLand, setTotalLand] = useState(0);
  const [totalCompBAssets, setTotalCompBAssets] = useState(0);
  const [totalCapAssets, setTotalCapAssets] = useState(0);
  const [totalOtherAssets, setTotalOtherAssets] = useState(0);
  const [totalAssetsAndDefOutflows, setTotalAssetsAndDefOutflows] = useState(0);
  const [totalLiaWithinYr, setTotalLiaWithinYr] = useState(0);
  const [totalLiaAfterYr, setTotalLiaAfterYr] = useState(0);
  const [totalLiabilities, setTotalLiabilities] = useState(0);
  const [totalLiaAndDefInflows, setTotalLiaAndDefInflows] = useState(0);
  const [totalCommitAndContin, setTotalCommitAndContin] = useState(0);
  const [totalLiaInflowsNetPos, setTotalLiaInflowsNetPos] = useState(0);

  useEffect(() => {
    const cashArray = audBalSheet.cashStuff || [];
    const otherAssetsArray = audBalSheet.otherAssets || [];
    const investmentsArray = audBalSheet.investments || [];
    const loanFundArray = audBalSheet.loanFund || [];
    const assetsArray = audBalSheet.assets || [];
    const landArray = audBalSheet.land || [];
    const compBAssetsArray = audBalSheet.compBAssets || [];
    const restrictedCash = audBalSheet.restrictedCash || 0;
    const defOutflowsPension = audBalSheet.defOutflowsPension || 0;
    const defOutflowsOPEB = audBalSheet.defOutflowsOPEB || 0;
    const liabilitiesArray = audBalSheet.liabilities || [];
    const liaWithinYrArray = audBalSheet.liaWithinYr || [];
    const liaAfterYrArray = audBalSheet.liaAfterYr || [];
    const defInflowsPension = audBalSheet.defInflowsPension || 0;
    const defInflowsOPEB = audBalSheet.defInflowsOPEB || 0;
    const commitAndContinArray = audBalSheet.commitAndContin || [];
    const cashTotal = sumArray(cashArray);
    const otherAssetsSubtotal = sumArray(otherAssetsArray);
    const investmentsTotal = investmentsArray.reduce((sum, item) => sum + Object.values(item).reduce((innerSum, value) => innerSum + (typeof value === 'number' ? value : 0), 0), 0);
    const loanFundTotal = loanFundArray.reduce((sum, item) => sum + Object.values(item).reduce((innerSum, value) => innerSum + (typeof value === 'number' ? value : 0), 0), 0);
    const investLoanTotal = investmentsTotal + loanFundTotal;
    const assetsTotal = assetsArray.reduce((sum, item) => sum + Object.values(item).reduce((innerSum, value) => innerSum + (typeof value === 'number' ? value : 0), 0), 0);
    const landTotal = landArray.reduce((sum, item) => sum + Object.values(item).reduce((innerSum, value) => innerSum + (typeof value === 'number' ? value : 0), 0), 0);
    const compBAssetsTotal = compBAssetsArray.reduce((sum, item) => sum + Object.values(item).reduce((innerSum, value) => innerSum + (typeof value === 'number' ? value : 0), 0), 0);
    const capAssetsTotal = assetsTotal + landTotal + compBAssetsTotal;
    const otherAssetsTotal = restrictedCash + capAssetsTotal + investLoanTotal + otherAssetsSubtotal;
    const assetsAndDefOutflowsTotal = defOutflowsPension + defOutflowsOPEB + otherAssetsTotal;
    const liaWithinYrTotal = liaWithinYrArray.reduce((sum, item) => sum + Object.values(item).reduce((innerSum, value) => innerSum + (typeof value === 'number' ? value : 0), 0), 0);
    const liaAfterYrTotal = liaAfterYrArray.reduce((sum, item) => sum + Object.values(item).reduce((innerSum, value) => innerSum + (typeof value === 'number' ? value : 0), 0), 0);
    const liabilitiesTotal = liaWithinYrTotal + liaAfterYrTotal + liabilitiesArray.reduce((sum, item) => sum + Object.values(item).reduce((innerSum, value) => innerSum + (typeof value === 'number' ? value : 0), 0), 0);
    const liaAndDefInflowsTotal = liabilitiesTotal + defInflowsPension + defInflowsOPEB;
    const commitAndContinTotal = commitAndContinArray.reduce((sum, item) => sum + Object.values(item).reduce((innerSum, value) => innerSum + (typeof value === 'number' ? value : 0), 0), 0);
    const liaInflowsNetPosTotal = liaAndDefInflowsTotal + commitAndContinTotal;

    setTotalCash(cashTotal);
    setSubtotalOtherAssets(subtotalOtherAssets);
    setTotalInvestments(investmentsTotal);
    setTotalLoanFund(loanFundTotal);
    setTotalInvestLoan(investLoanTotal);
    setTotalAssets(assetsTotal);
    setTotalLand(landTotal);
    setTotalCompBAssets(compBAssetsTotal);
    setTotalCapAssets(capAssetsTotal);
    setTotalOtherAssets(otherAssetsTotal);
    setTotalAssetsAndDefOutflows(assetsAndDefOutflowsTotal);
    setTotalLiaWithinYr(liaWithinYrTotal);
    setTotalLiaAfterYr(liaAfterYrTotal);
    setTotalLiabilities(liabilitiesTotal);
    setTotalLiaAndDefInflows(liaAndDefInflowsTotal);
    setTotalCommitAndContin(commitAndContinTotal);
    setTotalLiaInflowsNetPos(liaInflowsNetPosTotal);
  }, [audBalSheet]);
  return (
    <AutoForm schema={bridge} onSubmit={data => submit(audBalSheet, data)} model={AuditedBalanceSheet.findOne(audBalSheet._id)}>
      <Card.Body className="custom-card-body">
        <Row className="justify-content-center" style={{ paddingLeft: '5px' }}>
          Year {audBalSheet.year}
          <hr className="solid" />
        </Row>
        <Row className="align-items-center" style={{ paddingTop: '20px' }}>
          <Col>
            <NumField name="cashStuff.0.pettyCash" style={{ height: '25px' }} decimal label={null} />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <NumField name="cashStuff.0.cash" style={{ height: '25px' }} decimal label={null} />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <NumField name="cashStuff.0.cashInBanksLineofCredit" style={{ height: '25px' }} decimal label={null} />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <h6>${totalCash.toFixed(2)}</h6>
          </Col>
        </Row>
        <Row className="align-items-center" style={{ paddingTop: '20px' }}>
          <Col>
            <NumField name="otherAssets.0.accountsRec" style={{ height: '25px' }} decimal label={null} />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <NumField name="otherAssets.0.dueFromOtherFund" style={{ height: '25px' }} decimal label={null} />
          </Col>
        </Row>
        <Row className="align-items-center ">
          <Col>
            <NumField name="otherAssets.0.interestAndDividends" style={{ height: '25px' }} decimal label={null} />
          </Col>
        </Row>
        <Row className="align-items-center ">
          <Col>
            <NumField name="otherAssets.0.invPrepaidItems" style={{ height: '25px' }} decimal label={null} />
          </Col>
        </Row>
        <Row className="align-items-center ">
          <Col>
            <NumField name="otherAssets.0.notesRecWithinYr" style={{ height: '25px' }} decimal label={null} />
          </Col>
        </Row>
        <Row className="align-items-center ">
          <Col>
            <NumField name="otherAssets.0.notesRecAfterYr" style={{ height: '25px' }} decimal label={null} />
          </Col>
        </Row>
        <Row className="align-items-center ">
          <Col>
            <NumField name="otherAssets.0.secDeposits" style={{ height: '25px' }} decimal label={null} />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <NumField name="otherAssets.0.cashHeldByInvMgr" style={{ height: '25px' }} decimal label={null} />
          </Col>
        </Row>
        <Row className="align-items-center" style={{ paddingTop: '20px' }}>
          <Col>
            <NumField name="investments.0.mutualFunds" style={{ height: '25px' }} decimal label={null} />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <NumField name="investments.0.commingledFunds" style={{ height: '25px' }} decimal label={null} />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <NumField name="investments.0.hedgeFunds" style={{ height: '25px' }} decimal label={null} />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <NumField name="investments.0.privateEquity" style={{ height: '25px' }} decimal label={null} />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <NumField name="investments.0.commonTrustFund" style={{ height: '25px' }} decimal label={null} />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <NumField name="investments.0.commonPreferredStock" style={{ height: '25px' }} decimal label={null} />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <NumField name="investments.0.privateDebt" style={{ height: '25px' }} decimal label={null} />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <NumField name="investments.0.other" style={{ height: '25px' }} decimal label={null} />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <h6>${totalInvestments.toFixed(2)}</h6>
          </Col>
        </Row>
        <Row className="align-items-center ">
          <Col>
            <NumField name="loanFund.0.usTreasuries" style={{ height: '25px' }} decimal label={null} />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <NumField name="loanFund.0.usAgencies" style={{ height: '25px' }} decimal label={null} />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <h6>${totalLoanFund.toFixed(2)}</h6>
          </Col>
        </Row>
        <Row className="justify-content-start" style={{ paddingTop: '18px' }}>
          <Col>
            <hr className="solid my-0" />
            <h6>${totalInvestLoan.toFixed(2)}</h6>
          </Col>
        </Row>
        <Row className="align-items-center" style={{ paddingTop: '40px' }}>
          <Col>
            <NumField name="assets.0.buildings" style={{ height: '25px' }} decimal label={null} />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <NumField name="assets.0.leaseImprovements" style={{ height: '25px' }} decimal label={null} />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <NumField name="assets.0.furnitureFixtures" style={{ height: '25px' }} decimal label={null} />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <NumField name="assets.0.lessAccDep" style={{ height: '25px' }} decimal label={null} />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <h6>${totalAssets.toFixed(2)}</h6>
          </Col>
        </Row>
        <Row className="align-items-center" style={{ paddingTop: '20px' }}>
          <Col>
            <NumField name="land.0.landA" style={{ height: '25px' }} decimal label={null} />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <NumField name="land.0.landB" style={{ height: '25px' }} decimal label={null} />
          </Col>
        </Row>
        <Row className="align-items-center ">
          <Col>
            <NumField name="land.0.construction" style={{ height: '25px' }} decimal label={null} />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <h6>${totalLand.toFixed(2)}</h6>
          </Col>
        </Row>
        <Row className="align-items-center" style={{ paddingTop: '20px' }}>
          <Col>
            <NumField name="compBAssets.0.buildings" style={{ height: '25px' }} decimal label={null} />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <NumField name="compBAssets.0.leaseImprovements" style={{ height: '25px' }} decimal label={null} />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <NumField name="compBAssets.0.furnitureFixtures" style={{ height: '25px' }} decimal label={null} />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <NumField name="compBAssets.0.vehicles" style={{ height: '25px' }} decimal label={null} />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <NumField name="compBAssets.0.lessAccDep" style={{ height: '25px' }} decimal label={null} />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <NumField name="compBAssets.0.land" style={{ height: '25px' }} decimal label={null} />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <h6>${totalCompBAssets.toFixed(2)}</h6>
          </Col>
        </Row>
        <Row className="justify-content-start" style={{ paddingTop: '3px' }}>
          <Col>
            <hr className="solid my-0" />
            <h6>${totalCapAssets.toFixed(2)}</h6>
          </Col>
        </Row>
        <Row className="justify-content-start" style={{ paddingTop: '2px' }}>
          <Col>
            <NumField name="restrictedCash" style={{ height: '25px' }} decimal label={null} />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <h6>${totalOtherAssets.toFixed(2)}</h6>
          </Col>
        </Row>
        <Row className="justify-content-start">
          <Col>
            <NumField name="defOutflowsPension" style={{ height: '25px' }} decimal label={null} />
          </Col>
        </Row>
        <Row className="justify-content-start">
          <Col>
            <NumField name="defOutflowsOPEB" style={{ height: '25px' }} decimal label={null} />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <h6>${totalAssetsAndDefOutflows.toFixed(2)}</h6>
          </Col>
        </Row>
        <Row className="align-items-center" style={{ paddingTop: '18px' }}>
          <Col>
            <NumField name="liabilities.0.accountsPayable" style={{ height: '25px' }} decimal label={null} />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <NumField name="liabilities.0.dueToFund" style={{ height: '25px' }} decimal label={null} />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <NumField name="liabilities.0.dueToOtherFund" style={{ height: '25px' }} decimal label={null} />
          </Col>
        </Row>
        <Row className="align-items-center" style={{ paddingTop: '41px' }}>
          <Col>
            <NumField name="liaWithinYr.0.accVacation" style={{ height: '25px' }} decimal label={null} />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <NumField name="liaWithinYr.0.workComp" style={{ height: '25px' }} decimal label={null} />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <NumField name="liaWithinYr.0.accMgtRetPlan" style={{ height: '25px' }} decimal label={null} />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <NumField name="liaWithinYr.0.accLease" style={{ height: '25px' }} decimal label={null} />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <NumField name="liaWithinYr.0.capLease" style={{ height: '25px' }} decimal label={null} />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <NumField name="liaWithinYr.0.notesPayBldgA" style={{ height: '25px' }} decimal label={null} />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <NumField name="liaWithinYr.0.netPensionLia" style={{ height: '25px' }} decimal label={null} />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <NumField name="liaWithinYr.0.netPensionOPEB" style={{ height: '25px' }} decimal label={null} />
          </Col>
        </Row>
        <Row className="align-items-center" style={{ paddingTop: '41px' }}>
          <Col>
            <NumField name="liaWithinYr.0.lineOfCredBldgA" style={{ height: '25px' }} decimal label={null} />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <NumField name="liaWithinYr.0.lineOfCredBldgB" style={{ height: '25px' }} decimal label={null} />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <NumField name="liaWithinYr.0.debtServ" style={{ height: '25px' }} decimal label={null} />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <h6>${totalLiaWithinYr.toFixed(2)}</h6>
          </Col>
        </Row>
        <Row className="align-items-center" style={{ paddingTop: '18px' }}>
          <Col>
            <NumField name="liaAfterYr.0.accVacation" style={{ height: '25px' }} decimal label={null} />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <NumField name="liaAfterYr.0.workComp" style={{ height: '25px' }} decimal label={null} />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <NumField name="liaAfterYr.0.accMgtRetPlan" style={{ height: '25px' }} decimal label={null} />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <NumField name="liaAfterYr.0.accLease" style={{ height: '25px' }} decimal label={null} />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <NumField name="liaAfterYr.0.capLease" style={{ height: '25px' }} decimal label={null} />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <NumField name="liaAfterYr.0.notesPayBldgA" style={{ height: '25px' }} decimal label={null} />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <NumField name="liaAfterYr.0.netPensionLia" style={{ height: '25px' }} decimal label={null} />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <NumField name="liaAfterYr.0.netPensionOPEB" style={{ height: '25px' }} decimal label={null} />
          </Col>
        </Row>
        <Row className="align-items-center" style={{ paddingTop: '40px' }}>
          <Col>
            <NumField name="liaAfterYr.0.lineOfCredBldgA" style={{ height: '25px' }} decimal label={null} />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <NumField name="liaAfterYr.0.lineOfCredBldgB" style={{ height: '25px' }} decimal label={null} />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <NumField name="liaAfterYr.0.debtServ" style={{ height: '25px' }} decimal label={null} />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <h6>${totalLiaAfterYr.toFixed(2)}</h6>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <hr className="solid my-0" />
            <h6>${totalLiabilities.toFixed(2)}</h6>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <NumField name="defInflowsPension" style={{ height: '25px' }} decimal label={null} />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <NumField name="defInflowsOPEB" style={{ height: '25px' }} decimal label={null} />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <hr className="solid my-0" />
            <h6>${totalLiaAndDefInflows.toFixed(2)}</h6>
          </Col>
        </Row>
        <Row className="align-items-center" style={{ paddingTop: '44px' }}>
          <Col>
            <NumField name="commitAndContin.0.capAssetInvestments" style={{ height: '25px' }} decimal label={null} />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <NumField name="commitAndContin.0.resFedFunds" style={{ height: '25px' }} decimal label={null} />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <NumField name="commitAndContin.0.unRes" style={{ height: '25px' }} decimal label={null} />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <hr className="solid my-0" />
            <h6>${totalCommitAndContin.toFixed(2)}</h6>
          </Col>
        </Row>
        <Row className="align-items-center" style={{ paddingTop: '1px' }}>
          <Col>
            <hr className="solid my-0" />
            <h6>${totalLiaInflowsNetPos.toFixed(2)}</h6>
          </Col>
        </Row>
        <Col>
          <SubmitField value="Update" />
        </Col>
        <ErrorsField />
        <HiddenField name="owner" />
      </Card.Body>
    </AutoForm>
  );
};

// Require a document to be passed to this component.
DisplayAudBalSheet.propTypes = {
  audBalSheet: PropTypes.shape({
    owner: PropTypes.string,
    year: PropTypes.number,
    cashStuff: PropTypes.arrayOf(PropTypes.shape({
      pettyCash: PropTypes.number,
      cash: PropTypes.number,
      cashInBanksLineofCredit: PropTypes.number,
    })),
    cashTotal: PropTypes.number,
    otherAssets: PropTypes.arrayOf(PropTypes.shape({
      accountsRec: PropTypes.number,
      dueFromOtherFund: PropTypes.number,
      interestAndDividends: PropTypes.number,
      invPrepaidItems: PropTypes.number,
      notesRecWithinYr: PropTypes.number,
      notesRecAfterYr: PropTypes.number,
      secDeposits: PropTypes.number,
      cashHeldByInvMgr: PropTypes.number,
    })),
    otherAssetsSubtotal: PropTypes.number,
    investments: PropTypes.arrayOf(PropTypes.shape({
      mutualFunds: PropTypes.number,
      commingledFunds: PropTypes.number,
      hedgeFunds: PropTypes.number,
      privateEquity: PropTypes.number,
      commonTrustFund: PropTypes.number,
      commonPreferredStock: PropTypes.number,
      privateDebt: PropTypes.number,
      other: PropTypes.number,
    })),
    investmentsTotal: PropTypes.number,
    loanFund: PropTypes.arrayOf(PropTypes.shape({
      usTreasuries: PropTypes.number,
      usAgencies: PropTypes.number,
    })),
    loanFundTotal: PropTypes.number,
    investLoanTotal: PropTypes.number,
    assets: PropTypes.arrayOf(PropTypes.shape({
      buildings: PropTypes.number,
      leaseImprovements: PropTypes.number,
      furnitureFixtures: PropTypes.number,
      lessAccDep: PropTypes.number,
    })),
    assetsTotal: PropTypes.number,
    land: PropTypes.arrayOf(PropTypes.shape({
      landA: PropTypes.number,
      landB: PropTypes.number,
      construction: PropTypes.number,
    })),
    landTotal: PropTypes.number,
    compBAssets: PropTypes.arrayOf(PropTypes.shape({
      buildings: PropTypes.number,
      leaseImprovements: PropTypes.number,
      furnitureFixtures: PropTypes.number,
      vehicles: PropTypes.number,
      lessAccDep: PropTypes.number,
      land: PropTypes.number,
    })),
    compBAssetsTotal: PropTypes.number,
    capAssetsTotal: PropTypes.number,
    restrictedCash: PropTypes.number,
    otherAssetsTotal: PropTypes.number,
    defOutflowsPension: PropTypes.number,
    defOutflowsOPEB: PropTypes.number,
    assetsAndDefOutflowsTotal: PropTypes.number,
    liabilities: PropTypes.arrayOf(PropTypes.shape({
      accountsPayable: PropTypes.number,
      dueToFund: PropTypes.number,
      dueToOtherFund: PropTypes.number,
    })),
    liabilitiesTotal: PropTypes.number,
    liaWithinYr: PropTypes.arrayOf(PropTypes.shape({
      accVacation: PropTypes.number,
      workComp: PropTypes.number,
      accMgtRetPlan: PropTypes.number,
      accLease: PropTypes.number,
      capLease: PropTypes.number,
      notesPayBldgA: PropTypes.number,
      netPensionLia: PropTypes.number,
      netPensionOPEB: PropTypes.number,
      lineOfCredBldgA: PropTypes.number,
      lineOfCredBldgB: PropTypes.number,
      debtServ: PropTypes.number,
    })),
    liaWithinYrTotal: PropTypes.number,
    liaAfterYr: PropTypes.arrayOf(PropTypes.shape({
      accVacation: PropTypes.number,
      workComp: PropTypes.number,
      accMgtRetPlan: PropTypes.number,
      accLease: PropTypes.number,
      capLease: PropTypes.number,
      notesPayBldgA: PropTypes.number,
      netPensionLia: PropTypes.number,
      netPensionOPEB: PropTypes.number,
      lineOfCredBldgA: PropTypes.number,
      lineOfCredBldgB: PropTypes.number,
      debtServ: PropTypes.number,
    })),
    liaAfterYrTotal: PropTypes.number,
    allLiabilitiesTotal: PropTypes.number,
    defInflowsPension: PropTypes.number,
    defInflowsOPEB: PropTypes.number,
    liaAndDefInflowsTotal: PropTypes.number,
    commitAndContin: PropTypes.arrayOf(PropTypes.shape({
      capAssetInvestments: PropTypes.number,
      resFedFunds: PropTypes.number,
      unRes: PropTypes.number,
    })),
    totalNetPos: PropTypes.number,
    totalLiaInflowsNetPos: PropTypes.number,
    _id: PropTypes.string,
  }).isRequired,
};

export default DisplayAudBalSheet;
