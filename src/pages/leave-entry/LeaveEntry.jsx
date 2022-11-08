import React, { useState } from 'react'
import './LeaveEntry.css'
import { CancelButton, SaveButton } from '../../components/form-field/FormButton'
import InputField from '../../components/form-field/InputField'
import { Paper,Table,TableContainer,TableHead,TableRow,TableCell,TableBody } from '@mui/material'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import { BorderAllSharp } from '@mui/icons-material'
import axios from 'axios'

const initialValue={
  leaveName:'',
  allowedDays:0
}

const LeaveEntry = () => {
  const formik=useFormik({
    initialValues:initialValue,
    onSubmit:(values)=>{
      console.log(values)
    },
    validationSchema: Yup.object({
      leaveName: Yup.string()
            .max(10, 'Leave Name must be 10 charcter or less')
            .required('Leave Name is Required'),
      allowedDays: Yup.number()
            .required('Allowed days is Required')
            .max(10,'Max value should be 10'),
    })
  })
  const headers=[
  {name:'LeaveName',id:1}
  ,{name:'AllowedDays',id:2}
  ]
  const [rowVal,setRowVal]=useState([{name:'kuddus', age:12},{name:'belal', age:15}])
  
  const api=axios.create({
    baseURL:'https://localhost:7109/api/'
  })

  axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  
  return (
    <div className='container'>
      <Paper style={{margin:'1rem',padding:'1rem', width:'30%'}}>
          <h2>Leave Type Entry</h2>
          <form onSubmit={formik.handleSubmit} className="inputContainer">
            <InputField 
              name='leaveName'
              className='inputBox'
              label='Leave Name' 
              onChange={formik.handleChange}
              // onBlur={formik.handleBlur} 
              value={formik.values.firstName}
            /> 
            {formik.touched.leaveName && formik.errors.leaveName ? ( <div>{formik.errors.leaveName}</div>) : null}
            
            <InputField 
              name='allowedDays' 
              className='inputBox'
              type='number' 
              label='Allowed Days' 
              onChange={formik.handleChange}
              // onBlur={formik.handleBlur} 
              value={formik.values.allowedDays}
            /> 
            {formik.touched.allowedDays && formik.errors.allowedDays ? ( <div>{formik.errors.allowedDays}</div>) : null}

            <div className="btnRow">
              <SaveButton type='submit'>Save</SaveButton>
              <CancelButton >Clear</CancelButton>
            </div>
          </form>
      </Paper>
      <Paper style={{margin:'1rem', width:'70%'}}>
      <h2 style={{margin:0}}>ToDo List</h2>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                <TableCell  style={{fontWeight:'bold'}} align="right">SL</TableCell>
                  {
                    headers.map(header=>
                      <TableCell key={header.id} style={{fontWeight:'bold'}} align="right">{header.name}</TableCell>
                    )
                  }
                </TableRow>
              </TableHead>
              <TableBody>
                {rowVal.map((row,index) => (
                  <TableRow
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align="right">{index+1}</TableCell>
                    <TableCell align="right">{row.name}</TableCell>
                    <TableCell align="right">{row.age}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
      </Paper>
    </div>
  )
}

export default LeaveEntry