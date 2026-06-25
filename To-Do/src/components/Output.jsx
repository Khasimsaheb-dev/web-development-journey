 import style from './Output.module.css';
 
 
 
 const Output = ({jamal})=>{
    return(
        <>
        
        
              {jamal.map((item)=>(
                <div key={item} className={style.output}>
                    <h3>{item.date}</h3>
                    <h3>{item.id}</h3>
                    <button>Delete</button>
                </div>
              ))}
            
           
               
           

            </>
    );
 };
 export default Output;