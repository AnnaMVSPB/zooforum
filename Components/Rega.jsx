const React = require('react');
const Layout = require('./Layout')

module.exports = function Rega ({title}) {
    return(
        <Layout title={title}>
        <div className='list'>
            <form className='regForm' method='POST' action='/api/auth/reg'>
                <input name="name" placeholder='name' required/>
                <input name="password" placeholder='password' required/>
                <input name="city" placeholder='city' required/>
                <button type="submit">save</button>
            </form>
            <h2 className='errReg'></h2>
        </div>
        </Layout>
    )
}