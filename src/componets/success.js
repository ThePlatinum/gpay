import success from './success.png'

export default function Success(){
  return(
    <div className='success'>
      <div className='successCard'>
        <img src={success} alt="Success" width='100vw'/>
        <div className='issue'>
          Your Application has been submitted successfully!
        </div>
      </div>
      
    </div>
  )
}