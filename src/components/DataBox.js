import React from 'react';
import {
  Row,
  Col,
  Table,
  FormControl,
  Form,
  Button,
  Alert,
  Spinner,
} from 'react-bootstrap';

const Databox = (props) => {
  return (
    <>
      <Row>
        <Col md={11}>
          <FormControl
            type="text"
            placeholder="Search"
            className="shadow-none"
            onChange={props.FilterData((e) => e.target.value)}
          />
        </Col>
        <Col md={1} className="ml-auto">
          <Button variant="danger" className="mr-auto">
            Danger
          </Button>
        </Col>
      </Row>
      <Row className="mx-auto my-3 table-display">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Employee Name</th>
              <th>Employee Age</th>
              <th>Employee Salary</th>
              <th>Employee Image</th>
              <th>Shortlist</th>
            </tr>
          </thead>
          <tbody>
            {props.MainData.length ? (
              props.MainData.map((e) => (
                <tr key={e.id}>
                  <td>{e.id}</td>
                  <td>{e.employee_name}</td>
                  <td>{e.employee_age}</td>
                  <td>{e.employee_salary}</td>
                  <td>
                    <img
                      src={e.employee_image}
                      alt={`${e.employee_name}(no_image_found)`}
                      style={{ height: '15px' }}
                    ></img>
                  </td>
                  <td>
                    <Form.Check type="checkbox" onChange={props.markSorted} />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6">
                  {!props.FetchFalse ? (
                    <Spinner animation="border" role="status">
                      <span className="sr-only">Loading...</span>
                    </Spinner>
                  ) : (
                    <Alert variant="danger" style={{ width: '100%' }}>
                      <>
                        <p className="m-0 p-0">No Data Found</p>
                        <small>Reason : {props.FetchFalse}</small>
                      </>
                    </Alert>
                  )}
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </Row>
    </>
  );
};

export default Databox;
