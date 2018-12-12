import React from 'react'
import Loadimg from '../../common/img/loading1.gif'

let backAndTextColor = {
  display:'flex',
  justifyContent:'center',
  marginTop: '50px'
}
const Loading = () => {
  return (
    <div style={backAndTextColor}>
    <img src={Loadimg} alt="loading"/>
    </div>
  )
}
export default Loading