import {useNavigate} from 'react-router-dom'

import '../styles/Responsive320px.css'
import '../styles/Pages.css'
export default function LatestIndiPOP() {
  const navigate = useNavigate()
  return (
    <div className="IP"> 
     <nav className="navbar bg-body-tertiary">
        <div className="Navbar">
          <button className="Mainpage" data-back="Go Back" data-front="IndiPOP" onClick={() => navigate('/About')}>
            

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
    </div> 
  )
}
