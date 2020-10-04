import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/layouts/Header';
import SideBar from './components/layouts/SideBar';
import Main from './components/Main';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  const [errmessage, seterrmessage] = useState('');

  const FilterDataByEmployeeName = (name) => {
    data.filter((e) => e.employee_name === name);
  };

  const markSorted = (id) => {
    console.log(id);
    setData(
      data.map((e) => {
        if (e.id === id) {
          e.sorted = !e.sorted;
        }
        return e;
      }),
    );
  };

  useEffect(() => {
    axios
      .get('http://dummy.restapiexample.com/api/v1/employees')
      .then((s) => {
        s.data.data.map((e) => (e.sorted = false));
        setData(s.data.data);
      })
      .catch((err) => seterrmessage(err.message));
  }, []);
  return (
    <Container fluid className="App">
      <Header />
      <Row className="MainRender">
        <Col md={3}>
          <SideBar />
        </Col>
        <Col md={9}>
          <Main
            TotalData={data}
            TableFetchFalse={errmessage}
            FilterFunc={FilterDataByEmployeeName}
            markSorted={markSorted}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
