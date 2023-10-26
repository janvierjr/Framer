const ToggleButton = ({setOpen}) => {
  return (
    <button onClick={
      () => setOpen(prev => !prev)
    } className="sidebar-btn">Menu</button>
  )
};

export default ToggleButton;