import * as React from "react"
const Circle = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={27}
    height={27}
    fill="none"
    {...props}
  >
    <path
      stroke="#686868"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.875}
      d="M13.438.938c6.903 0 12.5 5.596 12.5 12.5 0 6.903-5.597 12.5-12.5 12.5-6.904 0-12.5-5.597-12.5-12.5M9.573 1.546a12.46 12.46 0 0 0-3.485 1.778M3.324 6.09a12.46 12.46 0 0 0-1.778 3.485"
    />
  </svg>
)
export default Circle
