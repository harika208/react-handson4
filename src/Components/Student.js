import { Link } from "react-router-dom";
function Student() {

  return (
    <>
      <ul className="line">
        <li>
          {" "}
          <Link to="/" className="link">
            <h2>Home</h2>
          </Link>{" "}
        </li>
        <li>
          <Link to="/student" className="link">
            {" "}
            <h2>Student</h2>
          </Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="/contact" className="link">
            {" "}
            <h2>Contact</h2>
          </Link>
        </li>
      </ul>
      <div id="title">
        <span>Student Details</span>
        <Link to="/student/form">
          <button className="btn"> Add New Student</button>
        </Link>
      </div>
      <div id="data">
        <table border={2}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>course</th>
              <th>Batch</th>
              <th>Change</th>
            </tr>
          </thead>
          <tbody>
          
            <tr>
           <td>John</td> 
           <td>24</td>
           <td>MERN</td>
           <td>October</td>
           <td>edit</td>
            </tr>
            <tr>
           <td>saravanan</td> 
           <td>23</td>
           <td>MERN</td>
           <td>august</td>
           <td>edit</td>
            </tr>
            <tr>
           <td>hemanth</td> 
           <td>21</td>
           <td>MERN</td>
           <td>november</td>
           <td>edit</td>
            </tr>
            <tr>
            <td>divya</td> 
           <td>22</td>
           <td>MERN</td>
           <td>march</td>
           <td>edit</td>
            </tr>
            <tr>
            <td>jamuna</td> 
           <td>24</td>
           <td>MERN</td>
           <td>april</td>
           <td>edit</td>
            </tr>
            <tr>
            <td>shahul</td> 
           <td>24</td>
           <td>MERN</td>
           <td>may</td>
           <td>edit</td>
            </tr>
  {/* {  newData.map((value, index) => {
              return (
                <tr key={index}>
                    <td>{value.name}</td>
                    <td>{value.age}</td>
                    <td>{value.course}</td>
                    <td>{value.batch}</td>
                    <td> <Link>edit</Link> </td>
                 
                </tr>
              );
            })} */}

          </tbody>
        </table>
      </div>
    </>
  );
}
export default Student;