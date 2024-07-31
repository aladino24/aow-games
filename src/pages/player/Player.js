import React, { useState, useEffect } from "react";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import axios from 'axios';
import 'primereact/resources/themes/saga-blue/theme.css'; 
import 'primereact/resources/primereact.min.css'; 
import 'primeicons/primeicons.css'; 
import './Player.css';
import Loading from '../../components/Loading'; 
import API_URL from "../../constant/ApiUrl";

const Player = () => {
    const [players, setPlayers] = useState([]);
    const [globalFilter, setGlobalFilter] = useState(null);
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        axios.get(API_URL + 'users/all')
            .then(response => {
                setPlayers(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error("There was an error fetching the players!", error);
                setLoading(false); // Set loading to false even if there is an error
            });
    }, []);

    const header = (
        <div className="table-header">
            <h2 className="table-title">Player List</h2>
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Search..." />
            </span>
        </div>
    );

    const rowNumberTemplate = (rowData, column) => {
        return column.rowIndex + 1;
    };

    if (loading) {
        return <Loading />; 
    }

    return (
        <div className="player-page">
            <div className="card">
                <DataTable 
                    value={players} 
                    responsiveLayout="scroll" 
                    paginator 
                    rows={10} 
                    globalFilter={globalFilter} 
                    header={header}
                    className="p-datatable-gridlines">
                    <Column header="No" body={rowNumberTemplate} />
                    <Column field="nameId" header="Name ID" sortable />
                    <Column field="rankAccount" header="Rank" sortable />
                    <Column field="fraksi" header="Fraksi" sortable />
                    <Column field="jumlahSkillCard" header="Jumlah Skill Card" sortable />
                    <Column field="jumlahUpgrade" header="Jumlah Upgrade" sortable />
                    <Column field="keterangan" header="Keterangan" sortable />
                    <Column field="namaPemilikAccount" header="Nama Pemilik Account" sortable />
                </DataTable>
            </div>
        </div>
    );
}

export default Player;
