import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

import Page from '../../utils/components/Page';

import { useAppDispatch } from '../../app/hooks';

const AuthPage = (props: any) => {
  const {
    apiCall,
    title
  } = props

  const dispatch = useAppDispatch();
  const [formState, setFormState] = useState({
    username: "",
    password: "",
  });

  const changeField = (field: string, ev: any) => {
    const newState: any = formState;
    newState[field] = ev.target.value
    setFormState(() => ({
      ...newState
    }))
  }

  const formSubmit = (ev: any) => {
    dispatch(apiCall(formState));
    ev.preventDefault();
  }

  return (
    <Page>
      <Container>
        <Row className="mt-4">
          <Col>
            <Card>
              <Card.Header>
                <Card.Title>{title}</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form onSubmit={formSubmit}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" value={formState.username} onChange={(ev) => changeField("username", ev)} />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={formState.password} onChange={(ev) => changeField("password", ev)} />
                  </Form.Group>
                  <Button variant="primary" type="submit" onClick={formSubmit}>
                    Submit
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Page>
  )
}

export default AuthPage;