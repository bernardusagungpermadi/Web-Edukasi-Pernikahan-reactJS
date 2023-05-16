import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const ArtikelForm = ({ artikel, saveArtikel, cancelForm }) => {
  const [judul, setJudul] = useState(artikel?.judul || '');
  const [konten, setKonten] = useState(artikel?.konten || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    const artikelData = {
      judul,
      konten,
    };
    saveArtikel(artikelData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="judul">Judul</Label>
        <Input
          type="text"
          name="judul"
          id="judul"
          placeholder="Masukkan judul artikel"
          value={judul}
          onChange={(e) => setJudul(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="konten">Konten</Label>
        <Input
          type="textarea"
          name="konten"
          id="konten"
          placeholder="Masukkan konten artikel"
          value={konten}
          onChange={(e) => setKonten(e.target.value)}
        />
      </FormGroup>
      <Button color="primary" type="submit">
        Simpan
      </Button>{' '}
      <Button color="secondary" onClick={cancelForm}>
        Batal
      </Button>
    </Form>
  );
};

export default ArtikelForm;
