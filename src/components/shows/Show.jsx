import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./show.css";
import { NavLink, useParams } from 'react-router-dom';
const Show = () => {

  const [shows, setShows] = useState([])
  const [rat, setRat] = useState(0)
  const [loading, setLoading] = useState(true)
  const {id} = useParams();
  console.log(id,"param----")

  const show = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`https://api.tvmaze.com/shows/${id}`)
      if (res.status == 200) {
        setShows(res.data)
        setRat( res.data.rating.average == null ?  0: Math.floor(res.data.rating.average)/2)
        console.log(res.data,"ooooooooo")
        setLoading(false);
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    show();
  }, []);
  
  return (
    <>
    {loading?
      <section className="main">
    <div className="bg-item">
      <header>
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <a className="navbar-brand" href="#"> TV Bland </a>
          </div>
        </nav>
      </header>

      <div className="product-summary">
        <div className="container">
          <div className="row g-50">
            <div className="col-12 col-sm-auto">
              <img src="img/product-placeholder.png" alt="Prduct" className="img-fluid"/>
            </div>
            <div className="col-12 col-sm-8">
              <div className="stars">
                <i className="fa fa-star"> </i>
                <i className="fa fa-star"> </i>
                <i className="fa fa-star"> </i>
                <i className="fa fa-star"> </i>
                <i className="fa fa-star light"> </i>
                <span className="avg-star"> 4.2/5 </span>
              </div>
              <div className="product-info">
                <div className="h1 product-title"> This is the title of the TV show
                  which is very long isn't it
                </div>
                <p className="desc product-desc"> Hinc ille commotus ut iniusta perferens et indigna praefecti custodiam
                  protectoribus mandaverat fidis. quo conperto Montius tunc quaestor acer
                  quidem sed ad lenitatem propensior, consulens in commune.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="product-detail">
      <div className="container">
        <div className="row gap-5 gap-md-0">
          <div className="col-12 col-md-6">
            <h4>Show Info </h4>
            <div className="specs info row row-cols-2 row-cols-md-1 g-4 g-md-0">
              <div className="col">
                <div className="row tr">
                  <div className="col-12 col-md-4 title"> Streamed on </div>
                  <div className="col-12 col-md-8 detail"> BBC Three </div>
                </div>
              </div>
              <div className="col">
                <div className="row tr">
                  <div className="col-12 col-md-4 title"> Schedule </div>
                  <div className="col-12 col-md-8 detail"> Tuesdays </div>
                </div>
              </div>
              <div className="col">
                <div className="row tr">
                  <div className="col-12 col-md-4 title"> Status </div>
                  <div className="col-12 col-md-8 detail"> Running </div>
                </div>
              </div>
              <div className="col">
                <div className="row tr">
                  <div className="col-12 col-md-4 title"> Genres </div>
                  <div className="col-12 col-md-8 detail"> Drama, Comedy, Music </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <h4>Staring </h4>
            <div className="specs staring d-flex flex-column gap-3 gap-md-0">

              <div className="tr">
                <div className="avtar"> <img src="img/profile.png" alt="" className="avtar-img"/> </div>
                <div className="content w-100">
                  <div className="title"> Victoria Alcock </div>
                  <div className="detail"> Carol </div>
                </div>
              </div>


              <div className="tr">
                <div className="avtar"> <img src="img/profile.png" alt="" className="avtar-img"/> </div>
                <div className="content w-100">
                  <div className="title"> Hugo Chegwin </div>
                  <div className="detail"> Beats </div>
                </div>
              </div>


              <div className="tr">
                <div className="avtar"> <img src="img/profile.png" alt="" className="avtar-img"/> </div>
                <div className="content w-100">
                  <div className="title"> Allan Mustafa </div>
                  <div className="detail"> Grindah </div>

                </div>
              </div>


              <div className="tr">
                <div className="avtar"> <img src="img/profile.png" alt="" className="avtar-img"/> </div>
                <div className="content w-100">
                  <div className="title"> Daniel Sylvester Woolford </div>
                  <div className="detail"> Decoy </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>


    <footer className="p-5"> </footer>
  </section>
  :
  <section className="main">
    <div className="bg-item">
      <header>
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <NavLink className="navbar-brand" to="/"> TV Bland </NavLink>
          </div>
        </nav>
      </header>

      <div className="product-summary">
        <div className="container">
          <div className="row g-50">
            <div className="col-12 col-md-5 col-xl-3">
              <img src={shows.image.original} alt="Prduct" className="img-fluid"/>
            </div>
            <div className="col-12 col-md-7 col-xl-8">
              <div className="stars">
              {Array.apply(null, {length: rat}).map((s, i) => {
                          console.log("rat")
                          return (<i className="fa fa-star" key={i + "hd"}></i>);
                        })}
                        {Array.apply(null, {length: (5-rat)}).map((s, i) => {
                          return (<i className="fa fa-star light" key={i + "dd"}></i>);
                        })}
                <span className="avg-star">{rat == 0?"0/5":`${rat}/5` }</span>
              </div>
              <div className="product-info">
                <div className="h1 product-title">{shows.name}
                </div>
                <p className="desc product-desc"> Hinc ille commotus ut iniusta perferens et indigna praefecti custodiam
                  protectoribus mandaverat fidis. quo conperto Montius tunc quaestor acer
                  quidem sed ad lenitatem propensior, consulens in commune.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="product-detail">
      <div className="container">
        <div className="row gap-5 gap-md-0">
          <div className="col-12 col-md-6">
            <h4>Show Info </h4>
            <div className="specs info row row-cols-2 row-cols-md-1 g-4 g-md-0">
              <div className="col">
                <div className="row tr">
                  <div className="col-12 col-md-4 title"> Streamed on </div>
                  <div className="col-12 col-md-8 detail"> {shows.network.name} </div>
                </div>
              </div>
              <div className="col">
                <div className="row tr">
                  <div className="col-12 col-md-4 title"> Schedule </div>
                  <div className="col-12 col-md-8 detail"> {shows.schedule.days.join(" ")}</div>
                </div>
              </div>
              <div className="col">
                <div className="row tr">
                  <div className="col-12 col-md-4 title"> Status </div>
                  <div className="col-12 col-md-8 detail"> {shows.status }</div>
                </div>
              </div>
              <div className="col">
                <div className="row tr">
                  <div className="col-12 col-md-4 title"> Genres </div>
                  <div className="col-12 col-md-8 detail"> {shows.genres.join(" ")} </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <h4>Staring </h4>
            <div className="specs staring d-flex flex-column gap-3 gap-md-0">

              <div className="tr">
                <div className="avtar"> <img src="img/profile.png" alt="" className="avtar-img"/> </div>
                <div className="content w-100">
                  <div className="title"> Victoria Alcock </div>
                  <div className="detail"> Carol </div>
                </div>
              </div>


              <div className="tr">
                <div className="avtar"> <img src="img/profile.png" alt="" className="avtar-img"/> </div>
                <div className="content w-100">
                  <div className="title"> Hugo Chegwin </div>
                  <div className="detail"> Beats </div>
                </div>
              </div>


              <div className="tr">
                <div className="avtar"> <img src="img/profile.png" alt="" className="avtar-img"/> </div>
                <div className="content w-100">
                  <div className="title"> Allan Mustafa </div>
                  <div className="detail"> Grindah </div>

                </div>
              </div>


              <div className="tr">
                <div className="avtar"> <img src="img/profile.png" alt="" className="avtar-img"/> </div>
                <div className="content w-100">
                  <div className="title"> Daniel Sylvester Woolford </div>
                  <div className="detail"> Decoy </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>


    <footer className="p-5"> </footer>
  </section>
  }
  </>
  )
}

export default Show