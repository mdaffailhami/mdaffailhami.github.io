import React, { Component } from "react";

class Isi extends Component {
  componentDidMount() {
    dua();
    tiga();
    empat();
    lima();
    enam();
    tujuh();
    delapan();
  }
  render() {
    return (
      <div id="isi">
        <Satu />
        <div id="dua"></div>
        <div id="tiga"></div>
        <div id="empat"></div>
        <div id="lima"></div>
        <div id="enam"></div>
        <div id="tujuh"></div>
        <div id="delapan"></div>
      </div>
    );
  }
}

function Satu() {
  return (
    <div id="satu">
      <br />
      <hr />
      <h3>1. Menginstall module prompt-sync</h3>
      <p>Cara install-nya kalian tinggal cukup ketikkan perintah di terminal sebagai berikut..</p>
      <div style={{ backgroundColor: "#111", padding: 25, color: "lime" }}>
        <span style={{ color: "orange" }}>$</span> npm install prompt-sync
      </div>
    </div>
  );
}

function dua() {
  document.getElementById("dua").innerHTML = `<br /><hr />
  <h3>2. Import module-module yang dibutuhkan</h3>
  <pre>
    <code class="javascript">
// Import Modules
const fs = require("fs");
const promptSync = require("prompt-sync");

// Mendeklarasikan prompt-sync sebagai input dari user
const input = promptSync();
    </code>
  </pre>
`;
}

function tiga() {
  document.getElementById("tiga").innerHTML = `<hr />
  <h3>3. Membuat menu aplikasinya</h3>
  <pre>
    <code class="javascript">
// Import Modules
const fs = require("fs");
const promptSync = require("prompt-sync");

// Mendeklarasikan prompt-sync sebagai input dari user
const input = promptSync();

// Membuat menu
console.log("1. Tambah Kontak");
console.log("2. Edit Kontak");
console.log("3. Hapus Kontak");
console.log("4. Keluar");

// Mengambil input dari user untuk memilih menu mana yang dipilih
const pilih = input("Silahkan dipilih: ");
    </code>
  </pre>`;
}

function empat() {
  document.getElementById("empat").innerHTML = `<hr />
  <h3>4. Membuat logic ketika menu dipilih oleh user</h3>
  <pre>
    <code class="javascript">
// Import Modules
const fs = require("fs");
const promptSync = require("prompt-sync");

// Mendeklarasikan prompt-sync sebagai input dari user
const input = promptSync();

/*
Lakukan perulangan agar programnya akan terus diulang kecuali jika
user telah memilih menu keluar
*/
while (true) {
  // Membuat menu
  console.log("1. Tambah Kontak");
  console.log("2. Edit Kontak");
  console.log("3. Hapus Kontak");
  console.log("4. Keluar");

  // Mengambil input dari user untuk memilih menu mana yang dipilih
  const pilih = input("Silahkan dipilih: ");

  // Logic ketika menu dipilih
  switch (pilih.toUpperCase()) {
    case "1":
    case "TAMBAH KONTAK":

    case "2":
    case "EDIT KONTAK":
      
    case "3":
    case "HAPUS KONTAK":
  }
  // Jika user ingin keluar dari program
  if (pilih == "4" || pilih.toUpperCase() == "KELUAR") {
    break;
  }
}
    </code>
  </pre>`;
}

