
import "./HeadBar.css";


function HeadBar() {


  return (
      <div className="card py-2 my-2 col-lg-12">
        <div className="row container-fluid" >
          <div className="col-12">
            <input type="text" className="col-3 input" />
            <a href="#" className="btn btn-outline-primary purchase col-2 m-1">Purchase</a>
            <a href="#" className="btn btn-outline-primary purchase col-2 m-1">View Unlocked Market</a>

            <a href="#" className="btn btn-outline-primary purchase col-1 m-1">Filter</a>
            <a href="#" className="btn btn-outline-primary purchase col-1 m-1">Log In</a>
            <a href="#" className="btn btn-outline-primary purchase col-1 m-1 float-right">Sign Up</a>
          </div>
        </div>
      </div>
  );
}

export default HeadBar;
