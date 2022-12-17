
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Pagination_new from '../pagination/Pagination_new'
import './schedules.css';
import { NavLink } from 'react-router-dom';
const Schedules = () => {
  const [current_page, setCurrent_page] = useState(1)
  const [paginationVal, setPaginationVal] = useState(1)
  const [shows, setShows] = useState([])
  const [showsPage, setShowsPage] = useState([])
  const [loading, setLoading] = useState(true)
  const perpage = 10;

  const changePage = (pages) => {
    setCurrent_page(pages);

  };

  const allSchedules = async () => {
    try {
      setLoading(true);
      const res = await axios.get("https://api.tvmaze.com/schedule")
      if (res.status == 200) {
        setShows(res.data)
        setShowsPage(res.data.slice(perpage*(current_page-1),perpage*(current_page-1)+perpage) )
        console.log(res.data)
        setPaginationVal(Math.ceil(res.data.length / perpage))
        setLoading(false);
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    allSchedules();
  }, []);
  useEffect(() => {
    setShowsPage(shows.slice(perpage*(current_page-1),perpage*(current_page-1)+perpage) )
  }, [current_page]);
  return (
    <section className="main">
      <div className="bg-item">
        <header>
          <nav className="navbar navbar-expand-lg">
            <div className="container">
              <a className="navbar-brand" href="#"> TV Bland </a>
            </div>
          </nav>
        </header>


        <div className="container main-desc ">
          <div className="row">
            <div className="col-md-9 col-sm-10 ">
              <h5 className="title">
                TV Show and web series database.<br />
                Create personalised schedules. Episode guide, cast, crew and
                character information.
              </h5>
            </div>
          </div>
        </div>
      </div>

      <div className="product-list">
        <div className="container">
          <h4 className="title sec-title">Last Added Shows</h4>
        </div>
        <div className="container gap-lg">

          <div className="row row-cols-2 row-cols-sm-3 row-cols-lg-4 row-cols-xl-6">
            {loading ? Array.apply(null, {length: perpage}).map((c, i) => {
              return (
                <div className="col " key={i + "ad"}>
                  <div className="inner">
                    <img src="img/product-placeholder.png" alt="Prduct" />
                    <div className="star-rating">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star light"></i>
                      <i className="fa fa-star light"></i>
                    </div>
                    <p className="product-name"> This is the title of the TV show which is very long isn't it</p>
                    <a className="stretched-link" href="product.html"></a>
                  </div>
                </div>
              )
            })
              :
              showsPage?.map((c, i) => {
                const { rating, name, image,id } = c.show
                const rat = rating.average == null ?  0: Math.floor(rating.average)/2;
                return (
                  <div className="col ">
                    <div className="inner">
                      <img src={image.original} alt="Prduct" />
                      <div className="star-rating">
                        {Array.apply(null, {length: rat}).map((s, i) => {
                          console.log("rat")
                          return (<i className="fa fa-star" key={i + "hd"}></i>);
                        })}
                        {Array.apply(null, {length: (5-rat)}).map((s, i) => {
                          return (<i className="fa fa-star light" key={i + "dd"}></i>);
                        })}
                      </div>
                      <p className="product-name">{name}</p>
                      <NavLink to={"/show/"+id} className="stretched-link" ></NavLink>
                    </div>
                  </div>
                )
              })
            }
            {/* <div className="col ">
              <div className="inner">
                <img src="img/product-placeholder.png" alt="Prduct" />
                <div className="star-rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star light"></i>
                  <i className="fa fa-star light"></i>
                </div>
                <p className="product-name"> This is the title of the TV show which is very long isn't it</p>
                <a className="stretched-link" href="product.html"></a>
              </div>
            </div>
            <div className="col ">
              <div className="inner">
                <img src="img/product-placeholder.png" alt="Prduct" />
                <div className="star-rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star light"></i>
                  <i className="fa fa-star light"></i>
                </div>
                <p className="product-name"> This is the title of the TV show which is very long isn't it</p>
                <a className="stretched-link" href="product.html"></a>
              </div>
            </div>
            <div className="col ">
              <div className="inner">
                <img src="img/product-placeholder.png" alt="Prduct" />
                <div className="star-rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star light"></i>
                  <i className="fa fa-star light"></i>
                </div>
                <p className="product-name"> This is the title of the TV show which is very long isn't it</p>
                <a className="stretched-link" href="product.html"></a>
              </div>
            </div>
            <div className="col ">
              <div className="inner">
                <img src="img/product-placeholder.png" alt="Prduct" />
                <div className="star-rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star light"></i>
                  <i className="fa fa-star light"></i>
                </div>
                <p className="product-name"> This is the title of the TV show which is very long isn't it</p>
                <a className="stretched-link" href="product.html"></a>
              </div>
            </div>
            <div className="col ">
              <div className="inner">
                <img src="img/product-placeholder.png" alt="Prduct" />
                <div className="star-rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star light"></i>
                  <i className="fa fa-star light"></i>
                </div>
                <p className="product-name"> This is the title of the TV show which is very long isn't it</p>
                <a className="stretched-link" href="product.html"></a>
              </div>
            </div>
            <div className="col ">
              <div className="inner">
                <img src="img/product-placeholder.png" alt="Prduct" />
                <div className="star-rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star light"></i>
                  <i className="fa fa-star light"></i>
                </div>
                <p className="product-name"> This is the title of the TV show which is very long isn't it</p>
                <a className="stretched-link" href="product.html"></a>
              </div>
            </div>
            <div className="col ">
              <div className="inner">
                <img src="img/product-placeholder.png" alt="Prduct" />
                <div className="star-rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star light"></i>
                  <i className="fa fa-star light"></i>
                </div>
                <p className="product-name"> This is the title of the TV show which is very long isn't it</p>
                <a className="stretched-link" href="product.html"></a>
              </div>
            </div>
            <div className="col ">
              <div className="inner">
                <img src="img/product-placeholder.png" alt="Prduct" />
                <div className="star-rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star light"></i>
                  <i className="fa fa-star light"></i>
                </div>
                <p className="product-name"> This is the title of the TV show which is very long isn't it</p>
                <a className="stretched-link" href="product.html"></a>
              </div>
            </div>
            <div className="col ">
              <div className="inner">
                <img src="img/product-placeholder.png" alt="Prduct" />
                <div className="star-rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star light"></i>
                  <i className="fa fa-star light"></i>
                </div>
                <p className="product-name"> This is the title of the TV show which is very long isn't it</p>
                <a className="stretched-link" href="product.html"></a>
              </div>
            </div>
            <div className="col ">
              <div className="inner">
                <img src="img/product-placeholder.png" alt="Prduct" />
                <div className="star-rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star light"></i>
                  <i className="fa fa-star light"></i>
                </div>
                <p className="product-name"> This is the title of the TV show which is very long isn't it</p>
                <a className="stretched-link" href="product.html"></a>
              </div>
            </div>
            <div className="col ">
              <div className="inner">
                <img src="img/product-placeholder.png" alt="Prduct" />
                <div className="star-rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star light"></i>
                  <i className="fa fa-star light"></i>
                </div>
                <p className="product-name"> This is the title of the TV show which is very long isn't it</p>
                <a className="stretched-link" href="product.html"></a>
              </div>
            </div>
            <div className="col ">
              <div className="inner">
                <img src="img/product-placeholder.png" alt="Prduct" />
                <div className="star-rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star light"></i>
                  <i className="fa fa-star light"></i>
                </div>
                <p className="product-name"> This is the title of the TV show which is very long isn't it</p>
                <a className="stretched-link" href="product.html"></a>
              </div>
            </div>
            <div className="col ">
              <div className="inner">
                <img src="img/product-placeholder.png" alt="Prduct" />
                <div className="star-rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star light"></i>
                  <i className="fa fa-star light"></i>
                </div>
                <p className="product-name"> This is the title of the TV show which is very long isn't it</p>
                <a className="stretched-link" href="product.html"></a>
              </div>
            </div>
            <div className="col ">
              <div className="inner">
                <img src="img/product-placeholder.png" alt="Prduct" />
                <div className="star-rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star light"></i>
                  <i className="fa fa-star light"></i>
                </div>
                <p className="product-name"> This is the title of the TV show which is very long isn't it</p>
                <a className="stretched-link" href="product.html"></a>
              </div>
            </div>
            <div className="col ">
              <div className="inner">
                <img src="img/product-placeholder.png" alt="Prduct" />
                <div className="star-rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star light"></i>
                  <i className="fa fa-star light"></i>
                </div>
                <p className="product-name"> This is the title of the TV show which is very long isn't it</p>
                <a className="stretched-link" href="product.html"></a>
              </div>
            </div>
            <div className="col ">
              <div className="inner">
                <img src="img/product-placeholder.png" alt="Prduct" />
                <div className="star-rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star light"></i>
                  <i className="fa fa-star light"></i>
                </div>
                <p className="product-name"> This is the title of the TV show which is very long isn't it</p>
                <a className="stretched-link" href="product.html"></a>
              </div>
            </div>
            <div className="col ">
              <div className="inner">
                <img src="img/product-placeholder.png" alt="Prduct" />
                <div className="star-rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star light"></i>
                  <i className="fa fa-star light"></i>
                </div>
                <p className="product-name"> This is the title of the TV show which is very long isn't it</p>
                <a className="stretched-link" href="product.html"></a>
              </div>
            </div>
            <div className="col ">
              <div className="inner">
                <img src="img/product-placeholder.png" alt="Prduct" />
                <div className="star-rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star light"></i>
                  <i className="fa fa-star light"></i>
                </div>
                <p className="product-name"> This is the title of the TV show which is very long isn't it</p>
                <a className="stretched-link" href="product.html"></a>
              </div>
            </div>
            <div className="col ">
              <div className="inner">
                <img src="img/product-placeholder.png" alt="Prduct" />
                <div className="star-rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star light"></i>
                  <i className="fa fa-star light"></i>
                </div>
                <p className="product-name"> This is the title of the TV show which is very long isn't it</p>
                <a className="stretched-link" href="product.html"></a>
              </div>
            </div>
            <div className="col ">
              <div className="inner">
                <img src="img/product-placeholder.png" alt="Prduct" />
                <div className="star-rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star light"></i>
                  <i className="fa fa-star light"></i>
                </div>
                <p className="product-name"> This is the title of the TV show which is very long isn't it</p>
                <a className="stretched-link" href="product.html"></a>
              </div>
            </div>
            <div className="col ">
              <div className="inner">
                <img src="img/product-placeholder.png" alt="Prduct" />
                <div className="star-rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star light"></i>
                  <i className="fa fa-star light"></i>
                </div>
                <p className="product-name"> This is the title of the TV show which is very long isn't it</p>
                <a className="stretched-link" href="product.html"></a>
              </div>
            </div>
            <div className="col ">
              <div className="inner">
                <img src="img/product-placeholder.png" alt="Prduct" />
                <div className="star-rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star light"></i>
                  <i className="fa fa-star light"></i>
                </div>
                <p className="product-name"> This is the title of the TV show which is very long isn't it</p>
                <a className="stretched-link" href="product.html"></a>
              </div>
            </div>
            <div className="col ">
              <div className="inner">
                <img src="img/product-placeholder.png" alt="Prduct" />
                <div className="star-rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star light"></i>
                  <i className="fa fa-star light"></i>
                </div>
                <p className="product-name"> This is the title of the TV show which is very long isn't it</p>
                <a className="stretched-link" href="product.html"></a>
              </div>
            </div>
            <div className="col ">
              <div className="inner">
                <img src="img/product-placeholder.png" alt="Prduct" />
                <div className="star-rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star light"></i>
                  <i className="fa fa-star light"></i>
                </div>
                <p className="product-name"> This is the title of the TV show which is very long isn't it</p>
                <a className="stretched-link" href="product.html"></a>
              </div>
            </div>
            <div className="col ">
              <div className="inner">
                <img src="img/product-placeholder.png" alt="Prduct" />
                <div className="star-rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star light"></i>
                  <i className="fa fa-star light"></i>
                </div>
                <p className="product-name"> This is the title of the TV show which is very long isn't it</p>
                <a className="stretched-link" href="product.html"></a>
              </div>
            </div>
            <div className="col ">
              <div className="inner">
                <img src="img/product-placeholder.png" alt="Prduct" />
                <div className="star-rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star light"></i>
                  <i className="fa fa-star light"></i>
                </div>
                <p className="product-name"> This is the title of the TV show which is very long isn't it</p>
                <a className="stretched-link" href="product.html"></a>
              </div>
            </div>
            <div className="col ">
              <div className="inner">
                <img src="img/product-placeholder.png" alt="Prduct" />
                <div className="star-rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star light"></i>
                  <i className="fa fa-star light"></i>
                </div>
                <p className="product-name"> This is the title of the TV show which is very long isn't it</p>
                <a className="stretched-link" href="product.html"></a>
              </div>
            </div>
            <div className="col ">
              <div className="inner">
                <img src="img/product-placeholder.png" alt="Prduct" />
                <div className="star-rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star light"></i>
                  <i className="fa fa-star light"></i>
                </div>
                <p className="product-name"> This is the title of the TV show which is very long isn't it</p>
                <a className="stretched-link" href="product.html"></a>
              </div>
            </div>
            <div className="col ">
              <div className="inner">
                <img src="img/product-placeholder.png" alt="Prduct" />
                <div className="star-rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star light"></i>
                  <i className="fa fa-star light"></i>
                </div>
                <p className="product-name"> This is the title of the TV show which is very long isn't it</p>
                <a className="stretched-link" href="product.html"></a>
              </div>
            </div>
            <div className="col ">
              <div className="inner">
                <img src="img/product-placeholder.png" alt="Prduct" />
                <div className="star-rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star light"></i>
                  <i className="fa fa-star light"></i>
                </div>
                <p className="product-name"> This is the title of the TV show which is very long isn't it</p>
                <a className="stretched-link" href="product.html"></a>
              </div>
            </div>
            <div className="col ">
              <div className="inner">
                <img src="img/product-placeholder.png" alt="Prduct" />
                <div className="star-rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star light"></i>
                  <i className="fa fa-star light"></i>
                </div>
                <p className="product-name"> This is the title of the TV show which is very long isn't it</p>
                <a className="stretched-link" href="product.html"></a>
              </div>
            </div>
            <div className="col ">
              <div className="inner">
                <img src="img/product-placeholder.png" alt="Prduct" />
                <div className="star-rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star light"></i>
                  <i className="fa fa-star light"></i>
                </div>
                <p className="product-name"> This is the title of the TV show which is very long isn't it</p>
                <a className="stretched-link" href="product.html"></a>
              </div>
            </div>
            <div className="col ">
              <div className="inner">
                <img src="img/product-placeholder.png" alt="Prduct" />
                <div className="star-rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star light"></i>
                  <i className="fa fa-star light"></i>
                </div>
                <p className="product-name"> This is the title of the TV show which is very long isn't it</p>
                <a className="stretched-link" href="product.html"></a>
              </div>
            </div>
            <div className="col ">
              <div className="inner">
                <img src="img/product-placeholder.png" alt="Prduct" />
                <div className="star-rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star light"></i>
                  <i className="fa fa-star light"></i>
                </div>
                <p className="product-name"> This is the title of the TV show which is very long isn't it</p>
                <a className="stretched-link" href="product.html"></a>
              </div>
            </div>
            <div className="col ">
              <div className="inner">
                <img src="img/product-placeholder.png" alt="Prduct" />
                <div className="star-rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star light"></i>
                  <i className="fa fa-star light"></i>
                </div>
                <p className="product-name"> This is the title of the TV show which is very long isn't it</p>
                <a className="stretched-link" href="product.html"></a>
              </div>
            </div>
            <div className="col ">
              <div className="inner">
                <img src="img/product-placeholder.png" alt="Prduct" />
                <div className="star-rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star light"></i>
                  <i className="fa fa-star light"></i>
                </div>
                <p className="product-name"> This is the title of the TV show which is very long isn't it</p>
                <a className="stretched-link" href="product.html"></a>
              </div>
            </div> */}

          </div>
        </div>
      </div>
      <Pagination_new
        AllUser={changePage}
        pagination={paginationVal}
        current_page={current_page}
      />

      <footer className="p-5"></footer>
    </section>
  )
}

export default Schedules