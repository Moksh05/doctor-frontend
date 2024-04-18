

const MyBookings = () => {
return(<>
    <div className='w-[700px] md:w-[500px] p-4 shadow-lg rounded-lg mt-6'>
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
    </div>
    </>
)
}

export default MyBookings