function lima() {
  document.getElementById("lima").innerHTML = `<hr />
  <h3>5. Handle jika user ingin menambahkan kontak</h3>
  <pre>
    <code class="javascript">
// Import Modules
const fs = require("fs");
const promptSync = require("prompt-sync");

// Mendeklarasikan prompt-sync sebagai input dari user
const input = promptSync();

/*
Lakukan perulangan agar programnya akan terus diulang kecuali jika
user telah memilih menu keluar
*/
while (true) {
  // Membuat menu
  console.log("1. Tambah Kontak");
  console.log("2. Edit Kontak");
  console.log("3. Hapus Kontak");
  console.log("4. Keluar");

  // Mengambil input dari user untuk memilih menu mana yang dipilih
  const pilih = input("Silahkan dipilih: ");

  // Logic ketika menu dipilih
  switch (pilih.toUpperCase()) {
    case "1":
    case "TAMBAH KONTAK":
      // Mengambil input nama, email, dan nomor kontak yg ingin ditambahkan
      const nama = input("Nama : ");
      const email = input("Email: ");
      const nomor = input("Nomor:");

      // Menambahkan kontak ke dalam file kontak.json
      kontak.push({ nama, email, nomor });
      fs.writeFileSync("./data/kontak.json", JSON.stringify(kontak, null, 2));
      break;

    case "2":
    case "EDIT KONTAK":
      
    case "3":
    case "HAPUS KONTAK":
  }
  // Jika user ingin keluar dari program
  if (pilih == "4" || pilih.toUpperCase() == "KELUAR") {
    break;
  }
}
    </code>
  </pre>`;
}

function enam() {
  document.getElementById("enam").innerHTML = `<hr />
<h3>6. Menampilkan seluruh kontak ke dalam aplikasi</h3>
      <pre>
        <code class="javascript">
// Import Modules
const fs = require("fs");
const promptSync = require("prompt-sync");

// Mendeklarasikan prompt-sync sebagai input dari user
const input = promptSync();

/*
  Lakukan perulangan agar programnya akan terus diulang kecuali jika
  user telah memilih menu keluar
*/
while (true) {
  // Membaca seluruh data kontak di dalam file kontak.json
  const kontak = JSON.parse(fs.readFileSync("./data/kontak.json"));
  console.log("\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n");

  // Menampilkan daftar kontak
  console.group("DAFTAR KONTAK {");
  for (let i = 0; i < kontak.length; i++) {
    console.group(i + 1 + ". " + kontak[i].nama);
    console.log("Email: " + kontak[i].email);
    console.log("Nomor: " + kontak[i].nomor);
    console.groupEnd();
  }
  console.groupEnd();
  console.log("}\\n");

  // Membuat menu
  console.log("1. Tambah Kontak");
  console.log("2. Edit Kontak");
  console.log("3. Hapus Kontak");
  console.log("4. Keluar");
  
  // Mengambil input dari user untuk memilih menu mana yang dipilih
  const pilih = input("Silahkan dipilih: ");

  // Logic ketika menu dipilih
  switch (pilih.toUpperCase()) {
    case "1":
    case "TAMBAH KONTAK":
      // Mengambil input nama, email, dan nomor kontak yg ingin ditambahkan
      const nama = input("Nama : ");
      const email = input("Email: ");
      const nomor = input("Nomor:");

      // Menambahkan kontak ke dalam file kontak.json
      kontak.push({ nama, email, nomor });
      fs.writeFileSync("./data/kontak.json", JSON.stringify(kontak, null, 2));
      break;

    case "2":
    case "EDIT KONTAK":
      
    case "3":
    case "HAPUS KONTAK":
  }
  // Jika user ingin keluar dari program
  if (pilih == "4" || pilih.toUpperCase() == "KELUAR") {
    break;
  }
}
            </code>
          </pre>`;
}

