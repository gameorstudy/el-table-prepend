#### el-table-prepend

为 el-table 添加一个前置插槽（prepend slot），方便在表头下方添加按钮等。

##### 依赖要求

在使用 el-table-prepend 之前，请确保您的项目已安装以下依赖：

```json
{
  "element-ui": "^2.15.14",
  "vue": "^2.6.10"
}
```

##### 安装
```bash
npm install el-table-prepend
```

##### Usage
```html
<template>
  <el-table-prepend>
    <template #prepend>
      <!-- Add contents here -->
    </template>
  </el-table-prepend>
</template>

<script>
import ElTablePrepend from 'el-table-prepend'

export default {
  components: {
    ElTablePrepend
  }
}
</script>
```
