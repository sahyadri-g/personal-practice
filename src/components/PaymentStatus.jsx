// Statement: Show payment status message.
// Use: Calculate value from props (no state)
// Behavior:
// ● Input: status (&quot;success&quot;,&quot;failed&quot;,&quot;pending&quot;)
// ● Output: corresponding message
// Example: status=&quot;failed&quot; → Payment Failed


import React from 'react'

function PaymentStatus(props) {
        const {status} = props;
        let message = "";
        if(status == "success"){
            message = "Payment Status is Success";
        }else if(status == "failed"){
            message = "Payment Status is Failed";
        }else if(status == "pending"){
            message = "Payment status is pending";
        }

  return (
    <div>
        <h1>Payment Status</h1>
        <h2>{message}</h2>
    </div>
  )
}

export default PaymentStatus