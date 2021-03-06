import React from "react";
export const Footer = () => {
  // let url = "#";
  return (
    // <footer className="page-footer font-small blue pt-4">
    // <footer className="page-footer navbar-light bg-light fixed-bottom">
    <footer className="mt-auto">

      <div className="container-fluid text-md-left">
        <div className="row">
          <div className="col-md-6 mt-md-0 mt-3">
            <h5 className="text-uppercase">Footer Content</h5>
            <p>
              Here you can use rows and columns to organize your footer content.
            </p>
          </div>
          <hr className="clearfix w-100 d-md-none pb-3" />
          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase">Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!">Link 1</a>
              </li>
              <li>
                <a href="#!">Link 2</a>
              </li>
              <li>
                <a href="#!">Link 3</a>
              </li>
              <li>
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase">Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!">Link 1</a>
              </li>
              <li>
                <a href="#!">Link 2</a>
              </li>
              <li>
                <a href="#!">Link 3</a>
              </li>
              <li>
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center">
        <div className="footer-copyright  py-3">
          © 2020 Copyright:
          <a href="https://github.com/ILLYAKO" target="_blank" rel="noopener noreferrer" > Illya Korotun</a>
        </div>
      </div>
    </footer>
  );
};
