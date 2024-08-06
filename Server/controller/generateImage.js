const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

exports.generateOGImage = async (req, res) => {
  try {
    const { title, author,image } = req.body;

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    const template = `
    <html>
      <body style="width: 1200px; height: 630px; background: url('${image}') no-repeat center center; background-size: cover; font-family: Arial, sans-serif; display: flex; align-items: flex-end; justify-content: center;">
        <div style="width: 100%; padding: 20px; background: rgba(0, 0, 0, 0.5); color: white; text-align: left;">
          <h1 style="font-size: 48px; margin-bottom: 20px;">${title}</h1>
          <p style="font-size: 30px;">By - ${author}</p>
        </div>
      </body>
    </html>
    `;

    await page.setContent(template);
    await page.setViewport({ width: 1200, height: 630 });

    // Define the path for the image
    const ogImageDir = path.join(__dirname, 'public', 'og-images');
    const ogImagePath = path.join(ogImageDir, `${uuidv4()}.png`);

    // Create the directory if it doesn't exist
    if (!fs.existsSync(ogImageDir)) {
      fs.mkdirSync(ogImageDir, { recursive: true });
    }
    await page.screenshot({ path: ogImagePath });

    await browser.close();

    const ogImageUrl = `http://localhost:4000/og-images/${path.basename(ogImagePath)}`;
    console.log(ogImageUrl);

    return res.status(200).json({
      success: true,
      message: "OG image generated successfully",
      ogImageUrl,
    });

  } catch (error) {
    console.log("Error generating OG image:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to generate OG image",
    });
  }
};
