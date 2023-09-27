import React from "react"
import { Card } from "antd"

const SubPricingBlog = ({ price, children }) => {
  return (
    <Card
      style={{
        height: "350px",
        width: "360px",
        // paddingLeft: "100px",
        // paddingTop: "0px",
        fontFamily: "awesome",
        // border: "0.2px solid rgba(111,111,110,.8)",
      }}
    >
      <div className="col-xl-4 col-md-6 features-block features-block-2">
        <div className="block h-100 d-block d-sm-flex flex-column text-center price-card-custom">
          <div className="mt-3 mt-sm-0">
            {children}
            <p></p>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default SubPricingBlog
