// DojoBuro desktop shell (Tauri v2).
//
// Two windows are declared in tauri.conf.json:
//   • "main"   — the full 3D office (index.html#app)
//   • "widget" — a small, borderless, always-on-top monitor (index.html#widget),
//                hidden at launch. A "Dojo widget" tray menu item toggles it so
//                you can keep an eye on the dojo while working in other apps.
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tauri::{
    menu::{Menu, MenuItem},
    tray::TrayIconBuilder,
    Manager, WindowEvent,
};

fn toggle_widget(app: &tauri::AppHandle) {
    if let Some(win) = app.get_webview_window("widget") {
        let visible = win.is_visible().unwrap_or(false);
        if visible {
            let _ = win.hide();
        } else {
            let _ = win.show();
            let _ = win.set_focus();
        }
    }
}

fn main() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .setup(|app| {
            // system-tray toggle for the always-on-top widget
            let toggle = MenuItem::with_id(app, "toggle_widget", "Show/Hide dojo widget", true, None::<&str>)?;
            let quit = MenuItem::with_id(app, "quit", "Quit DojoBuro", true, None::<&str>)?;
            let menu = Menu::with_items(app, &[&toggle, &quit])?;

            TrayIconBuilder::new()
                .icon(app.default_window_icon().unwrap().clone())
                .tooltip("DojoBuro")
                .menu(&menu)
                .on_menu_event(|app, event| match event.id.as_ref() {
                    "toggle_widget" => toggle_widget(app),
                    "quit" => app.exit(0),
                    _ => {}
                })
                .build(app)?;
            Ok(())
        })
        .on_window_event(|window, event| {
            // closing the widget just hides it; closing "main" quits the app
            if let WindowEvent::CloseRequested { api, .. } = event {
                if window.label() == "widget" {
                    api.prevent_close();
                    let _ = window.hide();
                }
            }
        })
        .run(tauri::generate_context!())
        .expect("error while running DojoBuro");
}
