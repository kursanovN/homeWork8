import './Input.css'

export const Input=({children})=>{
    return <>
    <label className='label'>{children}</label>
    <input className='input' type="text" />
    </>
}