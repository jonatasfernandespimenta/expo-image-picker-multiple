import React from 'react';
import {
  Dimensions,
  ImageBackground,
  TouchableHighlight,
  View,
} from 'react-native';

const {width} = Dimensions.get('window');
import Icon from 'react-native-vector-icons/MaterialIcons';
class ImageTile extends React.PureComponent {
  render() {
    const { error, item, index, selected, selectImage, selectedItemNumber, renderSelectedComponent } = this.props;
    if (!item) return null;
    return (
      <TouchableHighlight
        style={{ opacity: error ? 0.7 : selected ? 0.5 : 1, backgroundColor: 'red' }}
        underlayColor='transparent'
        onPress={() => selectImage(index)} >
        <View style={{ position: 'relative' }}
      >
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ImageBackground
              style={{ width: width / 4, height: width / 4, justifyContent: 'center', alignItems: 'center' }}
              source={{ uri: item.uri }} >
              {selected && renderSelectedComponent && renderSelectedComponent(selectedItemNumber)}
              {error ? <Icon name='warning' size={40} color={'white'} /> : null}
            </ImageBackground>
          </View>
        </View>
      </TouchableHighlight>
    )
  }
}

export default ImageTile;
