import React from "react";
function Card({data}) {

  return (
    <>
      <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">
              {data.plan}
            </h5>
            <h6 className="card-price text-center">
              ${data.price}/month
            </h6>
            <hr />
            <ul className="fa-ul">
              <li><span className="fa-li"><i className="fas fa-check"></i></span>{data.user}</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>{data.storage}</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>{data.publicProjects}</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>{data.access}</li>  
              <li className={`${data.isPrivateProjects?"":"text-muted"}`}> <span className="fa-li"> <i className={`${data.isPrivateProjects ? "fas fa-check" : "fas fa-times"}`}></i></span>{data.privateProjects}</li>
              <li className={`${data.isPhoneSupport ? "" : "text-muted"}`}><span className="fa-li"><i className={`${data.isPhoneSupport ? "fas fa-check" : "fas fa-times" }`}></i></span>{data.phoneSupport}</li>
              <li className={`${data.isSubdomain ? "" : "text-muted"}`}><span className="fa-li"><i className={`${data.isSubdomain ? "fas fa-check" : "fas fa-times"}`}></i></span>{data.subdomain}</li>
              <li className={`${data.isStatusReports ? "" : "text-muted"}`}><span className="fa-li"><i className={`${data.isStatusReports ? "fas fa-check" : "fas fa-times" }`}></i></span>{data.statusReports}</li>
            </ul>
            <div className="d-grid"> 
              <a href="#" className="btn btn-primary text-uppercase">
                Button
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
