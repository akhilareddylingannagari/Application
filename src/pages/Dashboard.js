import React from 'react';
import { Container, Card, CardBody, Row, Col } from 'shards-react';
import EnergyFlow from '../components/EnergyFlow';
import Consumption from '../components/Consumption';

const Dashboard = () => (
  <Container fluid className='main-content-container py-4'>
    <Row>
      {/* Consumption */}
      <Col lg='4' md='12' sm='12' className='mb-4'>
        <Card small className='h-100'>
          <CardBody className='pt-0'>
            <Consumption />
          </CardBody>
        </Card>
      </Col>

      {/* EnergyFlow */}
      <Col lg='8' md='12' sm='12' className='mb-4'>
        <Card small className='h-100'>
          <CardBody className='pt-0'>
            <EnergyFlow />
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default Dashboard;
