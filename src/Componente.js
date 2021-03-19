import { DropdownButton, FormCheck }  from 'react-bootstrap';
import './Componente.css';

function Componente() {

  return (
    <DropdownButton id="dropdown-basic-button" title="+ Adic. filtro">
      <div class="dropdown-menu">
        <span>Filtros</span>
        <FormCheck custom type="checkbox" id="status" label="Status" for="status" />
        <FormCheck custom type="checkbox" id="venda" label="Venda" for="venda" />
        <FormCheck custom type="checkbox" id ="valor" label="Valor" for="valor" />
        <FormCheck custom type="checkbox" id="tipo" label="Tipo" for="tipo" />
        <FormCheck custom type="checkbox" id="cliente" label="Cliente" for="cliente" />
        <FormCheck custom type="checkbox" id="documento" label="Documento" for="documento" />
        <FormCheck custom type="checkbox" id="referencia" label="Referência" for="referencia" />
        <FormCheck custom type="checkbox" id="tid" label="TID" for="tid" />
        <FormCheck custom type="checkbox" id="arp" label="ARP" for="arp" />
        <FormCheck custom type="checkbox" id="nsu" label="NSU" for="nsu" />
        <FormCheck custom type="checkbox" id="data" label="DATA" for="data" />
      </div>
    </DropdownButton>

  );
}

export default Componente;
