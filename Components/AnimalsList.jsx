const React = require('react');
const Layout = require('./Layout');
const AnimalCard = require('./AnimalCard');
const Form = require('./Form');

module.exports = function AnimalsList ({title,animals,user}) {
  return (
    <Layout title={title} user={user}>
      <Form/>
 <div className="list animalList">
    {animals.map(animal=><AnimalCard animal={animal} key={animal.id}/>)}
</div>
    </Layout>
    
  )
}

