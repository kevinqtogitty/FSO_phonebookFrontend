import phonebookServices from "./services/phonebookServices";
import React from "react";

const confirm = (id) => {
    const element = document.getElementById(`${id}`)

   new Promise((resolve) => {  
        if (window.confirm('you sure?') == true) {
            resolve(phonebookServices.deleteFromPhonbook(id).then(element.remove()))
        }
    })
    
}

export default {confirm}