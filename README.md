Dynamic Post Generation with Open Graph (OG) Image Generation

This project focuses on a dynamic post-generation system that integrates Open Graph (OG) image generation. The primary objective is to create a seamless and interactive experience for users who wish to generate and preview posts dynamically, complete with visually appealing OG images.

Features
1. Dynamic Post Creation:
Users can create and customize posts by entering title, content, and author information. The form allows users to upload images, which can be included in the post content.

2. Real-Time Preview:
A preview feature provides users with a real-time view of how their posts will look. This includes a dynamically generated OG image that reflects the content of the post. Users can see how their post will appear with a variety of styles and layouts before finalizing it.

3. Open Graph (OG) Image Generation:
The system generates OG images dynamically based on the content of the post. These images are tailored to include key details such as the title and content, ensuring that they are visually compelling and relevant. The OG image generation process utilizes server-side logic to create images that are optimized for social media sharing.

Steps to Generate OG Images with Puppeteer

1. Setup Puppeteer:
Install Puppeteer: First, add Puppeteer to your project. Run npm install puppeteer to install it.
Import Puppeteer: In your server-side code or script, import Puppeteer with const puppeteer = require('puppeteer');.

2. Launch a Headless Browser:
Initialize Browser: Create a new instance of the headless browser by calling puppeteer.launch(). This starts an instance of Chromium without a graphical interface.
Create a New Page: Use browser.newPage() to open a new page in the headless browser.

3. Configure Page Settings:
Set Viewport: Define the dimensions for the OG image by setting the viewport size using page.setViewport({ width: 1200, height: 630 });. The size should match the desired OG image dimensions.
Set Content: Load the HTML content that you want to render for the OG image. You can use page.setContent(html) to set the page content.

4. Apply Styles and Render Content:
Apply CSS Styles: Ensure that the necessary CSS styles are applied either inline or via linked stylesheets. Puppeteer will render the page as if it were a fully functional web page.
Wait for Page to Render: Use page.waitForTimeout() or page.waitForSelector() to wait for the content to fully load and render. This ensures that the OG image captures the content accurately.

5. Capture the OG Image:
Take a Screenshot: Use page.screenshot({ path: 'og-image.png' }); to capture the content of the page as an image file. You can specify the path and format for the screenshot.
Adjust Options: Configure options such as full-page screenshot or viewport size to match the desired output for the OG image.

6. Close the Browser:
Cleanup: Close the headless browser instance using browser.close() to free up system resources after the screenshot is taken.

7. Serve or Save the Image:
Store Image: Save the generated image to your file system or a cloud storage service.
Serve Image: Provide a URL or path to the generated OG image for use in social media previews or other applications.

Let's take a journey to the project
1. Click on the Show Post button
   ![step-1](https://github.com/user-attachments/assets/7f681d38-7347-470f-84d4-f814220595d5)

2. Post
   ![step-2](https://github.com/user-attachments/assets/2b9de19e-e1f2-46a0-bdad-9016fdcd2162)

3. Add title, content, and images to the post
   ![step-3](https://github.com/user-attachments/assets/3f7ea626-c07b-4494-a796-61b889e4807c)

4. Click on the View Preview button to show the preview. In preview, OG Image will be generated and shown.
   ![step-4](https://github.com/user-attachments/assets/f9076cdd-385c-4208-a1d6-75737c24ed13)

5. OG Image generated
   ![Og-Image](https://github.com/user-attachments/assets/b6c25a41-0464-4514-804b-52da791204e2)



