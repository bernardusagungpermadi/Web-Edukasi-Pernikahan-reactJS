import React from 'react';
import { Table, Button } from 'reactstrap';

const ArtikelList = ({ artikelList, editArtikel, deleteArtikel }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>Judul</th>
          <th>Konten</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        {artikelList.map((artikel) => (
          <tr key={artikel.id}>
            <td>{artikel.judul}</td>
            <td>{artikel.konten}</td>
            <td>
              <Button color="primary" onClick={() => editArtikel(artikel)}>
                Edit
              </Button>{' '}
              <Button color="danger" onClick={() => deleteArtikel(artikel.id)}>
                Hapus
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ArtikelList;
