import React, {Component} from 'react';
import { useState, useEffect } from 'react';
import Create from './Create'
import styles from './Center.module.css';
import View from './View'


const memoList = [];

function Center(){
    let lis = [];
    useEffect(()=>{
        
        for(let i = 0 ;  i < localStorage.length ; i++){

            const key = localStorage.key(i);
            lis.push(JSON.parse(localStorage.getItem(key)))
          
        }
        
    })

    
    const [memoList, setMemoList] = useState(lis)
    
   // console.log(memo);
    console.log("list는")
    console.log(memoList)
    return(
        <div className={styles.center}>
            <Create  memoList={memoList} setMemoList={setMemoList}/>
            <View memoList={memoList} setMemoList={setMemoList}/>            
        </div>
        
    );
}

export default Center