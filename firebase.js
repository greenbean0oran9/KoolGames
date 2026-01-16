<script type="module">
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyDJJCuZmajV9g_CCqhRoU0Nz-w5f2_BXGw",
  authDomain: "koolgames-361eb.firebaseapp.com",
  projectId: "koolgames-361eb",
  storageBucket: "koolgames-361eb.firebasestorage.app",
  messagingSenderId: "581685872645",
  appId: "1:581685872645:web:166ce50ae5bc8e0485746c"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
</script>
