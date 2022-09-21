<template>
  <el-form
    v-loading.lock="!isfetchSuccess"
    element-loading-text="尚未購買產品"
    element-loading-spinner=""
    :model="form"
  >
    <!-- <el-form-item label="基本設定">
      <el-checkbox v-model="form.basic.guess" disabled>自動猜謎</el-checkbox>
      <el-checkbox v-model="form.basic.stopDead">死亡自動停練</el-checkbox>
    </el-form-item> -->
    <el-form-item label="手動模式"></el-form-item>
    <el-form-item label="(1)HP值低於">
      <el-row>
        <el-col :span="9">
          <el-input-number
            v-model="form.hpLowBound1.value"
            :min="10"
            :max="100"
          ></el-input-number>
          <span>&nbsp;%</span>
          <el-radio-group v-model="form.hpLowBound1.press">
            <el-radio label="">無</el-radio>
            <el-radio label="7">按7</el-radio>
          </el-radio-group>
        </el-col>
        <el-col :span="6" style="text-align: right">
          <span
            style="
              padding-right: 1vw;
              font-size: var(--el-form-label-font-size);
              color: var(--el-text-color-regular);
            "
            >MP值低於</span
          >
        </el-col>
        <el-col :span="9">
          <el-input-number
            v-model="form.mpLowBound.value"
            :min="10"
            :max="100"
          ></el-input-number>
          <span>&nbsp;%</span>
          <el-radio-group v-model="form.mpLowBound.press">
            <el-radio label="">無</el-radio>
            <el-radio label="5">按5</el-radio>
          </el-radio-group>
        </el-col>
      </el-row>
    </el-form-item>
    <el-form-item label="(2)HP值低於">
      <el-row>
        <el-col :span="9">
          <el-input-number
            v-model="form.hpLowBound2.value"
            :min="10"
            :max="100"
          ></el-input-number>
          <span>&nbsp;%</span>
          <el-radio-group v-model="form.hpLowBound2.press">
            <el-radio label="">無</el-radio>
            <el-radio label="8">按8</el-radio>
          </el-radio-group>
        </el-col>
        <el-col :span="6" style="text-align: right">
          <span
            style="
              padding-right: 1vw;
              font-size: var(--el-form-label-font-size);
              color: var(--el-text-color-regular);
            "
            >魔法捲軸</span
          >
        </el-col>
        <el-col :span="9">
          <el-radio-group v-model="form.magicScrollPress">
            <el-radio label="">無</el-radio>
            <el-radio label="6">按6</el-radio>
          </el-radio-group>
        </el-col>
      </el-row>
    </el-form-item>
    <!-- <el-form-item label="藥水量低於">
      <el-row>
        <el-col :span="9">
          <el-input-number
            v-model="form.potionLowBound.value"
            :min="10"
            :max="10000"
            controls-position="right"
            style="margin-right: 1vw"
          ></el-input-number>
          <el-radio-group v-model="form.potionLowBound.press">
            <el-radio label="">無</el-radio>
            <el-radio label="auto">自動購買</el-radio>
          </el-radio-group>
        </el-col>
        <el-col :span="6" style="text-align: right">
          <span
            style="
              padding-right: 1vw;
              font-size: var(--el-form-label-font-size);
              color: var(--el-text-color-regular);
            "
            >敵人距離小於</span
          >
        </el-col>
        <el-col :span="9">
          <el-input-number
            v-model="form.enemyDistanceBound.value"
            :min="100"
            :max="100000"
          ></el-input-number>
          <span>&nbsp;單位</span>
          <el-radio-group v-model="form.enemyDistanceBound.press">
            <el-radio label="">無</el-radio>
            <el-radio label="8">按8</el-radio>
          </el-radio-group>
        </el-col>
      </el-row>
    </el-form-item> -->
    <!-- <el-form-item label="被攻擊反應">
      <el-radio-group v-model="form.attackResponse">
        <el-radio label="">無</el-radio>
        <el-radio label="8">按8</el-radio>
      </el-radio-group>
    </el-form-item> -->

    <!-- <el-form-item label="掛機地圖">
      <MapTable :tableData="form.maps" />
    </el-form-item> -->

    <el-button @click="updateConfig(form)" style="">保存</el-button>
  </el-form>
</template>

<script setup>
import { ref, reactive, onBeforeMount } from "vue";

import { getConfig, updateConfig } from "@/api/config";
// import MapTable from "./MapTable.vue";

const form = reactive({
  basic: {
    guess: false,
    stopDead: false,
  },
  attackResponse: "回村",
  hpLowBound1: {
    value: 10,
    press: "7",
  },
  hpLowBound2: {
    value: 10,
    press: "8",
  },
  mpLowBound: {
    value: 10,
    press: "6",
  },
  magicScrollPress: "6",
  potionLowBound: {
    value: 50,
    press: "auto",
  },
  enemyDistanceBound: {
    value: 10000,
    press: "6",
  },
  maps: [],
});

const isfetchSuccess = ref(true);
onBeforeMount(() => {
  const fetchConfig = async () => {
    const config = await getConfig();

    if (config == null) isfetchSuccess.value = false;

    Object.keys(config).forEach((key) => {
      form[key] = config[key];
    });
    isfetchSuccess.value = true;
  };

  fetchConfig();
});
</script>
