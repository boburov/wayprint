import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Card from './components/Card'
import tshirt from './images/Untitled design (1).png'

const page = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <Header />
      <Hero />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="grid grid-cols-4 container">
        <Card title="Naruto fudbolka" rate={5} amout={1000000} image={tshirt} />
      </div><br />
      <br />
    </div>
  )
}

export default page