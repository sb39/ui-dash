import React from 'react';
import { Row, Col, Button, Container } from 'react-bootstrap';
import StepsProgress from './StepsProgress';
import DataBox from './DataBox';
const Main = (props) => {
  return (
    <div>
      <Row>
        <Col md={10}>
          <h3>This job is for testing purpose @ {'test company'}</h3>
        </Col>
        <Col md={2}>
          <Button variant="danger">Close Job</Button>
        </Col>
      </Row>
      <Row>
        <StepsProgress />
      </Row>
      <Container>
        <DataBox
          MainData={props.TotalData}
          className="databox"
          FetchFalse={props.TableFetchFalse}
          FilterData={props.FilterFunc}
          markSorted={props.markSorted}
        />
      </Container>
    </div>
  );
};

export default Main;
