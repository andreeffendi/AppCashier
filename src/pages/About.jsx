import React, { Component } from "react";
import { Col, Accordion } from "react-bootstrap";

export default class About extends Component {
  render() {
    return (
      <Col>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Sejarah Berdirinya Restoran</Accordion.Header>
            <Accordion.Body>
              <p>
                Pengusaha sekaligus pemilik restoran Solaria, Aliuyanto, S.E.,
                menyampaikan pengalamannya di hadapan 1.079 calon wisudawan
                mahasiswa pascasarjana UGM yang mengikuti pembekalan wisuda di
                Grha Sabha Pramana, Senin (18/1). Alumnus Fakultas Ekonomi UGM
                tahun 1985 ini bercerita tentang pengalamannya saat memilih
                berwirausaha di bidang kuliner tahun 1991, atau setelah lima
                tahun bekerja sebagai karyawan di sebuah perusahaan swasta
                dengan penghasilan yang cukup lumayan.
              </p>
              <p>
                Apa alasan Aliuyanto memilih keluar dari perusahaan? “Jenuh,”
                katanya singkat. Bekerja di sebuah perusahaan, bagi Aliuyanto,
                tidak memberikan tantangan baginya untuk mengembangkan potensi
                yang dimiliki. Tetapi, memulai usaha tetap saja tidak mudah
                karena Aliuyanto mengaku saat itu tabungan yang ia kumpulkan
                dari sisa gaji saat lima tahun bekerja tidak cukup sebagai modal
                usaha. “Saat memulai usaha tetap saja modal tidak ada,”
                kenangnya. Meski begitu, ia tetap keukuh untuk terjun
                berwirausaha. Usaha kuliner awalnya bukan pilihan, apalagi
                Aliuyanto sendiri mengaku tidak memiliki hobi memasak. “Semuanya
                mengalir. Dapatnya juga tidak disangka-sangka,” tuturnya. Saat
                dibuka pertama kali tahun 1991, Aliuyanto mengaku usaha
                restorannya mulai dikenal sejak 1995. Awalnya, ia mempekerjakan
                4 karyawan namun setelah 20 tahun ia berhasil membuka cabang
                dimana-mana. Sampai saat ini restoran dengan brand Solaria
                tersebar di 31 provinsi dan 55 kota besar. “Sudah ada 200
                resto,” paparnya.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Reputasi</Accordion.Header>
            <Accordion.Body>
              <p>
                Berdasarkan penelitian Roy Morgan tahun 2018 , Restoran Abunawas
                merupakan restoran yang paling banyak dikunjungi masyarakat
                Indonesia . Menurut hasil penelitian tersebut , sebanyak 28.4
                juta orang pada rentang waktu April 2017 hingga Maret 2018 telah
                mengunjungi restoran tersebut. Jumlah itu di atas pengunjung
                restoran cepat saji lainnya , seperti Kentucky Fried Chicken dan
                McDonald's .
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Col>
    );
  }
}
