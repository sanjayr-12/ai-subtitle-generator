export const uploadFile = async (req, res) => {
  try {
    if (!req.files || !req.files.video) {
      return res.status(400).json({ error: "No video uploaded" });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Internal server Error " + error.message });
  }
};
