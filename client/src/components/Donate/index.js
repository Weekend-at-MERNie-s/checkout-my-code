import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
 
export default function DonatePage() {
   return (
       <PayPalScriptProvider options={{ "client-id": "AWif582drKuWpn1pjOxp_dljRW-o9-aDTmcmshlh3OXLi2H22CukQxx8Yb_fxs6ELEmCVQrBawkLqrtC" }}>
           <PayPalButtons style={{ layout: "horizontal" }} />
       </PayPalScriptProvider>
   );
}
