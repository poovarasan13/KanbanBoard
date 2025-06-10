import React from 'react'

const Contact = () => {
  return (
    <div >
      <h1>Contact us</h1>

      <form  style={{padding:"20px",justifyItems:'center' ,backgroundColor:'#eae1e1' , width:'400px',alignContent:"center",borderRadius:'7px',alignItems:'flex-start'} }>
        <div style={{marginTop:'20px'}}>
            <label>Name:</label>
            <input type='text' name='name'></input>

        </div>
        
        <div style={{marginTop:'20px'}}>
            <label>email:</label>
            <input type='email' name='email'></input>
            
        </div>
        <div style={{marginTop:'20px'}}>
            <label>Questions:</label>
            <textarea name='question'></textarea>
        </div>
        <div>
            <button type='submit'>Submit</button>
        </div>

      </form>
    </div>
  )
}

export default Contact
