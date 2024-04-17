import React, { useState } from "react";
import { MenuItem, SubMenu } from "react-pro-sidebar";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

const DropdownMenu = ({ label, items, icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="test-dark">
      <SubMenu title={label} icon={icon} className="text-dark fs-6">
        {items.map((item) => (
          <MenuItem
            key={item.value}
            onClick={() => item.onClick()}
            className="text-dark p-2"
            icon={<PersonOutlineOutlinedIcon />}
          >
            {item.label}
          </MenuItem>
        ))}
      </SubMenu>
    </div>
  );
};

export default DropdownMenu;
