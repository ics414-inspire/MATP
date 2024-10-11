import React from 'react';
import swal from 'sweetalert';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, ErrorsField, NumField, SubmitField, HiddenField } from 'uniforms-bootstrap5';
import { useTracker } from 'meteor/react-meteor-data';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { useParams } from 'react-router';
import { AuditedBalanceSheets } from '../../api/Inputs/auditedBalanceSheet';
import { updateMethod } from '../../api/base/BaseCollection.methods';
import LoadingSpinner from '../components/LoadingSpinner';
import { PAGE_IDS } from '../utilities/PageIDs';

// Create schema bridge
const bridge = new SimpleSchema2Bridge(AuditedBalanceSheets._schema);

const EditAuditedBalanceSheet = () => {
  // Get the document ID from the URL parameters
  const { _id } = useParams();

  // Use Tracker to subscribe and fetch data
  const { doc, ready } = useTracker(() => {
    const subscription = AuditedBalanceSheets.subscribeAuditedBalanceSheet();
    const rdy = subscription?.ready(); // Ensure subscription exists
    const document = AuditedBalanceSheets.findDoc(_id);
    return {
      doc: document,
      ready: rdy && !!document, // Check if document is found
    };
  }, [_id]);

  // Handle form submission
  const submit = (data) => {
    const {
      petty_cash_year6,
      cash_year6,
      cash_in_banksDraw_on_Line_of_Credit_year6,
      total_Cash_and_Cash_Equivalents_year6,
      accounts_receivable_year6,
    } = data; // Add other fields if necessary

    const collectionName = AuditedBalanceSheets.getCollectionName();
    const updateData = {
      id: _id,
      petty_cash_year6,
      cash_year6,
      cash_in_banksDraw_on_Line_of_Credit_year6,
      total_Cash_and_Cash_Equivalents_year6,
      accounts_receivable_year6,
      // Add other fields for year 6 if necessary
    };

    // Perform update using updateMethod
    updateMethod.callPromise({ collectionName, updateData })
      .catch((error) => swal('Error', error.message, 'error'))
      .then(() => swal('Success', 'Item updated successfully', 'success'));
  };

  if (!ready) {
    return <LoadingSpinner />;
  }

  return (
    <Container id={PAGE_IDS.EDIT_AUDITED_BALANCE_SHEET} className="py-3">
      <Row className="justify-content-center">
        <Col xs={5}>
          <Col className="text-center">
            <h2>Edit Audited Balance Sheet (Year 6)</h2>
          </Col>
          <AutoForm schema={bridge} onSubmit={(data) => submit(data)} model={doc}>
            <Card>
              <Card.Body>
                <NumField name="petty_cash_year6" decimal={null} />
                <NumField name="cash_year6" decimal={null} />
                <NumField name="cash_in_banksDraw_on_Line_of_Credit_year6" decimal={null} />
                <NumField name="total_Cash_and_Cash_Equivalents_year6" decimal={null} />
                <NumField name="accounts_receivable_year6" decimal={null} />
                {/* Add more fields for year 6 as necessary */}
                <SubmitField value="Submit" />
                <ErrorsField />
                <HiddenField name="owner" />
              </Card.Body>
            </Card>
          </AutoForm>
        </Col>
      </Row>
    </Container>
  );
};

export default EditAuditedBalanceSheet;
