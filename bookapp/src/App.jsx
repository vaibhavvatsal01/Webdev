import React from 'react'
import Book from './Components/Book'
import './App.css'
import Navbar from './Components/Navbar'
function App() {
  return (
    <div>
      <div><Navbar /></div>
      <div id='adi'>
        <Book Title="math" price="250"/><br />
        <Book Title="physics" price="150"/><br />
        <Book Title="chemistry" price="350"/><br />
        {/* <Book Title="chemistry" price="350"/><br /> */}
      </div>
      </div>
  )
}

export default App