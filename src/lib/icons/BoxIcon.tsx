import React from "react";

const BoxIcon = ({ color = "green", className = "", width = 18, height = 21 }) => (
    <svg 
        width={width} 
        height={height} 
        viewBox="0 0 18 21" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className={className}
    >
        <path 
            d="M17.457 4.54688V15.875L8.94141 20.1719L0.425781 15.875V4.54688L4.68359 2.39844L13.2383 6.65625V10.9141L11.793 11.6172V7.51562L4.68359 4L1.83203 5.36719V15.0547L8.94141 18.5703L16.0508 15.0547V5.36719L8.94141 1.85156L7.84766 2.39844L6.24609 1.57812L8.94141 0.25L17.457 4.54688ZM3.27734 12.3594L7.49609 14.4688V16.2266L3.27734 14.1562V12.3594Z" 
            fill={color} 
        />
    </svg>
);

export default BoxIcon;
