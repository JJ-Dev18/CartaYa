import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useFetch } from '../../hooks/useFetch';
import {Button} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import CircularProgress from '@material-ui/core/CircularProgress';
import LinearProgress from '@material-ui/core/LinearProgress';
import VisibilityIcon from '@material-ui/icons/Visibility';
import AddUser from './AddUser';
import { addUsers } from '../../actions/users';



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
  const url = `https://www.breakingbadapi.com/api/characters?limit=10&offset=8`
  const {loading,data} = useFetch(url)
  console.log(data)
  const dispatch = useDispatch();
  const handleView = (id) => {
    
    dispatch(addUsers(id))
    
  }

  
  return (
      
    <TableContainer component={Paper}>
        {(loading )&& <div className="loading" style={{width:'100%'}}> <LinearProgress /></div>}
      <Table className={classes.table} aria-label="customized table">
      
        <TableHead>
          <TableRow>
          
            <StyledTableCell>Id</StyledTableCell>
            <StyledTableCell align="right">Nombre</StyledTableCell>
            <StyledTableCell align="right">nickname</StyledTableCell>
            <StyledTableCell align="right">category</StyledTableCell>
            <StyledTableCell align="center">Opcion</StyledTableCell>
           
          </TableRow>
         
        </TableHead>
      
        <TableBody >
         
             
              {
                  (!loading) && 
                  data.map(inf => (
                    <StyledTableRow key={inf.char_id} className="body__table">
                    <StyledTableCell component="th" scope="row">
                      {inf.char_id}
                    </StyledTableCell>
                    <StyledTableCell align="right">{inf.name}</StyledTableCell>
                    <StyledTableCell align="right">{inf.nickname}</StyledTableCell>
                    <StyledTableCell align="right">{inf.category}</StyledTableCell>
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