import { useNavigate } from "react-router"

export default function HomeUser (props) {
  const navigate = useNavigate()
  return(
    <div className='homeSpace'>
      <h1>Welcome {props.admin}</h1>
      <div className='anim'>
        <div className='cardHold'>
        <div className='card' onClick={()=>navigate('loan')}>
          <h4>
            Loan Request Form
          </h4>
        </div>
        </div>
      </div>
    </div>
  )
}