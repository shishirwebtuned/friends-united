// import DailySocialMediaClient from "./DailySocialMedia";
// import { client } from "../../../lib/sanity.client";

// export default async function DailySocialMedia() {
//   const data = await client.fetch(`*[_type == "wayCards"][0]`);

//   if (!data) {
//     return <p className="text-center py-20">No Way Cards found in Sanity.</p>;
//   }

//   return (
//     <DailySocialMediaClient
//       oldWay={data.oldWay}
//       newWay={data.newWay}
//     />
//   );
// }
