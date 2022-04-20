import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';
import { FlatList, FlatListProps, Platform } from 'react-native';
import { Data } from '../../components/TransactionCard';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(42)}px;
  background-color: ${({ theme }) => theme.colors.primary};

  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
`;

export const UserWrapper = styled.View`
  width: 100%;
  padding: 0 ${RFValue(20)}px;
  margin-top: ${getStatusBarHeight() + RFValue(Platform.OS === 'ios' ? 28 : 6)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Photo = styled.Image`
  width: ${RFValue(50)}px;
  height: ${RFValue(50)}px;
  border-radius: 10px;
`;

export const User = styled.View`
  margin-left: ${RFValue(14)}px;
`;

export const UserGreeting = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const UserName = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const IconButton = styled.TouchableOpacity`
  padding: 6px 0 6px 6px;
`;

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${RFValue(26)}px;
`;

export const HighLightCards = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingLeft: 24, paddingRight: 10 }
})`
  width: 100%;
  position: absolute;
  top: ${Platform.OS === 'ios' ? RFPercentage(20) : RFPercentage(20)}px;
`;

export const Transactions = styled.View`
  flex: 1;
  padding: 0 ${RFValue(20)}px;
  margin-top: ${RFValue(70)}px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-bottom: ${RFValue(16)}px;
`;

export const TransactionList = styled(
  FlatList as new (_props: FlatListProps<Data>) => FlatList<Data>
).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: getBottomSpace()
  }
})``;
