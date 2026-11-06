# HomeCloud Mobile UI

A standalone mobile client for the open-source, self-hosted ByteWizard HomeCloud ecosystem.

**Stack:** Tauri 2 (Rust), React, TypeScript, Vite. **Targets:** Android first, iOS after Apple/Xcode prerequisites are available. No proprietary cloud dependency, no server built into the app.

## Why a separate repository?

HomeCloudUI is a desktop/panel application with desktop window management, a multi-server shell and large-screen navigation. A mobile app needs navigation and interaction designed for touch, lifecycle/background handling, battery constraints, mobile permissions, and smaller viewports. We keep the same Backend protocol and concepts, but do not copy the desktop frontend or maintain two incompatible versions of the API.

## Current state

- Mobile-first responsive screen shell (Home / Devices / Media / Storage / Settings).
- No simulated Backend connection or fake TV controls: functional commands will be added in focused milestones.
- Initial project created using the official `create-tauri-app` React + TypeScript template.
- No API keys, passwords, IP addresses or other secrets are checked in.

## Development

```bash
npm install
npm run build
npm run tauri dev              # optional desktop shell for quick UI development
npm run tauri android init     # requires Android SDK/NDK, JDK and mobile Rust targets
npm run tauri android dev      # Android emulator or physical phone
npm run tauri android build    # after completing Android target setup
```

For iOS, use a macOS build host with Xcode, then `npm run tauri ios init` and `npm run tauri ios dev`. Android and iOS build/signing pipelines will be introduced after the mobile app and identity are tested.

## Protocol ownership

The existing HomeCloud Backend owns discovery, devices, media rooms, authentication and command/control. Media Gateway handles the data plane and HC Storage Service owns permitted file reads. Mobile is a **client** of these APIs. See [Architecture](docs/ARCHITECTURE.md).

## Distribution

Free and fully self-hostable, consistent with HomeCloud. Before publishing a stable build, choose and add the project's final OSS license and mobile signing credentials through secure CI secrets (never source files).
