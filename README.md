#### el-table-prepend
el-table header appends a slot to add button for editable table.

##### Setup
```
npm install el-table-prepend
```

##### Usage
```vue
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
