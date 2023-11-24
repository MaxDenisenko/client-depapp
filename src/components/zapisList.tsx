import { FC, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { GetZapis } from "../redux/actions/zapis.action"

import { DataGrid, GridColDef } from '@mui/x-data-grid';


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
        <input placeholder="Выберите дату" type="date"></input>
        <input placeholder="Выберите зону" type="text"></input>
        <input placeholder="Введите сумму" type="number"></input>
        <input placeholder="Введите ФИО" type="text"></input>
        <input placeholder="Введите телефон" type="text"></input>
        <input placeholder="Комментарий" type="text"></input>
        <button>Ввести</button>
        <hr/>
        <div style={{height: 400, widows:'100%'}}>
        {zapis && <DataGrid
            rows={zapis}
            columns={columns}
            initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 9 },
                },
              }}
              pageSizeOptions={[9, 10]}
              checkboxSelection
            />}
        </div>
    </>
}

export default ZapisList