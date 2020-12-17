import React from 'react';
import styled from 'styled-components';

export const TabbedBoxLayout = styled.div`
    display: flex;
    flex-direction: row;
`

export const TabbedBoxLeftCol = styled.div`
    flex: 0 0 calc(50% - 16px);
    margin-right: 16px;
`

export const TabbedBoxRightCol = styled.div`
    flex: 0 0 calc(50% - 16px);
    margin-left: 16px;
`

export default TabbedBoxLayout;