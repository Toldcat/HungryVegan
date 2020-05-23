import React, { useEffect, useState } from 'react'
import Slider from 'infinite-react-carousel'
import Card from './Card'
import OptionModal from './OptionModal'

const Roulette = (props) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [modalPick, setModalPick] = useState({})

  useEffect(() => {
    document.addEventListener('click', () => {
      setModalIsOpen(true)
    })

    async function fetchData() {
      setIsLoading(true)
      const proxyurl = 'https://my-cors-anywhere-copy.herokuapp.com/'
      const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${process.env.REACT_APP_MAPS_API_KEY}&keyword=vegan&type=restaurant&location=${props.location.geoProps.lat},${props.location.geoProps.lng}&radius=2500`
      const response = await fetch(proxyurl + url, { mode: 'cors' })

      if (response.status === 200) {
        const res = await response.json()
        const modalCalc = Math.floor(
          Math.random() * Math.floor(res.results.length - 1)
        )
        setData(res.results)
        setModalPick(res.results[modalCalc])
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
      <p className='fetch__subtitle fetch__icon'>🍕</p>
    </div>
  ) : (
    <div className='roulette'>
      <h1 className='roulette__heading'>Click anywhere to choose randomly!</h1>
      <Slider
        autoplay={true}
        autoplaySpeed={900}
        duration={100}
        arrows={false}
        pauseOnHover={false}
        adaptiveHeight={true}
        swipe={false}
      >
        {data.map((item) => {
          //add a random placeholder image to each item
          item.picNum = Math.floor(Math.random() * Math.floor(9))
          return <Card key={String(data[item])} item={item} />
        })}
      </Slider>
      <OptionModal modalIsOpen={modalIsOpen} modalPick={modalPick} />
    </div>
  )
}

export default Roulette
