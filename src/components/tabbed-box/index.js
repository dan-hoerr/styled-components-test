import React from "react";
import Container from "../layout/container";
import styled from 'styled-components';
import {
  TabbedBoxLayout,
  TabbedBoxLeftCol,
  TabbedBoxRightCol,
} from "./components/layout";
import { TabList, TabListEntry } from "./components/tablist";

const tabData = [
  {
    tabLabel: "Data analytics and visualization",
    tabSubtitle: "Empower Customer with data insights.",
    tabContent: "https://www.fillmurray.com/700/500",
  },
  {
    tabLabel: "An intelligent workspace",
    tabSubtitle: "Delight with universal search and feeds.",
    tabContent: "https://www.placecage.com/700/500",
  },
  {
    tabLabel: "Identity and access management",
    tabSubtitle: "Enable with single-sign on and access management",
    tabContent: "https://www.stevensegallery.com/700/500",
  },
];

const Headline = styled.h2`
    font-family: sans-serif;
    font-size: 36px;
    font-weight: 600
    line-height: 40.5px
`

class TabbedBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(index) {
    this.setState({ activeTab: index});
  }

  render() {
    return (
      <Container>
        <TabbedBoxLayout>
          <TabbedBoxLeftCol>
            <Headline>Manage digital relationships to drive customer engagement.</Headline>
            <TabList>
              {tabData.map((tab, index) => (
                <TabListEntry
                  tab={tab}
                  key={index}
                  index={index}
                  active={index === this.state.activeTab}
                  clickHandler={this.handleClick}
                />
              ))}
            </TabList>
          </TabbedBoxLeftCol>
          <TabbedBoxRightCol>
              <img alt={`${tabData[this.state.activeTab].tabLabel} visualization`} src={tabData[this.state.activeTab].tabContent} />
          </TabbedBoxRightCol>
        </TabbedBoxLayout>
      </Container>
    );
  }
}

export default TabbedBox;
