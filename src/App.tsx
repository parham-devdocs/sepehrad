import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Users from "./pages/Users";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import BillManagement from "./pages/dashboard/bills/billManagement";
import EditBill from "./pages/dashboard/bills/editBill";
import CreateBill from "./pages/dashboard/bills/createBill";
import CreateCreditor from "./pages/dashboard/creditors/createCreditor";
import SingleCreditor from "./pages/dashboard/creditors/singleCreditors";
import CreditorList from "./pages/dashboard/creditors/creditorsList";
import CreatePayment from "./pages/dashboard/payment/createPayment";
import EditPayment from "./pages/dashboard/payment/editPayment";
import PaymentList from "./pages/dashboard/payment/paymentList";
import CreateDebt from "./pages/dashboard/debt/createDebt";
import EditDebt from "./pages/dashboard/debt/editDebt";
import DebtList from "./pages/dashboard/debt/debtList";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} /> {/* Default route */}
            <Route path="Bills">
              <Route path="billManagement" element={<BillManagement />} />
              <Route path="edit/:id" element={<EditBill />} />
              <Route path="create/:id" element={<CreateBill />} />
            </Route>
            <Route path="creditors">
              <Route path="create" element={<CreateCreditor />} />
              <Route path=":id" element={<SingleCreditor />} />
              <Route path="list" element={<CreditorList />} />
            </Route>
            <Route path="payment">
              <Route path="create" element={<CreatePayment />} />
              <Route path="edit/:id" element={<EditPayment />} />
              <Route path="list" element={<PaymentList />} />
            </Route>
            <Route path="debt">
              <Route path="create" element={<CreateDebt />} />
              <Route path="edit/:id" element={<EditDebt />} />
              <Route path="list" element={<DebtList />} />
            </Route>
          </Route>
        </Routes>
      </Router>{" "}
    </>
  );
};

export default App;
