class Toko {
  #nama;
  #lokasi;
  #arrCabang;

  constructor(nama, lokasi) {
    this.#nama = nama;
    this.#lokasi = lokasi;
    this.#arrCabang = [];
  }

  getNama() {
    return this.#nama;
  }

  setNama(value) {
    this.#nama = value;
  }

  arrCabang(objcabang) {
    this.#arrCabang.push(objcabang);
  }

  getArrCabang() {
    return this.#arrCabang;
  }

  getInfo() {
    const cabangList = this.#arrCabang
      .map((cabang) => `* ${cabang}`)
      .join('\n');
    console.log(
      `Toko ${this.#nama} berlokasi di ${this.#lokasi}\nmenjual ${
        this.#arrCabang.length
      } jenis barang dengan nama:\n${cabangList}`,
    );
  }
}

let tokoCodingID = new Toko('CodingID', 'Jakarta');
tokoCodingID.arrCabang('cabang satu');
tokoCodingID.arrCabang('cabang dua');

tokoCodingID.getInfo();
