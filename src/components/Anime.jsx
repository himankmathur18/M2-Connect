// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import '../styles/Responsive320px.css'


import '../styles/Pages.css'
export default function Anime() {
  const [tracks, setTracks] = useState([])

  // const [playbar,setPlaybar] = useState([])

  const getTracks = async () => {

    let data = await fetch("https://v1.nocodeapi.com/kshitiz/spotify/kcSkWwpnbVVitQWz/search?q=anime&type=track")

    let convertedData =  await data.json()
    console.log(convertedData.tracks.item)
    setTracks(convertedData.tracks.items)
  }

  const navigate = useNavigate()
  return (
    <div className="Anime">
      <nav className="navbar bg-body-tertiary">
        <div className="Navbar">
          <button className="Mainpage" data-back="Go Back" data-front="Anime" onClick={() => navigate('/About')}>


          </button>

          <form className="d-flex" role="search">
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn-search" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
      <div className="Tracks1">
        {tracks.map((element) => {
          return (<div key={element.id} className="Tracks">

            <div className="card">
              <img src={element.album.images[0].url} className="card-img-top" alt="..." />


            </div>
            <div className="Playbar">
              <audio src={element.preview_url} controls ></audio>
            </div>
          </div>


          )

        }
        )}
      </div>
      <div>
        <button onClick={getTracks}> abc</button>
      </div>


    </div>
  )
}
