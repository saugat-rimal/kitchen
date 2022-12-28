import { NavLink } from "react-router-dom";

const RoundedBox = (props) => {
  return (
    <div>
      <NavLink
        to={`/cuisine/${props.text}`}
        className="flex gap-1 items-center flex-col p-5 w-24 h-24 rounded-full justify-center hover:shadow-xl shadow-lg
        bg-gradient-to-r from-[#494949] to-[#313131] text-white hover:text-white
        hover:bg-gradient-to-r hover:from-[#61dafb] hover:to-[#646cff] 
        "
      >
        {props.icon}
        <h3>{props.text}</h3>
      </NavLink>
    </div>
  );
};

export default RoundedBox;
