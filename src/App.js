import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Pages/Context/AuthProvider';
import Footer from './Pages/Footer/Footer';
import Home from './Pages/Home/Home';
import LoanDetails from './Pages/LoanDetails/LoanDetails';
import Loans from './Pages/Loans/Loans';
import Login from './Pages/Login/Login';
import MakeAdmin from './Pages/MakeAdmin/MakeAdmin';
import ManageAllLoans from './Pages/ManageAllLoans/ManageAllLoans';
import Navbar from './Pages/Navbar/Navbar';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Register from './Pages/Register/Register';
import Update from './Pages/Update/Update';
import UserInformation from './Pages/UserInformation/UserInformation';
import UserLoans from './Pages/UserLoans/UserLoans';


function App() {
  return (
    <div className="App">
      
      <AuthProvider>
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/home" element={<Home></Home>}></Route>
      <Route path="/loans" element={<PrivateRoute><Loans></Loans></PrivateRoute>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/register" element={<Register></Register>}></Route>
      <Route path="/makeAdmin" element={<MakeAdmin></MakeAdmin>}></Route>
      <Route path="/loanDetails/:loanId" element={<LoanDetails></LoanDetails>}></Route>
      <Route path="/users" element={<PrivateRoute><UserLoans></UserLoans></PrivateRoute>}></Route>
      <Route path="/manageLoans" element={<PrivateRoute><ManageAllLoans></ManageAllLoans></PrivateRoute>}></Route>
      <Route path="/allLoanRequest/:id" element={<Update></Update>}></Route>
      </Routes>
      <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
