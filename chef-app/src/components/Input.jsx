import addicon from "../assets/images/plus-sign.png"


function Submit(e){
    e.preventDefault()
    const Formdata = new FormData(e.currentTarget)
    const newitem = Formdata.get("ingridient")
    console.log(newitem);
}
export function InputText(){
    return(
        <form className="input-div" onSubmit={Submit}>
            <input type="text" placeholder="e.g. pepper" name="ingridient"/>
            <button className="add-btn">
                <img src={addicon} alt="add-icon" className="add-icon"/>
                <span>add ingridient</span>
            </button>
        </form>
    )
}