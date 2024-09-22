# Chalkboard Drawing Chrome Extension

A minimal Chrome extension that allows users to draw with a black pen on a white canvas in a popup. The extension features saving the current drawing and clearing the board. The drawing is automatically saved and persists between popup sessions.

## Features

- **Draw on a canvas**: Use your mouse to draw on a white canvas with a black pen.
- **Save your drawing**: Save the current drawing as a PNG file by pressing the "Save" button.
- **Persistent drawing**: The drawing is saved automatically and restored when reopening the extension.
- **Clear the board**: Use the "Clear" button to erase the canvas and remove the saved drawing.

## Installation

### Step 1: Clone or Download the Repository

Clone the repository or download the files as a ZIP and extract them.

```bash
git clone https://github.com/your-repo/chalkboard-extension.git
Alternatively, download the ZIP and extract it:

Click on the green "Code" button on GitHub.
Select "Download ZIP".
Extract the ZIP file on your computer.

###  Step 2: Open Chrome Extensions Page
Open Google Chrome.
Go to the extensions page by entering the following URL in your address bar:

```
chrome://extensions/

Enable Developer Mode by toggling the switch in the top-right corner of the page.

###  Step 3: Load the Unpacked Extension
Click on the Load unpacked button in the top-left corner.
Browse to the folder where you downloaded/extracted the extension files.
Select the folder that contains manifest.json, popup.html, popup.js, and style.css.
The extension will now appear in your toolbar.

###  Step 4: Use the Extension
Click on the extension icon in the Chrome toolbar.
A popup window with a white canvas will appear where you can draw with your mouse.
Use the Save button to download the current drawing as a PNG file.
Use the Clear button to erase the canvas and reset the board.

###  Step 5: (Optional) Customize the Extension
You can customize the extension by modifying the following files:

popup.html: Adjust the structure of the popup.
popup.js: Modify the drawing functionality and add more features.
style.css: Change the appearance of the canvas and buttons.

Icons
You can replace the default icons by adding your own in the icons/ folder. The following sizes are used:

icon16.png: 16x16 pixels
icon48.png: 48x48 pixels
icon128.png: 128x128 pixels
Uninstalling the Extension
Go to the chrome://extensions/ page.
Find the Chalkboard Drawing extension.
Click on the Remove button to uninstall it.
License
This project is licensed under the MIT License - see the LICENSE file for details.

### How to Use:

1. Follow the step-by-step instructions for downloading, loading, and using the extension.
2. Optionally, customize the files as per your needs.

This `README.md` file gives an overview of the extension, how to install and use it, and some basic instructions for customizing or removing it.

Let me know if you need anything else!