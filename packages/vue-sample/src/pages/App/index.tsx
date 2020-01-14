import { Component, Vue } from 'vue-property-decorator'

import HelloWorld from '@/components/HelloWorld'

import './index.css'

@Component({
  components: {
    HelloWorld,
  },
})
export default class App extends Vue {
  render () {
    return (
      <div id="app">
        <img alt="Vue logo" src={ require('@/assets/logo.png') } />
        <HelloWorld props={ { msg: 'Welcome to Your Vue.js + TypeScript App' } } />
      </div>
    )
  }
}
