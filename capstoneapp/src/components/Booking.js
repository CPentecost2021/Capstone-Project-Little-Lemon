import React from "react";
import BookingForm from "./Bookingform";
import { useState } from "react";

const Booking = (props) => {



    return (

        <Bookingform availableTimes={props.availableTimes} dispatch={props.dispatch} submitForm={props.submitForm}/>
    )
}

export default Booking;