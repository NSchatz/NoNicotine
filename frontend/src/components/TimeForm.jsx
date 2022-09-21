import {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { createTime } from '../features/times/timeSlice'

function TimeForm(){
    const [time, setTime] = useState()
    console.log(time)
    const dispatch = useDispatch()
    const onSubmit = e => {
        e.preventDefault()
        
        dispatch(createTime({ time }))
    }
    return(

        <section className="form">
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="text">Time</label>
                    <input type="datetime-local" name='Date' id='Date' value={time} onChange={(e) => setTime(e.target.value)} />
                </div>
                <button className="btn btn-block" type='submit'>Set Quit Time</button>
            </form>
        </section>
    )
}

export default TimeForm