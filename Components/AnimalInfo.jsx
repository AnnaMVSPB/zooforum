const React = require('react');
const Layout = require('./Layout');

module.exports = function AnimalInfo ({animal,title}) {

  return (
    <Layout title={title}>
    <div className="card" style={{width: "25rem"}}>
    <img src={animal.url} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{animal.name}</h5>
      <p className="card-text">{animal.description}</p>
      <p>хозяин {animal.User.name} из города {animal.User.city}</p>
    </div>
    <div>
        {animal.Comments.map(comment=> <p className="card-text" key={comment.id}>{comment.title}</p>)}
    </div>
  </div>
  </Layout>
  )
}
