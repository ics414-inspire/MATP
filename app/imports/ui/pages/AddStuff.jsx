import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, ErrorsField, NumField, SubmitField, TextField } from 'uniforms-bootstrap5';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import { defineMethod, updateMethod } from '../../api/base/BaseCollection.methods';
import { PAGE_IDS } from '../utilities/PageIDs';
import { AuditedBalanceSheets } from '../../api/Inputs/auditedBalanceSheet';

// Create dynamic schema
const fields = [
  { key: 'Petty_cash', label: 'Petty Cash' },
  { key: 'Cash', label: 'Cash' },
  { key: 'Total_Cash_and_Cash_Equivalents', label: 'Total Cash and Cash Equivalents' },
  { key: 'Accounts_receivable', label: 'Accounts Receivable' },
  // Add all other fields ...
];

const years = ['year6', 'year7', 'year8', 'year9']; // Define the years  to generate

// Dynamically create the schema
const schemaDefinition = {};

// Add companyName field to the schema
schemaDefinition.companyName = {
  type: String,
  label: 'Company Name',
  optional: false, // Set to true if the field is optional
};

// Specify the year for the data
schemaDefinition.year = {
  type: Number,
  label: 'Year',
  optional: false,
};

fields.forEach(({ key }) => {
  // define the parent field as object
  schemaDefinition[key] = {
    type: Object,
    optional: true, // Optional if not always present
  };

  // define the subfields for each year
  years.forEach(year => {
    schemaDefinition[`${key}.${year}`] = {
      type: Number,
      defaultValue: 123, // Set default value
    };
  });
});

// Create the schema
const dynamicFormSchema = new SimpleSchema(schemaDefinition);

const bridge = new SimpleSchema2Bridge(dynamicFormSchema);

const AddStuff = () => {
  // Default model to provide initial values for the form
  const defaultModel = fields.reduce((accumulatedModel, { key }) => {
    const updatedModel = { ...accumulatedModel }; // Create a new object instead of mutating
    years.forEach(year => {
      updatedModel[`${key}.${year}`] = 123; // Default value for each field
    });
    return updatedModel;
  }, {});

  // On submit, insert data
  const submit = (data, formRef) => {
    const owner = Meteor.user().username;
    const collectionName = AuditedBalanceSheets.getCollectionName();

    // Prepare the data to define in the collection
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
                <TextField
                  name="companyName"
                  label="Company"
                  placeholder="Enter company name"
                />
                <NumField
                  name="year"
                  label="Year"
                  placeholder="Enter Year"
                  decimal={null}
                />
                <h5 className="section-title">Cash and Cash Equivalents</h5>
                {fields.map(({ key, label }) => (
                  <Row key={key}>
                    {years.map((year) => (
                      <Col key={`${key}.${year}`} xs={6} md={4} lg={3}>
                        <NumField
                          name={`${key}.${year}`}
                          decimal={null}
                          label={`${label} (${year})`}
                        />
                      </Col>
                    ))}
                  </Row>
                ))}
                <hr />
                <Row>
                  <Col>
                    <SubmitField value="Submit" />
                    <ErrorsField />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </AutoForm>
        </Col>
      </Row>
    </Container>

  );
};

export default AddStuff;
