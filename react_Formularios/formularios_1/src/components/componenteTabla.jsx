import React from "react";
//import './componenteTabla.css'; 

const ComponenteTabla = () => {
  return( 
   /*{<!--table class=" table table-hover table-bordered border-primary "-->} */
  
  <table className="table
                    table-align-middle
                   table-bordered
                   border-primary
                   caption-top
                   ">
  <caption className="bg-transparent animate-spin">Tabla Empleados</caption>
  <thead className="table-primary">
    <tr>  
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody className="table-group-divider "> 
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
      <td>John</td>
      <td>Doe</td>
      <td>@social</td>
    </tr>
  </tbody>
</table>
  )
};

export default ComponenteTabla;