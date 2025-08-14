<template>
  <article class="page">
    <h2>Grid 栅格布局</h2>
    <p>基于 24 栅格系统的现代化 Flexbox 布局组件，支持灵活的响应式布局。</p>

    <!-- 基础用法 -->
    <section class="demo-section">
      <h3>基础用法</h3>
      <p>通过 <code>span</code> 来设置栅格占据的列数，总共 24 列。</p>
      
      <div class="demo-block">
        <le-row class="demo-row">
          <le-col :span="24"><div class="demo-col demo-col-dark">col-24</div></le-col>
        </le-row>
        <le-row class="demo-row">
          <le-col :span="12"><div class="demo-col">col-12</div></le-col>
          <le-col :span="12"><div class="demo-col demo-col-dark">col-12</div></le-col>
        </le-row>
        <le-row class="demo-row">
          <le-col :span="8"><div class="demo-col">col-8</div></le-col>
          <le-col :span="8"><div class="demo-col demo-col-dark">col-8</div></le-col>
          <le-col :span="8"><div class="demo-col">col-8</div></le-col>
        </le-row>
        <le-row class="demo-row">
          <le-col :span="6"><div class="demo-col">col-6</div></le-col>
          <le-col :span="6"><div class="demo-col demo-col-dark">col-6</div></le-col>
          <le-col :span="6"><div class="demo-col">col-6</div></le-col>
          <le-col :span="6"><div class="demo-col demo-col-dark">col-6</div></le-col>
        </le-row>
      </div>

      <div class="code-example">
        <p>代码示例：</p>
        <pre v-highlight><code class="language-html">{{basicCode}}</code></pre>
      </div>
    </section>

    <!-- 间距设置 -->
    <section class="demo-section">
      <h3>区间间隔</h3>
      <p>通过 <code>gutter</code> 属性设置栅格间隔。</p>
      
      <div class="demo-block">
        <le-row class="demo-row" :gutter="16">
          <le-col :span="6"><div class="demo-col">col-6</div></le-col>
          <le-col :span="6"><div class="demo-col">col-6</div></le-col>
          <le-col :span="6"><div class="demo-col">col-6</div></le-col>
          <le-col :span="6"><div class="demo-col">col-6</div></le-col>
        </le-row>
        <le-row class="demo-row" :gutter="24">
          <le-col :span="8"><div class="demo-col">col-8</div></le-col>
          <le-col :span="8"><div class="demo-col">col-8</div></le-col>
          <le-col :span="8"><div class="demo-col">col-8</div></le-col>
        </le-row>
      </div>

      <div class="code-example">
        <p>代码示例：</p>
        <pre v-highlight><code class="language-html">{{gutterCode}}</code></pre>
      </div>
    </section>

    <!-- 偏移列 -->
    <section class="demo-section">
      <h3>偏移列</h3>
      <p>通过 <code>offset</code> 属性设置栅格左侧的间隔格数。</p>
      
      <div class="demo-block">
        <le-row class="demo-row">
          <le-col :span="8"><div class="demo-col">col-8</div></le-col>
          <le-col :span="8" :offset="8"><div class="demo-col demo-col-dark">col-8 offset-8</div></le-col>
        </le-row>
        <le-row class="demo-row">
          <le-col :span="6" :offset="6"><div class="demo-col">col-6 offset-6</div></le-col>
          <le-col :span="6" :offset="6"><div class="demo-col demo-col-dark">col-6 offset-6</div></le-col>
        </le-row>
        <le-row class="demo-row">
          <le-col :span="12" :offset="6"><div class="demo-col">col-12 offset-6</div></le-col>
        </le-row>
      </div>

      <div class="code-example">
        <p>代码示例：</p>
        <pre v-highlight><code class="language-html">{{offsetCode}}</code></pre>
      </div>
    </section>

    <!-- 对齐方式 -->
    <section class="demo-section">
      <h3>对齐方式</h3>
      <p>通过 <code>justify</code> 和 <code>align</code> 属性设置栅格的对齐方式。</p>
      
      <div class="demo-block">
        <p>水平对齐：</p>
        <le-row class="demo-row" justify="start">
          <le-col :span="4"><div class="demo-col">col-4</div></le-col>
          <le-col :span="4"><div class="demo-col demo-col-dark">col-4</div></le-col>
          <le-col :span="4"><div class="demo-col">col-4</div></le-col>
        </le-row>
        <le-row class="demo-row" justify="center">
          <le-col :span="4"><div class="demo-col">col-4</div></le-col>
          <le-col :span="4"><div class="demo-col demo-col-dark">col-4</div></le-col>
          <le-col :span="4"><div class="demo-col">col-4</div></le-col>
        </le-row>
        <le-row class="demo-row" justify="end">
          <le-col :span="4"><div class="demo-col">col-4</div></le-col>
          <le-col :span="4"><div class="demo-col demo-col-dark">col-4</div></le-col>
          <le-col :span="4"><div class="demo-col">col-4</div></le-col>
        </le-row>
        <le-row class="demo-row" justify="space-between">
          <le-col :span="4"><div class="demo-col">col-4</div></le-col>
          <le-col :span="4"><div class="demo-col demo-col-dark">col-4</div></le-col>
          <le-col :span="4"><div class="demo-col">col-4</div></le-col>
        </le-row>
        <le-row class="demo-row" justify="space-around">
          <le-col :span="4"><div class="demo-col">col-4</div></le-col>
          <le-col :span="4"><div class="demo-col demo-col-dark">col-4</div></le-col>
          <le-col :span="4"><div class="demo-col">col-4</div></le-col>
        </le-row>
      </div>

      <div class="code-example">
        <p>代码示例：</p>
        <pre v-highlight><code class="language-html">{{alignCode}}</code></pre>
      </div>
    </section>

    <!-- 排序 -->
    <section class="demo-section">
      <h3>排序</h3>
      <p>通过 <code>order</code> 属性改变栅格的排序。</p>
      
      <div class="demo-block">
        <le-row class="demo-row">
          <le-col :span="6" :order="4"><div class="demo-col">1 order-4</div></le-col>
          <le-col :span="6" :order="3"><div class="demo-col demo-col-dark">2 order-3</div></le-col>
          <le-col :span="6" :order="2"><div class="demo-col">3 order-2</div></le-col>
          <le-col :span="6" :order="1"><div class="demo-col demo-col-dark">4 order-1</div></le-col>
        </le-row>
      </div>

      <div class="code-example">
        <p>代码示例：</p>
        <pre v-highlight><code class="language-html">{{orderCode}}</code></pre>
      </div>
    </section>

    <!-- 复杂布局 -->
    <section class="demo-section">
      <h3>复杂布局</h3>
      <p>结合多种属性实现复杂的布局效果。</p>
      
      <div class="demo-block">
        <le-row class="demo-row" :gutter="20">
          <le-col :span="16">
            <div class="demo-col">
              <le-row :gutter="10">
                <le-col :span="8"><div class="demo-col-inner">嵌套 col-8</div></le-col>
                <le-col :span="8"><div class="demo-col-inner">嵌套 col-8</div></le-col>
                <le-col :span="8"><div class="demo-col-inner">嵌套 col-8</div></le-col>
              </le-row>
            </div>
          </le-col>
          <le-col :span="8">
            <div class="demo-col demo-col-dark">col-8</div>
          </le-col>
        </le-row>
      </div>

      <div class="code-example">
        <p>代码示例：</p>
        <pre v-highlight><code class="language-html">{{complexCode}}</code></pre>
      </div>
    </section>

    <!-- API 文档 -->
    <section class="demo-section">
      <h3>API</h3>
      
      <h4>Row Props</h4>
      <table class="api-table">
        <thead>
          <tr>
            <th>属性</th>
            <th>说明</th>
            <th>类型</th>
            <th>默认值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>gutter</td>
            <td>栅格间隔，可以是数字或数组</td>
            <td>number | [number, number]</td>
            <td>0</td>
          </tr>
          <tr>
            <td>justify</td>
            <td>水平排列方式</td>
            <td>'start' | 'end' | 'center' | 'space-around' | 'space-between' | 'space-evenly'</td>
            <td>'start'</td>
          </tr>
          <tr>
            <td>align</td>
            <td>垂直对齐方式</td>
            <td>'top' | 'middle' | 'bottom' | 'stretch'</td>
            <td>'top'</td>
          </tr>
          <tr>
            <td>wrap</td>
            <td>是否自动换行</td>
            <td>boolean</td>
            <td>true</td>
          </tr>
        </tbody>
      </table>

      <h4>Col Props</h4>
      <table class="api-table">
        <thead>
          <tr>
            <th>属性</th>
            <th>说明</th>
            <th>类型</th>
            <th>默认值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>span</td>
            <td>栅格占据的列数</td>
            <td>number (0-24)</td>
            <td>24</td>
          </tr>
          <tr>
            <td>offset</td>
            <td>栅格左侧的间隔格数</td>
            <td>number (0-24)</td>
            <td>0</td>
          </tr>
          <tr>
            <td>push</td>
            <td>栅格向右移动格数</td>
            <td>number (0-24)</td>
            <td>0</td>
          </tr>
          <tr>
            <td>pull</td>
            <td>栅格向左移动格数</td>
            <td>number (0-24)</td>
            <td>0</td>
          </tr>
          <tr>
            <td>order</td>
            <td>栅格顺序</td>
            <td>number</td>
            <td>0</td>
          </tr>
        </tbody>
      </table>
    </section>
  </article>
