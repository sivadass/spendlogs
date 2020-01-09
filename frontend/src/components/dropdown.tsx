import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

interface DropdownProps {
  trigger: any;
  children: any;
}

const Dropdown: React.FC<DropdownProps> = ({ trigger, children }) => {
  const node = useRef<any>(null);
  const [open, setOpen] = useState(false);

  const handleClickOutside = (e: any) => {
    if (node.current.contains(e.target)) {
      return;
    }
    setOpen(false); // outside click
  };

  useEffect(() => {
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <DropdownContainer className="dropdown" ref={node}>
      <Trigger className="dropdown-trigger" onClick={e => setOpen(!open)}>
        {trigger}
      </Trigger>
      {open && <Contents className="dropdown-contents">{children}</Contents>}
    </DropdownContainer>
  );
};

const DropdownContainer = styled.div`
  position: relative;
`;

const Trigger = styled.div`
  padding: 16px;
`;

const Contents = styled.div`
  z-index: 11;
  position: absolute;
  min-width: 280px;
  top: 48px;
  right: 0;
  padding: 8px;
  border-radius: 6px;
  box-shadow: 0 0 24px rgba(0, 0, 0, 0.1);
  background: #fff;
  color: #232323;
`;

export default Dropdown;
