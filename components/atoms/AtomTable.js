import { tasks } from "../constant/tasks";
import React from "react"
import BootstrapTable from 'react-bootstrap-table-next';
import { COLUMNS } from "../constant/tableColumns";
import paginationFactory from 'react-bootstrap-table2-paginator';


export default function AtomTable( { selectRow } ){
   
    return (

        <div>
            <BootstrapTable 
                keyField='id' 
                data={ tasks } 
                columns={ COLUMNS }
                pagination={ paginationFactory() } 
                selectRow={selectRow}/>
            
        </div>

    )
    
}


