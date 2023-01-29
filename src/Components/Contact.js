import { Link } from "react-router-dom";
function Contact(){
    return(
        <>
         <ul className='line'>
         <li> <Link to="/" className='link'><h2>Home</h2></Link> </li>
                <li><Link to='/student' className='link'> <h2>student</h2></Link> </li>
                <li> <Link to='/contact' className='link'> <h2>Contact</h2></Link></li>
            </ul>
        <h1>Contact-us</h1>
        </>
    )
}
export default Contact;