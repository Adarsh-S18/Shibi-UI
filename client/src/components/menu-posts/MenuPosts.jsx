import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './menuposts.css'

export default function MenuPosts() {
    return (
        <>
        <div>
        <h2 className="subtitlee">{"What's hot"}</h2><h1 className="titlee">Most Popular</h1>
        <div className="items">
            <Link href="/" className="item">

                {/* <div className="imageContainerr">
      <img src="/p1.jpeg" alt="" fill className="image" />
    </div> */}

                <div className="textContainer">
                    <span className="categoryy travel">Travel</span>
                    <h3 className="postTitle">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </h3>
                    <div className="detail">
                        <span className="username">John Doe</span>
                        <span className="date"> - 10.03.2023</span>
                    </div>
                </div>
            </Link>
            <Link href="/" className="item">

                {/* <div className="imageContainerr">
      <img src="/p1.jpeg" alt="" fill className="image" />
    </div>
   */}
                <div className="textContainer">
                    <span className="categoryy culture">
                        Culture
                    </span>
                    <h3 className="postTitle">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </h3>
                    <div className="detail">
                        <span className="username">John Doe</span>
                        <span className="date"> - 10.03.2023</span>
                    </div>
                </div>
            </Link>
            <Link href="/" className="item">

                {/* <div className="imageContainerr">
      <img src="/p1.jpeg" alt="" fill className="image" />
    </div> */}

                <div className="textContainer">
                    <span className="categoryy food">Food</span>
                    <h3 className="postTitle">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </h3>
                    <div className="detail">
                        <span className="username">John Doe</span>
                        <span className="date"> - 10.03.2023</span>
                    </div>
                </div>
            </Link>
            <Link href="/" className="item">

                {/* <div className="imageContainerr">
      <img src="/p1.jpeg" alt="" fill className="image" />
    </div>
   */}
                <div className="textContainer">
                    <span className="categoryy fashion">
                        Fashion
                    </span>
                    <h3 className="postTitle">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </h3>
                    <div className="detail">
                        <span className="username">John Doe</span>
                        <span className="date"> - 10.03.2023</span>
                    </div>
                </div>
            </Link>
        </div>

        </div></>
      );
}
