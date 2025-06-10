import React, { useContext } from 'react'
import { UserContext } from './UserContext'
import { useNavigate } from 'react-router-dom';
import DashBoard from './DashBoard';

const Form = () => {
    const navigate=useNavigate()
    const { name, setName, age, setAge } = useContext(UserContext);
    const handleSubmit = (e) => {
         e.preventDefault();
          navigate('/home');
    }
    return (
        <div>
            <form>
                <label>
                    Name
                </label>
                <input type='text' name='name' onChange={(e) => setName(e.target.value)}></input>
                <br>
                </br>
                <br></br>
                <label>
                    Age
                </label>

                <input type='number' name='age' onChange={(e) => setAge(e.target.value)}></input>
                <br></br>
                <br></br>
                <button onClick={handleSubmit}>Submit</button>
            </form>
               {/* <DashBoard/> */}
        </div>
    )
}

export default Form
