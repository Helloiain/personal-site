import React from "react"
import { Link } from "gatsby"
import logo from "../../static/noun_Sword_in_Stone.svg"

export default () => {
  return (
    <header>
      <div
        style={{
          maxWidth: "800px",
          margin: "auto",
          paddingTop: "2rem",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Link
          to="/"
          style={{
            color: "inherit",
            textDecoration: "none",
            textShadow: "none",
            backgroundImage: "none",
            border: "none",
          }}
        >
          <img
            style={{
              margin: "0",
              width: "40px",
            }}
            src={logo}
          />
        </Link>
      </div>
    </header>
  )
}
