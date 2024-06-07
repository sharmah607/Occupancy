import React, {useState} from "react";
import OccupancyService from "../services/OccupancyService";

const OccupancyIs = () => {
  
  const [notSecure, setNotSecure] = useState(0);

  const [occupancy, setOccupancy] = useState({
    id:"",
    status:"",
    verifiedBy: "",
  });

  const [check, setCheck] = useState('');

  const [check2, setCheck2] = useState('');

  const handleCheck = (e) => {
    setCheck(e.target.value)
  }

  const handleCheck2 = (e) => {
    setCheck2(e.target.value)
  }

  const resetRadioState = () => {
    setCheck('');
    setCheck2('');
  }

  const handleChange = (e) => {
    const value = e.target.value;
    setOccupancy({...occupancy, [e.target.name]: value});
  };

  const saveOccupancy = (e) => {
    e.preventDefault();
    OccupancyService.saveOccupancy(occupancy)
        .then((response) => {
            console.log(response);
    })
    .catch((error) => {
        console.log(error);
    });
  };

//   const reset = (e) => {
//     e.preventDefault();
//     setOccupancy({
//         id:"",
//     status:"",
//     verifiedBy: "",
//     });
//   };

  return (
    <div className="container">
    <div
      style={{
        backgroundColor: "white",
        textAlign: "left",
        paddingLeft: "15%",
        paddingTop: "2%",
        color:"blue"
      }}
      className="title"
    >
      <h2 style={{ margin: "0" }}>
        Occupancy
      </h2>
    </div>
    <br></br>
    <div style={{color:"darkblue", background:"white", paddingLeft: "15%" }}>
            <div><b>Occupancy Is<font style={{color:"red"}}>*</font></b></div>
              
                <span>
                  <input
                    id="occupancy-byowner"
                    name="status"
                    type="radio"
                    value="Owner"
                    checked={check === 'Owner'}
                    onChange={(e) => {handleChange(e); handleCheck(e)}}
                  />
                  <label htmlFor="occupancy-byowner">By Owner</label>
                  &nbsp;
                </span>

                <span>
                  <input
                    id="occupancy-bynonowner"
                    name="status"
                    type="radio"
                    value="Non Owner"
                    checked={check === 'Non Owner'}
                    onChange={(e) => {handleChange(e); handleCheck(e)}}
                  />
                  <label htmlFor="occupancy-bynonowner">By Non-Owner</label>
                  &nbsp;
                </span>
                <span>
                  <input
                    id="occupancy-byunknownoccupant"
                    name="status"
                    type="radio"
                    value="Unknown Occupant"
                    checked={check === 'Unknown Occupant'}
                    onChange={(e) => {handleChange(e); handleCheck(e)}}
                  />
                  <label htmlFor="occupancy-byunknownoccupant">By Unknown Occupant</label>
                  &nbsp;
                </span>
                <span>
                  <input
                    id="occupancy-vacantsecure"
                    name="status"
                    type="radio"
                    value="Vacant-Secure"
                    checked={check === 'Vacant-Secure'}
                    onChange={(e) => {handleChange(e); handleCheck(e)}}
                  />
                  <label htmlFor="occupancy-vacantsecure">Vacant - Secure</label>
                  &nbsp;
                </span>
                <span>
                  <input
                    id="occupancy-vacantnotsecure"
                    name="status"
                    type="radio"
                    value="Vacant-Not Secure"
                    checked={check === 'Vacant-Not Secure'}
                    onChange={(e) => {handleChange(e); handleCheck(e); setNotSecure('vacantNotSecure')}}
                  />
                  <label htmlFor="occupancy-vacantnotsecure">Vacant - Not Secure</label>
                  &nbsp;
                </span>
                <span>
                  <input
                    id="occupancy-partiallyvacantsecure"
                    name="status"
                    type="radio"
                    value="Partially Vacant-Secure"
                    checked={check === 'Partially Vacant-Secure'}
                    onChange={(e) => {handleChange(e); handleCheck(e)}}
                  />
                  <label htmlFor="occupancy-partiallyvacantsecure">Partially Vacant - Secure</label>
                  &nbsp;
                </span>
                <span>
                  <input
                    id="occupancy-partiallyvacantnotsecure"
                    name="status"
                    type="radio"
                    value="Partially Vacant-Not Secure"
                    checked={check === 'Partially Vacant-Not Secure'}
                    onChange={(e) => {handleChange(e); handleCheck(e)}}
                  />
                  <label htmlFor="occupancy-partiallyvacantnotsecure">Partially Vacant - Not Secure</label>
                  &nbsp;
                </span>
            
            </div>
            <br></br>

            {
              notSecure === 'vacantNotSecure' &&(
                  <div style={{color:"darkblue", background:"white", paddingLeft: "15%" }} className="a">
                  <div><b>Not Secure: (check all that apply)<font style={{color:"red"}}>*</font></b></div>
                  <span>
                  <input
                    id="notsecure-frontdoor"
                    name="notsecure"
                    type="checkbox"
                    value="front door"
                  />
                  <label htmlFor="notsecure-frontdoor">Front Door</label>
                  &nbsp;&nbsp;
                </span>
                <span>
                  <input
                    id="notsecure-backdoor"
                    name="notsecure"
                    type="checkbox"
                    value="back door"
                  />
                  <label htmlFor="notsecure-backdoor">Back Door</label>
                  &nbsp;&nbsp;
                </span>
                <span>
                  <input
                    id="notsecure-garage"
                    name="notsecure"
                    type="checkbox"
                    value="garage"
                  />
                  <label htmlFor="notsecure-garage">Garage</label>
                  &nbsp;&nbsp;
                </span>
                <span>
                  <input
                    id="notsecure-other"
                    name="notsecure"
                    type="checkbox"
                    value="other"
                    onChange={() => setNotSecure('other')}
                  />
                  <label htmlFor="notsecure-other">Other</label>
                  &nbsp;&nbsp;
                </span>
                <span>
                  <input
                    id="notsecure-windowup"
                    name="notsecure"
                    type="checkbox"
                    value="window up"
                  />
                  <label htmlFor="notsecure-windowup">Window Up/Broken</label>
                  &nbsp;&nbsp;
                </span>
                <span>
                  <input
                    id="notsecure-windowdown"
                    name="notsecure"
                    type="checkbox"
                    value="window down"
                  />
                  <label htmlFor="notsecure-windowdown">Window Down/Broken</label>
                  &nbsp;&nbsp;
                </span>
                  </div>
              )
            }
            {
              notSecure === 'other' &&(
                  <div style={{color:"darkblue", background:"white", paddingLeft: "15%" }} className="a">
                  <div><b>Specify Other</b></div>
                  <span>
                  <label htmlFor="notsecure-other">Specify Other<font style={{color:"red"}}>*</font></label>
                  <input
                    id="notsecure-other"
                    name="other"
                    type="text"
                    placeholder="specify other"
                  />
                  </span>
                  </div>
              )
            }

            <div style={{color:"darkblue", background:"white", paddingLeft: "15%" }}>
            <div><b>Occupancy Verified By<font style={{color:"red"}}>*</font></b></div>
              
                <span>
                  <input
                    id="occupancy-directcontact"
                    name="verifiedBy"
                    type="radio"
                    // value={occupancy.occupancyVerifiedByID}
                    value="Direct Contact"
                    checked={check2 === 'Direct Contact'}
                    onChange={(e) => {handleChange(e); handleCheck2(e); setNotSecure('direct contact')}}
                  />
                  <label htmlFor="occupancy-directcontact">Direct Contact</label>
                  &nbsp;
                </span>

                <span>
                  <input
                    id="occupancy-neighbor"
                    name="verifiedBy"
                    type="radio"
                    value="Neighbor"
                    checked={check2 === 'Neighbor'}
                    onChange={(e) => {handleChange(e); handleCheck2(e)}}
                  />
                  <label htmlFor="occupancy-neighbor">Neighbor</label>
                  &nbsp;
                </span>
                <span>
                  <input
                    id="occupancy-nameonmailbox"
                    name="verifiedBy"
                    type="radio"
                    value="Name on Mailbox/Directory"
                    checked={check2 === 'Name on Mailbox/Directory'}
                    onChange={(e) => {handleChange(e); handleCheck2(e)}}
                  />
                  <label htmlFor="occupancy-nameonmailbox">Name on Mailbox/Directory</label>
                  &nbsp;
                </span>
                <span>
                  <input
                    id="occupancy-Visual"
                    name="verifiedBy"
                    type="radio"
                    value="Visual"
                    checked={check2 === 'Visual'}
                    onChange={(e) => {handleChange(e); handleCheck2(e); setNotSecure('visual')}}
                  />
                  <label htmlFor="occupancy-visual">Visual</label>
                  &nbsp;
                </span>
                <span>
                  <input
                    id="occupancy-other"
                    name="verifiedBy"
                    type="radio"
                    value="Other"
                    checked={check2 === 'Other'}
                    onChange={(e) => {handleChange(e); handleCheck2(e); setNotSecure('occupancyother')}}
                  />
                  <label htmlFor="occupancy-other">Other</label>
                  &nbsp;
                </span>
            </div>
            {
              notSecure === 'direct contact' &&(
                  <div style={{color:"darkblue", background:"white", paddingLeft: "15%" }} className="a">
                  <div><b>Spoke With:<font style={{color:"red"}}>*</font></b></div>
                  <span>
                  <input
                    id="spokewith-mortgagor"
                    name="mortgagor"
                    type="radio"
                    value="mortgagor"
                    onChange={() => setNotSecure('mortgagor')}
                  />
                  <label htmlFor="spokewith-mortgagor">Mortgagor</label>
                  &nbsp;
                </span>
                <span>
                  <input
                    id="spokewith-neighbor"
                    name="neighbor"
                    type="radio"
                    value="neighbor"
                    onChange={() => setNotSecure('neighbor')}
                  />
                  <label htmlFor="spokewith-neighbor">Neighbor</label>
                  &nbsp;
                </span>
                <span>
                  <input
                    id="spokewith-relative"
                    name="relative"
                    type="radio"
                    value="relative"
                  />
                  <label htmlFor="spokewith-relative">Relative</label>
                  &nbsp;
                </span>
                <span>
                  <input
                    id="spokewith-tenant"
                    name="tenant"
                    type="radio"
                    value="tenant"
                    onChange={() => setNotSecure('tenant')}
                  />
                  <label htmlFor="spokewith-tenant">Tenant</label>
                  &nbsp;
                </span>
                <span>
                  <input
                    id="spokewith-postman"
                    name="postman"
                    type="radio"
                    value="postman"
                  />
                  <label htmlFor="spokewith-postman">Postman</label>
                  &nbsp;
                </span>
                <span>
                  <input
                    id="spokewith-other"
                    name="other"
                    type="radio"
                    value="other"
                  />
                  <label htmlFor="spokewith-other">Other</label>
                  &nbsp;
                </span>
                  </div>
              )
            }
            {
              notSecure === 'mortgagor' &&(
                  <div style={{color:"darkblue", background:"white", paddingLeft: "15%" }} className="a">
                  <div><b>Specify Person Details:</b></div>
                  <br></br>
                  <label htmlFor="mortgagor-details">Name<font style={{color:"red"}}>*</font></label>
                  <span>
                  <input
                    id="mortgagor-details"
                    name="details"
                    type="text"
                  />
                  &nbsp;
                  </span>
                  <label htmlFor="mortgagor-details">Address<font style={{color:"red"}}>*</font></label>
                  <span>
                  <input
                    id="mortgagor-details"
                    name="details"
                    type="text"
                  />
                  &nbsp;
                  </span>
                  <label htmlFor="mortgagor-details">Phone Number<font style={{color:"red"}}>*</font></label>
                  <span>
                  <input
                    id="mortgagor-details"
                    name="details"
                    type="text"
                  />
                  &nbsp;
                  </span>
                  <label htmlFor="mortgagor-details">Attitude<font style={{color:"red"}}>*</font></label>
                  <span>
                  <input
                    id="mortgagor-details"
                    name="details"
                    type="text"
                  />
                  &nbsp;
                  </span>
                  </div>
              )
            }
            {
              notSecure === 'neighbor' &&(
                  <div style={{color:"darkblue", background:"white", paddingLeft: "15%" }} className="a">
                  <div><b>Specify Person Details:</b></div>
                  <br></br>
                  <label htmlFor="mortgagor-details">Name<font style={{color:"red"}}>*</font></label>
                  <span>
                  <input
                    id="mortgagor-details"
                    name="details"
                    type="text"
                  />
                  &nbsp;
                  </span>
                  <label htmlFor="mortgagor-details">Address<font style={{color:"red"}}>*</font></label>
                  <span>
                  <input
                    id="mortgagor-details"
                    name="details"
                    type="text"
                  />
                  &nbsp;
                  </span>
                  <label htmlFor="mortgagor-details">Phone Number<font style={{color:"red"}}>*</font></label>
                  <span>
                  <input
                    id="mortgagor-details"
                    name="details"
                    type="text"
                  />
                  &nbsp;
                  </span>
                  <label htmlFor="mortgagor-details">Attitude<font style={{color:"red"}}>*</font></label>
                  <span>
                  <input
                    id="mortgagor-details"
                    name="details"
                    type="text"
                  />
                  &nbsp;
                  </span>
                  </div>
              )
            }
            {
              notSecure === 'tenant' &&(
                  <div style={{color:"darkblue", background:"white", paddingLeft: "15%" }} className="a">
                  <div><b>Specify Person Details:</b></div>
                  <br></br>
                  <label htmlFor="mortgagor-details">Name<font style={{color:"red"}}>*</font></label>
                  <span>
                  <input
                    id="mortgagor-details"
                    name="details"
                    type="text"
                  />
                  &nbsp;
                  </span>
                  <label htmlFor="mortgagor-details">Address<font style={{color:"red"}}>*</font></label>
                  <span>
                  <input
                    id="mortgagor-details"
                    name="details"
                    type="text"
                  />
                  &nbsp;
                  </span>
                  <label htmlFor="mortgagor-details">Phone Number<font style={{color:"red"}}>*</font></label>
                  <span>
                  <input
                    id="mortgagor-details"
                    name="details"
                    type="text"
                  />
                  &nbsp;
                  </span>
                  <label htmlFor="mortgagor-details">Attitude<font style={{color:"red"}}>*</font></label>
                  <span>
                  <input
                    id="mortgagor-details"
                    name="details"
                    type="text"
                  />
                  &nbsp;
                  </span>
                  </div>
              )
            }
            {
              notSecure === 'visual' &&(
                  <div style={{color:"darkblue", background:"white", paddingLeft: "15%" }} className="a">
                  <div><b>Visual</b></div>
                  <span>
                  <input
                    id="visual-furniture"
                    name="visual"
                    type="checkbox"
                    value="furniture"
                  />
                  <label htmlFor="visual-furniture">Furniture</label>
                  &nbsp;&nbsp;
                </span>
                <span>
                  <input
                    id="visual-people"
                    name="visual"
                    type="checkbox"
                    value="people"
                  />
                  <label htmlFor="visual-people">People</label>
                  &nbsp;&nbsp;
                </span>
                <span>
                  <input
                    id="visual-animals"
                    name="visual"
                    type="checkbox"
                    value="animals"
                  />
                  <label htmlFor="visual-animals">Animals</label>
                  &nbsp;&nbsp;
                </span>
                <span>
                  <input
                    id="visual-lawn"
                    name="visual"
                    type="checkbox"
                    value="lawn"
                  />
                  <label htmlFor="notsecure-other">Lawn</label>
                  &nbsp;&nbsp;
                </span>
                <span>
                  <input
                    id="visual-car"
                    name="visual"
                    type="checkbox"
                    value="car"
                  />
                  <label htmlFor="visual-car">Car</label>
                  &nbsp;&nbsp;
                </span>
                <span>
                  <input
                    id="visual-other"
                    name="visual"
                    type="checkbox"
                    value="visualother"
                    onChange={() => setNotSecure('visualother')}
                  />
                  <label htmlFor="visual-other">Other</label>
                  &nbsp;&nbsp;
                </span>
                <span>
                  <input
                    id="visual-decorations"
                    name="visual"
                    type="checkbox"
                    value="decorations"
                  />
                  <label htmlFor="visual-decorations">Decorations</label>
                  &nbsp;&nbsp;
                </span>
                  </div>
              )
            }
            {
              notSecure === 'occupancyother' &&(
                  <div style={{color:"darkblue", background:"white", paddingLeft: "15%" }} className="a">
                  <div><b>Specify Other</b></div>
                  <span>
                  <label htmlFor="notsecure-other">Specify Other<font style={{color:"red"}}>*</font></label>
                  <input
                    id="notsecure-other"
                    name="other"
                    type="text"
                    placeholder="specify other"
                  />
                  </span>
                  </div>
              )
            }
            {
              notSecure === 'visualother' &&(
                  <div style={{color:"darkblue", background:"white", paddingLeft: "15%" }} className="a">
                  <div><b>Specify Other</b></div>
                  <span>
                  <label htmlFor="notsecure-other">Specify Other<font style={{color:"red"}}>*</font></label>
                  <input
                    id="notsecure-other"
                    name="other"
                    type="text"
                    placeholder="specify other"
                  />
                  </span>
                  </div>
              )
            }
      <div
        className="footer"
        style={{
          paddingTop: "40px",
          paddingLeft: "600px"
        }}
      >
        <div>
          <button onClick={saveOccupancy} className="btn">Submit</button>
        </div>
        <div>
          <button onClick={resetRadioState} className="btn">Reset</button>
        </div>
      </div>
    </div>
  );
};

export default OccupancyIs;
