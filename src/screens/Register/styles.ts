import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  height: ${RFPercentage(15)};
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.shape};
  margin-top: ${RFValue(getStatusBarHeight())}px;
`;

export const Form = styled.View`
  flex: 1;
  width: 100%;
  padding: ${RFValue(24)}px;
  padding-bottom: ${getBottomSpace() + 8}px
  justify-content: space-between;
`;

export const Fields = styled.View``;

export const TransactionButtonsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;
`;
