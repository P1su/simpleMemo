import React, {Component, useEffect} from 'react';
import { useState} from 'react';
import styles from './View.module.css'
import { MdDeleteOutline } from "react-icons/md";

function Memo(props){
    const [state, setState] = useState(true)
    //console.log(props._key)

    const handleDelete=()=>{
       // console.log(props._key)

        for(const key in localStorage){
            if(key === props._key){
                alert('삭제')
                localStorage.removeItem(key)

                const flag = false
                setState(flag)
    
            }
        }

        

    }

    return(
        <article key = {props._key} className ={styles.memo} >
                <p className={styles.top}>{props.title}    
                <button  className={styles.btn} onClick={()=>handleDelete()}  >{<MdDeleteOutline style={{ size:20, color:"#415a77"}}/>}
                </button></p>
                <p className={styles.body}>{props.body}</p>
                <p className={styles.date}>{props._key}</p>
            
        </article>
    )
}


function View(props){

    
    let lis = []
    
    for(let i = 0 ;  i < localStorage.length ; i++){
        const key = localStorage.key(i);
        const title = JSON.parse(localStorage.getItem(key))._title
        const body = JSON.parse(localStorage.getItem(key))._body

        lis.push(

            <Memo _key = {key} title = {title} body={body}></Memo>

            
        )
    }

    lis.sort((a,b) => b.key - a.key);
    


    return(
        <div className={styles.view}>   
            <ul>
                {lis}
            </ul>


        </div>
    )
}

export default View