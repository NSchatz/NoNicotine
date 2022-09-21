import {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { updateTime } from '../features/times/timeSlice'
import { useNavigate } from 'react-router-dom'

function TimeFormProfile({jack}){
    const [object, setObject] = useState(
        {"_id":jack._id,
        "user":jack.user,
        'time': jack.time,
        "createdAt":jack.createdAt,
        "updatedAt":jack.updatedAt,
        "__v":jack.__v})
    // var mason = object.time.slice(0, -8)

    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const onSubmit = e => {
        e.preventDefault()
        console.log(object)
        console.log(jack.user)
        object.time = time
        console.log(object)
        dispatch(updateTime({object}))
        window.location.reload();
        // navigate('/login')
    } 
    const [time, setTime] = useState(object.time.slice(0, -8))
    return(
        <section className="form">
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="text">Time</label>
                    <input type="datetime-local" name='Date'  id='Date' value={time} onChange={(e) => setTime(e.target.value)} />
                </div>
                {/* <input className="btn btn-block" type='submit' label='setQuitTime' /> */}
                <button className="btn btn-block" type='submit'>Set Quit Time</button>
            </form>
        </section>
    )
}

export default TimeFormProfile