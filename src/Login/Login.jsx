import React, {useState} from 'react';
import Wave from './background.png';
import './Login.css';
import Logo from './cdk_logoo.png';

const Login = () =>
{
    const [fullName, setFullName] = useState({
        fname:"",
        lname:"",
        email:"",
        mobile:"",
        fnameError:"",
        lnameError:"",
        emailError:"",
        mobileError:""
    });

    const inputEvent = (event) => {
        const {value, name} = event.target;

        console.log(name);

        setFullName ((prevValue) => {
            return{
                ...prevValue,
                [name]:value
            }
        });
    }

    const validate = () =>{
        let fnameval="";
        let lnameval="";
        let emailval="";
        let mobileval="";
        if(fullName.fname === "")
        {
            fnameval="First Name cannot be empty";
        }
        if(fullName.lname === "")
        {
            lnameval="Last Name cannot be empty";
        }
        if(! (fullName.email.includes("@")))
        {
            emailval="Doesn't matches email format";
        }
        if(fullName.mobile === "")
        {
            mobileval="Mobile Number cannot be empty";
        }
        

        if(fnameval || lnameval || emailval || mobileval)
        {
            // console.log("wrongggg");
            // console.log(val);
            // console.log(fullName.emailError);
            setFullName ((prevValue) => {
                return{
                    ...prevValue,
                    fnameError:fnameval,
                    lnameError:lnameval,
                    emailError:emailval,
                    mobileError:mobileval
                }
            });
            // console.log(fullName);
            return false;
        }
        return true;
    };

    const onSubmits = (event) =>{
        event.preventDefault();
        const isValid=validate();
        if(isValid)
        {
            console.log(fullName);
            alert("Form Submitted !! "+ fullName.fname +" "+ fullName.lname);

            setFullName (() => {
                return{
                    fname:"",
                    lname:"",
                    email:"",
                    mobile:"",
                    fnameError:"",
                    lnameError:"",
                    emailError:"",
                    mobileError:""
                };
            });
        }
        else{
            console.log("wrong value entered");
            console.log(fullName);
        }
        

       
    };

    return(
        <div>
            <div className="w_ave">
			    <img src={Wave}></img>
            </div>
            <div className="l_ogo">
			    <img src={Logo}></img>
            </div>
            <div className="main_div">
                <form onSubmit={onSubmits}>
                <h1>Welcome</h1>
                <h3> {fullName.fname} {fullName.lname}</h3>
                <h4> {fullName.email}</h4>
                <h5> {fullName.mobile}</h5>

                <input type="text" 
                placeholder="Enter your First Name" 
                name="fname" 
                onChange={inputEvent} 
                value={fullName.fname}
                autoComplete="off">
                </input>
                <div className="errorr">
                    {fullName.fnameError}
                </div>

                <input type="text" 
                placeholder="Enter your Last Name" 
                name="lname" 
                onChange={inputEvent} 
                value={fullName.lname}
                autoComplete="off">
                </input>
                <div className="errorr">
                    {fullName.lnameError}
                </div>

                <input type="text" 
                placeholder="Enter email-id" 
                name="email" 
                onChange={inputEvent} 
                value={fullName.email}
                autoComplete="off">
                </input>
                <div className="errorr">
                    {fullName.emailError}
                </div>

                <input type="number" 
                placeholder="Mobile Number" 
                name="mobile" 
                onChange={inputEvent} 
                value={fullName.mobile}
                autoComplete="off">
                </input>
                <div className="errorr">
                    {fullName.mobileError}
                </div>
                

                <button type="submit">Submit</button>
                </form>
            </div>
        </div>
        
    )
}

export default Login;