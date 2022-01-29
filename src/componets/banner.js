
export default function Banner(props) {
  return(
    <div className='row banner'>
      <div className='col-md-2'> </div>
      <div className='col-md-10'>
        <div className='title'> {props.title} </div>
        <div className='tag'> {props.tag} </div>
      </div>
    </div>
  )
}