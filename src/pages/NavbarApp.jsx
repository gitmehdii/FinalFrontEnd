import { Button, Navbar, DarkThemeToggle } from "flowbite-react";
import { Link } from "react-router-dom";

function NavbarApp() {
  return (
    <Navbar style={
        {
            borderRadius: "0px",
        }

    } fluid rounded className="bg-slate-200 dark:bg-slate-800">
      <Navbar.Brand>
        <Link to="/">
          <img
            src="/images/mehdi_logo-removebg-preview.png"
            className="mr-3 h-6 sm:h-12"
            alt="Sample website logo"
          />
        </Link>
      </Navbar.Brand>

      <div className="flex md:order-2">
        <DarkThemeToggle />
        <Button>
          <Link to="/contact">Contact</Link>
        </Button>
        <Navbar.Toggle />
      </div>

      <Navbar.Collapse>
        <Navbar.Link>
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link>
          <Link to="/portfolio">Portfolio</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarApp;
