import { FC, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { DeleteZapis, GetZapis } from "../redux/actions/zapis.action"
import { DataGrid, GridColDef, GridToolbarQuickFilter, GridActionsCellItem, GridRowId } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import ResponsiveAppBar from "./appNav";
import { Box } from '@mui/material';
import AddModal from "./addModal";

function QuickSearchToolbar() {
    return (
        <Box sx={{ p: 0.5, pb: 0 }}>
            <GridToolbarQuickFilter placeholder="Поиск" />
        </Box>
    );
}

const ZapisList: FC = () => {
    const dispatch = useDispatch()
    const zapis = useSelector((state: any) => state.zapis.zapis)
    const [open, setOpen] = useState(false)
    const [zapisId, setZapisId] = useState<any|null>(null)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        dispatch(GetZapis())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleEditClick = (id: GridRowId) => () => {
        setZapisId(id)
        setOpen(true)
    }
    const handleDeleteClick = (id: GridRowId) => () => {
        dispatch(DeleteZapis(id))
    }

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 20 },
        {
            field: 'action',type: 'actions', headerName: 'Действие', width: 100,cellClassName: 'actions', getActions: ({id}) =>  [
                <GridActionsCellItem
                    icon={<EditIcon />}
                    label="Edit"
                    className="textPrimary"
                    onClick={handleEditClick(id)}
                    color="inherit"
                />,
                <GridActionsCellItem
                    icon={<DeleteIcon />}
                    label="Delete"
                    onClick={handleDeleteClick(id)}
                    color="inherit"
                />,
            ]
        },
        { field: 'date', headerName: 'Дата', width: 140 },
        { field: 'area', headerName: 'Зона', width: 150 },
        { field: 'sum', type: 'number', headerName: 'Сумма', width: 80 },
        { field: 'fioClient', headerName: 'Фамилия клиентки', width: 260 },
        { field: 'phoneClient', headerName: 'Телефон клиентки', width: 140 },
        { field: 'comment', headerName: 'Комментарий', width: 380 },
    ]
    return <>
        <ResponsiveAppBar />
        <Box sx={{ overflow: "auto" }}>
            <Box sx={{ width: "100%", display: "table", tableLayout: "fixed" }}>
            {open && <AddModal open={open} setOpen={setOpen} id={zapisId}/>}
                {zapis && <DataGrid
                    rows={zapis}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 10 },
                        },
                        sorting:{ sortModel:[{field:'date', sort:'desc'}]}
                    }}
                    pageSizeOptions={[10, 20]}
                    slots={{ toolbar: QuickSearchToolbar }}
                    autoHeight
                />}
            </Box>
        </Box>
    </>
}

export default ZapisList