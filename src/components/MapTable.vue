<template>
  <el-row style="width: 100%">
    <el-col :span="8">
      <el-autocomplete
        v-model="input"
        :fetch-suggestions="querySearch"
        clearable
        placeholder="搜尋地圖"
        @select="handleSelect"
      />
    </el-col>
    <el-col :span="14" style="height: 200px">
      <el-table
        :data="tableData"
        empty-text="尚未設定"
        height="200px"
        style="width: 100%"
      >
        <el-table-column label="地圖" prop="value" />
        <el-table-column label="動作">
          <template #default="scope">
            <el-button
              size="small"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >刪除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </el-col>
  </el-row>
</template>

<script setup>
import { ref, onMounted, toRef, defineProps } from "vue";
import { getMaps } from "@/api/config";

const input = ref("");

const maps = ref([]);

onMounted(async () => {
  const _r = await getMaps();
  _r.map((m) => {
    maps.value.push(m);
  });
});

let timeout;
const querySearch = (queryString, cb) => {
  const results = queryString
    ? maps.value.filter(createFilter(queryString))
    : maps.value;

  clearTimeout(timeout);
  timeout = setTimeout(() => {
    cb(results);
  }, 3000 * Math.random());
};

const createFilter = (queryString) => {
  console.log(queryString);
  return (map) => {
    const v = map && map.value ? map.value : ""; // deal with undefined
    return v.toLowerCase().indexOf(queryString.toLowerCase()) === 0;
  };
};

const handleSelect = (item) => {
  console.log(item);
  tableData.value.push(item);
  console.log(tableData.value);
};

const handleDelete = (index, row) => {
  console.log(index, row);
  tableData.value.splice(index, 1);
};

const props = defineProps({ tableData: Array });
const tableData = toRef(props, "tableData");
</script>
