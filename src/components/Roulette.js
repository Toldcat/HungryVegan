import React, { useEffect, useState } from 'react'
import Slider from 'infinite-react-carousel'
import Card from './Card'

const Roulette = () => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true)
      const proxyurl = 'https://my-cors-anywhere-copy.herokuapp.com/'
      const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${process.env.REACT_APP_MAPS_API_KEY}&keyword=vegan&type=restaurant&location=51.460060,-0.213604&radius=4000`
      const response = await fetch(proxyurl + url, { mode: 'cors' })

      if (response.status === 200) {
        const res = await response.json()
        setData(res.results)
        setIsLoading(false)
      }
    }
    fetchData()
  }, [])

  return isLoading ? (
    <div className='fetch'>
      <h1 className='fetch__title'>
        Fetching the best places to eat around you
      </h1>
      <p className='fetch__subtitle'>Please wait just a moment...</p>
      <p className='fetch__subtitle'>🍕</p>
    </div>
  ) : (
    <div className='roulette'>
      <h1 className='roulette__heading'>Click anywhere to choose randomly!</h1>
      <Slider
        autoplay={true}
        autoplaySpeed={2000}
        duration={150}
        arrows={false}
        pauseOnHover={false}
        adaptiveHeight={true}
      >
        {data.map(item => {
          item.picNum = Math.floor(Math.random() * Math.floor(9))
          return <Card key={String(data[item])} item={item} />
        })}
      </Slider>
    </div>
  )
}

export default Roulette
