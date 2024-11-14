import * as Papa from "papaparse";
const getData = (url) => {
  let data = [];
  return new Promise((resolve) => {
    Papa.parse(url, {
      download: true,
      header: true,
      complete: (results) => {
        data = results.data;
        console.log("incv", data);
        resolve(data);
      },
    });
  });
};
export const database = getData(
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQaW1tMID7bVSyB5H9uy9Xd4H0qVCEgE0n2YlIqyMVcUFov9DFe_v_5e3vnSy0tfuNZvaSbwombCCUk/pub?output=csv"
);
