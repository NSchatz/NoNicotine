import { useState, useEffect } from 'react';

export var ProgressBar =  ({width, percent}) => {
  
  const [value, setValue] = useState(0);

  useEffect(() => {
    setValue(percent * width);
  });

  return (
    <div className="progress-div" style={{ width: width }}>
        <div style={{ width: `${value}px` }} className="progress" />
      </div>
  )
}

function TimeItem({ time }) {
  const [currentTime, setCurrentTime] = useState(0);
  var date = new Date(time.time)
  
  const CTime = () => {
    var d = new Date();
    setCurrentTime(d)
    return currentTime
  }
  setInterval(CTime,50)
  var d = new Date();
  var millis = d - date;
  var month = millis / 2629746000

  if(millis < 0){
    return (
      <h1>Please select a date not in the future</h1>
    )
  }

  var monthremain = millis % 2629746000
  const monthpercent = month / 12
  var day = monthremain / 86400000
  var dayremain = monthremain % 86400000
  const daypercent = day / 30
  var hour = dayremain / 3600000
  var hourremain = dayremain % 3600000
  const hourpercent = hour/24
  var min = hourremain / 60000
  var minremain = hourremain % 60000
  const minpercent = min/60
  var sec = minremain / 1000
  var secremain = minremain % 1000
  const secpercent = sec/60

  return (
    <>
        <div className='time'>
            {Math.floor(month) > 0 ? 
              <>
                <p>{Math.floor(month)} months</p>
                <ProgressBar width={644} percent={monthpercent}  />
              </> : null
            }
            {Math.floor(day) > 0 ? 
              <>
                <p>{Math.floor(day)} days</p>
                <ProgressBar width={644} percent={daypercent}  />
              </> : null
            }
            {Math.floor(hour) > 0 ? 
              <>
                <p>{Math.floor(hour)} hours</p>
                <ProgressBar width={644} percent={hourpercent}  />
              </> 
              :
              <>
                <p>{Math.floor(hour)} hours</p>
                <ProgressBar width={644} percent={0}  />
              </> 
            }
            {Math.floor(min) > 0 ? 
              <>
                <p>{Math.floor(min)} mins</p>
                <ProgressBar width={644} percent={minpercent}  />
              </> 
              :
              <>
                <p>{Math.floor(min)} mins</p>
                <ProgressBar width={644} percent={0}  />
            </> 
            }
            {Math.floor(sec) > 0 ? 
              <>
                <p>{Math.floor(sec)} secs</p>
                <ProgressBar width={644} percent={secpercent}  />
              </> 
              :
              <>
                <p>{Math.floor(sec)} secs</p>
                <ProgressBar width={644} percent={0}  />
              </>
            }
        </div>
    </>
    
  )
}

export default TimeItem