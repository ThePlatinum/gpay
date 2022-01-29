import { useNavigate } from "react-router";
import { Button, Input } from "reactstrap";

export default function Login() {

  const navigate = useNavigate()

  return (
    <div className='loginBody'>
      <div className='inner'>
        Email
        <br/>
        <Input type='email' />
        <br/>
        Password
        <br/>
        <Input type='password' />
        <br/>
        <br/>
        <div className='center'><Button className='submitBtn' size='lg' onClick={()=>navigate('manage')}> Login </Button></div>
      </div>
    </div>
  );
}
