import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Doctors = () => {
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const [activeSpeciality, setActiveSpeciality] = useState(""); 

  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  const applyFilter = (selectedSpeciality) => {
    if (selectedSpeciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === selectedSpeciality));
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter(speciality);
    setActiveSpeciality(speciality || "");
  }, [speciality, doctors]);

  const FilterButton = ({ label, value }) => (
    <button
      onClick={() => navigate(value ? `/doctors/${value}` : `/doctors`)}
      className={`border px-4 py-2 rounded transition-all duration-300 ease-in-out 
        ${activeSpeciality === value 
          ? "bg-blue-500 text-white shadow-md scale-105" 
          : "bg-white text-gray-700 hover:bg-blue-50 hover:scale-105"}`}
    >
      {label}
    </button>
  );

  return (
    <div className="p-4">
      <p className="text-gray-600">Browse through the doctors specialist.</p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        {/* Filter toggle button for mobile */}
        <button 
          className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${showFilter ? 'bg-blue-500 text-white' : ""}`} 
          onClick={() => setShowFilter(prev => !prev)}
        >
          Filters
        </button>

        {/* Filter buttons */}
        <div className={`flex flex-col gap-4 text-sm text-gray-600 ${showFilter ? 'flex' : 'hidden sm:flex'}`}>
          <FilterButton label="All Doctors" value="" />
          <FilterButton label="General physician" value="General physician" />
          <FilterButton label="Gynecologist" value="Gynecologist" />
          <FilterButton label="Dermatologist" value="Dermatologist" />
          <FilterButton label="Pediatricians" value="Pediatricians" />
          <FilterButton label="Neurologist" value="Neurologist" />
          <FilterButton label="Gastroenterologist" value="Gastroenterologist" />
        </div>

        {/* Doctor Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 flex-1">
          {filterDoc.map((item, index) => (
            <div
              key={index}
              onClick={() => navigate(`/appointment/${item._id}`)}
              className="border rounded-xl shadow hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <p className="text-green-600 text-sm font-medium flex items-center gap-1">
                  <span className="text-lg">●</span> Available
                </p>
                <p className="font-semibold mt-2">{item.name}</p>
                <p className="text-sm text-gray-500">{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
