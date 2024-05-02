import React from 'react'
import '../Feedback/Feedback.css'
const Feedback = () => {
    const clickedForm=()=>{
        alert('müvəffəqiyyətli göndərilmə !')
        const conSss = (e)=>{
                console.log(e.target)
        }
    }
  return (
 
        <form action="" id='form' onSubmit={clickedForm}>
            <label htmlFor="name">Ad</label>
            <input type="text" name="" id="name" onInput={conSss } placeholder='adınızı daxil edin...' />
            <label htmlFor="lastame">Soyad</label>
            <input type="text" name="" id="lastname" onInput={conSss } placeholder='Soyadınızı daxil edin...' />
            <label htmlFor="phone">Telefon nömrəsi</label>
            <input type="text" name="" id="phone" onInput={conSss } placeholder='nömrənizi daaxil edin...' />
            <label htmlFor="email">E-mail</label>
            <input type="email" name="" id="email" onInput={conSss } placeholder='mail daxil edin..' />
            <label htmlFor="area">Şərh</label>
            <textarea name="" id="area" cols="30" rows="10" onInput={conSss } placeholder='Qeydlərinizi daxil edin...'></textarea>
            <button type='submit'>Gonder</button>
        </form>    
  )
}

export default Feedback