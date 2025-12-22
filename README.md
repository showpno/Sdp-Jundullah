# Jundullah E-Commerce Platform

This project is a full-stack e-commerce solution consisting of three main components:
1.  **Server Side** (Node.js/Express Backend)
2.  **Admin Panel** (Flutter Web/App)
3.  **Client Application** (Flutter Mobile App)

## 🔗 Backend <-> Frontend Connectivity

The interaction between the frontend applications (Admin Panel & Client App) and the Backend Server is established via REST API calls.

### **1. Backend Server**
-   **Location**: `Client_panel/server_side`
-   **Port**: `5000` (Default)
-   **Entry Point**: `index.js`
-   **Data Source**: MongoDB
-   **Image Serving**: Images area served statically from `public/products`, `public/category`, and `public/posters` folders.

### **2. Admin Panel Connection**
The Admin Panel connects to the server using a base URL defined in a constants file.
-   **Configuration File**: `Client_panel/Admin_panel/lib/utility/constants.dart`
-   **Variable**: `MAIN_URL`
-   **Current Value**: `http://192.168.43.253:5000`

**How it works**:
-   The app uses this `MAIN_URL` to prepend to all API endpoints (e.g., `MAIN_URL/products`).
-   To change the server address, edit the `MAIN_URL` constant.

### **3. Client Application Connection**
The Client App has a smart configuration to detect whether it's running on a physical device, emulator, or web.
-   **Configuration File**: `Client_panel/client_side/lib/utility/server_config.dart`
-   **Class**: `ServerConfig`
-   **Manual Override**: `manualPhysicalDeviceIP`

**Connection Logic**:
-   **Web/Desktop/iOS**: Uses `http://localhost:5000`.
-   **Android Emulator**: Uses `http://10.0.2.2:5000` (References the host machine's localhost).
-   **Physical Android Device**: Uses the IP specified in `manualPhysicalDeviceIP` (currently `192.168.43.253`).

> **⚠️ IMPORTANT**: For physical Android devices, your phone and computer MUST be on the same Wi-Fi network, and `manualPhysicalDeviceIP` must match your computer's local IPv4 address.

## 📡 Data Flow

1.  **Request**: The Client or Admin app initiates an HTTP request (GET, POST, PUT, DELETE) using the `http` package in Flutter.
2.  **Routing**: The User's request hits the Node.js server. `index.js` routes the request to specific route handlers in `server_side/routes/` (e.g., `product.js`, `category.js`).
3.  **Database**: The route handler interacts with MongoDB using Mongoose models (in `server_side/model/`).
4.  **Response**: The server sends back a JSON response.
5.  **Parsing**: The Flutter app receives the JSON and parses it into Dart objects (Models) to display in the UI.

## 🚀 How to Run

### **1. Server Side**
```bash
cd Client_panel/server_side
node index.js
```

### **2. Admin Panel (Chrome)**
```bash
cd Client_panel/Admin_panel
flutter run -d chrome
```

### **3. Client App (Android)**
```bash
cd Client_panel/client_side
flutter run
```

---
**Last Updated**: 2025-12-15
