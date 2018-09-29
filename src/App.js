import React, { Component } from 'react'
import createTheme from 'spectacle/lib/themes/default'
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Code,
  Deck,
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from 'spectacle'

const theme = createTheme(
  {
    primary: '#2F54EB',
    secondary: 'white',
    tertiary: '#0b2074'
  },
  {
    primary: {
      name: 'Bai Jamjuree',
      googleFont: true,
      styles: ['400', '700i']
    },
    secondary: {
      name: 'Merriweather',
      googleFont: true,
      styles: ['400', '700i']
    }
  }
)
const Separator = ({align}) => (<Text textAlign={align}><span style={{verticalAlign:'sub'}}>***</span></Text>)

export default class extends Component {
  render() {
    return (
      <Deck theme={theme} transition={['slide']}>
        <Slide>
          <Heading fit textColor="secondary">CodeWawa Ideas</Heading>
          <Text size={5}>Project overview</Text>
        </Slide>
        <Slide>
          <Heading size={3} textAlign="left" textColor="tertiary">What{"'"}s this project about?</Heading>
          <Separator align="left" />
          <Text textColor="secondary" textAlign="left">{`
          We're gonna build website for collecting ideas from students of Palace of Youth in Warsaw.

          `.trim()}</Text>
        </Slide>
      </Deck>
    );
  }
}
