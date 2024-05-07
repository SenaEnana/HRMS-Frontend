import {useState, useEffect} from "react"
import { NavLink } from "react-router-dom";
function DegreeList(){
    const [data, setData] = useState([]);

    useEffect(() => {
      getData();
    }, []);
  
    async function deleteOperation(Id) {
      let result = await fetch(
        `https://localhost:7140/api/Degree/${Id}`,
        {
          method: "DELETE",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      result = await result.json();
      getData();
    }
  
    async function getData() {
      let result = await fetch("https://localhost:7140/api/Degree");
      result = await result.json();
      console.log(result);
      setData(result);
    }
    return(
        <>
      <div className="d-flex justify-content-between mt-5 text-dark">
        <h5 className="text-start ms-2">List Of Degree</h5>
        <NavLink
          to={"/addGrade"}
          className="float-end btn btn-info btn-sm mb-2"
        >
          Add new Degree
        </NavLink>
      </div>
      <table className="table table-hover text-dark w-100 fs-6">
        <thead>
          <tr>
            <th>Degree Id</th>
            <th>Name</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((degree) => {
            const degreeId = degree.id;
            return (
              <tr key={degreeId}>
                {Object.values(degree).map((item, index) => (
                  <td key={index}>{item}</td>
                ))}
                <td>
                  <NavLink to={"/updateDegree/" + degreeId}>
                    <button
                      className="btn btn-outline-info btn-sm"
                      type="button"
                    >
                      Edit
                    </button>
                  </NavLink>
                  <button
                    onClick={() => deleteOperation(degreeId)}
                    className="btn btn-outline-danger ms-1 btn-sm"
                    type="button"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
        </>
    )
}

export default DegreeList;
