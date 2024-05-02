// import {
//   useAnonAadhaar,
//   LogInWithAnonAadhaar,
//   AnonAadhaarProof,
// } from "anon-aadhaar-react";
// import { useEffect } from "react";
// import React from "react";

// const AadharConnect = () => {
//   const [anonAadhaar] = useAnonAadhaar();

//   useEffect(() => {
//     console.log("Anon Aadhaar status: ", anonAadhaar);
//   }, [anonAadhaar]);

//   return (
//     <div>
//       {anonAadhaar?.status != "logging-in" && <LogInWithAnonAadhaar />}
//       {anonAadhaar?.status == "logging-in" && <h4>Aadhar verified</h4>}

//       <div>
//         {/* Render the proof if generated and valid */}
//         {anonAadhaar?.status === "logged-in" && (
//           <>
//             <p>✅ Proof is valid</p>
//             <AnonAadhaarProof code={JSON.stringify(anonAadhaar.pcd, null, 2)} />
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AadharConnect;

import React from 'react'

const AadharConnect = () => {
  return (
    <div>AadharConnect</div>  
  )
}

export default AadharConnect