function tujuh() {
  document.getElementById("tujuh").innerHTML = `<hr />
<h3>7. Handle jika user ingin mengedit kontak</h3>
      <pre>
        <code class="javascript">
// Import Modules
const fs = require("fs");
const promptSync = require("prompt-sync");

// Mendeklarasikan prompt-sync sebagai input dari user
const input = promptSync();

/*
  Lakukan perulangan agar programnya akan terus diulang kecuali jika
  user telah memilih menu keluar
*/
while (true) {
  // Membaca seluruh data kontak di dalam file kontak.json
  const kontak = JSON.parse(fs.readFileSync("./data/kontak.json"));
  console.log("\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n");

  // Menampilkan daftar kontak
  console.group("DAFTAR KONTAK {");
  for (let i = 0; i < kontak.length; i++) {
    console.group(i + 1 + ". " + kontak[i].nama);
    console.log("Email: " + kontak[i].email);
    console.log("Nomor: " + kontak[i].nomor);
    console.groupEnd();
  }
  console.groupEnd();
  console.log("}\\n");

  // Membuat menu
  console.log("1. Tambah Kontak");
  console.log("2. Edit Kontak");
  console.log("3. Hapus Kontak");
  console.log("4. Keluar");
  
  // Mengambil input dari user untuk memilih menu mana yang dipilih
  const pilih = input("Silahkan dipilih: ");

  // Logic ketika menu dipilih
  switch (pilih.toUpperCase()) {
    case "1":
    case "TAMBAH KONTAK":
      // Mengambil input nama, email, dan nomor kontak yg ingin ditambahkan
      const nama = input("Nama : ");
      const email = input("Email: ");
      const nomor = input("Nomor:");

      // Menambahkan kontak ke dalam file kontak.json
      kontak.push({ nama, email, nomor });
      fs.writeFileSync("./data/kontak.json", JSON.stringify(kontak, null, 2));
      break;

    case "2":
    case "EDIT KONTAK":
      // Mengambil input kontak mana yang diedit
      let yangDiEdit = input("No. urut / Nama: ");

      // Mengecek apakah yg diinput itu No. urut atau nama
      if (!isNaN(yangDiEdit)) {
        yangDiEdit = parseInt(yangDiEdit - 1);
      } else {
        yangDiEdit = kontak.findIndex((x) => x.nama == yangDiEdit);
      }

      // Mengecek jika yangDiEdit tidak ada pada Daftar Kontak
      if (yangDiEdit >= kontak.length) break;

      // Mengambil input nama, email, dan nomor yg baru
      let newNama = input("Nama: ");
      let newEmail = input("Email: ");
      let newNomor = input("Nomor: ");

      // Mengecek jika yg diinputkan itu kosong / tidak ada apa-apa / blank
      if (newNama.length == 0) newNama = kontak[yangDiEdit].nama;
      if (newEmail.length == 0) newEmail = kontak[yangDiEdit].email;
      if (newNomor.length == 0) newNomor = kontak[yangDiEdit].nomor;

      // Mengupdate-kan kontak di file kontak.json
      kontak.splice(yangDiEdit, 1, { nama: newNama, email: newEmail, nomor: newNomor });
      fs.writeFileSync("./data/kontak.json", JSON.stringify(kontak, null, 2));
      break;
      
    case "3":
    case "HAPUS KONTAK":
  }
  // Jika user ingin keluar dari program
  if (pilih == "4" || pilih.toUpperCase() == "KELUAR") {
    break;
  }
}
            </code>
          </pre>`;
}

