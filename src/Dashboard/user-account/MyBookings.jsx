import { AuthContext } from "../../context/authContext";
import { useContext, useState, useEffect } from "react";
import {BASE_URL} from '../../config'
import DoctorCard  from './../../components/Doctors/DoctorCard'
//import useFetchData from '../../hooks/useFetchData'
import axios from 'axios';


const MyBookings = () => {
//     useEffect(() => {
//         const fetchAppointments = async () => {
//           try {
//             // Make GET request to fetch appointments
//             const response = await axios.get('/appointments/my-appointments');
//             console.log(response)
    
//             // Update state with fetched appointments
//             setAppointments(response.data.data);
//           } catch (error) {
//             console.error('Error fetching appointments:', error);
//           }
//         };
    
//         fetchAppointments();
//       }, []);
//     const [appointments, setAppointments] = useState([]);
//   const { state } = useContext(AuthContext);
//   const { user, role, token } = state;
//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">{
//         user.map(doctor=> <DoctorCard doctor={doctor} key={doctor._id}/>)
//     }</div>
//   )
return(
    <div>My Bookings</div>
)
}

export default MyBookings