import React, { useState, useEffect } from "react";

export default function Shortbread() {
  const scriptLoaded = () => {
    const domainName = window.location.hostname;
    let shortbread = window.AWSCShortbread({
      parent: document.body,
      domain: ".".concat(domainName),
      onConsentChanged: function (c) {
        // console.log("Cookie written", c);
      },
      queryGeolocation: function (geolocatedIn) {
        // geolocatedIn("EU");
      },
    });

    shortbread.checkForCookieConsent();
    window.shortbread = shortbread;
  };

  useEffect(() => {
    const script = document.createElement("script");
    const host = window.location.host;
    if (window.location.host.includes("localhost")) {
      script.src = `http://${host}/shortbread.js`;
    } else {
      script.src = "https://prod.assets.shortbread.aws.dev/shortbread.js";
    }
    script.async = true;
    script.onload = () => scriptLoaded();

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // scriptLoaded();

  return <></>;
}
