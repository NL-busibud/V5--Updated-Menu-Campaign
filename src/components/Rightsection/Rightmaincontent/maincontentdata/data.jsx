import { useMemo, useState } from "react";
import { Plus, Settings } from "lucide-react";
import {FaSortDown, FaSortUp} from "react-icons/fa";
import "./data.css";

import { columns, sheetTabs, tableData } from "./data.js";

function Data() {
  const [activeSheet, setActiveSheet] = useState(sheetTabs[0]?.id);
  const [selectedRows, setSelectedRows] = useState([]);
  const [showAddMenu, setShowAddMenu] = useState(false);

  const allRowsSelected = useMemo(
    () => tableData.length > 0 && selectedRows.length === tableData.length,
    [selectedRows],
  );

  const toggleAllRows = () => {
    setSelectedRows(allRowsSelected ? [] : tableData.map((row) => row.id));
  };

  const toggleRow = (rowId) => {
    setSelectedRows((currentRows) =>
      currentRows.includes(rowId)
        ? currentRows.filter((id) => id !== rowId)
        : [...currentRows, rowId],
    );
  };

  const getColumnStyle = (column) => ({
    "--column-width": (column.width ?? 180) + "px",
  });

  return (
    <section className="main-content-data" aria-label="Lead data table">
      <div className="table-scroll-area">
        <div className="degree-label">1st degree</div>

        <table className="data-table">
          <colgroup>
            <col className="checkbox-column" />
            <col className="number-column" />
            {columns.map((column) => (
              <col
                key={column.key}
                className="data-column"
                style={getColumnStyle(column)}
              />
            ))}
          </colgroup>

          <thead>
            <tr>
              <th className="checkbox-column">
                <input
                  type="checkbox"
                  aria-label="Select all rows"
                  checked={allRowsSelected}
                  onChange={toggleAllRows}
                />

              </th>
              <th className="number-column" aria-label="Row number" />
              {columns.map((column) => (
                <th
                  key={column.key}
                  className={column.type === "action" ? "add-column-header" : ""}
                  style={getColumnStyle(column)}
                >
                  {column.type === "action" ? (
                    <button className="add-column-button" type="button">
                      <Plus size={15} strokeWidth={2} aria-hidden="true" />
                      <span>{column.label}</span>
                    </button>
                  ) : (
                    column.label
                  )}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {tableData.map((row, index) => (
              <tr key={row.id}>
                <td className="checkbox-column">
                  <input
                    type="checkbox"
                    aria-label={"Select row " + (index + 1)}
                    checked={selectedRows.includes(row.id)}
                    onChange={() => toggleRow(row.id)}
                  />
                </td>
                <td className="number-column">{index + 1}</td>
                {columns.map((column) => (
                  <td
                    key={column.key}
                    className="data-cell"
                    style={getColumnStyle(column)}
                    title={row[column.key] ?? ""}
                  >
                    {column.type === "action" ? "" : row[column.key] ?? ""}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <footer className="sheet-bottom-bar">
        <div className="sheet-left">
          <div className="sheet-tabs" role="tablist" aria-label="Sheets">
            {sheetTabs.map((sheet) => (
              <button
                key={sheet.id}
                className={"sheet-tab " + (activeSheet === sheet.id ? "active" : "")}
                type="button"
                role="tab"
                aria-selected={activeSheet === sheet.id}
                onClick={() => setActiveSheet(sheet.id)}
              >
                {sheet.label}
              </button>
            ))}
          </div>

          <div className="add-sheet-wrapper">
            <button
              className="add-sheet-button"
              type="button"
              onClick={() => setShowAddMenu((prev) => !prev)}
            >
              <Plus size={14} strokeWidth={2} aria-hidden="true" />

              <span>Add</span>

              {showAddMenu ? (
                <FaSortUp size={14} strokeWidth={2} aria-hidden="true" />
              ) : (
                <FaSortDown size={14} strokeWidth={2} aria-hidden="true" />
              )}
            </button>

            {showAddMenu && (
              <div className="add-sheet-menu">
                <button type="button">
                  Add as a blank sheet
                </button>

                <button type="button">
                  Add as duplicate
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="sheet-right">
          <button className="pending-jobs-button" type="button">
            View pending jobs
          </button>
          <button className="sheet-settings-button" type="button" aria-label="Sheet settings">
            <Settings size={16} strokeWidth={2} aria-hidden="true" />
          </button>
        </div>
      </footer>
    </section>
  );
}

export default Data;
