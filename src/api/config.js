import axios from "axios";
import { getIdTokenPromise } from "./user.js";
import { ElMessage, ElLoading } from "element-plus";

const url = import.meta.env.VITE_API_URL;

export const updateConfig = async (config) => {
  ElLoading.service({
    lock: true,
    text: "儲存設定中...",
  });
  const result = await __updateConfig(config);
  ElLoading.service().close();
  return result;
};

const __updateConfig = async (config) => {
  console.log(config);
  const headers = {
    // "Content-Type": "application/json",
    Authorization: `Bearer ${await getIdTokenPromise()}`,
  };

  try {
    const response = await axios.post(url + "/config", config, {
      headers: headers,
    });
    ElMessage({
      message: "儲存設定成功！",
      type: "success",
    });
    return response.data;
  } catch (error) {
    console.log("save config error", error);
    ElMessage.error("有錯誤～請聯絡管理人員！");
    return null;
  }
};

export const getConfig = async () => {
  ElLoading.service({
    lock: true,
    text: "取得設定中...",
  });
  const result = await __getConfig();
  ElLoading.service().close();
  return result;
};

const __getConfig = async () => {
  const headers = {
    // "Content-Type": "application/json",
    Authorization: `Bearer ${await getIdTokenPromise()}`,
  };
  try {
    const response = await axios.get(url + "/config", { headers: headers });
    ElMessage({
      message: "取得設定成功！",
      type: "success",
    });
    console.log("get config success", response.data);
    return response.data;
  } catch (error) {
    console.log("get config error", error);
    ElMessage.error("有錯誤～請聯絡管理人員！");
    return null;
  }
};

export const getMaps = async () => {
  const headers = {
    // "Content-Type": "application/json",
    Authorization: `Bearer ${await getIdTokenPromise()}`,
  };
  try {
    const response = await axios.get(url + "/config/maps", {
      headers: headers,
    });
    console.log("get maps success", response.data);
    return response.data;
  } catch (error) {
    console.log("get maps error", error);
    return [];
  }
};

export const testCors = async () => {
  const headers = {
    // "Content-Type": "application/json",
    Authorization: `Bearer ${await getIdTokenPromise()}`,
  };
  try {
    const response = await axios
      .get(url + "/test-cors", { headers: headers })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        console.log("finally");
      });

    ElMessage({
      message: "取得設定成功！",
      type: "success",
    });

    return response.data;
  } catch (error) {
    console.log("test cors error", error);
    ElMessage.error("有錯誤～請聯絡管理人員！");
    return null;
  }
};
