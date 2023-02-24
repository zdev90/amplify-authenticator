import AWS from "aws-sdk";
import crypto from "crypto";

const kmsClient = new AWS.KMS();

export async function encryptToken(token) {
  const params = {
    KeyId: process.env.ENCRYPTION_KEY_ID,
    Plaintext: token,
  };
  return new Promise(function (resolve, reject) {
    kmsClient.encrypt(params, function (err, data) {
      if (err) {
        console.error(err, err.stack);
        reject(err);
      } else {
        // Encryption has been successful
        const encryptedToken = data.CiphertextBlob;
        resolve(encryptedToken);
      }
    });
  });
}

export function base64URLEncode(str) {
  return str
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=/g, "");
}

export function sha256(buffer) {
  return crypto.createHash("sha256").update(buffer).digest();
}

export async function decryptToken(token) {
  const params = {
    CiphertextBlob: Buffer.from(token, "base64"),
  };
  return new Promise(function (resolve, reject) {
    kmsClient.decrypt(params, function (err, data) {
      if (err) {
        console.error(err, err.stack);
        reject(err);
      } else {
        // Decryption has been successful
        const decryptedToken = data.Plaintext.toString("ascii");
        resolve(decryptedToken);
      }
    });
  });
}

export function urlSafeDecode(hex) {
  return hex
    .match(/.{2}/g)
    .map(function (char) {
      return String.fromCharCode(parseInt(char, 16));
    })
    .join("");
}
