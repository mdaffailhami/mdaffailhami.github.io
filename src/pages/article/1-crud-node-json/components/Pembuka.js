import React from "react";
import gifs from "../../../../assets/gifs";
import images from "../../../../assets/images";
function Pembuka() {
  return (
    <div id="pembuka">
      <br />
      <p>Daffa Ilhami • 12 feb 2021</p>
      <hr />
      <h2>
        Membuat Aplikasi CRUD Berbasis CLI dengan menggunakan Node.js dan JSON sebagai Database
      </h2>

      <br />

      <center>
        <img src={images.crudNodeJSON} alt="Node.js" style={{ width: "100%" }} />
      </center>

      <br />
      <hr />

      <p>
        Pada awalnya Javascript hanya merupakan sebuah bahasa pemrograman yang digunakan untuk
        membuat web saja. Namun, berkat Node.js kita sekarang sudah bisa membuat aplikasi desktop,
        web, mobile, CLI, IoT, dll.
      </p>

      <p>
        Nah di artikel ini kita akan belajar bagaimana caranya membuat aplikasi untuk membuat data,
        membaca data, mengubah data, dan menghapus data.. atau yang mungkin lebih kita kenal dengan
        sebutan CRUD (Create, Read, Update, Delete).
      </p>

      <p>
        Mungkin kalian mengira saya akan membuat aplikasi CRUD-nya itu dengan menggunakan DBMS
        (Database Management System) seperti MySql, Mongo.db, SQLite, dan lain sebagainya kan? Tapii
        disini kita akan membuat database-nya itu hanya dengan menggunakan JSON (JavaScript Object
        Notation).
      </p>

      <p>
        Ya saya tau kok kalau fungsi sebenarnya dari JSON itu bukan sebgai database, melainkan untuk
        pertukaran data API, jadi ya kenapa kita hanya menggunakan JSON? Ya karena ini hanya untuk
        latihan aja gitu, bukan aplikasi yang emang serius terus di publish. Lagian juga
        aplikasi-nya ini kan juga cuma berbasis CLI (Command Line Interface) aja, bukan GUI
        (Graphical User Interface).
      </p>

      <p>Okeh langsung aja kita mulai..</p>

      <p>
        Yang pertama tentunya kalian memerlukan Node.js-nya dong ya, kalian bisa mendownload
        Node.js-nya di situs resminya Node.js yaitu{" "}
        <a href="https://nodejs.org/" target="_blank">
          https://nodejs.org/
        </a>
      </p>

      <p>Jika sudah didownload Node.js-nya, langsung aja kita mulai tutorialnya..</p>
    </div>
  );
}

export default Pembuka;
