import React from 'react'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
function ButtonMakeReservation(props) {
  return (
    <Button size="small" color="primary" variant="contained" component={Link} to={props.url}>
      Make a Reservation
    </Button>
  )
}

export default ButtonMakeReservation
