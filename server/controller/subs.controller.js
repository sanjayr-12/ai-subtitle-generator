import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";
import { fileUpload } from "../utils/utils.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const uploadFile = async (req, res) => {
  try {
    if (!req.files || !req.files.video) {
      return res.status(400).json({ error: "No video uploaded" });
    }

    const videoFile = req.files.video;
    const uploadDir = path.join(__dirname, "..", "uploads");

    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir);
    }

    const uploadPath = path.join(uploadDir, videoFile.name);

    await videoFile.mv(uploadPath);

    const response = await fileUpload(uploadPath);
    console.log(response);

    return res
      .status(200)
      .json({ message: "File uploaded successfully", filePath: uploadPath });
  } catch (error) {
    console.error("Error uploading video:", error);
    return res
      .status(500)
      .json({ error: "Internal server error: " + error.message });
  }
};
