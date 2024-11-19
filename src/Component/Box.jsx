import "../css/Box.css"



const Box = ({heading,digit,sign}) =>{
    return(<div className="box-main-container">
      <h3 className="h1-box">{heading}</h3>
      <div className="total-box"><h3 className="total-text">Total :</h3> <div className="digit-box"> {sign?<span style={{marginRight:"5px;"}}>&#8377;</span>:""}{digit}</div></div>
    </div>)
}


export default Box;