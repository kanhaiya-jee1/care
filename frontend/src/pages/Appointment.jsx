import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets_frontend/assets';
import RelatedDoctors from '../components/RelatedDoctors';

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState(""); 

  const getAvailableSlots = async () => {
    setDocSlots([]);
    let today = new Date();

    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);
      let endTime = new Date(today);
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);

      if (i === 0) {
        currentDate.setHours(Math.max(currentDate.getHours() + 1, 10));
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let timeslots = [];
      while (currentDate < endTime) {
        timeslots.push({
          datetime: new Date(currentDate),
          time: currentDate.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit'
          })
        });
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }
      setDocSlots(prev => [...prev, timeslots]);
    }
  };

  useEffect(() => {
    if (doctors && docId) {
      const doc = doctors.find(doc => String(doc._id) === String(docId));
      setDocInfo(doc || null);
    }
  }, [doctors, docId]);

  useEffect(() => {
    if (docInfo) {
      getAvailableSlots(); 
    }
  }, [docInfo]);

  if (!docInfo) return <p>Loading doctor details...</p>;

  return (
    <div className="p-4">
      <div className="flex flex-col sm:flex-row gap-6">
        
        
        <div className="flex-shrink-0 mt-6 bg-[#4A6CF7] rounded-xl flex items-center justify-center w-60 h-60">
          <img
            src={docInfo.image || assets.default_doctor_image}
            alt={docInfo.name}
            className="w-full h-full object-contain rounded-lg"
          />
        </div>

        {/* Doctor Info */}
        <div className="flex flex-col flex-1">
          <div className="border bg-white rounded-lg p-6 shadow-md">
            <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
              Dr. {docInfo.name}
              <img src={assets.verified_icon} alt="Verified" className="w-5" />
            </p>
            <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
              <p>
                {docInfo.degree} - {docInfo.speciality}
              </p>
              <button className="py-0.5 px-2 border text-xs rounded-full">
                {docInfo.experience}
              </button>
            </div>
            <div>
              <p className="flex items-center gap-1 text-sm font-medium text-gray-900 mt-3">
                About <img src={assets.info_icon} alt="Info" />
              </p>
              <p className="text-sm text-gray-500 max-w-[700px] mt-1">
                {docInfo.about}
              </p>
            </div>
            <p className="text-gray-500 font-medium mt-4">
              Appointment fee:{' '}
              <span className="text-gray-600">
                {currencySymbol}
                {docInfo.fees}
              </span>
            </p>
          </div>

          {/* Booking Slots */}
          <div className="mt-6 font-medium text-gray-700">
            <p>Booking Slots</p>
            <div className="flex gap-3 items-center w-full overflow-x-scroll mt-4">
              {docSlots.length > 0 &&
                docSlots.map((item, index) => (
                  <div
                    onClick={() => { setSlotIndex(index); setSlotTime(""); }}
                    className={`text-center flex flex-col items-center justify-center w-16 h-20 rounded-full cursor-pointer transition-colors duration-200 ${
                      slotIndex === index
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                    key={index}
                  >
                    <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                    <p>{item[0] && item[0].datetime.getDate()}</p>
                  </div>
                ))} 
            </div>

            {/* Time slots */}
            <div className='flex items-center gap-3 w-full overflow-x-scroll mt-4'>
              {docSlots.length > 0 &&
                docSlots[slotIndex].map((item, index) => (
                  <p
                    onClick={() => setSlotTime(item.time)}
                    className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${
                      slotTime === item.time
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-400 border border-gray-300'
                    }`}
                    key={index}
                  >
                    {item.time.toLowerCase()}
                  </p>
                ))}
            </div>

            <button className='bg-blue-600 text-white text-sm font-light px-14 py-3 rounded-full my-6'>
              Book Appointment
            </button>
          </div>
        </div>
      </div>

          {/* ---     Listing Related  Doctors     --*/}

      <RelatedDoctors  docId={docId} speciality={docInfo.speciality}/>
    </div>
  );
};

export default Appointment;
 