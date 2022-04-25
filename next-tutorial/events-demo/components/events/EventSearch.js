import React, {useRef} from "react";
import Button from '../ui/Button'

export default function EventSearch(props) {
    const yearInputRef = useRef()
    const monthInputRef = useRef()

    const submitHandler = (event) => {
        event.preventDefault();
        const selectedYear = yearInputRef.current.value
        const selectedMonth = monthInputRef.current.value
        props.onSearch(selectedYear, selectedMonth)
    }

  return <form action="" onSubmit={submitHandler}>
      <div>
          <div>
              <label htmlFor="year">Year</label>
              <select name="" id="year" ref={yearInputRef}>
                  <option value="2021">2021</option>
                  <option value="2022">2022</option>
              </select>
          </div>
          <div>
              <label htmlFor="month">Month</label>
              <select name="" id="month" ref={monthInputRef}>
                  <option value="1">Jan</option>
                  <option value="2">Feb</option>
                  <option value="3">Mar</option>
                  <option value="4">Apr</option>
                  <option value="5">May</option>
                  <option value="6">Jun</option>
                  <option value="7">Jul</option>
                  <option value="8">Aug</option>
                  <option value="9">Sept</option>
                  <option value="10">Oct</option>
                  <option value="11">Nov</option>
                  <option value="12">Feb</option>
              </select>
          </div>
      </div>
      <Button>Find Events</Button>
  </form>;
}