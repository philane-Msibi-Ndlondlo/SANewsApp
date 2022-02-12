import { useRef, memo, useState } from 'react';
import styled from 'styled-components/native';

import { Alert, FlatList, TouchableOpacity, Text, View } from 'react-native';

import Colors from '../../../configs/colors';
import { categories } from '../../../configs/constants';

const List  = styled.FlatList`

    margin: 10px 0px;
    height: 50px;
`;

import { useNavigation } from '@react-navigation/native';

const Category = styled.TouchableOpacity`

    background-color: ${Colors.primary};
    opacity: .7;
    padding: 5px 20px;
    height: 40px;
    min-width: 120px;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    border-radius: 20px;
`;

const CategoryName = styled.Text`

    text-align: center;
    font-size: 18px;
    color: ${Colors.black};
`;

const CategoryList = ({category, setCategory}) => {

  const navigation = useNavigation();
  const listRef = useRef();
  const [index, setIndex] = useState(0);  

    const handleItemPress = (item, index) => {

        listRef.current.scrollToIndex({ animated: true, index });
        setCategory(item.type); 
     };

    return (
        <List
            data={categories}
            horizontal={true}
            ref={listRef}
            showHorizontalScrollIndicator={false}
            keyExtractor = {(item) => item.id}
            renderItem={({item, index}) => {
                return (
                    <Category style={{ opacity: category === item.type ? 1.0 : 0.7 }} key={item.id} onPress={() => handleItemPress(item, index) }>
                        <CategoryName>{item.title}</CategoryName>
                    </Category>
                );
            }}
        />
    );

}

export default memo(CategoryList);
