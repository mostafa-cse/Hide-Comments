# Codeforces Clean View 🧹

A lightweight Google Chrome extension designed to provide a distraction-free reading experience on [Codeforces](https://codeforces.com). This extension hides blog comments and expands the content width to utilize the full screen.

## ✨ Features

- **Hide Comments:** Automatically hides the comment section on all Codeforces blog posts to reduce clutter.
- **Full Width Layout:** Expands the main content area to use more of the screen real estate (optional sidebar hiding).
- **Lightweight:** Built with vanilla CSS and JavaScript (Manifest V3), requiring no external permissions or libraries.
- **Privacy Focused:** Runs locally on your browser; no data is sent to external servers.

## 🚀 Installation (Local)

Since this extension is not published on the Chrome Web Store, you need to load it manually in Developer Mode.

1. **Download the Code**
   - Clone this repository or download the source code as a ZIP file and extract it.
   ```bash
   git clone https://github.com/yourusername/codeforces-clean-view.git
   ```

2. **Open Chrome Extensions**
   - Open Google Chrome.
   - Navigate to `chrome://extensions/` in the address bar.

3. **Enable Developer Mode**
   - Toggle the **Developer mode** switch in the top right corner to **ON**.

4. **Load the Extension**
   - Click the **Load unpacked** button that appears in the top left.
   - Select the folder containing this project (the folder containing `manifest.json`).

5. **Verify**
   - You should see "Codeforces Clean View" in your extensions list.
   - Visit any Codeforces blog post (e.g., `https://codeforces.com/blog/entry/...`) and **refresh the page**.

## 📂 Project Structure

```text
codeforces-clean-view/
├── manifest.json      # Extension configuration (Manifest V3)
├── styles.css         # CSS rules to hide comments and adjust layout
├── content.js         # Content script (currently logs load status)
├── README.md          # This file
└── icon.png           # (Optional) Extension icon
```

## 🛠 Customization

Codeforces may update their website structure, which could break the CSS selectors. If comments reappear or the layout looks broken:

1. Go to a Codeforces blog post.
2. Right-click on the element you want to hide (e.g., the comments section).
3. Select **Inspect**.
4. Identify the `class` or `id` of the element.
5. Open `styles.css` in this project and update the selectors.
   ```css
   /* Example */
   .new-comment-class-name {
       display: none !important;
   }
   ```
6. Go to `chrome://extensions/` and click the **Refresh** icon on the extension card.
7. Refresh the Codeforces page.

## ⚠️ Disclaimer

- This extension is **not affiliated** with Codeforces.
- It is intended for personal use to improve readability.
- Use at your own risk. If Codeforces changes their DOM structure significantly, the extension may stop working until updated.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
