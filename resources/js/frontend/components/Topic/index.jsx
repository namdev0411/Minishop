import React from 'react';
import Slidershow from './Slidershow/index';
import { Col, Row, } from 'reactstrap';
import './Topic.scss';

const Topic = props => {
    return (
        <Row className="topic">
            <Col lg="6" className="slide-show">
                <Slidershow/>
            </Col>
            <Col lg="6" className="thumnail">
                <div className="thumnail-content">
                    <div>Chất Lượng</div>
                    <h2>
                        <span>
                            Chính hãng
                        </span>
                        <br/>
                        An toàn
                    </h2>
                </div>
            </Col>
        </Row>
    );
};

export default Topic;