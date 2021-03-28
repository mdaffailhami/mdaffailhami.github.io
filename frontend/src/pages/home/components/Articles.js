import React from "react";
import image from "../../../assets/images";
import { replacePage } from "../../../functions";

function Articles(props) {
  const { isMobile } = props;
  return (
    <div id="articles">
      <div style={{ height: 70, marginTop: -50 }}></div>
      <h3 className="text-center mb-3">Articles</h3>
      <a
        href="/article/crud-node-json"
        onClick={(event) => {
          event.preventDefault();
          replacePage("/article/crud-node-json");
        }}
        style={{ textDecoration: "none" }}
      >
        <div
          style={{
            display: "flex",
            backgroundColor: "#fff",
            borderRadius: 5,
            overflow: "hidden",
            height: isMobile ? 120 : 150,
          }}
        >
          <div
            className="image"
            style={{
              flex: 1,
              backgroundSize: "cover",
              backgroundImage: "url(" + image.crudNodeJSON + ")",
            }}
          ></div>
          <div className="text" style={{ flex: 2, padding: 10 }}>
            <h5
              className="text-primary"
              style={{ fontSize: isMobile ? "medium" : null, textDecoration: "underline" }}
            >
              Membuat Aplikasi CRUD Berbasis CLI dengan Node.js
            </h5>
            <span style={{ color: "#444" }}>12/02/2021</span>
            <p style={{ display: isMobile ? "none" : null, color: "#555" }}>
              Pada awalnya Javascript hanya merupakan sebuah bahasa pemrograman yang digunakan untuk
              membuat web saja. Namun, berkat Node.js kita sekarang sudah bisa membuat aplikasi
              desktop, web, mobile, CLI, IoT, dll.
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Articles;
