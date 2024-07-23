export const findFileType = (file) => {
  if (file.type?.startsWith("video/")) return "video";
  if (file.type === "application/pdf") return "pdf";
  if (
    file.type ===
      "application/vnd.openxmlformats-officedocument.presentationml.presentation" ||  file.type ===
    "application/vnd.ms-powerpoint"
  )
    return "ppt";
};
