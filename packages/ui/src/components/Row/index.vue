<template>
  <div class="limo-row" :class="classes" :style="rowStyle">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { computed, provide, PropType } from 'vue'

const prefixCls = 'limo-row'

type JustifyType = 'start' | 'end' | 'center' | 'space-around' | 'space-between' | 'space-evenly'
type AlignType = 'top' | 'middle' | 'bottom' | 'stretch'
type GutterType = number | [number, number]

interface RowProps {
  gutter: GutterType
  justify: JustifyType
  align: AlignType
  wrap: boolean
}

export default {
  name: 'Row',
  props: {
    gutter: {
      type: [Number, Array] as PropType<GutterType>,
      default: 0
    },
    justify: {
      type: String as PropType<JustifyType>,
      default: 'start',
      validator: (value: JustifyType) => 
        ['start', 'end', 'center', 'space-around', 'space-between', 'space-evenly'].includes(value)
    },
    align: {
      type: String as PropType<AlignType>,
      default: 'top',
      validator: (value: AlignType) => 
        ['top', 'middle', 'bottom', 'stretch'].includes(value)
    },
    wrap: {
      type: Boolean,
      default: true
    }
  },
  setup(props: RowProps) {
    const { gutter, justify, align, wrap } = props

    // 提供 gutter 给子组件 Col
    provide('rowGutter', gutter)

    const classes = computed(() => {
      return [
        prefixCls,
        {
          [`${prefixCls}-no-wrap`]: !wrap,
          [`${prefixCls}-${justify}`]: justify !== 'start',
          [`${prefixCls}-${align}`]: align !== 'top'
        }
      ]
    })

    const rowStyle = computed(() => {
      const styles: any = {}
      
      if (gutter) {
        const gutterValue = Array.isArray(gutter) ? gutter[0] : gutter
        if (gutterValue > 0) {
          styles.marginLeft = `-${gutterValue / 2}px`
          styles.marginRight = `-${gutterValue / 2}px`
        }
      }
      
      return styles
    })

    return {
      classes,
      rowStyle
    }
  }
}
</script>
<style lang="scss">
@import '../../styles/variables.scss';

.limo-row {
  position: relative;
  display: flex;
  flex-flow: row wrap;
  min-height: 0;

  // 对齐方式
  &-start {
    justify-content: flex-start;
  }
  
  &-center {
    justify-content: center;
  }
  
  &-end {
    justify-content: flex-end;
  }
  
  &-space-between {
    justify-content: space-between;
  }
  
  &-space-around {
    justify-content: space-around;
  }
  
  &-space-evenly {
    justify-content: space-evenly;
  }

  // 垂直对齐
  &-top {
    align-items: flex-start;
  }
  
  &-middle {
    align-items: center;
  }
  
  &-bottom {
    align-items: flex-end;
  }
  
  &-stretch {
    align-items: stretch;
  }

  // 换行控制
  &-no-wrap {
    flex-wrap: nowrap;
  }
}
</style>