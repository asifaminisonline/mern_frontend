import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React,{useState } from 'react';






function BasicExample() {
  
  const [user, setUser] = useState({
    name: "",
    contact: "",
    pax: "",
    address: "",
    start:"",
    end:"",
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
    const {name,  contact,   pax,  address,  start,  end, email, password}=user;
   const res = await fetch("/passenger",{
    method:"POST",
    headers:{"Content-Type" : "application/json"
    },
   body:JSON.stringify({
    name,  contact,   pax,  address,  start,  end , email , password
   }),
});
const data = await res.json();
if( data.status === 500 || !data ) {
  window.alert("Something wents wrong");
  console.log("Something wents wrong")
}
else{
  window.alert("Booking Registration Completed");
  console.log("Booking Registration Completed"); 
}
  }
  return (
    <Form method='POST' className='bodyform'>
      <Form.Group className="mb-1" controlId="name">
        <Form.Label>Your Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" value={user.name}
                onChange={handleInput}
                name="name" />
      </Form.Group>

      <Form.Group className="mb-1" controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email"value={user.email}
                onChange={handleInput}
                name="email" />
      </Form.Group>
        
      <Form.Group className="mb-1" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter password"value={user.password}
                onChange={handleInput}
                name="password" />
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

      <Form.Group className="mb-1" controlId="pax">
        <Form.Label>Number Of Persons</Form.Label>
        <Form.Control type="number" placeholder="Enter Number of Passengers"value={user.pax}
                onChange={handleInput}
                name="pax" />
      </Form.Group>

      
    
 

      <Form.Group className="mb-1" controlId="start">
        <Form.Label>From</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Start Point"value={user.start}
                onChange={handleInput}
                name="start" />
      </Form.Group>
     
      <Form.Group className="mb-1" controlId="end">
        <Form.Label>To</Form.Label>
        <Form.Control type="text" placeholder="Enter Your End Point" value={user.end}
                onChange={handleInput}
                name="end"/>
      </Form.Group>
      

      <Button variant="primary" type="submit" onClick={PostData}>
        Book Now
      </Button>
    </Form>
  );
}
export default BasicExample;