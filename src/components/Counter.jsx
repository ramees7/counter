import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../services/storeSlice'

function Counter() {

    const count=useSelector((state)=>state.counterReducer.count)
    const dispatch=useDispatch()

  return (
    <div style={{ height: '70vh' }} className='w-100 d-flex justify-content-center align-items-center'>
      <div className='d-flex flex-column w-50 justify-content-center border rounded p-5 align-items-center'>
        <h1>{count}</h1>
        <div className='d-flex justify-content-evenly w-50 mt-5'>
          <button className='btn btn-success'onClick={()=>dispatch(increment())}>Increment</button>
          <button className='btn btn-info' onClick={()=>dispatch(reset())}>Reset</button>
          <button className='btn btn-danger' onClick={()=>dispatch(decrement())}>Decrement</button>
        </div>
      </div>
    </div>
  )
}

export default Counter