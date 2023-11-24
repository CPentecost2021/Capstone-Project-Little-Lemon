import React from "react";
import Bookingform from "./Bookingform";
import { useState } from "react";

const Booking = (props) => {



    return (

        <Bookingform availableTimes={props.availableTimes} dispatch={props.dispatch} submitForm={props.submitForm}/>
    )
}

export default Booking;