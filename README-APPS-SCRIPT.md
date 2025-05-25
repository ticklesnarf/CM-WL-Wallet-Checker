# Wallet Checker - Google Apps Script Version

A simple tool that searches a Google Sheet for wallet addresses and returns "Wallet Confirmed" or "Wallet Not Found".

## Features
- No API keys required
- Directly integrated with Google Sheets
- Simple deployment as a web app
- Case-insensitive search across all sheets

## Quick Setup Guide

### Step 1: Open Google Apps Script Editor
1. Open your Google Sheet containing wallet addresses
2. Click **Extensions** > **Apps Script**
3. Delete any existing code in the editor

### Step 2: Add the Server-Side Code
1. Copy the content from `Code.gs` in this repository
2. Paste it into the main script file in the Apps Script editor
3. Click **Save**

### Step 3: Add the HTML Interface
1. Click the **+** button next to Files
2. Select **HTML**
3. Name it `Index` (case sensitive)
4. Copy the content from `Index-Apps-Script.html` in this repository
5. Paste it into the HTML file
6. Click **Save**

### Step 4: Deploy the Web App
1. Click **Deploy** > **New deployment**
2. Select **Web app** as the type
3. Set "Execute as" to **Me**
4. Set "Who has access" to **Anyone** (for public access) or your preferred option
5. Click **Deploy**
6. Authorize access when prompted
7. Copy the provided Web app URL

### Step 5: Use the Wallet Checker
1. Open the Web app URL in your browser
2. Enter a wallet address
3. Click **Check**
4. See instant results!

## Troubleshooting
- If you get authorization errors, follow the prompts to authorize the app
- For "Google hasn't verified this app" warnings, click **Advanced** > **Go to Wallet Checker (unsafe)** > **Allow**
- If searches are slow, your spreadsheet might be very large

## Customization
To modify the UI or functionality:
1. Edit the files in the Apps Script editor
2. Save your changes
3. Create a new deployment

## Files Included
- `Code.gs` - The server-side script for searching the spreadsheet
- `Index-Apps-Script.html` - The HTML interface for the web app

## Sharing Your Wallet Checker

**Note:** The Google Apps Script web app URL is usually quite long and complex. For easier sharing, consider using a free URL shortening service like [Bitly](https://bitly.com) or [TinyURL](https://tinyurl.com) to create a shorter, custom URL that redirects to your Wallet Checker app. This makes it much more convenient to share with users via social media, messaging, or printed materials.