</template>

<script lang="ts">
import Row from '~/components/Row/index.vue'
import Col from '~/components/Col/index.vue'
import '@/styles/components/docs.scss'

  export default {
    name: 'GridContent',
  components: {
    'le-row': Row,
    'le-col': Col
  },
  setup() {
    const basicCode = `<le-row>
  <le-col :span="24">col-24</le-col>
</le-row>
<le-row>
  <le-col :span="12">col-12</le-col>
  <le-col :span="12">col-12</le-col>
</le-row>
<le-row>
  <le-col :span="8">col-8</le-col>
  <le-col :span="8">col-8</le-col>
  <le-col :span="8">col-8</le-col>
</le-row>`

    const gutterCode = `<le-row :gutter="16">
  <le-col :span="6">col-6</le-col>
  <le-col :span="6">col-6</le-col>
  <le-col :span="6">col-6</le-col>
  <le-col :span="6">col-6</le-col>
</le-row>`

    const offsetCode = `<le-row>
  <le-col :span="8">col-8</le-col>
  <le-col :span="8" :offset="8">col-8 offset-8</le-col>
</le-row>
<le-row>
  <le-col :span="12" :offset="6">col-12 offset-6</le-col>
</le-row>`

    const alignCode = `<le-row justify="start">
  <le-col :span="4">col-4</le-col>
  <le-col :span="4">col-4</le-col>
</le-row>
<le-row justify="center">
  <le-col :span="4">col-4</le-col>
  <le-col :span="4">col-4</le-col>
</le-row>
<le-row justify="space-between">
  <le-col :span="4">col-4</le-col>
  <le-col :span="4">col-4</le-col>
</le-row>`

    const orderCode = `<le-row>
  <le-col :span="6" :order="4">1 order-4</le-col>
  <le-col :span="6" :order="3">2 order-3</le-col>
  <le-col :span="6" :order="2">3 order-2</le-col>
  <le-col :span="6" :order="1">4 order-1</le-col>
</le-row>`

    const complexCode = `<le-row :gutter="20">
  <le-col :span="16">
    <le-row :gutter="10">
      <le-col :span="8">嵌套 col-8</le-col>
      <le-col :span="8">嵌套 col-8</le-col>
      <le-col :span="8">嵌套 col-8</le-col>
    </le-row>
  </le-col>
  <le-col :span="8">col-8</le-col>
</le-row>`

      return {
      basicCode,
      gutterCode,
      offsetCode,
      alignCode,
      orderCode,
      complexCode
    }
    }
  }
