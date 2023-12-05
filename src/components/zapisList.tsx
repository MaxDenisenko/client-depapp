import { FC, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { GetZapis } from "../redux/actions/zapis.action"
import { DataGrid, GridColDef, GridToolbarQuickFilter } from '@mui/x-data-grid';
import ResponsiveAppBar from "./appNav";
import Box from '@mui/material/Box';

function QuickSearchToolbar() {
    return (
      <Box
        sx={{
          p: 0.5,
          pb: 0,
        }}
      >
        <GridToolbarQuickFilter placeholder="Поиск"/>
      </Box>
    );
  }

const ZapisList:FC = () => {
    const dispatch = useDispatch()
    const zapis = useSelector ((state: any) => state.zapis.zapis)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(()=>{
        dispatch(GetZapis())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const columns:GridColDef[]= [
            {field: 'id', headerName: 'ID', width: 20},
            {field: 'date', headerName: 'Дата', width: 140},
            {field: 'area', headerName: 'Зона', width: 150},
            {field: 'sum',type: 'number', headerName: 'Сумма', width: 80},
            {field: 'fioClient', headerName: 'Фамилия клиентки', width: 260},
            {field: 'phoneClient', headerName: 'Телефон клиентки', width: 140},
            {field: 'comment', headerName: 'Комментарий', width: 380},
    ]

    return <>
        <ResponsiveAppBar/>
        <Box sx={{ overflow: "auto" }}>
        <Box sx={{width: "100%", display: "table", tableLayout: "fixed"}}>
        {zapis && <DataGrid
            rows={zapis}
            columns={columns}
            initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 10 },
                },
              }}
              pageSizeOptions={[10, 20]}
              slots={{ toolbar: QuickSearchToolbar }}
            />}
        </Box>
        </Box>
    </>
}

export default ZapisList