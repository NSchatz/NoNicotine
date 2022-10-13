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
  
  console.log(time)
  if (!time.hasOwnProperty("cost")) {
    const costIs = false
  }
  
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
            {time.slice(0,1).map((time, index) => (
              <TimeItem key={index} time={time} />
            ))}
          </div>
        ) : (
          <TimeForm />
        )}
      </section>
    </>
  )
}

export default Dashboard