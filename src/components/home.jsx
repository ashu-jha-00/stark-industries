import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const home = () => {
  return (
    <>
      <div class="home">
        <main>
          {/* <h1>Stark Industries</h1>
          <p>You Name it . We make it .</p> */}
        </main>
      </div>
      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <h1>Stark Industries</h1>
          {/* <p>You Name it . We make it .</p> */}
          <p>"Consulting in the Past , Present and Future."</p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>who we are ?</h1>
          <p>
            Stark Industries is primarily a defense company that develops and
            manufactures advanced weapons and military technologies. The company
            manufactures the armor worn by Iron Man and War Machine. It builds
            the helicarriers used by S.H.I.E.L.D, and it produces the Quinjets
            used by the Avengers Stark Industries, is a fictional company
            appearing in American comic books published by Marvel Comics.
            Created by Robert Bernstein, Stan Lee, and Jack Kirby, the company
            first appeared in Tales of Suspense #39 (April 1962). Stark
            Industries is depicted as being owned and run by businessman and
            namesake Tony Stark, who is also known as Iron Man, and was founded
            by Tony's father, Howard Stark. In the Marvel Cinematic Universe,
            Stark Industries has a logo modeled after the defense contractor
            Lockheed Martin and is listed on the New York Stock Exchange as SIA.
            During the press conference scene, Stark is seen entering a building
            that resembles the entrance to Lockheed Martin's Skunk Works
            facility. An airplane extremely similar to the Lockheed YF-22 stood
            as a statue in front of the Stark Industries facility, exactly like
            the prototypes on display at Skunk Works facility in Palmdale,
            California.
            <br />
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>

          <article>
            <div style={{ animationDelay: "0.3s" }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div style={{ animationDelay: "0.7s" }}>
              <AiFillInstagram />
              <p>Insta</p>
            </div>
            <div style={{ animationDelay: "1s" }}>
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
            <div style={{ animationDelay: "1.3s" }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default home;
