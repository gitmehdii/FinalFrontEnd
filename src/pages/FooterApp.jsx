import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";

const FooterApp = () => {
  return (
      <Footer style={
        {
          borderRadius: "0px",
        }
      } className="bg-slate-200 dark:bg-slate-800 ">
        <div className="flex justify-center items-center w-full"> {/* Ajoutez 'w-full' ici */}
          <div className="text-center">
            <div className="justify-between sm:flex sm:items-center sm:justify-between">
              <Footer.Brand>
                <Link to="/">
                  <img
                      src="../public/images/website-logo-sample.png"
                      className="mr-3 h-6 sm:h-9"
                      alt="Sample website logo"
                  />
                </Link>
              </Footer.Brand>
            </div>
            <Footer.Divider />
            <Footer.Copyright href="#" by="Flowbite™" year={2024} className="self-center" /> {/* Ajoutez 'self-center' ici */}
          </div>
        </div>
      </Footer>
  );
};

export default FooterApp;