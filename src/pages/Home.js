import React , { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useDispatch, useSelector} from "react-redux";
import { deleteUser, loadUsers } from '../redux/action';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Link, useNavigate } from 'react-router-dom';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  

function Home() {

    let navigate = useNavigate();
    let dispatch = useDispatch();
    const { users } = useSelector(state => state.data)

    useEffect(() => {
      dispatch(loadUsers());
    }, []);

    const handleDelete = (id) => {
      if(window.confirm("Are you sure wanted to delete the user ?")) {
        dispatch(deleteUser(id));
      }
    }

    return (
      <div>
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
        <Link to="/addUser" style={{ textDecoration: 'none'}}>
        <Button variant='contained' color = "primary">Add User</Button>
        </Link>
        </div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">Name</StyledTableCell>
                <StyledTableCell align="center">Email</StyledTableCell>
                <StyledTableCell align="center">Contact</StyledTableCell>
                <StyledTableCell align="center">Address</StyledTableCell>
                <StyledTableCell align="center">Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users && users.map((user) => (
                <StyledTableRow key={user.id}>
                  <StyledTableCell component="th" scope="row" align="center">
                    {user.name}
                  </StyledTableCell>
                  <StyledTableCell align="center">{user.email}</StyledTableCell>
                  <StyledTableCell align="center">{user.contact}</StyledTableCell>
                  <StyledTableCell align="center">{user.address}</StyledTableCell>
                  <StyledTableCell align="center">

                    <ButtonGroup variant="contained" aria-label="contained primary button group">
                      <Button 
                      color = "error" 
                      style={{ marginRight: "5px" }}
                      onClick={() => handleDelete(user.id)}>
                        DEL</Button>
                      <Button color = "primary" onClick={() => navigate(`/editUser/${user.id}`)} >EDIT</Button>
                  </ButtonGroup>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }

export default Home