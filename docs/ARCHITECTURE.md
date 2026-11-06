# HomeCloud Mobile UI — architectural baseline

## Repositories

- `HomeCloudUI`: desktop/panel front-end and Rust desktop integrations.
- `HomeCloud-Mobile-UI`: independent Android/iOS UI; do not copy desktop UI components wholesale.
- `HomeCloud-TV-Player`: TV playback client, separate UI and capabilities.
- `HomeCloudBackend`: Go WebSocket control plane and device registry.
- `HomeCloud-Media-Gateway`: Go media data plane and inspection.
- `HomeCloud-Storage-Service`: Go file/source authority.

## Protocols and intended workflows

1. Establish authorized Backend WebSocket session via LAN/Tailscale; no hard-coded external cloud dependency.
2. Discover/identify paired devices using Backend `clients.list`/events; map TV targets by declared and trusted `client_type` rather than guessing from a friendly name.
3. Start and manage media using Backend `media.rooms.play`, `media.rooms.snapshot`, `media.room.control`, `media.rooms.seek` and `media.rooms.stop`, with room/playback/generation fencing. Do **not** use an ad-hoc `clients.send` JSON as a replacement for the media-room contract.
4. Access permitted files through the Backend and HC Storage Service contracts; avoid absolute filesystem paths from clients.
5. Surface offline/reconnect/timeout/acknowledgement states accurately and do not assume commands executed when only delivered.
6. Provide minimal privileges and Android network/security restrictions based on actual server endpoints.

## Incremental plan

- M01: Bootstrap, Tauri Android init, simple UI/navigation, frontend CI.
- M02: Backend WebSocket auth/reconnect/device registration and secure local configuration.
- M03: Device inventory and TV remote (room-aware control).
- M04: Storage browser, media source selection, playback-room creation.
- M05: Android builds/signing/test tracks; later iOS/Xcode.

This is the initial plan, not a claim that the features are implemented.
