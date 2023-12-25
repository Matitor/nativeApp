import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import { Svg, Path } from 'react-native-svg';

import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  image: {
    position: 'absolute',
    top: 80,
    right: 20,
    width: 140,
    height: 100,
    borderRadius: 0,
  },
  
  card: {
    width: '95%',
    height: 200,
    backgroundColor: 'rgb(250, 250, 250)',
    marginTop: 20,
    marginLeft: 'auto',
    position: 'relative',
    marginRight: 'auto',
    borderWidth: 1, // Ширина обводки
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 3,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    display: 'flex',


    justifyContent: 'space-around',
  },
  
  btn_apply: {
    backgroundColor: '#32c86c',
    color: '#fff',
    borderWidth: 0,
    padding: 10,
    cursor: 'pointer',
    marginBottom: 10,
    display: 'flex',
    alignItems: 'center',
  },
  
  btn_apply_text: {
    color: '#fff',
  },
});

export default function VacancyCard(props) {
    const navigation = useNavigation();

  const onImageClick = () => {
    navigation.navigate('Detail', { id: props.id });
    }
  

  return (
    <View style={styles.card}>
      <Image
  style={styles.image}
  source={{ uri: 'http://192.168.1.27'+props.pic.slice(16) }}
/>

      
      <View>
      <TouchableOpacity onPress={onImageClick}>
        <Text style={{ paddingLeft: 20,  fontWeight: 'bold',  fontSize: 24, color: '#0066ff' }}>{props.name}</Text>
    </TouchableOpacity>
        
              {props.price_min && props.price_max &&<Text style={{ paddingLeft: 20, fontSize: 16,fontWeight: 'bold', }}>{props.price_min} - {props.price_max} ₽</Text>}
              {!props.price_min && props.price_max &&<Text style={{ paddingLeft: 20, fontSize: 16,fontWeight: 'bold', }}>до {props.price_max} ₽</Text>}
              {props.price_min && !props.price_max &&<Text style={{ paddingLeft: 20, fontSize: 16,fontWeight: 'bold', }}>от {props.price_min} ₽</Text>}
      </View>

      <View>
        <Text style={{ paddingLeft: 20 }}>{props.desc}</Text>
        <Text style={{ paddingLeft: 20 }}>{props.company}</Text>
        
      </View>

    
    
      

    </View>
  );
};