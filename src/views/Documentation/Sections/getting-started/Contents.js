/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";
// reactstrap components
import { Card, Row, Col } from "reactstrap";

const fileStructure = `Argon Design System React
.
├── Documentation
│   └── documentation.html
├── CHANGELOG.md
├── ISSUE_TEMPLATE.md
├── LICENSE
├── README.md
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── assets
    │   ├── css
    │   │   ├── argon-design-system-react.css
    │   │   ├── argon-design-system-react.css.map
    │   │   └── argon-design-system-react.min.css
    │   ├── fonts
    │   │   └── nucleo
    │   ├── img
    │   │   ├── brand
    │   │   ├── icons
    │   │   │   └── common
    │   │   └── theme
    │   ├── scss
    │   │   ├── argon-design-system-react.scss
    │   │   ├── bootstrap
    │   │   │   ├── mixins
    │   │   │   └── utilities
    │   │   ├── core
    │   │   │   ├── alerts
    │   │   │   ├── avatars
    │   │   │   ├── badges
    │   │   │   ├── buttons
    │   │   │   ├── cards
    │   │   │   ├── charts
    │   │   │   ├── close
    │   │   │   ├── custom-forms
    │   │   │   ├── dropdowns
    │   │   │   ├── footers
    │   │   │   ├── forms
    │   │   │   ├── headers
    │   │   │   ├── icons
    │   │   │   ├── list-groups
    │   │   │   ├── maps
    │   │   │   ├── masks
    │   │   │   ├── mixins
    │   │   │   ├── modals
    │   │   │   ├── navbars
    │   │   │   ├── navs
    │   │   │   ├── paginations
    │   │   │   ├── popovers
    │   │   │   ├── progresses
    │   │   │   ├── separators
    │   │   │   ├── tables
    │   │   │   ├── type
    │   │   │   ├── utilities
    │   │   │   └── vendors
    │   │   ├── custom
    │   │   └── react
    │   └── vendor
    │       ├── @fortawesome
    │       │   └── fontawesome-free
    │       │       ├── LICENSE.txt
    │       │       ├── css
    │       │       ├── js
    │       │       ├── less
    │       │       ├── scss
    │       │       ├── sprites
    │       │       ├── svgs
    │       │       │   ├── brands
    │       │       │   ├── regular
    │       │       │   └── solid
    │       │       └── webfonts
    │       └── nucleo
    │           ├── css
    │           └── fonts
    ├── components
    │   ├── Footers
    │   │   ├── AdminFooter.js
    │   │   └── AuthFooter.js
    │   ├── Headers
    │   │   ├── Header.js
    │   │   └── UserHeader.js
    │   ├── Navbars
    │   │   ├── AdminNavbar.js
    │   │   └── AuthNavbar.js
    │   └── Sidebar
    │       └── Sidebar.js
    ├── index.js
    ├── layouts
    │   ├── Admin.js
    │   └── Auth.js
    ├── routes.js
    ├── variables
    │   └── charts.js
    └── views
        ├── Index.js
        └── examples
            ├── Icons.js
            ├── Login.js
            ├── Maps.js
            ├── Profile.js
            ├── Register.js
            └── Tables.js`;

