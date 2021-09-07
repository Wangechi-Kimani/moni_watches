// import fs from "fs";
// import formidable from "formidable-serverless";
// import FileType from "file-type";
// import sharp from "sharp";
// import { BASE_URL } from "../../utils/baseurl";
// import { connectDB, insertDocument } from "../../utils/db";

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

// // const directoryPath = process.cwd() + "/resources/static/assets/uploads/";
// const directoryPath = "./public/uploads/";

// export default async (req, res) => {
//   const fileSize = 1 * 1024 * 1024;
//   // try {
//     if (req.method === "POST") {
//       const form = new formidable.IncomingForm({
//         uploadDir: directoryPath,
//         keepExtensions: true,
//         maxFileSize: fileSize,
//       });
//       // form.uploadDir = directoryPath;
//       // form.keepExtensions = true;

//       form.on("error", (err) => {
//         if (err) {
//           console.log(err);
//         }
//       });

//       function handleFileType() {
//         let result;
//         form.onPart = (part) => {
//           if (part.mime === "image/jpeg" || part.mime === "image/png") {
//             result = form.handlePart(part);
//           } else if (part.filename === "" || !part.mime) {
//             result = form.handlePart(part);
//           } else {
//             // console.log('Invalid file type');
//             // return res.json({message: 'Invalid file type'});
//             result = res.status(400).json({ message: "Invalid file type" });
//           }
//         };
//         return result;
//       }

//       handleFileType();

//       form.parse(req, async (err, fields, files) => {
//         if (err) {
//           // return res.status(500).json({ error: 'There was an error processing your request' });
//           // 
//           console.log('Error');
//         } else if (!files.file) {
//           // return res.status(400).json({ message: "There was an error submitting form data" });
//           // return res
//           //   .status(302)
//           //   .json({
//           //     error:
//           //       "Please select the correct file type. Only image types are allowed",
//           //   });
//           console.log('Error');
//         } else {
//         //   const path = files.file.path;
//         //   fields.path = path;
//         //   console.log(fields);
//         //   console.log(files.file.type);
//         //   return res
//         //     .status(200)
//         //     .json({ message: "Saved successfully", fields });
//         console.log('Success');
//         }
//       });
//       return res.status(200).json({message: 'success'});

//       // form.parse(req, async (err, fields, files) => {
//       //   if (err) {
//       //     return res.status(500).json({ error: err });
//       //   }
//       //   const path = files.file.path;
//       //   fields.path = path;
//       //   console.log(fields);

//       // save in the database
//       // const client = await connectDB();

//       // await insertDocument(client, 'watches', fields);

//       // const db = client.db();

//       // const watchCollection = db.collection("watches");

//       // const result = await watchCollection.insertOne(fields);
//       // console.log(result);

//       //close the connection
//       //   client.close();

//       //   return res
//       //     .status(200)
//       //     .json({ message: "Uploaded successfully", fields });
//       // });
//     //} //else {
//     //GET THE FILES FROM THE FOLDER

//     // fs.readdir(directoryPath, function (err, files) {
//     //   if (err) {
//     //     res.status(500).json({
//     //       message: "Unable to scan files!",
//     //     });
//     //   }

//     //   let fileInfos = [];

//     //   files.forEach((file) => {
//     //     fileInfos.push({
//     //       name: file,
//     //       url: `${BASE_URL}${file}`,
//     //     });
//     //   });

//     //   return res.status(200).json(fileInfos);
//     // });
//     //}
//   } //catch (error) {
//     // return res.status(500).json({ error: 'There was an error procesing your request.' });
//     // return res.end("There was an error procesing your request.");
//   //}
// };
