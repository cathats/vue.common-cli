import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/pages/HelloWorld.vue'

// describe('测试 HelloWorld 组件的 msg', () => {
//   it('测试 HelloWorld 组件是否能正常渲染 msg', () => {
//     const wrapper = mount(HelloWorld, {})
//     expect(wrapper.find('p').text()).toBe('hello world')
//   })
// })

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      props: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
