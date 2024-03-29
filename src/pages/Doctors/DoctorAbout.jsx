import React from 'react'
import { formateDate } from '../../utils/formateDate'

const DoctorAbout = () => {
  return (
    <div>
        <div>
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2'>
            About of
            <span className='text-irisBlueColor font-bold text-[24px] leading-9'>XYZ</span>
        </h3>
        <p className='text_para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita beatae quia delectus eaque tempore odio dolorum, voluptas officia obcaecati, itaque ipsum non sunt minus, repudiandae est suscipit voluptate modi asperiores quidem? Eius natus fugiat possimus ipsa itaque animi, dicta laborum earum magnam saepe iusto magni repudiandae vitae quisquam illum illo.</p>
        </div>
        <div className='mt-12'>
            <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>Education</h3>
            <ul className='pt-4 md:p-5'>
                <li className='flex flex-col sm:flex-row sm:justfy-between sm:items-end md:gap-5 mb-[30px]'>
                    <div>
                        <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>{formateDate("12-04-2008")}</span>
                        <p className='text-[16px] leading-6 font-medium text-textColor'>PHD in Surgeon</p>
                    </div>
                    <p className='text-[14px] leading-5 font-medium text-textColor'>New Apollo Hospital, Delhi.</p>
                </li>
                <li className='flex flex-col sm:flex-row sm:justfy-between sm:items-end md:gap-5 mb-[30px]'>
                    <div>
                        <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>{formateDate("12-04-2010")}</span>
                        <p className='text-[16px] leading-6 font-medium text-textColor'>PHD in Surgeon</p>
                    </div>
                    <p className='text-[14px] leading-5 font-medium text-textColor'>New Apollo Hospital,Delhi.</p>
                </li>
            </ul>
        </div>
        <div className='mt-12'>
            <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>Experience</h3>
            <ul className='grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5'>
                <li className='p-4 rounded bg-[#fff9ea]'>
                    <span className='text-yellow-300 text-[15px] leading-6 font-semibold'>
                        {formateDate("07-04-2010")} - {formateDate("08-13-2014")}
                    </span>
                    <p className='text-[16px] leading-6 font-medium text-textColor'>Sr. Surgeon</p>
                    <p className='text-[14px] leading-5 font-medium text-textColor'>New Apollo Hospital,Delhi.</p>
                </li>
                <li className='p-4 rounded bg-[#fff9ea]'>
                    <span className='text-yellow-300 text-[15px] leading-6 font-semibold'>
                        {formateDate("07-04-2010")} - {formateDate("08-13-2014")}
                    </span>
                    <p className='text-[16px] leading-6 font-medium text-textColor'>Sr. Surgeon</p>
                    <p className='text-[14px] leading-5 font-medium text-textColor'>New Apollo Hospital,Delhi.</p>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default DoctorAbout