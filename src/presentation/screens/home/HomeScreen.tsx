import {useQuery} from '@tanstack/react-query';
import React from 'react';
import {View} from 'react-native';
import {ActivityIndicator, Button, Text} from 'react-native-paper';
import {getRecipes} from '../../../actions';

const HomeScreen = () => {
  const {isLoading, data = []} = useQuery({
    queryKey: ['recipes'],
    queryFn: () => getRecipes(0),
    staleTime: 1000 * 60 * 60,
  });

  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
