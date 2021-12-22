import {useState} from 'react';
import Show from './Show';
import Header from './Header';

function Form(){
    const [obj, setObj] = useState( {
        name: "",
           email: "",
           number: "",
           state: "",
           country: ""

    })

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [number, setNumber] = useState("")
    const [state, setState] = useState("")
    const [country, setCountry] = useState("")
    const [isShow, setIsShow] = useState(false);

   const onSubmit= (e) => {
       e.preventDefault();

       if(name === "" || email === "" || number === "" || state === "" || country === ""){
           alert("Enter All Details");
           return;
       }

       setObj({
           name: name,
           email: email,
           number: number,
           state: state,
           country: country
       })
       setIsShow(true);

       setName("");
       setEmail("");

    }

    return(
            isShow ? <Show data={obj}/>:

            <form className="form" onSubmit={onSubmit}>
                <Header title="Registration Form" />
            <div className="form-field">
                <label htmlFor="fname">Full Name</label>
                <input type="text" autoComplete="off" id="fname" name="fname" value={name} onChange={(e) => setName(e.target.value)
                } />
            </div>
            <div className="form-field">
                <label htmlFor="email">Email</label>
                <input type="email" autoComplete="off" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)
                } />
            </div>
            <div className="form-field">
                <label htmlFor="mobile">Phone Number</label>
                <input type="number" autoComplete="off" id="mobile" name="mobile" value={number} onChange={(e) => setNumber(e.target.value)
                } />
            </div>
            <div className="form-field">
                <label htmlFor="state">State</label>
                <input type="text" autoComplete="off" id="state" name="state" value={state} onChange={(e) => setState(e.target.value)
                } />
            </div>
            <div className="form-field">
                <label htmlFor="country">Country</label>
                <input type="text" autoComplete="off" id="country" name="country" value={country} onChange={(e) => setCountry(e.target.value)
                } />
            </div>
            <div className="form-field">
            <input type="submit" value="Submit" className="btn"/></div>
        </form>
    );
}

export default Form;