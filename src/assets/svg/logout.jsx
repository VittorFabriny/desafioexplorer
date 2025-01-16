const LogOut = ({ width = 33, height = 32, fill = 'none', stroke = 'white', ...props }) => {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 33 32"
        fill={fill}
        xmlns="http://www.w3.org/2000/svg"
        id="logout"
        {...props}
      >
        <path
          d="M22.2891 11.75L27.5391 17M27.5391 17L22.2891 22.25M27.5391 17H13.5391M13.5391 28H6.53906C6.27385 28 6.01949 27.8946 5.83196 27.7071C5.64442 27.5196 5.53906 27.2652 5.53906 27V7C5.53906 6.73478 5.64442 6.48043 5.83196 6.29289C6.01949 6.10536 6.27385 6 6.53906 6H13.5391"
          stroke={stroke}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  };
  
  export default LogOut;