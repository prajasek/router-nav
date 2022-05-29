import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getInvoice, deleteInvoice } from "../data";

const Invoice = () => {
  let invoiceId = useParams();
  let invoice = getInvoice(invoiceId.id);
  let navigate = useNavigate();
  let location = useLocation();


  if (invoice!==undefined) {
      console.log("done")
    return (
        <main style={{ padding: "1rem" }}>
        <h2>Total Due: {invoice.amount}</h2>
        <p>
            {invoice.name}: {invoice.number}
        </p>
        <p>Due Date: {invoice.due}</p>
        <button onClick={() => {
            deleteInvoice(invoice.number);
            navigate("/invoices" + location.search)}}>  Delete Invoice</button>  
    
        </main>  
    )
}
  else {
      console.log("nope")
      return <h2> Invoice Not Found </h2>
  }
}

export default Invoice;