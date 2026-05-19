import https from "https";

https.get("https://ik.imagekit.io/dgevdmg7em/AVD/20260519%20AVD%20Photos%20(8).webp?tr=f-jpg&updatedAt=1779185033992", (res) => {
  console.log("Status Code:", res.statusCode);
  console.log("Content-Type:", res.headers["content-type"]);
});
