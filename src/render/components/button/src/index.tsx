import { h, ref, PropType, defineComponent } from 'vue'
import { Size, Type, Shadow, Shape } from './interface'
import './index.scss'
const buttonProps = {
  type: {
    type: String as PropType<Type>,
    default: 'default',
  },
  size: String as PropType<Size>,
  text: String,
  shadow: String as PropType<Shadow>,
  shape: String as PropType<Shape>,
  pin: Boolean,
  disabled: Boolean,
} as const

const Button = defineComponent({
  name: 'Button',

  props: buttonProps,

  emits: [],

  setup(props) {
    const handleClick = (e: MouseEvent): void => {
      console.log('click')
    }
    return {
      handleClick,
    }
  },

  render() {
    const { $slots } = this
    return (
      <button
        class={[
          `g-button`,
          {
            [`g-button--type-${this.type}`]: !this.shadow,
            [`g-button--disabled`]: this.disabled,
            [`g-button--pin`]: this.pin,
            [`g-button--shadow-${this.shadow}`]: this.shadow,
            [`g-button--shape-${this.shape}`]: this.shape,
          },
        ]}
        disabled={this.disabled}
        onClick={this.handleClick}
      >
        {this.text ? this.text : $slots.default()}
      </button>
    )
  },
})

export default Button

export const GButton: new () => {} = Button as any
