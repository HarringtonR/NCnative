import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { CardSection, Card, Header } from '../common';
import { ScrollView, Button } from 'react-native';
import Config from '../../config';



export default class News extends React.Component {
  state = {
    apiDataLoaded: false,
    apiData: null,
    article: '',
    story: 'feed',
    title: ''
  };
//load the news feed from google news api
  componentDidMount(){
    fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${Config.MY_KEY}`)
      .then( res => res.json())
      .then( data => {
        let articles = data.articles
        this.setState(prevState => ({
          apiData:articles,
          apiDataLoaded: true,
         }))
       })
  }

// component to render feed
  renderNews() {
      return this.state.apiData.map((d, i) => {
        return (
            <TouchableOpacity  key={i} onPress={() => {
              this.setState({
                article: d.content,
                title: d.title,
                story: 'article'
              })}}>
              <Card >
                <CardSection>
                    <Text style={styles.headerStyle}>{d.title}</Text>
                    <Text>{d.source.name}</Text>
                </CardSection>
              </Card>
            </TouchableOpacity>
        )
      })
    }
// render the specific story when clicked  > also set story for chat room?
  renderStory() {
    console.log(this.state.article)
    return(
            <View>
              <TouchableOpacity onPress={() => {this.props.navigation.navigate('Chat', {
                room: this.state.title
              })}}>
                <Card >
                  <CardSection>
                    {/* NEEED TO PASS this.state.article to the chat to create/join the room */}
                    <Text style={styles.headerStyle}>{this.state.article}</Text>
                  </CardSection>
                </Card>
              </TouchableOpacity>
            </View>
        )
      }

  render() {
    if (this.state.apiDataLoaded && this.state.story === 'feed'){
      return (
        <View style={styles.container}>
          <Header headerText = {'News'}/>
          <ScrollView>
            {this.renderNews()}
          </ScrollView>
        </View>
      )
    } else if (this.state.apiDataLoaded && this.state.story === 'article'){
      return (
        <View style={styles.container}>
          <Header headerText = {'News'}/>
          <ScrollView>
            {this.renderStory()}
          </ScrollView>
          <Button title='All News' onPress={() =>
          this.setState({
            story: 'feed'
            })} />
        </View>
      )
    }  else {
     return (
        <CardSection>
          <Text>Loading...</Text>
        </CardSection>
    )
   }
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

