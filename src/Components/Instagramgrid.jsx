import React, { useEffect, useState } from "react";
import "../Styles/Instagram.css";
// import Data from "../Data/InstagramImage.json";
import { Container } from "react-bootstrap";

const Instagramgrid = () => {
  const [file, setfilename] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((Response) => {
        return Response.json();
      })
      .then((d1) => {
        setfilename(d1.users);
        // window.scroll(0,0);
      });
  }, []);



  return (
    <div>
      <div className="text-center mt-5">
        <h1>Instagram Grid</h1>
      </div>

      <Container>
        <div className="image-main-div ">
          {file.map((items) => (
            <div
              key={items.id}
              className="col-md-3 d-flex justify-content-center align-items-center border imagemain-contoll border-4"
            >
              <div>
              <img
                src={items.image}
                className="image-src"
                height={150}
                width={150}
                alt={items.firstName}
                title={items.firstName}
              />
              </div>
              <div className="text-image">
                      <h1>{items.firstName}</h1>
              </div>

            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Instagramgrid;
