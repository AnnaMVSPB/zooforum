const React = require('react');

module.exports = function Navbar ({user})  {
  console.log(user,'---------')
  return (
<nav className="navbar navbar-expand-lg bg-body-tertiary navbarDev">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
       {user &&  <p>{`Привет ${user.name}`}</p>}
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
       {
        user ? 
        <li className="nav-item">
          <a className="nav-link" href='/animals'>Animals</a>
        </li>
        :
        <li className="nav-item">
        <a className="nav-link" href='/auth/reg'>reg</a>
      </li>
       } 
      
      </ul>
    </div>
  </div>
</nav>
  )
}

