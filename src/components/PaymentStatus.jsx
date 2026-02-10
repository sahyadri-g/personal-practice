// Statement: Show payment status message.
// Use: Calculate value from props (no state)
// Behavior:
// ● Input: status (&quot;success&quot;,&quot;failed&quot;,&quot;pending&quot;)
// ● Output: corresponding message
// Example: status=&quot;failed&quot; → Payment Failed


import React from 'react'

function PaymentStatus(props) {
        const {status} = props;
        if(status == "success"){
            return "Payment Status is Success";
        }else if(status == "failed"){
            return "Payment Status is Failed";
        }else if(status == "Payment status is pending"){
            return "Pending";
        }

  return (
    <div>
        <h1>Payment Status</h1>
    </div>
  )
}

export default PaymentStatus