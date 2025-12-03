import addicon from "../assets/images/plus-sign.png"
export function InputText(){
    return(
        <div className="input-div">
            <input type="text" placeholder="e.g. pepper"/>
            <button className="add-btn"><img src={addicon} alt="add-icon" className="add-icon"/><span>add ingridient</span></button>
        </div>
    )
}