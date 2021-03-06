# 餐廳清單

---

![](./public/demo.png)

---

## 介紹

---

紀錄屬於自己的餐廳清單，可以瀏覽餐廳、查看詳細資訊、甚至連結到地圖。

### 功能列表

---

- 使用者可以在首頁看到所有餐廳與它們的簡單資料：

  - 餐廳照片
  - 餐廳名稱
  - 餐廳分類
  - 餐廳評分

- 使用者可以再點進去看餐廳的詳細資訊：

  - 類別
  - 地址
  - 電話
  - 描述
  - 圖片

- 使用者可以透過搜尋餐廳名稱來找到特定的餐廳
- 使用者可以透過搜尋餐廳類別來找到特定的餐廳
- 使用者可以添加餐廳至主畫面
- 使用者可以在主畫面依照不同類別來排序餐廳

---

### 開始使用

1. 請先確認有安裝 node.js 與 npm
2. 將專案 clone 到本地
3. 在本地開啟之後，透過終端機進入資料夾，輸入：
   `npm install`

4. 安裝完畢後，繼續輸入：
   `npm run start`
5. 若看見此行訊息則代表順利運行，打開瀏覽器進入到以下網址
   `Listening on http://localhost:3000`
6. 若欲暫停使用
   `ctrl + c`

### .env 資料

Please create .env file and include below items

1. FACEBOOK_ID=[your FACEBOOK_ID]
2. FACEBOOK_SECRET=[your FACEBOOK_SECRET]
3. FACEBOOK_CALLBACK=http://localhost:3000/auth/facebook/callback
4. SESSION_SECRET= [insert the secret you want]
5. PORT=3000

### 開發工具

- Node.js 14.19.1
- Express 4.17.2
- Express-Handlebars 3.0.0
- Method-override 3.0.0
- Mongoose 6.2.1
- Bootstrap 4.3.1
- Font-awesome 5.15.4
- Passport 0.4.1
- Passport-facebook 3.0.0
- Passport-local 1.0.0
- connect-flash 0.1.1
