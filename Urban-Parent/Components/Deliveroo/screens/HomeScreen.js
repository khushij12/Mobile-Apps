import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import { View, Text, Image, TextInput, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  ChevronDownIcon,
  AdjustmentsVerticalIcon,
  MagnifyingGlassIcon,
} from 'react-native-heroicons/solid';
import { UserIcon } from 'react-native-heroicons/outline';
import Categories from '../Categories';

export default function HomeScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="bg-white pt-5">
      <View className="flex-row pb-3 mx-4 items-center space-x-2">
        <Image
          source={{
            uri: 'https://links.papareact.com/wru',
          }}
          className="w-7 h-7 rounded-full bg-gray-300"
        />
        <View className="flex-1">
          {/* takes rest of the room */}
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" className="pt-[12px]" />
          </Text>
        </View>
        <UserIcon size={35} color="#00CCBB" />
      </View>

      <View className="flex-row items-center mx-4 pb-3 ">
        <View className="flex-row bg-gray-200 flex-1 space-x-2 p-2">
          <MagnifyingGlassIcon size={20} color={'gray'} />
          <TextInput
            placeholder="Resturants and cuisines"
            keyboardTypes="default"
          />
        </View>
        <AdjustmentsVerticalIcon color="#00CCBB" />
      </View>

      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        <Categories />
        {/* <FeaturedRow /> */}
      </ScrollView>
    </SafeAreaView>
  );
}
