import axios from "axios";
import { useEffect, useState } from "react";

export default function MainContainer() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios(
      "https://dev.deepthought.education/assets/uploads/files/files/others/ddugky_project.json",
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
      }
    )
      .then((res: unknown) => {
        console.log(res);
        setData(res);
      })
      .catch((err) => {
        console.log(err.message);
      });
  });

  console.log(data);
  return <div>main container</div>;
}
