import multer from "multer";

const storage = multer.memoryStorage();
const upload = multer({ storage });

const multerMiddleware = (req, res, next) => {
  const isFile =
    req.headers["content-type"].indexOf("multipart/form-data;") === 0;

  if (isFile) {
    return upload.single("newInfo")(req, res, next);
  }

  return next();
};

export default multerMiddleware;
