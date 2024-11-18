import React, { useEffect, useState, useContext } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
// import Advertisenment from "./Advertisenment";
import DataContext from "../DataContext";
import { Link } from "react-router-dom";
import "./Component.css";
import CompAdd from "./CompAdd";

const Bollywood = () => {
  const [visible, setVisible] = useState(3);       // Controls visible posts
  const [visibleRight, setVisibleRight] = useState(6); //controls the right side post
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const lazyloader = () => {
      setTimeout(() => {
        setLoader(false);
      }, 1300);
    };
    lazyloader();
  }, []);

  const data = useContext(DataContext);
  const bollyMovies = data.filter((item) => item.category === "Bollywood");


  const handleLoad = () => {
    setVisible((prev) => prev + 3);    // Increase the number of visible posts
    setVisibleRight((prev)=>prev+6)
  };

  return (
    <>
      <Navbar />
      {loader ? (
        <div className="loader"></div>
      ) : (
        <>
          <div className="Bollywoodmain">
            <div className="LeftSide">
              <h1 className="main-heading">Bollywood</h1>
              <div className="ChildMain">
                {bollyMovies.slice(0, visible).map((item) => (
                  <div className="BollyMainMovie" key={item.id}>
                    <Link to={`/detail/${item.id}`} className="bollylink">
                      <div className="bimg">
                        <img
                          src={item.img_url}
                          alt="Bollywood movie"
                          className="BollyMainimg"
                        />
                      </div>
                      <div className="bdes">
                        <h3 className="Title">{item.title}</h3>
                        <p className="description">
                          {item.description.split(" ").slice(0, 40).join(" ") + "..."}
                        </p>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
              {(visible < bollyMovies.length || visibleAds < adddata.length) && (
                <button onClick={handleLoad}>Load More</button>
              )}
            </div>

            <div className="RightSide">
              <h1>Top Posts</h1>
              {bollyMovies.slice(0, visibleRight).map((item) => (
                <div className="BollyRightMovie" key={item.id}>
                  <Link to={`/detail/${item.id}`} className="rightbollypost">
                    <img
                      src={item.img_url}
                      alt="Bollywood movie"
                      className="Bollyrightimg"
                    />
                    <p className="description">
                      {item.description.split(" ").slice(0, 10).join(" ") + "..."}
                    </p>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="comp-add">
            <CompAdd/>
          </div>

          <Footer />
        </>
      )}
    </>
  );
};

export default Bollywood;
