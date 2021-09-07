import nextConnect from "next-connect";
import multer from "multer";

import { connectDB, insertDocument } from "../../utils/db";

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
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9)
      cb(null, uniqueSuffix + '-' + file.originalname)
    }
  }),
  fileFilter: fileFilter,
  limits: {
    fileSize: 2000000
  }
});

// Returns middleware that processes multiple files sharing the same field name.
const uploadMiddleware = upload.single("file");

function onError(err, req, res, next) {
  console.log(err)
  return res.json({error: err.toString()});  
}

const handler = nextConnect({
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
  onError,
});

//Add the middlewre to Next-Connect
handler.use(uploadMiddleware);

//handle GET Requests
handler.get((req, res) => {
  res.status(200).json({ message: "Successfully reached this API" });
});

//handle POST Requests
handler.post(async (req, res) => {
  try {
    if(req.body.file === null || req.body.price === '' || req.body.description === '' || req.body.title === '') {
      return res.status(201).json({error: 'Please fill all the text fields'})
    }

    const productData = req.body;
    productData.image = req.file.path.substring(6);

    // save in the database
      const client = await connectDB();

      const result = await insertDocument(client, 'watches', productData);
      //console.log(result);

      //close the connection
      client.close();
      
      return res.status(200).json({ message: "Product Added successfully" });
    
  } catch (error) {
    console.log(error);
  }
  
});

export default handler;
