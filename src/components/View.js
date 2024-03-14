import React, {Component, useEffect} from 'react';
import { useState} from 'react';
import styles from './View.module.css'
import { MdDeleteOutline } from "react-icons/md";

function Memo(props){

    const handleDelete=()=>{
        console.log('눌림')

        for(let i = 0 ; i < props.memoList.length ; i++){
            console.log(localStorage.key(i) )
            console.log(props.memoList[i]._date)
            
            if(localStorage.key(i) === props.memoList[i]._date){
                console.log(localStorage.key(i) == props.memoList[i]._date)
                alert('삭제!');
                localStorage.removeItem(localStorage.key(i));

                props.memoList.splice(i,1);
                const newList = [...props.memoList];
                props.setMemoList(newList);
                console.log(newList)
            }
        }

        

    }

    return(
        <article key = {1} className ={styles.memo} >
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
            
            <Memo key = {key} title = {title} body={body}
            memoList = {props.memoList} setMemoList={props.setMemoList}
            ></Memo>

            
        )
    }

    lis.sort(function (a,b){
        console.log(b.key)
        console.log(a.key)
        return b.key-a.key;
    });


    return(
        <div className={styles.view}>   
            <ul>
                {lis}
            </ul>


        </div>
    )
}

export default View