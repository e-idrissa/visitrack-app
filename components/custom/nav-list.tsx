import NavItem from "./nav-item";

const NavList = () => {
  const navigation = [
    { label: "Home", href: `/home` },
    { label: "All Visits", href: `/all` },
  ];

  return <div className="flex items-center gap-x-4">
    {navigation.map(({ label, href }) => (
        <NavItem key={href} label={label} href={`${href}`}/>
    ))}
  </div>;
};

export default NavList;
