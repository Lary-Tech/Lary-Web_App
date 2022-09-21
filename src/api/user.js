import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { ElMessage } from "element-plus";

const firebaseConfig = {
  apiKey: "AIzaSyDzE6S2d1Rb41ksvFepYAQ11YeOM4-0U2U",
  authDomain: "lineagew-cv.firebaseapp.com",
  projectId: "lineagew-cv",
  storageBucket: "lineagew-cv.appspot.com",
  messagingSenderId: "1005883045981",
  appId: "1:1005883045981:web:8fcaa9300627ad2af8f5b4",
};

const app = initializeApp(firebaseConfig);
console.log("Firebase APP: ", app);
const auth = getAuth();

const createUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = userCredential.user;
    // console.log("User signed up: ", user);
    ElMessage.success("成功註冊");
    return user;
  } catch (error) {
    // console.log("Error: ", error);
    ElMessage.error("註冊失敗");
    return null;
  }
};

const signUserIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = userCredential.user;
    // console.log("User signed in: ", user);
    ElMessage.success("成功登入!");
    return user;
  } catch (error) {
    console.log(error);
    ElMessage.error("登入錯誤，請檢查帳號密碼是否正確或註冊！");
    return null;
  }
};

const signUserOut = async () => {
  try {
    await signOut(auth);
    ElMessage.success("成功登出！");
    return true;
  } catch (error) {
    console.log(error);
    ElMessage.error("登出失敗，老駭寶了？");
    return false;
  }
};

const getUserPromise = () => {
  return new Promise((resolve) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe();
      if (user) {
        resolve(user);
      } else {
        resolve(null);
      }
    });
  });
};

const getIdTokenPromise = () => {
  return new Promise((resolve) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe();
      if (user) {
        user.getIdToken().then((idToken) => {
          resolve(idToken);
        });
      } else {
        resolve(null);
      }
    });
  }).catch((error) => {
    console.log(error);
    return null;
  });
};

export {
  auth,
  createUser,
  signUserIn,
  signUserOut,
  getUserPromise,
  getIdTokenPromise,
};
