import React from 'react';
import { Container, Card, CardBody, Row, Col } from 'shards-react';
import Details from '../components/HighchartOverview';
import Consumption from '../components/Consumption';

const Chart = () => (
  <Container fluid className='main-content-container py-4'>
    <Row>
      {/* Charts */}
      <Col lg='12' md='12' sm='12' className='mb-4'>
        <Card small className='h-100'>
          <CardBody className='pt-0'>
            <Details />
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default Chart;
