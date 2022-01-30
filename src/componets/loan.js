import { useState } from "react";
import { Input, Button, Form, FormGroup } from "reactstrap";
import { banksList } from '../banks'
import { useNavigate } from "react-router"
import '../preloader.css'
let nodemailer = require('nodemailer');
const states = require('../states')
const lgas = require('../lgas')

export default function Loan() {

  const [selectFileName, setSelectFileName] = useState('No File Selected')
  const navigate = useNavigate()

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [otherName, setOtherName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [lgArea, setLgArea] = useState('Aba North')
  const [state, setState] = useState('Abia')
  const [loanDuration, setLoanDuration] = useState('1 Month')
  const [ammount, setAmmount] = useState('')
  const [loanPurpose, setLoanPurpose] = useState('')
  const [bvn, setBvn] = useState('')
  const [bank, setBank] = useState('Access Bank')
  const [accountNumber, setAccountNumber] = useState('')
  const [theFile, setTheFile] = useState()
  const [error, setError] = useState('')

  const [loaderRef, setloaderRef] = useState(true)

  const upload = () => {
    setloaderRef(false)
    const submisson = new FormData()

    submisson.append('firstName', firstName)
    submisson.append('lastName', lastName)
    submisson.append('otherName', otherName)
    submisson.append('email', email)
    submisson.append('phone', phone)
    submisson.append('address', address)
    submisson.append('lgArea', lgArea)
    submisson.append('state', state)
    submisson.append('loanPurpose', loanPurpose)
    submisson.append('loanDuration', loanDuration)
    submisson.append('ammount', ammount)
    submisson.append('bvn', bvn)
    submisson.append('accountNumber', accountNumber)
    submisson.append('bank', bank)
    submisson.append('signature', theFile[0])
    submisson.append('fupload', selectFileName)

    const requestOptions = {
      method: 'POST',
      body: submisson
    };
    
    fetch('https://mgndraft.000webhostapp.com/api/addloan?tbl=loan', requestOptions)
      .then(response => response.json())
      .then(data => {
        if(data[0].status === 'Submitted') {
          //Send Mail
          let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'platinumemirate@gmail.com',
              pass: 'adedayo6192'
            }
          });

          let mailOptions = {
            from: 'platinumemirate@gmail.com',
            to: email,
            subject: 'Your PGAY Loan Application',
            text: 'That was easy!'
          };

          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });

          navigate('/user/success')
        }
        else {
          setloaderRef(true)
          setError(data[0].responce)
        }
      })
      .catch(error => {
        setloaderRef(true)
        setError('An Error Occured, Please try again')
      })
  }

  const [interest, setInterest] = useState('000000')
  return (
    <div> {/* method='POST' encType="multipart/form-data" action='https,//mgndraft.000webhostapp.com/api/addloan?tbl=loan' */}
      <Form className='form row' target='error' onSubmit={() => upload()}>
        <h4>Personal Data</h4>
        <FormGroup className='row'>
          <div className='formelement col-md-6'>
            Last Name
            <Input required name='lastName' size='lg' onChange={(e) => setLastName(e.target.value)} />
          </div>
          <div className='formelement col-md-6'>
            First Name
            <Input required name='firstName' size='lg' onChange={(e) => setFirstName(e.target.value)} />
          </div>
          <div className='formelement'>
            Other(s)
            <Input required name='otherName' size='lg' onChange={(e) => setOtherName(e.target.value)} />
          </div>
          <div className='formelement col-md-6'>
            Email
            <Input required name='email' type='email' size='lg' onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className='formelement col-md-6'>
            Phone Number
            <Input required name='phone' type='phone' size='lg' onChange={(e) => setPhone(e.target.value)} />
          </div>
          <div className='formelement'>
            Address Line
            <Input required name='address' type="textarea" size='lg' onChange={(e) => setAddress(e.target.value)} />
          </div>
          <div className='formelement col-md-6'>
            State
            <Input required name='state' type='select' size='lg' onChange={(e) => setState(e.target.value)} >
              {
                states.map((item, i) => {
                  return (
                    <option key={i}>
                      {item.state}
                    </option>
                  )
                })
              }
            </Input>
          </div>
          <div className='formelement col-md-6'>
            LG Area
            <Input required name='lgArea' type='select' size='lg' onChange={(e) => setLgArea(e.target.value)} >
              {
                lgas.map((item, i) => {
                  return (
                    <option key={i}>
                      {item}
                    </option>
                  )
                })
              }
            </Input>
          </div>
        </FormGroup>

        <h4>Loan Information</h4>
        <FormGroup className='row'>
          <div className='formelement'>
            Loan Purpose
            <Input required name='loanPurpose' type="textarea" size='lg' onChange={(e) => setLoanPurpose(e.target.value)} />
          </div>
          <div className='formelement col-md-6'>
            Loan Duration
            <Input required name='loanDuration' type='select' size='lg' onChange={(e) => setLoanDuration(e.target.value)}  >
              <option>
                1 Month
              </option>
              <option>
                2 Months
              </option>
              <option>
                3 Months
              </option>
              <option>
                4 Months
              </option>
              <option>
                5 Months
              </option>
              <option>
                6 Months
              </option>
            </Input>
          </div>

          <div className='formelement col-md-6'>
            Request Amount
            <Input required name='ammount' size='lg' onChange={(e) => { setInterest(e.target.value.replace(/[^0-9]/g, '') * 0.1); setAmmount(e.target.value); }} />
          </div>

          <div className='formelement interest col-12'>
            Interest Information
            <br />
            The interest is a fixed 10% return.
            <div>{`Calculated Interest, NGN ${interest}`}</div>
            <div>{`Total Payment, NGN ${interest + (interest / 0.1)}`}</div>
          </div>

          <div className='formelement col-md-6'>
            Bank
            <Input required name='bank' type='select' size='lg' onChange={(e) => setBank(e.target.value)} >
              {
                banksList.map((item, i) => {
                  return (
                    <option key={i}>
                      {item.name}
                    </option>
                  )
                })
              }
            </Input>
          </div>
          <div className='formelement col-md-6'>
            Account Number
            <Input required name='accountNumber' size='lg' onChange={(e) => setAccountNumber(e.target.value)} />
          </div>
          <div className='formelement col-12'>
            BVN
            <Input required name='bvn' size='lg' onChange={(e) => setBvn(e.target.value)} />
          </div>
        </FormGroup>

        <h4>Terms and Conditions</h4>
        Please, Read Carefully
        <FormGroup className='row'>
          <div className='formelement terms'>
            These Terms and Conditions apply to and regulate the provision of financial services provided by GPay. These Terms and Conditions constitute GPay’s offer and sets out the terms governing this Agreement.
            <br /> <br />
            By registering for a GPay Account or using any of the services provided by GPay. You agree to comply with all of the terms and conditions in this user agreement. The terms include an agreement to resolve disputes by arbitration on an individual basis.
            <br /> <br />
            We may revise this Terms and Conditions from time to time. The revised version will be effective at the time we post it, unless otherwise noted. We reserve the right to amend this agreement at any time without notice, subject to applicable law. By continuing to use our services after any changes to this user agreement become effective, you agree to abide and be bound by those changes. If you do not agree to these terms and conditions, please do not proceed and exit the application immediately. Also, please be informed that we can terminate your relationship with us if we believe that you have violated any of these terms.
            <br /> <br />
            <h4>1. Definitions</h4>
            The following definitions relate to these Terms of Use,
            <p className="tabbed">
              <span className="bold">“Agent”</span> refers to any party or device, including authorized FairMoney Agents, that facilitate FairMoney transactions on behalf of customers.
              <br /> <span className="bold">“BVN”</span> means Biometric Verification Number used by the banking industry in Nigeria and issued by a CBN approved financial institution.
              <br /> <span className="bold">“Loan”</span> means the principal amount of the loan (together with any interest and fees due on the loan) made or to be made to you under this Agreement from time to time as the context requires, or, the principal amount outstanding for the time being of that loan.
            </p>
            <h4>2. Interest Information</h4>
            These section defined the interest information that you agree to by submitting this form:
            <p className="tabbed">
                <li>The interest rate is fixed at <b>10%</b> monthly.</li>
                <li>The repayment plan is based on the duration of your loan request, and each monthly payment covers the interest accuresd for that month</li>
            </p>
            <br /> <br />
          </div>

          <div className='formelement'>
            <Input
              required
              name="terms"
              type="radio"
            // onChange={
            //   if (checked) (e) => setTerms(true)
            // } 
            /> {' '} Agree
          </div>
          <div className='formelement'>
            <Input
              name="terms"
              type="radio"
            /> {' '} Disagree
          </div>
        </FormGroup>

        <h4>Upload Signature</h4>
        <p>
          Take a <span className="bold">clear picture</span> of your <span className="bold">signature on a white paper</span> and upload here
        </p>
        <FormGroup>
          <div className='formelement col-md-6'>
            <Input name='signature' type="file" size='lg' required onChange={(e) => {
                setSelectFileName(e.target.value.replace('C:\\fakepath\\', ''));
                setTheFile(e.target.files);
              }} />
          </div>
        </FormGroup>
        <div id="loader" hidden={loaderRef}></div>
        <div id="error"> {error} </div>
        <div className='formelement center'><br />
          <Input required type="checkbox" /> I hereby declare that the information provided is true and correct.
          <br /> <br />
          <Button className='submitBtn' size='lg'> Submit Application </Button>
        </div>
      </Form>
      <iframe title='Form' name='error' height='1px' hidden width='10%'>
      </iframe>
    </div>
  )
}