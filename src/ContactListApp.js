import React, { useState } from 'react';
import { Row, Col, Divider, Result, Button, Collapse } from 'antd';

import AddContactForm from './components/AddContactForm';
import DataList from './components/DataList';

const { Panel } = Collapse;
function ContactListApp() {
  const [state, setstate] = useState({
    showMessage: false,
    resetForm: false,
    listData: [
      {
        key: '1',
        name: 'John Brown',
        age: 32,
        phone: 123,
        email: 'abc@abc.com',
        address: 'New York No. 1 Lake Park',
        note: 'Test note'
      },
      {
        key: '2',
        name: 'Joe Black',
        age: 42,
        phone: 123,
        email: 'abc@abc.com',
        address: 'London No. 1 Lake Park',
        note: 'Test note'
      },
      {
        key: '3',
        name: 'Jim Green',
        age: 32,
        phone: 123,
        email: 'abc@abc.com',
        address: 'Sidney No. 1 Lake Park',
        note: 'Test note'
      },
      {
        key: '4',
        name: 'Jim Red',
        age: 32,
        phone: 123,
        email: 'abc@abc.com',
        address: 'London No. 2 Lake Park',
        note: 'Test note'
      }
    ]
  });

  const handleMessageClose = () => {
    setstate({
      ...state,
      showMessage: false
    });
  };

  if (state.showMessage) {
    return (
      <Result
        status='success'
        title='Successfully added contact into list'
        subTitle='New contact has been added to contact list'
        extra={[
          <Button type='primary' key='ok' onClick={handleMessageClose}>
            Ok
          </Button>
        ]}
      />
    );
  }

  const handleCollapse = key => {
    setstate({
      ...state,
      collapseKey: key
    });
  };

  const onAddContact = data => {
    setstate({
      ...state,
      listData: state.listData.concat([{ note: '', ...data }]),
      collapseKey: null,
      showMessage: true
    });
  };

  return (
    <React.Fragment>
      <Row>
        <Col span={20} offset={2}>
          <h1>React Contact List App</h1>
        </Col>
      </Row>
      <Row>
        <Col span={20} offset={2}>
          <Collapse
            defaultActiveKey={state.collapseKey}
            activeKey={state.collapseKey}
            onChange={handleCollapse}
          >
            <Panel header='Add Contact form' key='1'>
              <AddContactForm
                onAddContact={onAddContact}
                resetForm={state.resetForm}
              />
            </Panel>
          </Collapse>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={20} offset={2}>
          <DataList data={state.listData} />
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default ContactListApp;
