import React, {Component} from 'react';
import styles from './Head.module.css';

function Head(){
    return(
        <div className={styles.head}>
            <h1 style={{color: "black"}}>Simple Memo</h1>
        </div>
    );
}

export default Head