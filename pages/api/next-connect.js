import nextConnect from "next-connect";
import multer from "multer";

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype == "image/png" ||
    file.mimetype == "image/jpg" ||
    file.mimetype == "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
    return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
  }
};

// Returns a Multer instance that provides several methods for generating
// middleware that process files uploaded in multipart/form-data format.
const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/uploads");
    },
    // filename: function (req, file, cb) {
    //   const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    //   cb(null, file.fieldname + "-" + uniqueSuffix);
    // },
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9)
      cb(null, uniqueSuffix + '-' + file.originalname)
    }
  }),
  fileFilter: fileFilter,
  limits: {
    fileSize: 1 * 1024 * 1024
  }
});

// Returns middleware that processes multiple files sharing the same field name.
const uploadMiddleware = upload.single("file");

function onError(err, req, res, next) {
  console.log(err)
  // res.status(400).end(err.toString()); 
  return res.json({error: err.toString()});  
}

const handler = nextConnect({
  // Handle any other HTTP method
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
  onError,
});

//Add the middlewre to Next-Connect
handler.use(uploadMiddleware);


handler.get((req, res) => {
  res.status(200).json({ message: "Successfully reached this API" });
});

handler.post((req, res) => {
  const formData = req.body;
  formData.path = req.file.path;
  return res.status(200).json({ message: "success", formData });
});

export default handler;
