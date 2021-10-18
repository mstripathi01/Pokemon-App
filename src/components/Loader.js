import React from 'react';
import {Spinner, Row, Col} from 'react-bootstrap';
function Loader() {
    return (
        <div className = 'd-flex justify-content-center mt-5' style={{height: '100vh'}}>
          <Row>
              <Col>
                  <Spinner className = 'spinner-border spinner-border-lg' role='status' style={{height: '5vh', width: '5vh' }}>
            </Spinner>
              </Col>
          </Row>
         <Col>
             <div className = 'mx-3'>Fetching Pokemon...</div>
         </Col>
        </div>
    )
}

export default Loader
