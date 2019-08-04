import React from 'react';

import { Form, Input, Button, Row, Col, Select, Checkbox } from 'antd';
const { TextArea } = Input;
const { Option } = Select;

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}
class AdvancedSearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showNote: false
    };
  }
  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.onAddContact(values);
        this.handleReset();
      }
    });
  };

  handleReset = () => {
    this.props.form.resetFields();
  };

  onShowNote = value => {
    this.setState({
      showNote: value
    });
  };

  render() {
    const {
      getFieldDecorator,
      getFieldsError,
      getFieldError,
      isFieldTouched
    } = this.props.form;

    // Only show error after a field is touched.
    const nameError = isFieldTouched('name') && getFieldError('name');
    const ageError = isFieldTouched('age') && getFieldError('age');
    const phoneError = isFieldTouched('phone') && getFieldError('phone');
    const emailError = isFieldTouched('email') && getFieldError('email');
    const addressError = isFieldTouched('address') && getFieldError('address');
    const countryError = isFieldTouched('country') && getFieldError('country');
    const noteError = isFieldTouched('note') && getFieldError('note');

    return (
      <Form layout='inline' onSubmit={this.handleSubmit}>
        <Row>
          <Col
            xs={{ span: 20, offset: 2 }}
            sm={{ span: 11, offset: 2 }}
            md={{ span: 8, offset: 2 }}
            lg={{ span: 4, offset: 2 }}
            xl={{ span: 4, offset: 2 }}
          >
            <Form.Item
              validateStatus={nameError ? 'error' : ''}
              help={nameError || ''}
            >
              {getFieldDecorator('name', {
                rules: [{ required: true, message: 'Please input name!' }]
              })(<Input placeholder='Name' />)}
            </Form.Item>
          </Col>
          <Col
            xs={{ span: 20, offset: 2 }}
            sm={{ span: 11, offset: 2 }}
            md={{ span: 8, offset: 2 }}
            lg={{ span: 4, offset: 2 }}
            xl={{ span: 4, offset: 2 }}
          >
            <Form.Item
              validateStatus={ageError ? 'error' : ''}
              help={ageError || ''}
            >
              {getFieldDecorator('age', {
                rules: [{ required: true, message: 'Please input age!' }]
              })(<Input type='number' min={1} placeholder='Age' />)}
            </Form.Item>
          </Col>
          <Col
            xs={{ span: 20, offset: 2 }}
            sm={{ span: 11, offset: 2 }}
            md={{ span: 8, offset: 2 }}
            lg={{ span: 4, offset: 2 }}
            xl={{ span: 4, offset: 2 }}
          >
            <Form.Item
              validateStatus={phoneError ? 'error' : ''}
              help={phoneError || ''}
            >
              {getFieldDecorator('phone', {
                rules: [{ required: true, message: 'Please input phone!' }]
              })(<Input type='number' min={0} placeholder='Phone' />)}
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col
            xs={{ span: 20, offset: 2 }}
            sm={{ span: 11, offset: 2 }}
            md={{ span: 8, offset: 2 }}
            lg={{ span: 4, offset: 2 }}
            xl={{ span: 4, offset: 2 }}
          >
            <Form.Item
              validateStatus={emailError ? 'error' : ''}
              help={emailError || ''}
            >
              {getFieldDecorator('email', {
                rules: [{ required: true, message: 'Please input email!' }]
              })(<Input type='email' placeholder='Email' />)}
            </Form.Item>
          </Col>

          <Col
            xs={{ span: 20, offset: 2 }}
            sm={{ span: 11, offset: 2 }}
            md={{ span: 8, offset: 2 }}
            lg={{ span: 4, offset: 2 }}
            xl={{ span: 4, offset: 2 }}
          >
            <Form.Item
              validateStatus={addressError ? 'error' : ''}
              help={addressError || ''}
            >
              {getFieldDecorator('address', {
                rules: [{ required: true, message: 'Please input address!' }]
              })(<TextArea rows={3} placeholder='Address' />)}
            </Form.Item>
          </Col>

          <Col
            xs={{ span: 20, offset: 2 }}
            sm={{ span: 11, offset: 2 }}
            md={{ span: 8, offset: 2 }}
            lg={{ span: 4, offset: 2 }}
            xl={{ span: 4, offset: 2 }}
          >
            <Form.Item
              validateStatus={countryError ? 'error' : ''}
              help={countryError || ''}
            >
              {getFieldDecorator('country', {
                rules: [{ required: true, message: 'Please select coutry!' }]
              })(
                <Select placeholder='Country' style={{ width: 120 }}>
                  <Option value='india'>India</Option>
                  <Option value='usa'>USA</Option>
                  <Option value='japan'>Japan</Option>
                </Select>
              )}
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col
            xs={{ span: 20, offset: 2 }}
            sm={{ span: 11, offset: 2 }}
            md={{ span: 8, offset: 2 }}
            lg={{ span: 4, offset: 2 }}
            xl={{ span: 4, offset: 2 }}
          >
            <Form.Item>
              <Checkbox onChange={this.onShowNote}>Note</Checkbox>
            </Form.Item>
            {this.state.showNote && (
              <Form.Item
                validateStatus={noteError ? 'error' : ''}
                help={noteError || ''}
              >
                {getFieldDecorator('note', {
                  rules: [
                    {
                      required: true,
                      message: 'Please input notes!'
                    }
                  ]
                })(<TextArea rows={3} placeholder='Note' />)}
              </Form.Item>
            )}
          </Col>
        </Row>
        <Row>
          <Col
            xs={{ span: 20, offset: 2 }}
            sm={{ span: 11, offset: 2 }}
            md={{ span: 8, offset: 2 }}
            lg={{ span: 4, offset: 2 }}
            xl={{ span: 4, offset: 2 }}
          >
            <Form.Item>
              <Button
                type='primary'
                htmlType='submit'
                disabled={hasErrors(getFieldsError())}
              >
                Add Contact
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    );
  }
}

const AddContactForm = Form.create({ name: 'advanced_search' })(
  AdvancedSearchForm
);

export default AddContactForm;
