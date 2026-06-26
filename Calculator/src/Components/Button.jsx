import style from './Button.module.css'


const Button =({data})=>{
    return(
        <div className={style.buttoncontainer}>
        <div className={style.Button}>
        
         { data.map((item, rowidx)=>(
            <button key={item}>{item}</button>
         )
        )}
        </div>
        </div>
    )
}
export default Button;