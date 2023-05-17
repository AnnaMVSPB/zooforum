const React = require('react');
const Layout = require('./Layout');

module.exports = function Main ({title,user}) {
  return (
    <Layout title={title} user={user} >
    <div className='main'>
<h1 className='mainH1'>НА НАШЕМ САЙТЕ ВЫ МОЖЕТЕ ПОДЕЛИТЬСЯ ФОТОГРАФИЯМИ СВОИХ ЛЮБИМЫХ ПИТОМЦЕВ</h1>
  </div>
  </Layout>
  )
}