function delapan() {
  document.getElementById("delapan").innerHTML = `<hr />
<h3>8. Handle jika user ingin menghapus kontak</h3>
      <pre>
        <code class="javascript">
// Import Modules
const fs = require("fs");
const promptSync = require("prompt-sync");

// Mendeklarasikan prompt-sync sebagai input dari user
const input = promptSync();

/*
  Lakukan perulangan agar programnya akan terus diulang kecuali jika
  user telah memilih menu keluar
*/
while (true) {
  // Membaca seluruh data kontak di dalam file kontak.json
  const kontak = JSON.parse(fs.readFileSync("./data/kontak.json"));
  console.log("\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n");

  // Menampilkan daftar kontak
  console.group("DAFTAR KONTAK {");
  for (let i = 0; i < kontak.length; i++) {
    console.group(i + 1 + ". " + kontak[i].nama);
    console.log("Email: " + kontak[i].email);
    console.log("Nomor: " + kontak[i].nomor);
    console.groupEnd();
  }
  console.groupEnd();
  console.log("}\\n");

  // Membuat menu
  console.log("1. Tambah Kontak");
  console.log("2. Edit Kontak");
  console.log("3. Hapus Kontak");
  console.log("4. Keluar");
  
  // Mengambil input dari user untuk memilih menu mana yang dipilih
  const pilih = input("Silahkan dipilih: ");

  // Logic ketika menu dipilih
  switch (pilih.toUpperCase()) {
    case "1":
    case "TAMBAH KONTAK":
      // Mengambil input nama, email, dan nomor kontak yg ingin ditambahkan
      const nama = input("Nama : ");
      const email = input("Email: ");
      const nomor = input("Nomor:");

      // Menambahkan kontak ke dalam file kontak.json
      kontak.push({ nama, email, nomor });
      fs.writeFileSync("./data/kontak.json", JSON.stringify(kontak, null, 2));
      break;

    case "2":
    case "EDIT KONTAK":
      // Mengambil input kontak mana yang diedit
      let yangDiEdit = input("No. urut / Nama: ");

      // Mengecek apakah yg diinput itu No. urut atau nama
      if (!isNaN(yangDiEdit)) {
        yangDiEdit = parseInt(yangDiEdit - 1);
      } else {
        yangDiEdit = kontak.findIndex((x) => x.nama == yangDiEdit);
      }

      // Mengecek jika yangDiEdit tidak ada pada Daftar Kontak
      if (yangDiEdit >= kontak.length) break;

      // Mengambil input nama, email, dan nomor yg baru
      let newNama = input("Nama: ");
      let newEmail = input("Email: ");
      let newNomor = input("Nomor: ");

      // Mengecek jika yg diinputkan itu kosong / tidak ada apa-apa / blank
      if (newNama.length == 0) newNama = kontak[yangDiEdit].nama;
      if (newEmail.length == 0) newEmail = kontak[yangDiEdit].email;
      if (newNomor.length == 0) newNomor = kontak[yangDiEdit].nomor;

      // Mengupdate-kan kontak di file kontak.json
      kontak.splice(yangDiEdit, 1, { nama: newNama, email: newEmail, nomor: newNomor });
      fs.writeFileSync("./data/kontak.json", JSON.stringify(kontak, null, 2));
      break;
      
    case "3":
    case "HAPUS KONTAK":
      // Mengambil input kontak mana yang dihapus
      let yangDiHapus = input("No. urut / Nama: ");

      // Mengecek apakah yg diinput itu No. urut atau nama
      if (!isNaN(yangDiHapus)) {
        yangDiHapus = parseInt(yangDiHapus - 1);
      } else {
        yangDiHapus = kontak.findIndex((x) => x.nama == yangDiHapus);
      }

      // Meyakinkan user apakah benar-benar ingin menghapusnya
      while (true) {
        // Menampilkan informasi kontak yg akan dihapus
        console.group("\\nKontak yang akan dihapus {");
        console.log("Nama :", kontak[yangDiHapus].nama);
        console.log("Email:", kontak[yangDiHapus].email);
        console.log("Nomor:", kontak[yangDiHapus].nomor);
        console.groupEnd();
        console.log("}");
        const yakinkah = input("Apakah anda yakin ingin menghapus (y/n)? ");
        if (yakinkah.toUpperCase() == "Y") {
          // Menghapus kontak di dalam file kontak.json
          kontak.splice(yangDiHapus, 1);
          fs.writeFileSync("./data/kontak.json", JSON.stringify(kontak, null, 2));
          break;
        } else if (yakinkah.toUpperCase() == "N") {
          break;
        }
      }
  }
  // Jika user ingin keluar dari program
  if (pilih == "4" || pilih.toUpperCase() == "KELUAR") {
    break;
  }
}
            </code>
          </pre>`;
}

export default Isi;
