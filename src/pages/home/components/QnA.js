import React from "react";

function QnA() {
  return (
    <div id="qna">
      <div style={{ height: 50, marginTop: -50 }}></div>
      <hr />
      <h3 className="text-center mb-3">QnA</h3>
      <ul className="list-group" style={{ color: "black" }}>
        <Question text="Nama lengkap?" />
        <Answer text="Muhammad Daffa Ilhami" />
        <Question text="Umur berapa?" />
        <Answer text="17 tahun" />
        <Question text="Anime yang disukai apa aja?" />
        <Answer text="Naruto, Mushoku Tensei, Attack on Titan, Dr. STONE, & Re:Zero" />
        <Question text="Teknologi apa yang dipake untuk ngebangun website ini?" />
        <Answer text="React.js & Bootstrap 5" />
        <Question text="Sejak kapan mulai belajar Programming?" />
        <Answer text="12 September 2020 🙄" />
        <Question text="Gimana caranya biar bisa jadi Programmer?" />
        <Answer text="Ya belajar lah 👍" />
        <Question text="Belajar Programming enaknya dimana?" />
        <Answer text="di YouTube-nya Web Programming UNPAS sama Kelas Terbuka" />
        <Question text="Bahasa pemrograman yang cocok untuk pemula apa?" />
        <Answer text="Menurutku sih JavaScript atau Python 😬" />
        <Question text="Bisa ngehack ga?" />
        <Answer text="Gak.." />
        <Question text="Hack-in dong akun IG ku soalnya password-nya lupa muehehehe" />
        <Answer text="Dah dibilangin ga bisa, zz" />
        <Question text="Kamu manusia atau hooman?" />
        <Answer text="Dahlah 😑" />
      </ul>
    </div>
  );
}

function Question(props) {
  return (
    <li className="list-group-item" style={{ color: "#000" }}>
      <span id="q" style={{ color: "blue", fontWeight: "bold" }}>
        Q :
      </span>{" "}
      {props.text}
    </li>
  );
}

function Answer(props) {
  return (
    <li className="list-group-item" style={{ color: "#000" }}>
      <span id="a" style={{ color: "red", fontWeight: "bold" }}>
        A :
      </span>{" "}
      {props.text}
    </li>
  );
}

export default QnA;
