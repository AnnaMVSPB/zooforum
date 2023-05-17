const React = require('react');

const Form = () => {
  return (
    <div className='formAdd'>
        <form action='/animals' method='POST' id='formAdd' className='formAdd'>
            <input name='name' required placeholder='name'/>
            <input  name='url' required placeholder='url'/>
            <input name='description' required placeholder='description'/>
            <button  className='buttonAdd' type='submit'>сохранить</button>
        </form>
    </div>
  )
}

module.exports = Form