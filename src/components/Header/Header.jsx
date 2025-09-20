import headerLogo from "@images/logo.svg";

function Header() {
  return (
    <>
      <header className="header">
        <img src={headerLogo} alt="logo de Around" className="header__logo" />
      </header>
    </>
  );
}

export default Header;
