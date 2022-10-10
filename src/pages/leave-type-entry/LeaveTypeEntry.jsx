import { Paper,Table,TableContainer,TableHead,TableRow,TableCell,TableBody } from '@mui/material'
import React from 'react'
import InputField from '../../components/form-field/InputField'
import './LeaveTypeEntry.css'

const LeaveTypeEntry = () => {
  return (
    <div>
        <div className="row">
            <Paper style={{margin:'1rem', width:'30%'}}>
                <h2>Leave Type Entry</h2>
                <InputField name='LeaveTypeName' label='Leave Type Name' /> 
            </Paper>
            <Paper style={{margin:'1rem', width:'70%'}}>
                <InputField name='LeaveTypeName' label='Leave Type Name' /> 
            </Paper>
        </div>
    </div>
  )
}

export default LeaveTypeEntry