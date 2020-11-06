import React from 'react';
import { Tab, Nav, Row, Col, Table } from 'react-bootstrap';

const Menu = () => (
  <Tab.Container defaultActiveKey="item1">
    <Row>
      <Col sm={3}>
        <Nav className="flex-column">
          <Nav.Item>
            <Nav.Link eventKey="item1">Manicure</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="item2">Pedicure</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="item3">Removal and coverage</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="item4">Extension and correction</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="item5">Design</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="item6">Additional services</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="item7">Men</Nav.Link>
          </Nav.Item>
        </Nav>
      </Col>
      <Col sm={9}>
        <Tab.Content>
          <Tab.Pane eventKey="item1">
            <Table>
              <thead>
                <tr>
                  <th colSpan="2">Women's manicure: with / without coating</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Classic</td>
                  <td>400/900</td>
                </tr>
                <tr>
                  <td>Combined, hardware</td>
                  <td>700/1200</td>
                </tr>
              </tbody>
            </Table>
            <Table>
              <thead>
                <tr>
                  <th colSpan="2">Children's manicure</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Uncoated / Coated</td>
                  <td>500/700</td>
                </tr>
              </tbody>
            </Table>
            <Table>
              <thead>
                <tr>
                  <th colSpan="2">SPA manicure: coated / uncoated NEW</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>SPA coated manicure (coating and treatment at choice)</td>
                  <td>2300</td>
                </tr>
                <tr>
                  <td>SPA manicure without coating (treatment of your choice)</td>
                  <td>1500</td>
                </tr>
              </tbody>
            </Table>
          </Tab.Pane>
          <Tab.Pane eventKey="item2">
            <Table>
              <thead>
                <tr>
                  <th colSpan="2">
                    Women's pedicure: covered / uncovered
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Classic</td>
                  <td>1250/1700</td>
                </tr>
                <tr>
                  <td>Combined, hardware</td>
                  <td>1450/1700</td>
                </tr>
                <tr>
                  <td>Atraumatic</td>
                  <td>1800/1900</td>
                </tr>
                <tr>
                  <td>Classic Express (no foot treatment)</td>
                  <td>500</td>
                </tr>
                <tr>
                  <td>Hardware-express (no foot processing)</td>
                  <td>800</td>
                </tr>
              </tbody>
            </Table>
            <Table>
              <thead>
                <tr>
                  <th colSpan="2">
                    SPA pedicure: coated / uncovered NEW
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>SPA pedicure with coating (coating and treatment of your choice)</td>
                  <td>3200</td>
                </tr>
                <tr>
                  <td>SPA pedicure without coating (treatment of your choice)</td>
                  <td>2000</td>
                </tr>
              </tbody>
            </Table>
          </Tab.Pane>
          <Tab.Pane eventKey="item3">
            <Table>
              <thead>
                <tr>
                  <th colSpan="2">
                    Covering
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Lacquer</td>
                  <td>700</td>
                </tr>
                <tr>
                  <td>Gel polish TOP</td>
                  <td>500</td>
                </tr>
                <tr>
                  <td>Tertiso gel polish</td>
                  <td>800</td>
                </tr>
                <tr>
                  <td>Beautix gel polish</td>
                  <td>1200</td>
                </tr>
                <tr>
                  <td>Gel polish LUXIO, OPI, CND</td>
                  <td>1400</td>
                </tr>
              </tbody>
            </Table>
            <Table>
              <thead>
                <tr>
                  <th colSpan="2">
                    Withdrawal
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>lacquer</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>Gel polish (when covered)</td>
                  <td>300</td>
                </tr>
                <tr>
                  <td>Gel polish (uncoated)</td>
                  <td>500</td>
                </tr>
                <tr>
                  <td>Artificial nails</td>
                  <td>600</td>
                </tr>
              </tbody>
            </Table>
            <Table>
              <thead>
                <tr>
                  <th colSpan="2">
                    Alignment
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Base</td>
                  <td>500</td>
                </tr>
                <tr>
                  <td>Acrylic</td>
                  <td>700</td>
                </tr>
              </tbody>
            </Table>
          </Tab.Pane>
          <Tab.Pane eventKey="item4">
            <Table>
              <thead>
                <tr>
                  <th colSpan="2">
                    Upbuilding
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Artificial nails extension (uncoated)</td>
                  <td>2800</td>
                </tr>
              </tbody>
            </Table>
            <Table>
              <thead>
                <tr>
                  <th colSpan="2">
                    Correction
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Correction of artificial nails (uncoated)</td>
                  <td>1600</td>
                </tr>
              </tbody>
            </Table>
            <Table>
              <thead>
                <tr>
                  <th colSpan="2">
                    Extension manicure
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Hardware</td>
                  <td>700</td>
                </tr>
              </tbody>
            </Table>
            <Table>
              <thead>
                <tr>
                  <th colSpan="2">
                    Extension coating
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Beautix gel polish</td>
                  <td>1200</td>
                </tr>
                <tr>
                  <td>Luxio gel polish</td>
                  <td>1400</td>
                </tr>
              </tbody>
            </Table>
          </Tab.Pane>
          <Tab.Pane eventKey="item5">
            <Table>
              <thead>
                <tr>
                  <th colSpan="2">
                    SPA pedicure: coated / uncovered NEW
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>French, reverse jacket</td>
                  <td>40</td>
                </tr>
                <tr>
                  <td>Lunar</td>
                  <td>50</td>
                </tr>
                <tr>
                  <td>Gradient, ombre with alignment of the nail plate</td>
                  <td>120</td>
                </tr>
                <tr>
                  <td>Stencil airbrushing, sticker, slider</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>Broken glass</td>
                  <td>200</td>
                </tr>
                <tr>
                  <td>Komifubiki, foil, stamping</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>Modeling with acrylic, 3D gel</td>
                  <td>500</td>
                </tr>
                <tr>
                  <td>Easy drawing (up to 2 min)</td>
                  <td>50</td>
                </tr>
                <tr>
                  <td>Medium drawing (up to 5 min)</td>
                  <td>150</td>
                </tr>
                <tr>
                  <td>Complex drawing (up to 10 min)</td>
                  <td>250</td>
                </tr>
                <tr>
                  <td>Artistic painting (up to 20 min)</td>
                  <td>500</td>
                </tr>
                <tr>
                  <td>Rhinestones (1 pc / up to 15 pcs / more than 15 pcs)</td>
                  <td>50 / 150 / 400</td>
                </tr>
                <tr>
                  <td>Velvet manicure</td>
                  <td>150</td>
                </tr>
                <tr>
                  <td>Mirror shine, rubbinge</td>
                  <td>100</td>
                </tr>
              </tbody>
            </Table>
          </Tab.Pane>
          <Tab.Pane eventKey="item6">
            <Table>
              <thead>
                <tr>
                  <th colSpan="2">
                    Additional services
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>SPA - cold paraffin for hands</td>
                  <td>400</td>
                </tr>
                <tr>
                  <td>SPA - cold paraffin for feet</td>
                  <td>500</td>
                </tr>
                <tr>
                  <td>Hand scrub</td>
                  <td>150</td>
                </tr>
                <tr>
                  <td>Foot scrub</td>
                  <td>200</td>
                </tr>
                <tr>
                  <td>Correction of biting natural nails</td>
                  <td>500</td>
                </tr>
                <tr>
                  <td>Extension of 1 nail (without manicure)</td>
                  <td>500</td>
                </tr>
                <tr>
                  <td>Extension of 1 nail (for manicure)</td>
                  <td>350</td>
                </tr>
                <tr>
                  <td>Extension of 1 nail</td>
                  <td>200</td>
                </tr>
                <tr>
                  <td>Nail polishing</td>
                  <td>300</td>
                </tr>
                <tr>
                  <td>Shaping (no manicure)</td>
                  <td>300</td>
                </tr>
                <tr>
                  <td>The IBX Healing System</td>
                  <td>600</td>
                </tr>
                <tr>
                  <td>rind Healing Coating</td>
                  <td>500</td>
                </tr>
              </tbody>
            </Table>
          </Tab.Pane>
          <Tab.Pane eventKey="item7">
            <Table>
              <thead>
                <tr>
                  <th colSpan="2">
                    Manicure for men
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Classical</td>
                  <td>1200</td>
                </tr>
                <tr>
                  <td>Combined, hardware</td>
                  <td>1500</td>
                </tr>
                <tr>
                  <td>SPA manicure (treatment of your choice)</td>
                  <td>1800</td>
                </tr>
              </tbody>
            </Table>
            <Table>
              <thead>
                <tr>
                  <th colSpan="2">
                    Male pedicure
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Classical</td>
                  <td>1700</td>
                </tr>
                <tr>
                  <td>Combined, hardware</td>
                  <td>2000</td>
                </tr>
                <tr>
                  <td>Atraumatic</td>
                  <td>2300</td>
                </tr>
                <tr>
                  <td>SPA pedicure (optional treatment)</td>
                  <td>2400</td>
                </tr>
              </tbody>
            </Table>
            <Table>
              <thead>
                <tr>
                  <th colSpan="2">
                    Stylist services
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Model haircut</td>
                  <td>2500</td>
                </tr>
                <tr>
                  <td>Haircut for a typewriter</td>
                  <td>1500</td>
                </tr>
                <tr>
                  <td>Beard styling</td>
                  <td>1200</td>
                </tr>
              </tbody>
            </Table>
          </Tab.Pane>
        </Tab.Content>
      </Col>
    </Row>
  </Tab.Container>
)

export default Menu;