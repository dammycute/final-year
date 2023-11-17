const IconTextBox = ({ icon, text }) => {
  return (
    <div className="flex items-center gap-x-4 text-[#4B4B4B] p-3 font-medium text-xs">
      <img src={icon} alt={`${icon} icon`} />
      <p>{text}</p>
    </div>
  );
};

export default IconTextBox;
