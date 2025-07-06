/* single selection accordian */
/* multiple selection accordian */

import { useState } from "react"
import data from "./data";
import "./style.css"

export default function Accordian() {
    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multipleSelectedIds, setMultipleSelectedIds] = useState([]);

    /* handleSingleSelection(dataItem.id) immediately invokes the function and assigns its return value 
    (which is undefined) to onClick.

() => handleSingleSelection(dataItem.id) defines a function that will call handleSingleSelection only when 
 the div is clicked. */
    function handleSingleSelection(currentId) {
        /* this method used for 2 things: both for showing content first click second continous click
        hides content */
        /* below means:currentId & selected both are equal then means already content shown so show null
        or else means content not shown so we set setSelected as  currentId */
        setSelected(currentId === selected ? null : currentId);
    };

    /* 
    below is toggling set true if false, set false if it's true
    onClick={()=> setEnableMultiSelection(!enableMultiSelection)}
    */

/* ------------ */
    /* below method called if enableMultiSelection is true or else handleSingleSelection called */
/* handle: first item clicked shown second itme clicked shown first
item clicked again hide first item so need to remove from array */
    function handleMultipleSelection(currentId) {
        let cpyMultiple = [...multipleSelectedIds];
        setMultipleSelectedIds(currentId);
        // console.log(cpyMultiple);
        const findIndexOfCurrentId = cpyMultiple.indexOf(currentId);
        if(findIndexOfCurrentId == -1){
            cpyMultiple.push(currentId);
        }
        else{
            cpyMultiple.splice(findIndexOfCurrentId,1);
        }

        setMultipleSelectedIds(cpyMultiple);
    }

    console.log(selected, multipleSelectedIds);

    return <div className="wrapper">
        <button
            onClick={() => setEnableMultiSelection(!enableMultiSelection)}>Enable Multi Selection</button>
        <div className="accordian">
            {
                data && data.length > 0 ?
                    (
                        data.map((dataItem) => (
                            <div key={dataItem.id} className="item">
                                <div onClick={
                                    enableMultiSelection 
                                    ? () => handleMultipleSelection(dataItem.id) 
                                    : () => handleSingleSelection(dataItem.id)} 
                                    className="title">
                                    <h3>{dataItem.question}</h3>
                                    <span >+</span>
                                </div>
                                {/* what is below logic: if enableMultiSelection true then show data
                                from multipleSelectedIds list checking in list if current id is present if current
                                id not present it returns -1 that's why checking not equal to -1
                                else if enableMultiSelection is false
                                then show data from selected id which is single selection */}
                                {
                                    enableMultiSelection ?
                                        multipleSelectedIds.indexOf(dataItem.id) !== -1  &&
                                      (  <div className="content">{dataItem.answer} </div> )
                                   : selected === dataItem.id &&
                                        (  <div className="content">{dataItem.answer} </div> )
                                }

                                {/* {
                                    selected === dataItem.id || multipleSelectedIds.indexOf(dataItem.id) !== -1
                                     ?
                                        (<div className="content">{dataItem.answer} </div>)
                                        :
                                        null
                                } */}
                            </div>
                        )
                        )
                    )
                    : (<div>No data present </div>)
            }
        </div>
    </div>
}