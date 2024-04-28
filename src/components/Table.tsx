"use client";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { TablePagination } from "@mui/material";
import { useEffect, useState } from "react";
import Checkbox from "@mui/material/Checkbox";

export interface TDataBaseFileName {
  dbName: string;
  description: string;
  id: number;
  year: number;
  checked:boolean
}

export interface Data {
  data: TDataBaseFileName[]
}

export default function YearTable({ data }: Data) {
  const [TableData , setTableData] = useState<any>()
  const [Rows, setRows] = useState(0);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    setRows(data.length);
    setTableData(data)
  }, [data]);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const setChecked = (id:number | string)=>{
    const newData = TableData.map((i:TDataBaseFileName) => {
      if(i.id == id){
        if(i.checked){
          i.checked = false
        }else{
          i.checked = true
        }
      }
      return i
    })
    setTableData(newData);
  }

  return (
    <Paper sx={{ width: "100%", minWidth: "100%", overflow: "auto" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table
          stickyHeader
          sx={{
            "& th": {
              backgroundColor: "#424242",
              color: "white",
              padding: "8px 6px",
            },
            "& td": {
              padding: "6px",
              border: "1px solid rgba(184 183 183)",
            },
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell align="right">انتخاب کردن</TableCell>
              <TableCell align="right">سال مالی</TableCell>
              <TableCell align="right">عنوان</TableCell>
              <TableCell align="right">دیتابیس</TableCell>
            </TableRow>
          </TableHead>
          <TableBody
            sx={{
              "& tr:nth-child(even)": {
                backgroundColor: "#e0e0e0",
              },
            }}
          >
            {TableData?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)?.map((i: TDataBaseFileName) => (
              <TableRow key={i.id}>
                <TableCell align="right">
                  <Checkbox
                    color="primary"
                    checked={i.checked}
                    onChange={() => {setChecked(i.id)}}
                  />
                </TableCell>
                <TableCell align="right">{i.year}</TableCell>
                <TableCell align="right">{i.description}</TableCell>
                <TableCell align="right">{i.dbName}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        style={{ display: "flex" }}
        dir="ltr"
        rowsPerPageOptions={[10 , 25 , 50]}
        labelRowsPerPage={``}
        component="div"
        count={Rows}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
