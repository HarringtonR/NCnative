import React from 'react';
import { Text, View, Image } from 'react-native';
import { CardSection, Card, Header } from '../common';
import { ScrollView } from 'react-native';
import Config from '../../config';
export default class News extends React.Component {
  state = {
    apiDataLoaded: false,
    apiData: null
  };

  componentDidMount(){
    fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${Config.MY_KEY}`)
      .then( res => res.json())
      .then( data => {
        let articles = data.articles
        this.setState(prevState => ({
          apiDataLoaded: true,
          apiData:articles
         }))
       })
  }

  renderNews() {
    if(this.state.apiDataLoaded) {
      return this.state.apiData.map((d, i) => {
        return (
          <Card  key={i}>
            <CardSection>
                <Text style={styles.headerStyle}>{d.title}</Text>
                <Text>{d.source.name}</Text>
                {/* <Image source={{uri: d.urlToImage}} style={{width: 100, height: 100}}/> */}
            </CardSection>
          </Card>
          
        )
      })
    } else return (
    <CardSection>
       <Text>Loading...</Text>
    </CardSection>
    )
  }

  render() {
      return (
        <View style={styles.container}>
          <Header headerText = {'News'}/>
          <ScrollView>
            {this.renderNews()}
          </ScrollView>
        </View>
      )
    }

  }
  
const styles = {
  container:{
    flex: 1
  },
  headerStyle: {
    fontSize: 18
  }
}