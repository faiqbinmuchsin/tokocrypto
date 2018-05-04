import React from 'react';
import './order.css';
import {
    Form, FormGroup, Label, Input, FormFeedback, FormText, Button
} from 'reactstrap';

const OrderForm = () => (
    <Form>
        <FormGroup>
            <Label for="example">You have 10,000,000 IDR</Label>
            <Input valid />
            <FormFeedback valid>0.0001 BTC</FormFeedback>
            {/* <FormText>Example help text that remains unchanged.</FormText> */}
        </FormGroup>
        <Button color="success">Buy</Button>
    </Form>
);

const Order = () => (
    <div className="row order__form">
        <div className="col-md-6 buy__form">
            <OrderForm />
        </div>
        <div className="col-md-6 sell__form">
            <OrderForm />
        </div>
    </div>
);

export default Order;