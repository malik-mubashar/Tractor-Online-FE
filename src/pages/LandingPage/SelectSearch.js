import React from "react";
import VirtualizedSelect from 'react-virtualized-select'; 
import 'react-select/dist/react-select.css'; 
import 'react-virtualized/styles.css'; 
import 'react-virtualized-select/styles.css';

const SelectSearch = ({ options, label, value, setValue }) => {

  return (
    <VirtualizedSelect
      options={options}
      onChange={(e) => setValue(e.label)}
      value={value}
      className="selectSearchContainer text-truncate"
      placeholder={label}
      clearable={false}
    />
  );
};

export default SelectSearch;
