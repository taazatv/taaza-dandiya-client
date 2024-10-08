import BookingForm from "./booking-form";
import { ToastContainer } from 'react-toastify';
export default function BookingPage(){
    return(
        <div className="h-screen w-screen overflow-hidden flex flex-col gap-4 p-6 py-6" id="ticket-booking-form ">
            <ToastContainer />
            <h1 className="text-center text-4xl font-bold text-pink-800 drop-shadow-2xl">Taaza Dandiya 2024 Ticket Booking</h1>
            <h3 className="text-center text-xl font-bold text-pink-800 drop-shadow-2xl">Tickets at Rs.700 (incl. tax) each. </h3>
            <div className="BOX">
             </div>
            <div className="m-auto overflow-y-auto">
            <BookingForm />
            </div>
        </div>
    )
}