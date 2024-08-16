import React from 'react';
import { Image } from 'antd';
import styles from './News.module.css';
const News = (props) => {
const  {company} = props;
    console.log(styles);
    return (<div className={styles.NewsContainer}>
             <div className={styles.NewsContent}>
                <h1>Who is the prime minister of India?</h1>
                <p> Modi is the prime minister of India.Modi is the prime minister of India
                    Modi is the prime minister of India
                    Modi is the prime minister of India
                    Modi is the prime minister of India
                    Modi is the prime minister of India
                    Modi is the prime minister of India
                    Modi is the prime minister of India

                </p>
             </div>
           </div>)

}
export default News;