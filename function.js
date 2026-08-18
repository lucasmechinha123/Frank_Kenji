// Troque isto pelo link final da sua página assim que publicá-la:
    const QR_TARGET = "https://frank-kenji.vercel.app/";

    new QRCode(document.getElementById("qrWrap"), {
      text: QR_TARGET,
      width: 150,
      height: 150,
      colorDark: "#12141c",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.M
    });
