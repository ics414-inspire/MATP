import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, ErrorsField, NumField, SubmitField } from 'uniforms-bootstrap5';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import { defineMethod, updateMethod } from '../../api/base/BaseCollection.methods';
import { PAGE_IDS } from '../utilities/PageIDs';
import { AuditedBalanceSheets } from '../../api/Inputs/auditedBalanceSheet2';

// Create dynamic schema based on the audited balance sheet fields
const fields = [
  'Petty_cash',
  'Cash',
  'Total_Cash_and_Cash_Equivalents',
  'Accounts_receivable',
  // Add all other fields you need...
];

const years = ['year6', 'year7', 'year8', 'year9']; // Define the years you want to generate for

// Dynamically create the schema
const schemaDefinition = {};

fields.forEach(field => {
  // First define the parent field as an object
  schemaDefinition[field] = {
    type: Object,
    optional: true, // Optional if not always present
  };

  // Now define the subfields for each year
  years.forEach(year => {
    schemaDefinition[`${field}.${year}`] = {
      type: Number,
      defaultValue: 123, // Set default value for each year-based field
    };
  });
});

// Create the schema with SimpleSchema
const dynamicFormSchema = new SimpleSchema(schemaDefinition);

const bridge = new SimpleSchema2Bridge(dynamicFormSchema);

const AddStuff = () => {
  // Default model to provide initial values for the form fields
  const defaultModel = fields.reduce((accumulatedModel, field) => {
    const updatedModel = { ...accumulatedModel }; // Create a new object instead of mutating
    years.forEach(year => {
      updatedModel[`${field}.${year}`] = 123; // Default value for each field
    });
    return updatedModel;
  }, {});

  // On submit, insert or update the data
  const submit = (data, formRef) => {
    const owner = Meteor.user().username;
    const collectionName = AuditedBalanceSheets.getCollectionName();

    // Prepare the data to update in the collection
    const definitionData = { ...data, owner };

    defineMethod.callPromise({ collectionName, definitionData })
      .catch(error => swal('Error', error.message, 'error'))
      .then(() => {
        swal('Success', 'Item added successfully', 'success');
        formRef.reset();
      });
  };

  // Render the form with dynamically generated fields
  let fRef = null;
  return (
    <Container id={PAGE_IDS.ADD_STUFF} className="py-3">
      <Row className="justify-content-center">
        <Col xs={10}>
          <Col className="text-center"><h2>Add Audited Balance Sheet</h2></Col>
          <AutoForm ref={ref => { fRef = ref; }} schema={bridge} model={defaultModel} onSubmit={data => submit(data, fRef)}>
            <Card>
              <Card.Body>
                {fields.map((field) => years.map((year) => (
                  <NumField key={`${field}.${year}`} name={`${field}.${year}`} decimal={null} />
                )))}
                <SubmitField value="Submit" />
                <ErrorsField />
              </Card.Body>
            </Card>
          </AutoForm>
        </Col>
      </Row>
    </Container>
  );
};

export default AddStuff;