</script>

<style lang="scss" scoped>
.demo-section {
  margin-bottom: 40px;
  
  h3 {
    margin-bottom: 16px;
    color: #1f2937;
    font-size: 20px;
    font-weight: 600;
  }
  
  h4 {
    margin: 24px 0 16px 0;
    color: #374151;
    font-size: 16px;
    font-weight: 600;
  }
  
  p {
    margin-bottom: 16px;
    color: #6b7280;
    line-height: 1.6;
  }
  
  code {
    padding: 2px 6px;
    background: #f3f4f6;
    border-radius: 4px;
    font-family: 'Monaco', 'Menlo', monospace;
    font-size: 14px;
    color: #dc2626;
  }
}

.demo-block {
  margin-bottom: 24px;
  padding: 20px;
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
}

.demo-row {
  margin-bottom: 16px;
  
  &:last-child {
    margin-bottom: 0;
  }
}

.demo-col {
  padding: 16px 0;
  text-align: center;
  background: rgba(24, 144, 255, 0.7);
  color: white;
  border-radius: 4px;
  font-size: 14px;
  
  &.demo-col-dark {
    background: rgba(24, 144, 255, 0.9);
  }
}

.demo-col-inner {
  padding: 8px 0;
  text-align: center;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  font-size: 12px;
  margin: 4px 0;
}

.code-example {
  margin-top: 20px;
  
  p {
    margin-bottom: 8px;
    font-weight: 500;
    color: #374151;
  }
  
  pre {
    background: #1f2937;
    color: #f9fafb;
    padding: 16px;
    border-radius: 6px;
    overflow-x: auto;
    font-size: 14px;
    line-height: 1.5;
    
    code {
      background: transparent;
      color: inherit;
      padding: 0;
    }
  }
}

.api-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 16px;
  
  th, td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid #e5e7eb;
  }
  
  th {
    background: #f9fafb;
    font-weight: 600;
    color: #374151;
  }
  
  td {
    color: #6b7280;
    
    &:first-child {
      font-family: 'Monaco', 'Menlo', monospace;
      font-size: 14px;
      color: #dc2626;
    }
  }
  
  tr:hover {
    background: #f9fafb;
  }
}
</style>