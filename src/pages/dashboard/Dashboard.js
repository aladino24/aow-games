import React from "react";
import DataTable from "react-data-table-component";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Dashboard.css"; 

const data = [
  { id: 1, name: "Map1", description: "First map" },
  { id: 2, name: "Map2", description: "Second map" },
];

const columns = [
  {
    name: "ID",
    selector: (row) => row.id,
    sortable: true,
  },
  {
    name: "Name",
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: "Description",
    selector: (row) => row.description,
    sortable: true,
  },
  {
    name: "Actions",
    cell: (row) => (
      <div>
        <button className="btn btn-primary btn-sm mr-2">
          <i className="fas fa-edit"></i>
        </button>
        <button className="btn btn-danger btn-sm">
          <i className="fas fa-trash-alt"></i>
        </button>
      </div>
    ),
  },
];

const Dashboard = () => {
  return (
    <div className="container my-5">
      <div className="row mb-4">
        <div className="col-md-12">
          <h1 className="text-center">Dashboard</h1>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-md-4 mb-3 mb-md-0">
          <button className="btn btn-success w-100">
            <i className="fas fa-plus"></i> Add New Map
          </button>
        </div>
        <div className="col-md-4 mb-3 mb-md-0">
          <button className="btn btn-info w-100">
            <i className="fas fa-user-cog"></i> Manage User Accounts
          </button>
        </div>
        <div className="col-md-4">
          <button className="btn btn-warning w-100">
            <i className="fas fa-history"></i> View War History
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <DataTable
            title="War Maps"
            columns={columns}
            data={data}
            pagination
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
