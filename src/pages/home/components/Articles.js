import React from "react";

function Articles() {
  return (
    <div id="articles">
      <h3 className="title">Articles</h3>
      <a href="articles/1-crud_node_json/">
        <div>
          <div className="image"></div>
          <div className="text">
            <h5 className="text-primary">Membuat Aplikasi CRUD Berbasis CLI dengan Node.js</h5>
            <span>12/02/2021</span>
            <p>
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
