import { useEffect, useState } from 'react';

const MyBookings = (userData) => {

    function extractDayAndTime(inputString) {
        try {
            const index = inputString.indexOf(' ');
            const day = inputString.slice(0, index);
            const timeRange = inputString.slice(index + 1);
    
            return { day, timeRange };
        } catch (error) {
            return { day: null, timeRange: null };
        }
    }
    const [appointments,setappointments] = useState([])
    //console.log(userData.userData._id)
    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch(`http://127.0.0.1:5000/api/v1/users/appointments/my-appointments`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "Authorization" : `Bearer ${localStorage.getItem('token')}`
            },
          });
          //console.log(response)
          const resolevedData = await response.json();
          setappointments(resolevedData.data)
          //console.log(appointments); // Log the data to the console
        };
        fetchData();
      }, []);
return(<>
{appointments.map((appointment,index)=>{
    const { day, timeRange } = extractDayAndTime(appointment.appointmentDate);
    return(
    <div key={index} className='w-[700px] md:w-[500px] p-4 shadow-lg rounded-lg mt-6'>
        <div>
        <h3 className="heading text-xl text-headingColor mb-2">{appointment.doctor.name}</h3>
        <span className="text-para bg-[#CCF0F3] text-irisBlueColor rounded-full px-2 my-2">{appointment.doctor.specialization}</span>
        </div>
        <div className="flex flex-row justify-between pr-4 content-center text-textColor pl-2">
            <div className="flex flex-col">
                <p>{day}</p>
                <p>{timeRange}</p>
            </div>
        <p className="text-sky-400">{appointment.status}</p>
        </div>
    </div>
    );
})}

{/* <div  className='w-[700px] md:w-[500px] p-4 shadow-lg rounded-lg mt-6'>
        <div>
        <h3 className="heading text-xl text-headingColor mb-2">Doctor Name</h3>
        <span className="text-para bg-[#CCF0F3] text-irisBlueColor rounded-full px-2 my-2">Specialization</span>
        </div>
        <div className="flex flex-row justify-between pr-4 content-center text-textColor pl-2">
            <div className="flex flex-col">
                <p>Date</p>
                <p>time slot</p>
            </div>
        <p>Status</p>
        </div>
    </div> */}
    
    </>
)
}

export default MyBookings