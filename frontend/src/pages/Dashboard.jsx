import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import TimeForm from '../components/TimeForm'
import Spinner from '../components/Spinner'
import { getTime, reset } from '../features/times/timeSlice'
import TimeItem from '../components/TimeItem'
import CostForm from '../components/CostForm'
import CostFormProfile from '../components/CostFormProfile'

function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user} = useSelector((state) => state.auth)
  const {time, isLoading, isError, message} = useSelector((state) => state.time)
  
  
  // const dateObj = new Date()
  // console.log(dateObj.getMonth())
  useEffect(() => {
    if(isError){
      console.log(message)
    }
    if(!user){
      navigate('/login')
    } else {
      dispatch(getTime(user.token))
    }
    console.log(user)
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
        <p>Quit Dashboard</p>
      </section>
      <section className='content'>
        {time.length > 0 ? (
          <div className='time'>
            {time.map((time, index) => (
              <TimeItem key={index} time={time} />
            ))}
          </div>
        ) : (
          <TimeForm />
        )}
      </section>
      <section className='content'>
          <div className="cost">
            
          </div>
      </section>
    </>
  )
}

export default Dashboard