# Project Documentation

## Technologies Used

- **Expo**: Framework for building cross-platform React Native apps with fast development and easy deployment.
- **React Native**: Core technology for building native mobile apps using React.
- **TypeScript**: Strongly typed language for safer and scalable code.
- **Expo Router**: File-based routing for navigation in Expo/React Native apps.
- **VS Code**: Recommended editor for development, especially in cloud environments like GitHub Codespaces.

---

## Why Expo?

Expo simplifies mobile app development by providing:
- Easy setup and configuration
- Over-the-air updates
- Unified APIs for camera, notifications, etc.
- Fast prototyping and previewing on devices
- Seamless integration with cloud IDEs and CI/CD

---

## Why Tunnel Mode?

When developing in cloud environments (e.g., GitHub Codespaces), your local server isn't directly accessible from your mobile device. Expo's tunnel mode exposes your development server to the public internet, allowing you to preview your app on a physical device using Expo Go, even if your code is running remotely.

Tunnel mode is slower than LAN, but it's essential for remote/cloud development workflows.

---

## Local Project Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/benaiah-muga/dakarna-v2.git
   cd dakarna-v2
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Start the development server**
   - For local development:
     ```bash
     npx expo start
     ```
   - For cloud environments (e.g., Codespaces):
     ```bash
     npx expo start --tunnel
     ```
4. **Preview on device**
   - Install Expo Go from the app store on your Android/iOS device.
   - Scan the QR code from the terminal or browser to preview the app.

---

## Additional Resources

- [Expo documentation](https://docs.expo.dev/)
- [Expo Router docs](https://expo.github.io/router/docs/)
- [React Native docs](https://reactnative.dev/)
- [TypeScript docs](https://www.typescriptlang.org/docs/)
