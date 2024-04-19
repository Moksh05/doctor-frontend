import {useState} from 'react'

const SidePanel = (doctors) => {
    const {ticketPrice,timeSlots}= doctors.doctors
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
    const[show,setShow] = useState(false);
  return (
    <div className='shadow-xl p-3 lg:p-5 rounded-md'>
        <div className='flex items-center justify-between'>
            <p className='text_para mt-0 font-semibold'>Ticket Price</p>
            <span className='text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold'>Rs.{ticketPrice}</span>
        </div>
        <div className='mt-[30px]'>
            <p className='text_para mt-0 font-semibold text-headingColor'>Available Time Slots:</p>
            <ul className='mt-3'>
            {timeSlots.map((timeSlot,index)=> {
    const { day, timeRange } = extractDayAndTime(timeSlot);
    return (
        <li key={index} className='flex items-center justify-between mb-2'>
            <p className='text-[15px] leading-6 text-textColor font-semibold'>{day}</p>
            <p className='text-[15px] leading-6 text-textColor font-semibold'>{timeRange}</p>
        </li>
    );
})}
            </ul>
        </div>
        <button className='btn px-2 w-full rounded-md' onClick={()=>{setShow(!show)}}>Book Appointment</button>
    </div>
  )
}

export default SidePanel