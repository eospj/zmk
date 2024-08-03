module.exports = {
  docs: {
    "Getting Started": [
      "intro",
      "hardware",
      "faq",
      "user-setup",
      "customization",
      "troubleshooting",
    ],
    Features: [
      "features/keymaps",
      "features/bluetooth",
      "features/combos",
      "features/conditional-layers",
      "features/debouncing",
      "features/displays",
      "features/encoders",
      "features/underglow",
      "features/backlight",
      "features/battery",
      "features/beta-testing",
    ],
    Behaviors: [
      "behaviors/key-press",
      "behaviors/layers",
      "behaviors/misc",
      "behaviors/hold-tap",
      "behaviors/mod-tap",
      "behaviors/mod-morph",
      "behaviors/macros",
      "behaviors/key-toggle",
      "behaviors/sticky-key",
      "behaviors/sticky-layer",
      "behaviors/tri-state",
      "behaviors/tap-dance",
      "behaviors/caps-word",
      "behaviors/key-repeat",
      "behaviors/sensor-rotate",
      "behaviors/mouse-emulation",
      "behaviors/reset",
      "behaviors/bluetooth",
      "behaviors/outputs",
      "behaviors/underglow",
      "behaviors/backlight",
      "behaviors/power",
    ],
    Codes: [
      "codes/index",
      "codes/keyboard-keypad",
      "codes/modifiers",
      "codes/editing",
      "codes/media",
      "codes/applications",
      "codes/input-assist",
      "codes/power",
      "codes/keymap-upgrader",
    ],
    Configuration: [
      "config/index",
      "config/backlight",
      "config/battery",
      "config/behaviors",
      "config/bluetooth",
      "config/combos",
      "config/displays",
      "config/encoders",
      "config/keymap",
      "config/kscan",
      "config/power",
      "config/underglow",
      "config/system",
    ],
    Development: [
      "development/clean-room",
      "development/pre-commit",
      "development/documentation",
      "development/setup",
      "development/build-flash",
      "development/boards-shields-keymaps",
      "development/posix-board",
      "development/tests",
      "development/usb-logging",
      "development/ide-integration",
      {
        type: "category",
        label: "Guides",
        collapsed: false,
        items: [
          "development/new-shield",
          "development/hardware-metadata-files",
          "development/new-behavior",
        ],
      },
    ],
  },
};