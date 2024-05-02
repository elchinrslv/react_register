import React from 'react'
import '../ClientCard/ClientCard.css'
const ClientCard = ({name,phone,card}) => {
    const isAllTrue = name && phone && card
    const isnotCard = name && phone && (!card)
    const style = {
        width: "18rem", 
        backgroundColor : isAllTrue?'gray':isnotCard? 'yellow':'red' }
    return (
        <>        <div className="card" style={style}>
            
          <div className="card-body">
                      <h5 className="card-title">Имя клиента: {name || "Anonimous"} </h5>
                      {phone &&

            (<h6 className="card-subtitle mb-2 text-muted">Телефон: {phone}</h6>)}
            <p className="card-text">Номер карты: { card || "Card is not specified"}</p> 
          </div>
        </div>
        </>

      )
} 

export default ClientCard