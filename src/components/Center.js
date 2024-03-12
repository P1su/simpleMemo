import React, {Component} from 'react';
import { useState, useEffect } from 'react';
import Create from './Create'
import styles from './Center.module.css';
import View from './View'


const memoList = [];

function Center(){

    const [memo, setMemo] = useState([]);
    
    console.log(memo);
    return(
        <div className={styles.center}>
            <Create memo = {memo} setMemo = {setMemo} memoList={memoList}/>
            <View memo = {memo} memoList = {memoList}/>            
        </div>
        
    );
}

export default Center