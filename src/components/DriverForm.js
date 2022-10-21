import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React,{useState } from 'react';






function BasicExample() {
  
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    contact: "",
    age: "",
    address: "",
    license:"",
    reg:"",
    email:"",
    password:"",
   
  });
  let name, value;
  const handleInput = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };
  const PostData= async(e)=>{
    e.preventDefault();
    const {firstname,lastname,contact,age,address,license,reg,email,password}=user;
   const res = await fetch("/driver",{
    method:"POST",
    headers:{"Content-Type" : "application/json"
    },
   body:JSON.stringify({
    firstname,lastname,contact,age,address,license,reg,email,password
   }),
});
const data = await res.json();
if( data.status === 500 || !data ) {
  window.alert("Something wents wrong");
  console.log("Something wents wrong")
}
else{
  window.alert("Driver Registration Completed");
  console.log("Driver Registration Completed"); 
}
  }
  return (
    <Form method='POST' className='bodyform'>
      <Form.Group className="mb-1" controlId="firstname">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="Enter First Name" value={user.firstname}
                onChange={handleInput}
                name="firstname" />
      </Form.Group>

      <Form.Group className="mb-1" controlId="lastname">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="email" placeholder="Enter Last Name"value={user.lastname}
                onChange={handleInput}
                name="lastname" />
      </Form.Group>

      <Form.Group className="mb-1" controlId="address">
        <Form.Label>Your Address</Form.Label>
        <Form.Control type="text" placeholder="Enter address"value={user.address}
                onChange={handleInput}
                name="address" />
      </Form.Group>

      <Form.Group className="mb-1" controlId="contact">
        <Form.Label>10 Digit Phone No.</Form.Label>
        <Form.Control type="tel" placeholder="Enter your number"value={user.contact}
                onChange={handleInput}
                name="contact" />
      </Form.Group>

      <Form.Group className="mb-1" controlId="email">
        <Form.Label>Enter Email</Form.Label>
        <Form.Control type="text" placeholder="Enter email"value={user.email}
                onChange={handleInput}
                name="email" />
      </Form.Group>
        
      <Form.Group className="mb-1" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter password"value={user.password}
                onChange={handleInput}
                name="password" />
      </Form.Group>

      <Form.Group className="mb-1" controlId="age">
        <Form.Label>Your Age</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Age"value={user.age}
                onChange={handleInput}
                name="age" />
      </Form.Group>

      <Form.Group className="mb-1" controlId="license">
        <Form.Label>License Number</Form.Label>
        <Form.Control type="text" placeholder="Enter Your license number"value={user.license}
                onChange={handleInput}
                name="license" />
      </Form.Group>

      <Form.Group className="mb-1" controlId="reg">
        <Form.Label>Vehicle Registration Number</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Vehicle Registration Number"value={user.reg}
                onChange={handleInput}
                name="reg" />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={PostData}>
        Register Now
      </Button>
    </Form>
  );
}
export default BasicExample;