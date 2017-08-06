import * as React from 'react'

import {
  App
} from '../components'

const style = `
  img {
    width: 300px;
    height: 300px;
    }
  h1 {
    font-family: Arial;
  }
  .myDiv {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
`

export namespace Index {
  export interface Props { }
  export interface State {
    title: string
  }
}

export default class Index extends React.Component<Index.Props, Index.State> {
  constructor (props: Index.Props) {
    super(props)
    this.state = {
      title: 'Pueue'
    }
  }

  render () {
    return (
      <App title={this.state.title}>
        <div className='myDiv'>
          <img src='/static/pueue.png' />
          <h1>Welcome to Next.js + Typescript Boilerplate!!!</h1>
        </div>
        <style>{style}</style>
      </App>
    )
  }
}
