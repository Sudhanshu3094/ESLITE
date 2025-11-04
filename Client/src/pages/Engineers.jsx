import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Engineers = () => {

  const { speciality } = useParams()
  const [filterEng, setFilterEng] = useState([])
  const navigate = useNavigate()

  const { engineers } = useContext(AppContext)
  const applyFilter = () => {
    if (speciality) {
      setFilterEng(engineers.filter(eng => eng.speciality === speciality))
    } else {
      setFilterEng(engineers)
    }
  }
  useEffect(() => {
    applyFilter()
  }, [engineers, speciality])

  return (
    <div>
      <p className='text-gray-600'>Browse through the Engineers specialist.</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <div className='flex flex-col gap-4 text-sm text-gray-600'>
          <p onClick={()=> speciality ==='Frontend Engineer' ? navigate('/engineers'): navigate('/engineers/Frontend Engineer')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Frontend Engineer"? "bg-indigo-100 text-black":""}`}>Frontend Engineer</p>
          <p onClick={()=> speciality ==='Backend_Engineer' ? navigate('/engineers'): navigate('/engineers/Backend_Engineer')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Backend_Engineer"? "bg-indigo-100 text-black":""}`} >Backend_Engineer</p>
          <p onClick={()=> speciality ==='Data Science Engineer' ? navigate('/engineers'): navigate('/engineers/Data Science Engineer')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Data Science Engineer"? "bg-indigo-100 text-black":""}`}>Data Science Engineer</p>
          <p onClick={()=> speciality ==='App Developer' ? navigate('/engineers'): navigate('/engineers/App Developer')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "App Developer"? "bg-indigo-100 text-black":""}`} >App Developer</p>
          <p onClick={()=> speciality ==='Electrical Engineer' ? navigate('/engineers'): navigate('/engineers/Electrical Engineer')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Electrical Engineer"? "bg-indigo-100 text-black":""}`} >Electrical Engineer</p>
          <p onClick={()=> speciality ==='Mechanical Engineer' ? navigate('/engineers'): navigate('/engineers/Mechanical Engineer')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Mechanical Engineer"? "bg-indigo-100 text-black":""}`} >Mechanical Engineer</p>
      </div>
      <div className='w-full grid [grid-template-columns:repeat(auto-fill,minmax(200px,1fr))] gap-4 gap-y-6 '>
        {
          filterEng.map((item, index) => (
            <div onClick={() => navigate(`/appointment/${item._id}`)} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
              <img className='bg-blue-50' src={item.image} alt="" />
              <div className='p-4'>
                <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                  <p className='w-2 h-2 bg-green-500 rounded-full '></p><p >Available</p>
                </div>
                <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                <p className='text-gray-800 text-sm'>{item.speciality}</p>
              </div>
            </div>

          ))
        }
      </div>
    </div>
        </div>
  )
}

export default Engineers
