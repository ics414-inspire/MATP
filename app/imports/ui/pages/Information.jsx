import React from 'react';

import { Col, Container, Image, Row, Tooltip } from 'react-bootstrap';
import { QuestionCircle } from 'react-bootstrap-icons';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { PAGE_IDS } from '../utilities/PageIDs';


const Information = () => (
  <Container id={PAGE_IDS.LANDING} className="py-3">
    <Row className="align-middle text-center">
      <Col xs={4}>
        <Image src="/images/spire_logo.jpg" width="300px" />
      </Col>
      <Col xs={8} className="d-flex flex-column justify-content-center">
        <h1>INFORMATION</h1>
        <p>Information things</p>
        <div style={{ display: 'block', width: 700, padding: 30 }}>
          <h4>React-Bootstrap Tooltip Component</h4>
          <OverlayTrigger
            delay={{ hide: 450, show: 300 }}
            overlay={(props) => (
              <Tooltip {...props}>
                Hii, I am a simple tooltip information!!!
              </Tooltip>
            )}
            placement="bottom">
            <QuestionCircle />
          </OverlayTrigger>,

          <Tooltip>
            hello
          </Tooltip>

        </div>
      </Col>

    </Row>
  </Container>

);
export default Information;
