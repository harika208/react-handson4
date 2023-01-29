import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../Components/Home'
import Student from "../Components/Student";
import Contact from '../Components/Contact';
import Form from "../Components/Form";

function RouterComponent(){
  return(
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/student" element={<Student/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/student/form" element={<Form/>}/>

   </Routes>
   
   </BrowserRouter>
  )
}
export default RouterComponent;