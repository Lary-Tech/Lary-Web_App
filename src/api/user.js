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
    console.log("User signed up: ", user);
    ElMessage.success("成功註冊");
    return user;
  } catch (error) {
    console.log("Error: ", error);
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
    console.log("User signed in: ", user);
    ElMessage.success("成功登入!");
    return user;
  } catch (error) {
    ElMessage.error("Error: ", error);
    return null;
  }
};

const signUserOut = async () => {
  try {
    await signOut(auth);
    ElMessage.success("成功登出！");
    return true;
  } catch (error) {
    ElMessage.error("Error: ", error);
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

export { auth, createUser, signUserIn, signUserOut, getUserPromise };
