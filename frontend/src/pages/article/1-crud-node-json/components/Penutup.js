import React from "react";
import gifs from "../../../../assets/gifs";
import { replacePage } from "../../../../functions";

function Penutup() {
  return (
    <div id="penutup" style={{ overflow: "hidden" }}>
      <hr />
      <center>
        <h2>Hasil akhir</h2>
        <img src={gifs.hasilAkhirArticleCRUDNodeJSON} alt="Hasil" />
        <hr />

        <p>
          Demikian tutorial kali ini. Mohon maaf jika ada kesalahan dan semoga bermanfaat 😁
          <br />
          Good luck lurr!!!
        </p>

        <br />

        <center>
          <a
            href="/"
            onClick={(event) => {
              event.preventDefault();
              replacePage("/");
            }}
          >
            <button type="button" className="btn btn-primary">
              Ke halaman utama!
            </button>
          </a>
        </center>
      </center>
    </div>
  );
}

export default Penutup;
