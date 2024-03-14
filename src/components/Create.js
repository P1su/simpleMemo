import { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import React, {Component} from 'react';
import View from './View'
import styles from './Create.module.css'
import { FaCheck } from "react-icons/fa6";

function Create(props){
    


    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
  //  const [id, setId] = useState();
    
    const currentDate = dayjs();
    const formattedDate = currentDate.format('YYYY-MM-DD HH:mm:ss');
  //  console.log(id);
    return(
        
        <div className= {styles.create}>

            <form className={styles.form} onSubmit={event =>{
                event.preventDefault();

                const newMemo ={ _title: title, _body: body, _date:formattedDate};
                props.memoList.push(newMemo);
                const newList = [...props.memoList];
                
          //     props.setMemo(newMemo);
                setTitle("");
                setBody("");
                props.setMemoList(newList);

                localStorage.setItem(formattedDate, JSON.stringify(newMemo));
              ///  const newId = id+1;
               // setId(newId);
            }}>
                <p>
                    <input type='text' placeholder='제목을 입력하세요' value = {title} onChange={ e=>setTitle(e.target.value)}
                    className={styles.title}></input>
                    <button type='submit' className={styles.btn}>{<FaCheck style={{color:"#415a77"}}/>}</button>
                </p>
                <textarea placeholder='내용을 입력하세요' value = {body} onChange={ e=>setBody(e.target.value)}
                className={styles.body}></textarea>
                
            </form>

        </div>


    )
}

export default Create