<template>
  <div :class="classes" :style="colStyle">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { computed, inject, PropType } from 'vue'

const prefixCls = 'limo-col'

type SpanType = number
type GutterType = number | [number, number]

interface ColProps {
  span: SpanType
  offset: number
  push: number
  pull: number
  order: number
}

export default {
  name: 'Col',
  props: {
    span: {
      type: Number as PropType<SpanType>,
      default: 24,
      validator: (value: number) => value >= 0 && value <= 24
    },
    offset: {
      type: Number,
      default: 0,
      validator: (value: number) => value >= 0 && value <= 24
    },
    push: {
      type: Number,
      default: 0,
      validator: (value: number) => value >= 0 && value <= 24
    },
    pull: {
      type: Number,
      default: 0,
      validator: (value: number) => value >= 0 && value <= 24
    },
    order: {
      type: Number,
      default: 0
    }
  },
  setup(props: ColProps) {
    const { span, offset, push, pull, order } = props
    
    // 从父组件 Row 获取 gutter
    const gutter = inject('rowGutter', 0)

    const classes = computed(() => {
      return [
        prefixCls,
        {
          [`${prefixCls}-${span}`]: span !== undefined,
          [`${prefixCls}-offset-${offset}`]: offset && offset > 0,
          [`${prefixCls}-push-${push}`]: push && push > 0,
          [`${prefixCls}-pull-${pull}`]: pull && pull > 0,
          [`${prefixCls}-order-${order}`]: order !== 0
        }
      ]
    })

    const colStyle = computed(() => {
      const styles: any = {}
      
      // 处理 gutter 间距
      if (gutter) {
        const gutterValue = Array.isArray(gutter) ? gutter[0] : gutter
        if (gutterValue > 0) {
          styles.paddingLeft = `${gutterValue / 2}px`
          styles.paddingRight = `${gutterValue / 2}px`
        }
      }
      
      // 处理 order
      if (order !== 0) {
        styles.order = order
      }
      
      return styles
    })

    return {
      classes,
      colStyle
    }
  }
}
</script>
<style lang="scss">
@import '../../styles/variables.scss';

// Grid 系统配置
$grid-columns: 24;

.limo-col {
  position: relative;
  max-width: 100%;
  min-height: 1px;
  flex: 0 0 auto;
  
  // 使用 SCSS 循环生成 span 样式
  @for $i from 0 through $grid-columns {
    &-#{$i} {
      display: block;
      flex: 0 0 percentage($i / $grid-columns);
      max-width: percentage($i / $grid-columns);
    }
  }
  
  // 使用 SCSS 循环生成 offset 样式
  @for $i from 0 through $grid-columns {
    &-offset-#{$i} {
      margin-left: percentage($i / $grid-columns);
    }
  }
  
  // 使用 SCSS 循环生成 push 样式
  @for $i from 0 through $grid-columns {
    &-push-#{$i} {
      left: percentage($i / $grid-columns);
    }
  }
  
  // 使用 SCSS 循环生成 pull 样式
  @for $i from 0 through $grid-columns {
    &-pull-#{$i} {
      right: percentage($i / $grid-columns);
    }
  }
  
  // Order 样式
  &-order {
    @for $i from -1 through 10 {
      &-#{$i} {
        order: $i;
      }
    }
  }
}

// 特殊情况：span 为 0 时隐藏
.limo-col-0 {
  display: none;
}
</style>