class Contents extends React.Component {
  render() {
    return (
      <>
        <div className="ct-page-title">
          <h1 className="ct-title" id="content">
            Contents
          </h1>
          <div className="avatar-group mt-3" />
        </div>
        <p className="ct-lead">
          Discover what's included in Argon Design System React
        </p>
        <hr />
        <h2 id="argon-structure">Argon Design System React structure</h2>
        <p>
          Once downloaded, unzip the compressed folder and you’ll see something
          like this:
        </p>
        <SyntaxHighlighter language="html" style={prism}>
          {fileStructure}
        </SyntaxHighlighter>
        <h2 id="bootstrap-components">Bootstrap / Reactstrap components</h2>
        <p>
          Here is the list of Bootstrap 4 / Reactstrap components that were
          restyled in Argon Design System React:
        </p>
        <Row className="row-grid mt-5">
          <Col md="3">
            <Card className="shadow-sm">
              <div className="p-4 text-center">
                <h6 className="mb-0">Alerts</h6>
              </div>
            </Card>
          </Col>
          <Col md="3">
            <Card className="shadow-sm">
              <div className="p-4 text-center">
                <h6 className="mb-0">Badge</h6>
              </div>
            </Card>
          </Col>
          <Col md="3">
            <Card className="shadow-sm">
              <div className="p-4 text-center">
                <h6 className="mb-0">Buttons</h6>
              </div>
            </Card>
          </Col>
          <Col md="3">
            <Card className="shadow-sm">
              <div className="p-4 text-center">
                <h6 className="mb-0">Carousel</h6>
              </div>
            </Card>
          </Col>
        </Row>
        <Row className="row-grid">
          <Col md="3">
            <Card className="shadow-sm">
              <div className="p-4 text-center">
                <h6 className="mb-0">Dropdowns</h6>
              </div>
            </Card>
          </Col>
          <Col md="3">
            <Card className="shadow-sm">
              <div className="p-4 text-center">
                <h6 className="mb-0">Forms</h6>
              </div>
            </Card>
          </Col>
          <Col md="3">
            <Card className="shadow-sm">
              <div className="p-4 text-center">
                <h6 className="mb-0">Modal</h6>
              </div>
            </Card>
          </Col>
          <Col md="3">
            <Card className="shadow-sm">
              <div className="p-4 text-center">
                <h6 className="mb-0">Navs</h6>
              </div>
            </Card>
          </Col>
        </Row>
        <Row className="row-grid">
          <Col md="3">
            <Card className="shadow-sm">
              <div className="p-4 text-center">
                <h6 className="mb-0">Navbar</h6>
              </div>
            </Card>
          </Col>
          <Col md="3">
            <Card className="shadow-sm">
              <div className="p-4 text-center">
                <h6 className="mb-0">Pagination</h6>
              </div>
            </Card>
          </Col>
          <Col md="3">
            <Card className="shadow-sm">
              <div className="p-4 text-center">
                <h6 className="mb-0">Popover &amp; Tooltip</h6>
              </div>
            </Card>
          </Col>
          <Col md="3">
            <Card className="shadow-sm">
              <div className="p-4 text-center">
                <h6 className="mb-0">Progress</h6>
              </div>
            </Card>
          </Col>
        </Row>
        <h2 id="argon-components">Argon Design System components</h2>
        <p>
          Besides giving the existing Bootstrap elements a new look, we added
          new ones, so that the interface and consistent and homogenous. Going
          through them, we added:
        </p>
        <Row className="row-grid mt-5">
          <Col md="3">
            <Card className="shadow-sm">
              <div className="p-4 text-center">
                <h6 className="mb-0">Datepicker</h6>
              </div>
            </Card>
          </Col>
          <Col md="3">
            <Card className="shadow-sm">
              <div className="p-4 text-center">
                <h6 className="mb-0">Sliders</h6>
              </div>
            </Card>
          </Col>
          <Col md="3">
            <Card className="shadow-sm">
              <div className="p-4 text-center">
                <h6 className="mb-0">Checkboxes</h6>
              </div>
            </Card>
          </Col>
          <Col md="3">
            <Card className="shadow-sm">
              <div className="p-4 text-center">
                <h6 className="mb-0">Radio buttons</h6>
              </div>
            </Card>
          </Col>
        </Row>
        <Row className="row-grid">
          <Col md="3">
            <Card className="shadow-sm">
              <div className="p-4 text-center">
                <h6 className="mb-0">Toggle buttons</h6>
              </div>
            </Card>
          </Col>
          <Col md="3">
            <Card className="shadow-sm">
              <div className="p-4 text-center">
                <h6 className="mb-0">Font Awesome</h6>
              </div>
            </Card>
          </Col>
          <Col md="3">
            <Card className="shadow-sm">
              <div className="p-4 text-center">
                <h6 className="mb-0">Nucleo icons</h6>
              </div>
            </Card>
          </Col>
          <Col md="3">
            <Card className="shadow-sm">
              <div className="p-4 text-center">
                <h6 className="mb-0">Modals</h6>
              </div>
            </Card>
          </Col>
        </Row>
      </>
    );
  }
}

export default Contents;