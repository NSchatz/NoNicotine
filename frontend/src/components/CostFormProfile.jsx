import {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { updateTime } from '../features/times/timeSlice'
import { useNavigate } from 'react-router-dom'

function CostFormProfile({jack}){
    const [object, setObject] = useState(
        {"_id":jack._id,
        "user":jack.user,
        'time': jack.time,
        'cost' : jack.cost ? 'cost': null,
        "createdAt":jack.createdAt,
        "updatedAt":jack.updatedAt,
        "__v":jack.__v})
    // var mason = object.time.slice(0, -8)
      console.log(jack[0])
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const onSubmit = e => {
        e.preventDefault()
        console.log(object)
        console.log(jack.user)
        object.cost = cost
        console.log(object)
        // dispatch(updateTime({object}))
        // window.location.reload();
        // navigate('/login')
    } 
    const [cost, setCost] = useState(object.cost)
    console.log(cost)
    return(
        <section className="form">
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="text">Cost per week</label>
                    <input type="number" name='cost'  id='cost' value={cost} onChange={(e) => setCost(e.target.value)} />
                </div>
                {/* <input className="btn btn-block" type='submit' label='setQuitTime' /> */}
                <button className="btn btn-block" type='submit'>Set Cost per Week</button>
            </form>
        </section>
    )
}

export default CostFormProfile