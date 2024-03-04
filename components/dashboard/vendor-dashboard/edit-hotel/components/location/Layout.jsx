import React, { useState } from "react";
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';
import '../Tagsinput.css';

const Layout = ({rooms, setRooms}) => {
  // Define state to hold table data
  const [tableData, setTableData] = useState(rooms);

  // Function to add a new row to the table body and update state
  const addRoomRow = () => {
    console.log("first")
    setRooms([...rooms, {
      bedType: "",
      occupants: "",
      roomFacilities: []
    }]
    );
    console.log(rooms)
  };

  // Function to handle changes in input fields and update state
  const handleInputChange = (index, key, value) => {
    const updatedData = [...rooms];
    updatedData[index][key] = value;
    setRooms(updatedData);
    // console.log(updatedData)
  };

  // Function to remove the last row from table body
  const handleRemoveRow = () => {
    if (rooms.length > 1) {
      const updatedData = [...rooms];
      updatedData.pop();
      setRooms(updatedData);
    }
  };

  // Render table rows
  const renderTableRows = () => {
    return rooms.map((row, index) => (
      <tr key={index}>
        <td className="col-2">
          <div className="form-input">
            <input
              type="text"
              required
              value={row.bedType}
              onChange={(e) =>
                handleInputChange(index, "bedType", e.target.value)
              }
            />
            <label className="lh-1 text-16 text-light-1">Bed Type</label>
          </div>
        </td>
        <td className="col-1">
          <div className="form-input">
            <input
              type="number"
              required
              value={row.occupants}
              onChange={(e) =>
                handleInputChange(index, "occupants", e.target.value)
              }
            />
            <label className="lh-1 text-16 text-light-1">Occupants</label>
          </div>
        </td>
        <td className="col-6">
          <TagsInput
            value={row.roomFacilities}
            onChange={(tags) => handleInputChange(index, "roomFacilities", tags)}
            inputProps={{
              placeholder: 'Add a facility',
            }}
          />
        </td>
        <td className="col-auto">
          {index === rooms.length - 1 && (
            <button className="flex-center bg-light-2 rounded-4 size-35" onClick={handleRemoveRow}>
              <i className="icon-trash-2 text-16 text-light-1" />
            </button>
          )}
        </td>
      </tr>
    ));
  };

  return (
    <div className="mt-30">
      <div className="fw-500 mb-20">Suite Layout</div>
      <div className="overflow-scroll scroll-bar-1">
        <table className="table-5 -border-bottom col-12">
          <thead className="bg-light-2">
            <tr>
              <th>Bed Type</th>
              <th>Occupants</th>
              <th className="col-6">Room Facilities</th>
              <th />
            </tr>
          </thead>
          <tbody>{renderTableRows()}</tbody>
        </table>
        <div className="d-flex justify-end">
          <button
            className="button -md -blue-1 bg-blue-1-05 text-blue-1 mt-20"
            onClick={addRoomRow}
          >
            Add Room
          </button>
        </div>
      </div>
    </div>
  );
};

export default Layout;
