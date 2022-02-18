import React, { useEffect,  useState, } from "react";
import {BsCheckLg} from 'react-icons/bs';
import {TiTimes} from 'react-icons/ti';
import getData from "./getData";
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

type Props = {
    mainColor: string;
    listColor: string;
    typeOf: string;
    request: string;
}
type ListStyle = {
    theadStyle: string;
    trStyle: string;
    tdStyle: string;
    imgStyle: string;
    svgStyle: string;
}
type student = {
    ID: number;
    PID: string;
    FirstName: string;
    LastName: string;
    Email: string;
    PhoneNumber: string;
}
      // cellStyle: (params: GridValueGetterParams) => {
        //     return {
        //         backgroundColor: params.value === '1' ? '#00ff00' : '#ff0000'
        //     };
        //   },

const columns: GridColDef[] = [
    {
        field: 'id',
        headerName: 'ID',
        width: 100,
        sortable: true,       
        'type': 'number',
  
    },
    {
        field: 'pid',
        headerName: 'PID',
        width: 100,
        sortable: true,
    },
    {
      field: 'FirstName',
      headerName: 'First Name',
      width: 150,
      editable: false,
    },
    {
      field: 'LastName',
      headerName: 'Last Name',
      width: 150,
      editable: false,
    },
    {
      field: 'Email',
      headerName: 'Email',
      width: 150,
      editable: false,
    },
  
    {
      field: 'PhoneNumber',
      headerName: 'Phone number',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,

    },
    {
      field: 'Class',
      headerName: 'Class',
      width: 110,
      editable: false,
    }
  ];
//   let data: student[] = [
//     {
//         id: 1,
//         pid: "1",
//         FirstName:"Dejans Tjej",
//         LastName:"Dejansson",
//         Email: "cfvgbhjk@gmail.com",
//         PhoneNumber: "901270000000000000000000"
//     },
//     {
//         id: 2,
//         pid: "1",
//         FirstName:"Dejans Tjej number 2",
//         LastName:"Dejansson",
//         Email: "rtyui5678@gmaiuo.com",
//         PhoneNumber: "904567127"
//     },
    
// ]






  export default function DataGridDemo() {

    const [data, setData] = useState<any>(null);
    const [rows, setRows] = useState<any>(null);

    useEffect(() => {

      console.log("ja hej effect");
      getData("http://localhost:3001/students")
      .then((response) => {

        
      
        setData(response);
        setRows(response);
        console.log(response);
      });
    
      
    }, [])

    
    return (
      <div className="w-screen h-[80%]">
        {rows && <DataGrid
          rows={rows}
          columns={columns}
          // pageSize={5}
          // rowsPerPageOptions={[5]}
          // checkboxSelection
          // disableSelectionOnClick
          
        />}
      </div>
    );
  }


