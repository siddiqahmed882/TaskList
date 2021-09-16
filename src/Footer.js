const Footer = ({ items }) => {
  const remainingTasks = items.filter((item) => !item.checked);
  return (
    <footer>
      <p>
        {remainingTasks.length} {remainingTasks.length === 1 ? 'item' : 'items'} remaining
      </p>
    </footer>
  );
};

export default Footer;
