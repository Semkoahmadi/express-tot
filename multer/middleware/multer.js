const multer = require("multer");
const path = require("path");
const fs = require("fs");
const storage = multer.diskStorage({
    destination: function (req,file,cb){
        fs.mkdirSync("public/upload",{recursive:true})
        cb(null, "public/upload")
    },
    filename: function (req, file, cb) {
        const ext = path.extname(file.originalname)
        const whiteListFormat = ['.png','.jpg','.jpeg','.webp']
        const whiteListMimType = ['image/png','image/jpg','image/jpeg','image/webp']
        if(whiteListMimType.includes(file.mimetype)) {
            const fileName = Date.now() + ext;
            cb(null,fileName)
        }else{
            cb(new Error("only image file"))
        }
    }
})

const _1MB = 1 * 1000 * 1000;
const _2MB = 2 * 1000 * 1000;
const _3MB = 3 * 1000 * 1000;
const _10MB = 10 * 1000 * 1000;

const uploadFile = multer({
    storage,
    limits:{
        fileSize:_10MB
    }
})
module.exports = {
    uploadFile
}