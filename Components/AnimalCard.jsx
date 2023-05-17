const React = require('react');

module.exports = function AnimalCard ({animal}) {
  return (
    <div className="animalCard"  data-id={animal.id}>
      <div className='imgDiv'>
    <img src={animal.url} className="card-img-top" alt="..."/>
    </div>
    <div><p className={`quantityLikes${animal.id}`}>{animal.Likes.length}</p>
    {animal.Likes.length > 0 
    ?
    <i class="bi bi-star-fill " ></i>
    :
    <i class="bi bi-star " ></i>
  }
    </div>
    <div className="card-body">
      <h5 className="card-title">{animal.name}</h5>
      <p className="card-text">{animal.description}</p>
      <p>хозяин {animal.User.name} из города {animal.User.city}</p>

     <div className='cardButton'> 
     <button><a href={`/animals/${animal.id}`} className="btn btn-primary">Go</a></button>
      <button type='button' className='deleteAnimal'>delete</button>
      </div>
    </div>
    <div></div>
  </div>
  )
}
