import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getTime, reset } from '../features/times/timeSlice'
import { useEffect } from 'react'
import Spinner from '../components/Spinner'
import TimeFormProfile from '../components/TimeFormProfile'
import TimeForm from "../components/TimeForm"


function Profile() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
  
    const {user} = useSelector((state) => state.auth)
    const {time, isLoading, isError, message} = useSelector((state) => state.time)
    console.log(time)
    
    // const dateObj = new Date()
    // console.log(dateObj.getMonth())
    useEffect(() => {
      if(isError){
        console.log(message)
      }
      if(!user){
        navigate('/login')
      }
      dispatch(getTime())
      return() => {
        dispatch(reset())
      }
    }, [user, navigate, isError, message, dispatch])
  
    const keys = Object.keys(time)
    const final = time[keys[0]]
    // console.log(final['time'])
    if(isLoading){
      return(
        <Spinner/>
      )
    }
    return (
        <>
          <section className="heading">
            <h1>Welcome {user && user.name}</h1>
            <p>Profile</p>
          </section>
          <section className='content'>
            {time.length > 0 ? (
              <div className='time'>
                {time.slice(0,1).map((time, index) => (
                  <TimeFormProfile key={index} jack={time}/>
                ))}
              </div>
            ) : (
              <TimeForm />
            )}
          </section>
        </>
      )
}

export default Profile