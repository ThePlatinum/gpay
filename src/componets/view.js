import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Table, Button } from "reactstrap";

export default function View() {

  let tbl = useParams().tbl;
  let id = useParams().id;
  //var origin = 'http://localhost/draftmgn/api/'
  var origin = 'https://mgndraft.000webhostapp.com/api/'
  var api = `${origin}getsloan?tbl=${tbl}&s=${id}`

  const [document, setDocument] = useState([]);

  useEffect(() => {
    fetch(api)
      .then(response => response.json())
      .then(data => {
        setDocument(data[0])
      });
  }, [api]);

  return (
    <div className='listArea'>
      <h2>{document.firstName} {document.lastName} {document.otherNames}</h2>
      <div className='row'>
        <div className='col-sm-4 viewTable'>
          <div>
              <div className='viewKey'>ID: <br/>
              SN00{document.id}</div>

              <br/>
              <div>Request Amount: <br/>
              NGN {document.amount}</div>
              
              <br/>
              <div>Loan duration: <br/>
              {document.loanDuration}</div>
              
              <br/>
              <div>Status: <br/>
              {document.status}</div>
              
              <br/>
              <div>Loan Purpose: <br/>
              {document.loanPurpose}</div>
          </div>
        </div>
        <div className='col-sm-8 viewTable mb-3'>
          <Table borderless>
            <tbody>
            <tr>
              <td>Account Number</td>
              <td>{document.accountNumber}</td>
            </tr>
            <tr>
              <td>Bank</td>
              <td>{document.bank}</td>
            </tr>
            <tr>
              <td>BVN</td>
              <td>{document.bvn}</td>
            </tr>
            <tr>
              <td className='viewKey'>Email</td>
              <td>{document.email}</td>
            </tr>
            <tr>
              <td>Phone</td>
              <td>{document.phone}</td>
            </tr>
            <tr>
              <td>Address</td>
              <td>{document.address}</td>
            </tr>
            <tr>
              <td>LG Area</td>
              <td>{document.lgArea}</td>
            </tr>
            <tr>
              <td>State</td>
              <td>{document.state}</td>
            </tr>
            </tbody>
          </Table>
            Signature
            <div className='col-4'>
              <img src={`${origin}loanfiles/${document.signature}`} alt='Signature' className='viewImage'/>
            </div>
        </div>
      </div>
      <div className='row '>
        <div  className='row col-sm-6' style={{padding:'1vw'}}><Button color="primary"> Approve </Button></div>
        <div  className='row col-sm-6' style={{padding:'1vw'}}><Button color="danger"> Delete </Button></div>
      </div>
    </div>
  )
}