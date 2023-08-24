# steam-url-opener

Chromium extension that automatically opens Steam pages in the Steam app.

# Features

- Open steam pages in Steam automatically
- Customize which pages you want redirected and which not
- Ask before redirecting
- Close the original page once it's redirected
- Redirect Steam widgets, if enabled

## Installation/Updating

*I'm currently working on getting this into the Opera store! I'll try to get it onto the Chrome web store next.*

There are currently 2 ways to install the extensions, one works for everyone and one works for Linux only. This is because you can't use extensions from CRX files if they aren't from the Google Web Store except if you're on Linux.

Go to the extensions page in your Chromium-based browser. This should be on the 3 lines at the top right corner, or for Opera GX users the Menu button on the top left.

![](https://cdn.discordapp.com/attachments/544247815908360202/1143675491392434348/image.png)

Toggle Developer Mode, this will allow us to install custom extensions.

![1692744354832](https://cdn.discordapp.com/attachments/544247815908360202/1143677727791136918/image.png)
![1692744366975](https://cdn.discordapp.com/attachments/544247815908360202/1143677734074191913/image.png)

### Regular Method

Download [the Source Code (zip) from Releases](https://github.com/hdboye/steam-url-opener/releases/latest). Once it's downloaded, unzip the file, then go back to the extensions browser and click Load Unpacked.

![1692745495342](https://cdn.discordapp.com/attachments/544247815908360202/1143682103381336204/image.png)

Click on the folder you just got out of unzipping. **Make sure it's the folder with the contents of the extension inside, and NOT the folder that has a folder in it which has the contents.** Once you've clicked that, click Select Folder in your file explorer (or Select or Continue, depends on what OS you use) and the extension should be loaded in! If you're updating, you can delete the folder with the old version. If the old version is still there after loading the extension in, then you can remove that version. Restart the browser (optional but recommended) and enjoy!

### Linux Method

Download [the CRX file from Releases](https://github.com/hdboye/steam-url-opener/releases/latest). Once it's downloaded, open the file in File Explorer. If you have found the file, grab it then drag it onto the extensions page. *You can drag it anywhere you want, as long as it's on the page.*

Restart the browser (optional but recommended) and enjoy!

## Build the CRX yourself

[Download the source](https://github.com/hdboye/steam-url-opener/archive/refs/heads/master.zip) from this github, or if you want a specific version go [here](https://github.com/hdboye/steam-url-opener/releases) and download the source code for whatever version you want. Unzip it then go to the extension menu on your chromium browser. Enable Developer Mode then press Pack Extension and select the folder where the source is.

*P.S. There's also [a webpage version of this README](https://hdboye.github.io/steam-url-opener) but I don't know why you'd wanna use it.*
