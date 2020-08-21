import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Button} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import LinearProgress from '@material-ui/core/LinearProgress';
import VisibilityIcon from '@material-ui/icons/Visibility';
import {useDispatch} from 'react-redux'
import {  viewUser } from '../../actions/users';
import { useFetchUser } from '../../hooks/useFetchUser';



const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#444',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
      
    },
  },
}))(TableRow);


const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function ListUser() {
  const classes = useStyles();
  const dispatch = useDispatch();
  // const url = `https://cartaya.graciadev.com/api/admin/getUsers`
  // const {loading,data} = useFetch(url)
  // const {content} = data ;
  // console.log(content[0])
  // const users = getUsers()
  const {data,loading} = useFetchUser()
  
  
  console.log(data)
 
  const handleView = (info) => {
    
    dispatch(viewUser(info))
    
  }

  
  return (
    // Tabla de la lista de usuarios 
    <TableContainer component={Paper}>
        {(loading )&& <div className="loading" style={{width:'100%'}}> <LinearProgress /></div>}
      <Table className={classes.table} aria-label="customized table">
      
        <TableHead>
          <TableRow>
          
            <StyledTableCell>Id</StyledTableCell>
            <StyledTableCell align="right">Nombre</StyledTableCell>
            <StyledTableCell align="center">User</StyledTableCell>
            <StyledTableCell align="center">Password</StyledTableCell>
            <StyledTableCell align="right">Direccion</StyledTableCell>
            <StyledTableCell align="center">Opciones</StyledTableCell>
           
          </TableRow>
         
        </TableHead>
      
        <TableBody >
         
             
              {
                  (!loading) && 
                  data.map(inf => (
                    <StyledTableRow key={inf.id} className="body__table">
                    <StyledTableCell component="th" scope="row">
                      {inf.id}
                    </StyledTableCell>
                    <StyledTableCell align="right">{inf.name}</StyledTableCell>
                    <StyledTableCell align="right">{inf.user}</StyledTableCell>
                    <StyledTableCell align="right">{inf.password}</StyledTableCell>
                    <StyledTableCell align="right">{inf.address}</StyledTableCell>
                    <StyledTableCell align="center">
                    <Button variant="contained" color="primary" startIcon={<EditIcon />}>Editar</Button>
                    <Button variant="contained" color="secondary" startIcon={<DeleteIcon />}>Eliminar</Button>
                    <Button variant="contained" onClick={()=> handleView(inf)} startIcon={<VisibilityIcon/>} > Ver </Button></StyledTableCell>
                    </StyledTableRow>
                  ))
              }
             
          
           
         
        </TableBody>
      </Table>
    </TableContainer>
  );
}