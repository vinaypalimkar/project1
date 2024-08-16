import React from 'react';
import { Image } from 'antd';

const CompanyLogo = (props) => {
const  {company} = props;
    return (<div style={{display:'flex', width:'200px' ,alignItems:'center', justifyContent:'space-around' }}>
            <Image width={40} src={company.url} alt={company.name}/>
            <h2>{company.name}</h2>
           </div>)
}
export default CompanyLogo;