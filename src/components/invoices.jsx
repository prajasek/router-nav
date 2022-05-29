import React from 'react';
import { Link, NavLink, Outlet, useLocation, useSearchParams } from 'react-router-dom';
import { getInvoices } from '../data';

function QueryNavLink({ to, ...props }) {
    console.log(props)
  let location = useLocation();
  return <NavLink to={to + location.search} {...props} />;
}

export default function Invoices() {
    let invoices = getInvoices();
    let [search, setSearch] = useSearchParams();
    console.log("Search1", search.get("filter"))
    let location = useLocation();
    console.log(location)

    return (
    <div style={{ display: "flex" }}>
        <nav
            style={{
            borderRight: "solid 1px",
            padding: "1rem",
            }}
        >
        <input 
        value={search.get('filter') || ""}
        onChange={(event) => {

            let filter = event.target.value;
            if (filter) {
                setSearch({filter})
            } else {
                setSearch({})
            }
        }} />
        {invoices
          .filter((invoice) => {
            let filter = search.get("filter");
            if (!filter) return true;
            let name = invoice.name.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          }).map((invoice) => (
        <QueryNavLink
            style={({ isActive }) => {
                return {
                    display: "block",
                    margin: "1rem",
                    color: isActive ? "red" : "",
                    fontSize: isActive ? "20px" : "",
                    transition: "200ms ease all"
                }
            }}
            to={`/invoices/${invoice.number}`}
            key={invoice.number}
        >
            {invoice.name}
            </QueryNavLink>
            ))}
        </nav>
        <div style={{paddingLeft:'1rem'}}>
            <Outlet/>
        </div>
    </div>
        
    );
}

