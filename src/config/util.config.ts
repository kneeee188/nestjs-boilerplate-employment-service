import { registerAs } from '@nestjs/config';

export default registerAs('util', () => ({
  filePathImage: process.env.FILE_UPLOAD_PATH_IMAGE,
  filePathCertificate: process.env.FILE_UPLOAD_PATH_CERTIFICATE,
}));
