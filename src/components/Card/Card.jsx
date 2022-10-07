import "./Card.css"
const Card = ({ quote, getAdvice }) => {
  return (
    <div className='card'>
      <h5 className='quote-title'>Advice #{quote.id}</h5>
      <div className='quote'>
        <blockquote>{quote.advice}</blockquote>
      </div>
      <div className='separator'>
        <hr />
        <div className='vertical'></div>
        <div className='vertical'></div>
        <hr />
      </div>

      <div className='dice-button'>
        <button onClick={getAdvice}>Dado</button>
      </div>
    </div>
  )
}

export { Card }
