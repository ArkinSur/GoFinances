import { Feather } from '@expo/vector-icons';
import { Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

type CategoryProps = {
  isActive: boolean;
};

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  height: ${RFPercentage(Platform.OS === 'ios' ? 15 : 14)}px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.shape};
  margin-top: ${Platform.OS === 'ios' ? RFValue(getStatusBarHeight()) : 24}px;
`;

export const Category = styled.TouchableOpacity<CategoryProps>`
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: ${RFValue(15)}px;
  ${({ isActive, theme }) =>
    isActive &&
    css`
      background-color: ${theme.colors.secondaryLight};
    `}
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  margin-left: 16px;
`;

export const Separator = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.textDark};
`;

export const Footer = styled.View`
  margin-top: 16px;
  width: 100%;
  padding: ${RFValue(24)}px;
`;
