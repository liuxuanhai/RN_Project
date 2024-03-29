import React, {Component} from 'react';
import {Text, View, TouchableWithoutFeedback} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {CardSection} from '../ortak';

class ListItem extends Component {
  ogrenciClick() {
    Actions.studentUpdate({student: this.props.ogrenci});
  }

  render() {
    const {isim, soyIsim} = this.props.ogrenci;
    return (
      <TouchableWithoutFeedback onPress={this.ogrenciClick.bind(this)}>
        <View>
          <CardSection>
            <Text>
              {isim} {soyIsim}
            </Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default ListItem;
