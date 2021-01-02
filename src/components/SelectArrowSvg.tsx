import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      style={{
        flex: 1
      }}
      {...props}
    >
      <path
        d="M5.12 18.11a1 1 0 01-1.36.36 1 1 0 01-.36-.36L.14 12.52a1 1 0 01.36-1.36 1 1 0 01.5-.14h6.52a1 1 0 011 1 1 1 0 01-.14.49zM3.4.5A1 1 0 014.76.14a1 1 0 01.36.36l3.26 5.59a1 1 0 01-.86 1.5H1a1 1 0 01-1-1 1 1 0 01.14-.5z"
        fill="#fff"
      />
    </svg>
  );
}

export default SvgComponent;
