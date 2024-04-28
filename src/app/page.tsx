"use client";
import RTLTextField from "@/components/RtlTextField";
import YearTable, { TDataBaseFileName } from "@/components/Table";
import { Box, Button, Grid } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

export default function page() {
  const [Data , setData] = useState<TDataBaseFileName[]>([])

  const getDataBaseFileName = async ()=>{
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API}/getDataBaseFileName`)
    const data = await res.data
    data.forEach((i:any) => {
      i.checked = false
    });
    setData(data)
  }

  useEffect(()=>{
    getDataBaseFileName()
  },[])


  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        overflow: "hidden",
      }}
    >
      <Grid container spacing={2}>
        <Grid item sm={6} xs={12}>
          <RTLTextField fullWidth label="سال مالی" />
        </Grid>
        <Grid item sm={6} xs={12}>
          <RTLTextField fullWidth label="عنوان" />
        </Grid>
      </Grid>
      <Grid
        xs={12}
        style={{ display: "flex", alignItems: "center", gap: "10px" }}
      >
        <Button variant="outlined">ایجاد</Button>
        <Button variant="outlined">رونوشت</Button>
      </Grid>
      <Grid marginTop={2} xs={12}>
        <YearTable data={Data}/>
      </Grid>
    </Box>
  );
}
