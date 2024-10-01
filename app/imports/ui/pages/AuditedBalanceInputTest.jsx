import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { AutoForm, ErrorsField, NumField, SubmitField, TextField } from 'uniforms-bootstrap5';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import { Stuffs } from '../../api/stuff/StuffCollection';
import { defineMethod } from '../../api/base/BaseCollection.methods';
import { PAGE_IDS } from '../utilities/PageIDs';

// Create a schema to specify the structure of the data to appear in the form.
const formSchema = new SimpleSchema({
  name: String,
  financial: Number,
  formula: String,
});

const bridge = new SimpleSchema2Bridge(formSchema);

/* Renders the Audited Balance Input page for adding a document. */
const AuditedBalanceInputTest = () => {

  // On submit, insert the data.
  const submit = (data, formRef) => {
    const { name, financial, formula } = data;
    const owner = Meteor.user().username;
    const collectionName = Stuffs.getCollectionName();
    const definitionData = { name, financial, formula, owner };
    defineMethod.callPromise({ collectionName, definitionData })
      .catch(error => swal('Error', error.message, 'error'))
      .then(() => {
        swal('Success', 'Item added successfully', 'success');
        formRef.reset();
      });
  };

  // Render the form. Use Uniforms: https://github.com/vazco/uniforms
  let fRef = null;
  return (
    <Container id={PAGE_IDS.ADD_STUFF} className="inputDataBackground w-75 py-5">
      <Row className="justify-content-center">
        <Col className="mx-auto"> {/* Adjust the size as needed */}
          <Col className="text-center pb-4 text-black"><h2>Audited Balance</h2></Col>
          <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => submit(data, fRef)}>
            <Row className="inputDataWidth w-100 px-3 my-3">
              <Col>
                <h4 className="section-title">Section 1</h4> {/* Subtitle */}
              </Col>
            </Row>
            <Row className="inputDataWidth w-100 px-3">
              <Col>
                <TextField name="name" />
              </Col>
              <Col>
                <NumField name="financial" decimal={null} />
              </Col>
              <Col>
                <TextField name="formula" />
              </Col>
            </Row>

            <Row className="inputDataWidth w-100 px-3 my-3">
              <Col>
                <h4 className="section-title">Section 2</h4> {/* Subtitle */}
              </Col>
            </Row>
            <Row className="inputDataWidth w-100 px-3">
              <Col>
                <TextField name="name" />
              </Col>
              <Col>
                <NumField name="financial" decimal={null} />
              </Col>
              <Col>
                <TextField name="formula" />
              </Col>
            </Row>

            <Row className="inputDataWidth w-100 px-3 my-3">
              <Col>
                <h4 className="section-title">Section 3</h4> {/* Subtitle */}
              </Col>
            </Row>
            <Row className="inputDataWidth w-100 px-3">
              <Col>
                <TextField name="name" />
              </Col>
              <Col>
                <NumField name="financial" decimal={null} />
              </Col>
              <Col>
                <TextField name="formula" />
              </Col>
            </Row>
            <SubmitField value="Submit" className="px-3" />
            <ErrorsField />
          </AutoForm>
        </Col>
      </Row>
    </Container>
  );
};

export default AuditedBalanceInputTest;
