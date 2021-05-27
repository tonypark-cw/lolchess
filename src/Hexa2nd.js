import styled from "styled-components";

const Hex = styled.div`
   {
    .hexagon {
      width: 86px;
      height: 50px;
      top: 70px;
      left: 98px;
      background: pink;
      position: relative;
      margin: 5px;
      display: inline-block;
    }
    .hexagon:before {
      content: "";
      position: absolute;
      top: -25px;
      left: 0;
      width: 0;
      height: 0;
      border-left: 43px solid transparent;
      border-right: 43px solid transparent;
      border-bottom: 25px solid pink;
    }
    .hexagon:after {
      content: "";
      position: absolute;
      bottom: -25px;
      left: 0;
      width: 0;
      height: 0;
      border-left: 43px solid transparent;
      border-right: 43px solid transparent;
      border-top: 25px solid pink;
    }
  }
`;

function Hexamove() {
  return (
    <div>
      <Hex>
        <div className="hexagon"></div>
        <div className="hexagon"></div>
        <div className="hexagon"></div>
        <div className="hexagon"></div>
        <div className="hexagon"></div>
        <div className="hexagon"></div>
        <div className="hexagon"></div>
      </Hex>
    </div>
  );
}

export default Hexamove;
