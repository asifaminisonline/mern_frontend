import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React,{useState} from 'react';

function BasicExample() {
  const [user, setUser] = useState({
    name: "",
    contact: "",
    pax: "",
    address: "",
    start:"",
    end:"",
  });
  let name, value;
  const handleInput = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };
  return (

    
    <Form className='bodyform'>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="text" placeholder="enter your first name" value={user.email}
                onChange={handleInput}
                name="email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="text" placeholder="enter your last name"value={user.password}
                onChange={handleInput}
                name="password" />
      </Form.Group>

      
      <Form.Group className="mb-3" controlId="license">
        <Form.Label>License Number</Form.Label>
        <Form.Control type="text" placeholder="enter your license number" value={user.license}
                onChange={handleInput}
                name="license" />
      </Form.Group>
     

      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
  );
}

export default BasicExample;
