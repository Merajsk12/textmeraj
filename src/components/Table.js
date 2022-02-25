import React from 'react'

function Table() {
  return (
    <>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      {/* <td colspan="2">Larry the Bird</td> */}
      <td>Larry the Bird</td>
      <td>bird</td>
      <td>@twitter</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td colspan="2">Name change (meta)</td>
      <td>@Facbook</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td colspan="2">Chatting dating</td>
      <td>@whatsapp</td>
    </tr>
    <tr>
      <th scope="row">6</th>
      <td colspan="2">Filter selfi</td>
      <td>@snapchat</td>
    </tr>
  </tbody>
</table>
    </>
  )
}

export default Table
