import React from "react";
import styled from "styled-components";
import { BaseList } from "../../atoms/baseList";
import Icon from "../../atoms/svg";
import { Link } from "../../atoms/link";

export const TabList = styled(BaseList)`
  position: relative;
`;

export const TabListItem = styled.li`
  min-width: 320px;
  margin-bottom: 12px;
  border-bottom: 2px solid #dcdcdc;
`;

export const TabListIconContainer = styled.div`
  display: block;
  width: 50px;
`;

const TabListLink = styled(Link)`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    padding: 16px 0 16px 28px;
    box-shadow: ${props => props.active ? '0 13px 15px 3px hsla(0,0%,60.8%,.2);' : 'none' }
`

const TabListTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Svg = styled(Icon)`
  height: 30px;
  margin-right: 28px;
  path, polygon {
      filter: ${props => props.active ? "none" : "url(#grayscaleFilter)" }
  }
`;

const TabListTitle = styled.h2`
    font-family: sans-serif;
    margin: 0;
    color: ${props => props.active ? "#1f2326" : "inherit"}
`

const TabListShortSummary = styled.p`
    font-family: sans-serif;
    margin: 0;
    white-space: normal;
    color: #1f2326;
`

export const TabListEntry = (props) => {
  return (
    <TabListItem>
      <TabListLink href="#" onClick={() => props.clickHandler(props.index) } active={props.active}>
        <TabListIconContainer>
          <Svg viewbox="0 0 30 30" active={props.active}>
            <defs>
              <linearGradient
                id="circle"
                x1="-3.86"
                x2="34.8"
                y1="33.86"
                y2="-4.8"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#149dd8" offset="0"></stop>
                <stop stopColor="#669940" offset="1"></stop>
              </linearGradient>
              <linearGradient
                id="checkmark"
                x1="48.77"
                x2="122.06"
                y1="20.99"
                y2="-52.29"
                gradientTransform="translate(-55.2 -34.33) rotate(45)"
                xlinkHref="#circle"
              ></linearGradient>
              <filter id="grayscaleFilter">
                <feComposite result="inputTo_38" in="SourceGraphic" in2="SourceGraphic" operator="arithmetic" k1="0" k2="1" k3="0" k4="0"></feComposite>
                <feColorMatrix id="filter_38" type="saturate" values="0" data-filterid="38"></feColorMatrix>
              </filter>
            </defs>
            <path
              d="M15,.42A14.58,14.58,0,1,0,29.58,15,14.6,14.6,0,0,0,15,.42Zm0,27.77A13.19,13.19,0,1,1,28.19,15,13.21,13.21,0,0,1,15,28.19Z"
              fill="url(#circle)"
            ></path>
            <polygon
              points="12.27 17.98 9.8 15.52 10.79 14.53 13.25 17 19.21 11.04 20.2 12.02 14.23 17.98 13.25 18.96"
              fill="url(#checkmark)"
            ></polygon>
          </Svg>
        </TabListIconContainer>
        <TabListTextContainer>
            <TabListTitle active={props.active}>
                {props.tab.tabLabel}
            </TabListTitle>
            <TabListShortSummary>
                {props.tab.tabSubtitle}
            </TabListShortSummary>

        </TabListTextContainer>
      </TabListLink>
    </TabListItem>
  );
};
