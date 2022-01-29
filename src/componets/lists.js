import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Table } from "reactstrap";

export default function Lists() {

  const [recents, setRecents] = useState([]);
  const navigate = useNavigate()

  const tbl = useParams().tbl

  useEffect(()=>{
    //var origin = 'http://localhost/draftmgn/api/'
    var origin = 'https://mgndraft.000webhostapp.com/api/'
    var api = `${origin}allloan?tbl=${tbl}`
    fetch(api)
      .then(response => response.json())
      .then(data => {
        setRecents(data)
      });
  },[tbl]);

  return(
    <div className='listArea'>
      <Table hover responsive>
        <thead>
          <tr>
            <th>
              #
            </th>
            <th>
              First Name
            </th>
            <th>
              Last Name
            </th>
            <th>
              Request Amount
            </th>
            {/* <th>
              Loan Duration
            </th> */}
            <th>
              Status
            </th>
          </tr>
        </thead>

        <tbody>
          {recents.map((item, i)=>{
            return(
              <tr key={i} className='tr' onClick={()=>navigate(`/admin/manage/view/${tbl}/${item.id}`)}>
                <th scope="row">
                  {i+1}
                </th>
                <td>
                  {item.firstName}
                </td>
                <td>
                  {item.lastName}
                </td>
                <td>
                  {item.amount}
                </td>
                {/* <td>
                  {item.loanDuration}
                </td> */}
                <td>
                  {item.status}
                </td>
              </tr>
            )
          })}
        </tbody>
        
      </Table>
    </div>
  )
}