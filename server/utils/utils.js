import { fileManager } from "../gemini/gemini.config.js";

export async function fileUpload(path) {
  try {
    const uploadResponse = await fileManager.uploadFile(path, {
      mimeType: "video/mp4",
      displayName: "song",
    });
    return uploadResponse.file.uri;
  } catch (error) {
    throw error;
  }
}
